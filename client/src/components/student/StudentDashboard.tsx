import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { TrendingUp, Calendar, Trophy, CreditCard, CalendarDays, BookOpen, ListTodo, Star, Send } from 'lucide-react';
import type { DashboardStats } from '@/types';

export default function StudentDashboard() {
  const { data: stats, isLoading } = useQuery<DashboardStats>({
    queryKey: ['/api/dashboard/stats']
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Overall Average',
      value: `${stats?.overallAverage || 85.6}%`,
      icon: TrendingUp,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Attendance',
      value: `${stats?.attendanceRate || 94}%`,
      icon: Calendar,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Class Rank',
      value: `${stats?.classRank || 7}th`,
      icon: Trophy,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Fee Status',
      value: stats?.feeStatus || 'Paid',
      icon: CreditCard,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  const recentGrades = [
    { subject: 'Mathematics', test: 'Unit Test 3', marks: '85/100', grade: 'A', date: 'Dec 15, 2024' },
    { subject: 'Physics', test: 'Lab Report', marks: '92/100', grade: 'A+', date: 'Dec 12, 2024' },
    { subject: 'English', test: 'Essay Assignment', marks: '78/100', grade: 'B+', date: 'Dec 10, 2024' },
    { subject: 'Chemistry', test: 'Mid-term Exam', marks: '88/100', grade: 'A', date: 'Dec 8, 2024' }
  ];

  const todayClasses = [
    { subject: 'Mathematics', time: '09:00 - 09:45', room: 'Room 201', status: 'Completed' },
    { subject: 'Physics', time: '10:00 - 10:45', room: 'Lab 1', status: 'In Progress' },
    { subject: 'English', time: '11:30 - 12:15', room: 'Room 105', status: 'Upcoming' }
  ];

  const pendingAssignments = [
    { title: 'Chemistry Lab Report', dueDate: 'Dec 20, 2024', daysLeft: '2 days left', urgency: 'warning' },
    { title: 'History Essay', dueDate: 'Dec 25, 2024', daysLeft: '1 week left', urgency: 'success' },
    { title: 'Math Problem Set', dueDate: 'Dec 22, 2024', daysLeft: '4 days left', urgency: 'info' }
  ];

  const teachers = [
    { id: '1', name: 'Ms. Sarah Johnson - Mathematics' },
    { id: '2', name: 'Mr. David Wilson - Physics' },
    { id: '3', name: 'Ms. Emily Brown - English' }
  ];

  const getGradeBadgeVariant = (grade: string) => {
    if (grade.startsWith('A')) return 'default';
    if (grade.startsWith('B')) return 'secondary';
    return 'outline';
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'In Progress': return 'default';
      case 'Upcoming': return 'secondary';
      default: return 'outline';
    }
  };

  const getUrgencyBadgeVariant = (urgency: string) => {
    switch (urgency) {
      case 'warning': return 'destructive';
      case 'success': return 'default';
      case 'info': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Student Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="overflow-hidden">
              <CardContent className={`p-6 bg-gradient-to-r ${stat.gradient} text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-90">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <Icon className="h-12 w-12 opacity-80" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Grades */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span>Recent Grades</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Test/Exam</TableHead>
                    <TableHead>Marks</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentGrades.map((grade, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{grade.subject}</TableCell>
                      <TableCell>{grade.test}</TableCell>
                      <TableCell>{grade.marks}</TableCell>
                      <TableCell>
                        <Badge variant={getGradeBadgeVariant(grade.grade)}>
                          {grade.grade}
                        </Badge>
                      </TableCell>
                      <TableCell>{grade.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarDays className="h-5 w-5 text-blue-600" />
              <span>Today's Classes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayClasses.map((classItem, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">{classItem.subject}</p>
                  <p className="text-xs text-gray-500">{classItem.time} • {classItem.room}</p>
                </div>
                <Badge variant={getStatusBadgeVariant(classItem.status)} className="ml-2">
                  {classItem.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject Performance Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Subject Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Subject-wise Performance Chart</p>
                <p className="text-sm">Radar chart showing strengths/weaknesses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ListTodo className="h-5 w-5 text-blue-600" />
              <span>Pending Assignments</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingAssignments.map((assignment, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">{assignment.title}</p>
                  <p className="text-xs text-gray-500">Due: {assignment.dueDate}</p>
                </div>
                <Badge variant={getUrgencyBadgeVariant(assignment.urgency)} className="ml-2">
                  {assignment.daysLeft}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Teacher Review Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-600" />
            <span>Submit Teacher Review</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="teacherSelect">Select Teacher</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a teacher..." />
                  </SelectTrigger>
                  <SelectContent>
                    {teachers.map((teacher) => (
                      <SelectItem key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rating">Rating</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rating..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                    <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                    <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                    <SelectItem value="2">⭐⭐ Below Average</SelectItem>
                    <SelectItem value="1">⭐ Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reviewComment">Comments (Optional)</Label>
              <Textarea
                id="reviewComment"
                placeholder="Share your thoughts about this teacher..."
                rows={3}
              />
            </div>
            <Button type="submit" className="flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Submit Review</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
