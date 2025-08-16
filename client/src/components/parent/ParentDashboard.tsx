import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TrendingUp, Calendar, Trophy, CreditCard, User, Users, Building, CalendarCheck, BookOpen, MessageCircle } from 'lucide-react';
import type { DashboardStats } from '@/types';

export default function ParentDashboard() {
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
      value: `${stats?.overallAverage || 87.3}%`,
      icon: TrendingUp,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Attendance',
      value: `${stats?.attendanceRate || 96}%`,
      icon: Calendar,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Class Rank',
      value: `${stats?.classRank || 5}th`,
      icon: Trophy,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Due Amount',
      value: '$125',
      icon: CreditCard,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  const feeStructure = [
    { type: 'Tuition Fee', amount: '$500.00', dueDate: 'Dec 31, 2024', status: 'Paid' },
    { type: 'Laboratory Fee', amount: '$75.00', dueDate: 'Dec 20, 2024', status: 'Pending' },
    { type: 'Transport Fee', amount: '$50.00', dueDate: 'Dec 25, 2024', status: 'Pending' }
  ];

  const recentGrades = [
    { subject: 'Mathematics', test: 'Unit Test 3', marks: '87/100', grade: 'A', remarks: 'Excellent improvement!' },
    { subject: 'Physics', test: 'Lab Report', marks: '94/100', grade: 'A+', remarks: 'Outstanding work' },
    { subject: 'English', test: 'Essay Assignment', marks: '82/100', grade: 'A-', remarks: 'Good creativity' }
  ];

  const recentMessages = [
    { sender: 'Ms. Johnson', message: 'Emma showed great improvement in today\'s math test.', timeAgo: '2 hours ago', type: 'teacher' },
    { sender: 'School Administration', message: 'Parent-teacher meeting scheduled for Dec 22.', timeAgo: '1 day ago', type: 'admin' }
  ];

  const upcomingEvents = [
    { event: 'Parent-Teacher Meeting', date: 'Dec 22, 2024 at 2:00 PM', timeLeft: '2 days' },
    { event: 'Annual Sports Day', date: 'Jan 15, 2025', timeLeft: '3 weeks' },
    { event: 'Final Exams Begin', date: 'Feb 1, 2025', timeLeft: '5 weeks' }
  ];

  const getFeeStatusVariant = (status: string) => {
    return status === 'Paid' ? 'default' : 'destructive';
  };

  const getGradeBadgeVariant = (grade: string) => {
    if (grade.startsWith('A')) return 'default';
    if (grade.startsWith('B')) return 'secondary';
    return 'outline';
  };

  const getEventBadgeVariant = (timeLeft: string) => {
    if (timeLeft.includes('days')) return 'default';
    if (timeLeft.includes('weeks')) return 'secondary';
    return 'outline';
  };

  return (
    <div className="space-y-6">
      {/* Child's Overview */}
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
        {/* Child Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-600" />
              <span>Child Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Avatar className="h-24 w-24 mx-auto">
              <AvatarImage src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">Emma Davis</h3>
              <p className="text-sm text-gray-600">Grade 10-A • Roll No: 2023045</p>
              <p className="text-sm text-gray-600">Date of Birth: March 15, 2009</p>
            </div>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Fee Management */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span>Fee Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fee Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeStructure.map((fee, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{fee.type}</TableCell>
                      <TableCell>{fee.amount}</TableCell>
                      <TableCell>{fee.dueDate}</TableCell>
                      <TableCell>
                        <Badge variant={getFeeStatusVariant(fee.status)}>
                          {fee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {fee.status === 'Paid' ? (
                          <Button size="sm" variant="outline">Receipt</Button>
                        ) : (
                          <Button size="sm">Pay Now</Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="text-right space-y-2">
              <p className="font-semibold">Total Pending: $125.00</p>
              <Button className="bg-green-600 hover:bg-green-700">
                <CreditCard className="h-4 w-4 mr-2" />
                Pay All Pending
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Academic Progress Trend */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Academic Progress Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Progress Trend Chart</p>
                <p className="text-sm">Shows improvement over terms</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              <span>Recent Messages</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMessages.map((message, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'teacher' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {message.type === 'teacher' ? (
                    <User className={`h-4 w-4 ${message.type === 'teacher' ? 'text-blue-600' : 'text-green-600'}`} />
                  ) : (
                    <Building className="h-4 w-4 text-green-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{message.sender}</p>
                  <p className="text-xs text-gray-600 mt-1">{message.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{message.timeAgo}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-4">
              <MessageCircle className="h-4 w-4 mr-2" />
              View All Messages
            </Button>
          </CardContent>
        </Card>
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
                    <TableHead>Teacher Remarks</TableHead>
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
                      <TableCell>
                        <span className="text-sm text-green-600">{grade.remarks}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarCheck className="h-5 w-5 text-blue-600" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">{event.event}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
                <Badge variant={getEventBadgeVariant(event.timeLeft)} className="ml-2">
                  {event.timeLeft}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
