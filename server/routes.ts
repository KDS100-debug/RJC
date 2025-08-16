import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import session from "express-session";
import bcrypt from "bcrypt";
import { insertUserSchema, insertStudentSchema, insertTeacherSchema, insertGradeSchema, insertAttendanceSchema, insertTeacherReviewSchema } from "@shared/schema";
import { z } from "zod";

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    userRole?: string;
  }
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  role: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Session middleware
  app.use(session({
    secret: process.env.SESSION_SECRET || 'dev-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true in production with HTTPS
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));

  // Auth middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (!req.session.userId) {
      return res.status(401).json({ error: "Authentication required" });
    }
    next();
  };

  const requireRole = (roles: string[]) => (req: any, res: any, next: any) => {
    if (!roles.includes(req.session.userRole)) {
      return res.status(403).json({ error: "Insufficient permissions" });
    }
    next();
  };

  // Authentication routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = loginSchema.parse(req.body);
      
      const user = await storage.verifyPassword(email, password);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      req.session.userId = user.id;
      req.session.userRole = user.role;

      // Update last login
      await storage.updateUser(user.id, { lastLogin: new Date() });

      res.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          name: user.name, 
          role: user.role 
        } 
      });
    } catch (error) {
      res.status(400).json({ error: "Invalid input" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Could not log out" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/me", requireAuth, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
      res.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          name: user.name, 
          role: user.role 
        } 
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // User management routes
  app.post("/api/users", requireAuth, requireRole(['admin', 'super_admin']), async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: "Invalid user data" });
    }
  });

  // Student routes
  app.get("/api/students", requireAuth, async (req, res) => {
    try {
      const { classId } = req.query;
      let students;
      
      if (classId) {
        students = await storage.getStudentsByClass(classId as string);
      } else {
        // Return empty array for now, implement pagination later
        students = [];
      }
      
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch students" });
    }
  });

  app.post("/api/students", requireAuth, requireRole(['admin']), async (req, res) => {
    try {
      const studentData = insertStudentSchema.parse(req.body);
      const student = await storage.createStudent(studentData);
      res.json(student);
    } catch (error) {
      res.status(400).json({ error: "Invalid student data" });
    }
  });

  app.get("/api/students/:id/profile", requireAuth, async (req, res) => {
    try {
      const student = await storage.getStudent(req.params.id);
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch student profile" });
    }
  });

  // Teacher routes
  app.get("/api/teachers", requireAuth, async (req, res) => {
    try {
      const teachers = await storage.getTeachers();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch teachers" });
    }
  });

  app.post("/api/teachers", requireAuth, requireRole(['admin']), async (req, res) => {
    try {
      const teacherData = insertTeacherSchema.parse(req.body);
      const teacher = await storage.createTeacher(teacherData);
      res.json(teacher);
    } catch (error) {
      res.status(400).json({ error: "Invalid teacher data" });
    }
  });

  // Grade routes
  app.get("/api/grades/student/:studentId", requireAuth, async (req, res) => {
    try {
      const grades = await storage.getGradesByStudent(req.params.studentId);
      res.json(grades);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch grades" });
    }
  });

  app.post("/api/grades", requireAuth, requireRole(['teacher', 'admin']), async (req, res) => {
    try {
      const gradeData = insertGradeSchema.parse(req.body);
      const grade = await storage.createGrade({
        ...gradeData,
        submittedBy: req.session.userId!
      });
      res.json(grade);
    } catch (error) {
      res.status(400).json({ error: "Invalid grade data" });
    }
  });

  // Attendance routes
  app.get("/api/attendance/student/:studentId", requireAuth, async (req, res) => {
    try {
      const attendance = await storage.getAttendanceByStudent(req.params.studentId);
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch attendance" });
    }
  });

  app.post("/api/attendance", requireAuth, requireRole(['teacher', 'admin']), async (req, res) => {
    try {
      const attendanceData = insertAttendanceSchema.parse(req.body);
      const attendance = await storage.createAttendance({
        ...attendanceData,
        recordedBy: req.session.userId!
      });
      res.json(attendance);
    } catch (error) {
      res.status(400).json({ error: "Invalid attendance data" });
    }
  });

  // Teacher reviews routes
  app.get("/api/teachers/:teacherId/reviews", requireAuth, async (req, res) => {
    try {
      const reviews = await storage.getTeacherReviews(req.params.teacherId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  app.post("/api/teacher-reviews", requireAuth, requireRole(['student']), async (req, res) => {
    try {
      const reviewData = insertTeacherReviewSchema.parse(req.body);
      
      // Get student ID from user
      const student = await storage.getStudentByUserId(req.session.userId!);
      if (!student) {
        return res.status(404).json({ error: "Student profile not found" });
      }

      const review = await storage.createTeacherReview({
        ...reviewData,
        studentId: student.id
      });
      res.json(review);
    } catch (error) {
      res.status(400).json({ error: "Invalid review data" });
    }
  });

  // Dashboard stats routes
  app.get("/api/dashboard/stats", requireAuth, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      let stats;
      switch (user.role) {
        case 'admin':
          stats = await storage.getSchoolStats(user.schoolId!);
          break;
        case 'teacher':
          const teacher = await storage.getTeacherByUserId(user.id);
          stats = teacher ? await storage.getTeacherStats(teacher.id) : {};
          break;
        case 'student':
          const student = await storage.getStudentByUserId(user.id);
          stats = student ? await storage.getStudentStats(student.id) : {};
          break;
        default:
          stats = {};
      }

      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch dashboard stats" });
    }
  });

  // Fee management routes
  app.get("/api/invoices/student/:studentId", requireAuth, async (req, res) => {
    try {
      const invoices = await storage.getInvoicesByStudent(req.params.studentId);
      res.json(invoices);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch invoices" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
