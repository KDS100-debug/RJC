import { sql, relations } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, decimal, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Enums
export const roleEnum = pgEnum('role', ['super_admin', 'admin', 'teacher', 'student', 'parent']);
export const statusEnum = pgEnum('status', ['active', 'inactive', 'suspended']);
export const attendanceStatusEnum = pgEnum('attendance_status', ['present', 'absent', 'late']);
export const paymentStatusEnum = pgEnum('payment_status', ['pending', 'paid', 'overdue', 'cancelled']);
export const gradeLetterEnum = pgEnum('grade_letter', ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F']);

// Core tables
export const schools = pgTable("schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address"),
  phone: text("phone"),
  email: text("email"),
  timezone: text("timezone").default("UTC"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  phone: text("phone"),
  role: roleEnum("role").notNull(),
  status: statusEnum("status").default("active"),
  schoolId: varchar("school_id").references(() => schools.id),
  avatar: text("avatar"),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const classes = pgTable("classes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(), // e.g., "Grade 10"
  section: text("section").notNull(), // e.g., "A", "B"
  year: integer("year").notNull(),
  schoolId: varchar("school_id").notNull().references(() => schools.id),
  capacity: integer("capacity").default(30),
  createdAt: timestamp("created_at").defaultNow()
});

export const subjects = pgTable("subjects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  code: text("code").notNull(),
  schoolId: varchar("school_id").notNull().references(() => schools.id),
  createdAt: timestamp("created_at").defaultNow()
});

export const students = pgTable("students", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  admissionNo: text("admission_no").notNull(),
  classId: varchar("class_id").notNull().references(() => classes.id),
  rollNo: integer("roll_no"),
  dateOfBirth: timestamp("date_of_birth"),
  parentContact: text("parent_contact"),
  address: text("address"),
  admissionDate: timestamp("admission_date").defaultNow()
});

export const teachers = pgTable("teachers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  employeeNo: text("employee_no").notNull(),
  qualification: text("qualification"),
  experience: integer("experience"),
  salary: decimal("salary", { precision: 10, scale: 2 }),
  hireDate: timestamp("hire_date").defaultNow()
});

export const teacherSubjects = pgTable("teacher_subjects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  teacherId: varchar("teacher_id").notNull().references(() => teachers.id),
  subjectId: varchar("subject_id").notNull().references(() => subjects.id),
  classId: varchar("class_id").notNull().references(() => classes.id)
});

export const attendance = pgTable("attendance", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  studentId: varchar("student_id").notNull().references(() => students.id),
  date: timestamp("date").notNull(),
  status: attendanceStatusEnum("status").notNull(),
  remarks: text("remarks"),
  recordedBy: varchar("recorded_by").notNull().references(() => users.id),
  createdAt: timestamp("created_at").defaultNow()
});

export const exams = pgTable("exams", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  maxMarks: integer("max_marks").notNull(),
  classId: varchar("class_id").notNull().references(() => classes.id),
  subjectId: varchar("subject_id").notNull().references(() => subjects.id),
  schoolId: varchar("school_id").notNull().references(() => schools.id),
  createdAt: timestamp("created_at").defaultNow()
});

export const grades = pgTable("grades", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  studentId: varchar("student_id").notNull().references(() => students.id),
  examId: varchar("exam_id").notNull().references(() => exams.id),
  marksObtained: integer("marks_obtained").notNull(),
  gradeLetter: gradeLetterEnum("grade_letter"),
  remarks: text("remarks"),
  submittedBy: varchar("submitted_by").notNull().references(() => users.id),
  createdAt: timestamp("created_at").defaultNow()
});

export const feeStructures = pgTable("fee_structures", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(), // e.g., "Tuition Fee", "Lab Fee"
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  frequency: text("frequency").notNull(), // monthly, quarterly, yearly
  classId: varchar("class_id").references(() => classes.id),
  schoolId: varchar("school_id").notNull().references(() => schools.id),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow()
});

