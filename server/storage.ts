import { db } from "./db";
import { eq, and, desc, asc } from "drizzle-orm";
import { 
  users, students, teachers, classes, subjects, grades, attendance, 
  teacherReviews, invoices, payments, notifications, feeStructures,
  type User, type InsertUser, type Student, type InsertStudent,
  type Teacher, type InsertTeacher, type Class, type InsertClass,
  type Grade, type InsertGrade, type Attendance, type InsertAttendance,
  type TeacherReview, type InsertTeacherReview, type Invoice, type Payment
} from "@shared/schema";
import bcrypt from "bcrypt";

export interface IStorage {
  // User management
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User>;
  verifyPassword(email: string, password: string): Promise<User | null>;
  
  // Student management
  getStudent(id: string): Promise<Student | undefined>;
  getStudentByUserId(userId: string): Promise<Student | undefined>;
  getStudentsByClass(classId: string): Promise<Student[]>;
  createStudent(student: InsertStudent): Promise<Student>;
  
  // Teacher management
  getTeacher(id: string): Promise<Teacher | undefined>;
  getTeacherByUserId(userId: string): Promise<Teacher | undefined>;
  getTeachers(): Promise<Teacher[]>;
  createTeacher(teacher: InsertTeacher): Promise<Teacher>;
  
  // Class management
  getClass(id: string): Promise<Class | undefined>;
  getClasses(schoolId: string): Promise<Class[]>;
  createClass(classData: InsertClass): Promise<Class>;
  
  // Grade management
  getGradesByStudent(studentId: string): Promise<Grade[]>;
  getGradesByClass(classId: string): Promise<Grade[]>;
  createGrade(grade: InsertGrade): Promise<Grade>;
  updateGrade(id: string, updates: Partial<Grade>): Promise<Grade>;
  
  // Attendance management
  getAttendanceByStudent(studentId: string, startDate?: Date, endDate?: Date): Promise<Attendance[]>;
  createAttendance(attendance: InsertAttendance): Promise<Attendance>;
  
  // Teacher reviews
  getTeacherReviews(teacherId: string): Promise<TeacherReview[]>;
  createTeacherReview(review: InsertTeacherReview): Promise<TeacherReview>;
  
  // Fee management
  getInvoicesByStudent(studentId: string): Promise<Invoice[]>;
  createInvoice(invoice: any): Promise<Invoice>;
  
  // Dashboard stats
  getSchoolStats(schoolId: string): Promise<any>;
  getTeacherStats(teacherId: string): Promise<any>;
  getStudentStats(studentId: string): Promise<any>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const [user] = await db
      .insert(users)
      .values({ ...insertUser, password: hashedPassword })
      .returning();
    return user;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const [user] = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  async verifyPassword(email: string, password: string): Promise<User | null> {
    const user = await this.getUserByEmail(email);
    if (!user) return null;
    
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
  }

  async getStudent(id: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student || undefined;
  }

