export interface User {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'admin' | 'teacher' | 'student' | 'parent';
  phone?: string;
  avatar?: string;
}

export interface AuthResponse {
  user: User;
}

export interface DashboardStats {
  totalStudents?: number;
  totalTeachers?: number;
  totalClasses?: number;
  feeCollectionRate?: number;
  overallAverage?: string;
  attendanceRate?: string;
  classRank?: number;
  feeStatus?: string;
  averageRating?: string;
}

export interface Student {
  id: string;
  userId: string;
  admissionNo: string;
  classId: string;
  rollNo?: number;
  dateOfBirth?: Date;
  parentContact?: string;
  address?: string;
}

export interface Teacher {
  id: string;
  userId: string;
  employeeNo: string;
  qualification?: string;
  experience?: number;
  salary?: string;
}

export interface Grade {
  id: string;
  studentId: string;
  examId: string;
  marksObtained: number;
  gradeLetter?: string;
  remarks?: string;
  submittedBy: string;
  createdAt: Date;
}

export interface Attendance {
  id: string;
  studentId: string;
  date: Date;
  status: 'present' | 'absent' | 'late';
  remarks?: string;
  recordedBy: string;
}

export interface TeacherReview {
  id: string;
  teacherId: string;
  studentId: string;
  rating: number;
  comment?: string;
  isAnonymous: boolean;
  createdAt: Date;
}

export interface Class {
  id: string;
  name: string;
  section: string;
  year: number;
  schoolId: string;
  capacity?: number;
}

export interface Invoice {
  id: string;
  studentId: string;
  totalAmount: string;
  paidAmount: string;
  dueDate: Date;
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  createdAt: Date;
}