export const invoices = pgTable("invoices", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  studentId: varchar("student_id").notNull().references(() => students.id),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  paidAmount: decimal("paid_amount", { precision: 10, scale: 2 }).default("0"),
  dueDate: timestamp("due_date").notNull(),
  status: paymentStatusEnum("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});

export const invoiceItems = pgTable("invoice_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  invoiceId: varchar("invoice_id").notNull().references(() => invoices.id),
  feeStructureId: varchar("fee_structure_id").notNull().references(() => feeStructures.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  description: text("description")
});

export const payments = pgTable("payments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  invoiceId: varchar("invoice_id").notNull().references(() => invoices.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: text("payment_method").notNull(),
  transactionId: text("transaction_id"),
  status: paymentStatusEnum("status").default("pending"),
  paymentDate: timestamp("payment_date").defaultNow(),
  createdAt: timestamp("created_at").defaultNow()
});

export const notifications = pgTable("notifications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  message: text("message").notNull(),
  recipientId: varchar("recipient_id").notNull().references(() => users.id),
  type: text("type").notNull(), // email, sms, push
  isRead: boolean("is_read").default(false),
  sentAt: timestamp("sent_at").defaultNow()
});

export const teacherReviews = pgTable("teacher_reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  teacherId: varchar("teacher_id").notNull().references(() => teachers.id),
  studentId: varchar("student_id").notNull().references(() => students.id),
  rating: integer("rating").notNull(), // 1-5
  comment: text("comment"),
  isAnonymous: boolean("is_anonymous").default(true),
  isModerated: boolean("is_moderated").default(false),
  createdAt: timestamp("created_at").defaultNow()
});

// Relations
export const schoolsRelations = relations(schools, ({ many }) => ({
  users: many(users),
  classes: many(classes),
  subjects: many(subjects)
}));

export const usersRelations = relations(users, ({ one, many }) => ({
  school: one(schools, {
    fields: [users.schoolId],
    references: [schools.id]
  }),
  student: one(students),
  teacher: one(teachers),
  notifications: many(notifications)
}));

export const studentsRelations = relations(students, ({ one, many }) => ({
  user: one(users, {
    fields: [students.userId],
    references: [users.id]
  }),
  class: one(classes, {
    fields: [students.classId],
    references: [classes.id]
  }),
  attendance: many(attendance),
  grades: many(grades),
  invoices: many(invoices),
  teacherReviews: many(teacherReviews)
}));

export const teachersRelations = relations(teachers, ({ one, many }) => ({
  user: one(users, {
    fields: [teachers.userId],
    references: [users.id]
  }),
  teacherSubjects: many(teacherSubjects),
  teacherReviews: many(teacherReviews)
}));

export const classesRelations = relations(classes, ({ one, many }) => ({
  school: one(schools, {
    fields: [classes.schoolId],
    references: [schools.id]
  }),
  students: many(students),
  exams: many(exams)
}));

export const gradesRelations = relations(grades, ({ one }) => ({
  student: one(students, {
    fields: [grades.studentId],
    references: [students.id]
  }),
  exam: one(exams, {
    fields: [grades.examId],
    references: [exams.id]
  })
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  lastLogin: true
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertStudentSchema = createInsertSchema(students).omit({
  id: true,
  admissionDate: true
});

export const insertTeacherSchema = createInsertSchema(teachers).omit({
  id: true,
  hireDate: true
});

export const insertClassSchema = createInsertSchema(classes).omit({
  id: true,
  createdAt: true
});

export const insertGradeSchema = createInsertSchema(grades).omit({
  id: true,
  createdAt: true
});

export const insertAttendanceSchema = createInsertSchema(attendance).omit({
  id: true,
  createdAt: true
});

export const insertTeacherReviewSchema = createInsertSchema(teacherReviews).omit({
  id: true,
  createdAt: true,
  isModerated: true
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type School = typeof schools.$inferSelect;
export type InsertSchool = z.infer<typeof insertSchoolSchema>;
export type Student = typeof students.$inferSelect;
export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Teacher = typeof teachers.$inferSelect;
export type InsertTeacher = z.infer<typeof insertTeacherSchema>;
export type Class = typeof classes.$inferSelect;
export type InsertClass = z.infer<typeof insertClassSchema>;
export type Grade = typeof grades.$inferSelect;
export type InsertGrade = z.infer<typeof insertGradeSchema>;
export type Attendance = typeof attendance.$inferSelect;
export type InsertAttendance = z.infer<typeof insertAttendanceSchema>;
export type TeacherReview = typeof teacherReviews.$inferSelect;
export type InsertTeacherReview = z.infer<typeof insertTeacherReviewSchema>;
export type Invoice = typeof invoices.$inferSelect;
export type Payment = typeof payments.$inferSelect;
export type Notification = typeof notifications.$inferSelect;