  async getStudentByUserId(userId: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.userId, userId));
    return student || undefined;
  }

  async getStudentsByClass(classId: string): Promise<Student[]> {
    return await db.select().from(students).where(eq(students.classId, classId));
  }

  async createStudent(student: InsertStudent): Promise<Student> {
    const [newStudent] = await db.insert(students).values(student).returning();
    return newStudent;
  }

  async getTeacher(id: string): Promise<Teacher | undefined> {
    const [teacher] = await db.select().from(teachers).where(eq(teachers.id, id));
    return teacher || undefined;
  }

  async getTeacherByUserId(userId: string): Promise<Teacher | undefined> {
    const [teacher] = await db.select().from(teachers).where(eq(teachers.userId, userId));
    return teacher || undefined;
  }

  async getTeachers(): Promise<Teacher[]> {
    return await db.select().from(teachers);
  }

  async createTeacher(teacher: InsertTeacher): Promise<Teacher> {
    const [newTeacher] = await db.insert(teachers).values(teacher).returning();
    return newTeacher;
  }

  async getClass(id: string): Promise<Class | undefined> {
    const [classData] = await db.select().from(classes).where(eq(classes.id, id));
    return classData || undefined;
  }

  async getClasses(schoolId: string): Promise<Class[]> {
    return await db.select().from(classes).where(eq(classes.schoolId, schoolId));
  }

  async createClass(classData: InsertClass): Promise<Class> {
    const [newClass] = await db.insert(classes).values(classData).returning();
    return newClass;
  }

  async getGradesByStudent(studentId: string): Promise<Grade[]> {
    return await db.select().from(grades)
      .where(eq(grades.studentId, studentId))
      .orderBy(desc(grades.createdAt));
  }

  async getGradesByClass(classId: string): Promise<Grade[]> {
    const result = await db.select({
      id: grades.id,
      studentId: grades.studentId,
      examId: grades.examId,
      marksObtained: grades.marksObtained,
      gradeLetter: grades.gradeLetter,
      remarks: grades.remarks,
      submittedBy: grades.submittedBy,
      createdAt: grades.createdAt
    }).from(grades)
      .innerJoin(students, eq(grades.studentId, students.id))
      .where(eq(students.classId, classId))
      .orderBy(desc(grades.createdAt));
    
    return result;
  }

  async createGrade(grade: InsertGrade): Promise<Grade> {
    const [newGrade] = await db.insert(grades).values(grade).returning();
    return newGrade;
  }

  async updateGrade(id: string, updates: Partial<Grade>): Promise<Grade> {
    const [grade] = await db
      .update(grades)
      .set(updates)
      .where(eq(grades.id, id))
      .returning();
    return grade;
  }

  async getAttendanceByStudent(studentId: string, startDate?: Date, endDate?: Date): Promise<Attendance[]> {
    const query = db.select().from(attendance).where(eq(attendance.studentId, studentId));
    
    // For now, just return the basic query - date filtering can be added later
    return await query.orderBy(desc(attendance.date));
  }

  async createAttendance(attendanceData: InsertAttendance): Promise<Attendance> {
    const [newAttendance] = await db.insert(attendance).values(attendanceData).returning();
    return newAttendance;
  }

  async getTeacherReviews(teacherId: string): Promise<TeacherReview[]> {
    return await db.select().from(teacherReviews)
      .where(eq(teacherReviews.teacherId, teacherId))
      .orderBy(desc(teacherReviews.createdAt));
  }

  async createTeacherReview(review: InsertTeacherReview): Promise<TeacherReview> {
    const [newReview] = await db.insert(teacherReviews).values(review).returning();
    return newReview;
  }

  async getInvoicesByStudent(studentId: string): Promise<Invoice[]> {
    return await db.select().from(invoices)
      .where(eq(invoices.studentId, studentId))
      .orderBy(desc(invoices.createdAt));
  }

  async createInvoice(invoice: any): Promise<Invoice> {
    const [newInvoice] = await db.insert(invoices).values(invoice).returning();
    return newInvoice;
  }

  async getSchoolStats(schoolId: string): Promise<any> {
    // Get total students count
    const studentCount = await db.select().from(students)
      .innerJoin(users, eq(students.userId, users.id))
      .where(eq(users.schoolId, schoolId));

    const teacherCount = await db.select().from(teachers)
      .innerJoin(users, eq(teachers.userId, users.id))
      .where(eq(users.schoolId, schoolId));

    const classCount = await db.select().from(classes)
      .where(eq(classes.schoolId, schoolId));

    return {
      totalStudents: studentCount.length,
      totalTeachers: teacherCount.length,
      totalClasses: classCount.length,
      feeCollectionRate: 94.2 // This would be calculated from actual payment data
    };
  }

  async getTeacherStats(teacherId: string): Promise<any> {
    const reviews = await this.getTeacherReviews(teacherId);
    const avgRating = reviews.length > 0 
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
      : 0;

    return {
      totalStudents: 156, // This would be calculated from actual assignments
      totalClasses: 6,
      averageRating: avgRating.toFixed(1),
      attendanceRate: 92
    };
  }

  async getStudentStats(studentId: string): Promise<any> {
    const grades = await this.getGradesByStudent(studentId);
    const attendanceRecords = await this.getAttendanceByStudent(studentId);
    
    const avgGrade = grades.length > 0
      ? grades.reduce((sum, grade) => sum + grade.marksObtained, 0) / grades.length
      : 0;

    const attendanceRate = attendanceRecords.length > 0
      ? (attendanceRecords.filter(a => a.status === 'present').length / attendanceRecords.length) * 100
      : 0;

    return {
      overallAverage: avgGrade.toFixed(1),
      attendanceRate: attendanceRate.toFixed(0),
      classRank: 7, // This would be calculated from actual data
      feeStatus: 'paid'
    };
  }
}

export const storage = new DatabaseStorage();
