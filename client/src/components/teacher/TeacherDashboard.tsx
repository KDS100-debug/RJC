import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Users, Building, Star, Calendar, CalendarDays, Save, Upload } from 'lucide-react';
import type { DashboardStats } from '@/types';

export default function TeacherDashboard() {
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
      title: 'My Students',
      value: stats?.totalStudents || 156,
      icon: Users,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Classes',
      value: 6,
      icon: Building,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Rating',
      value: stats?.averageRating || '4.7',
      icon: Star,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Attendance',
      value: `${stats?.attendanceRate || 92}%`,
      icon: Calendar,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  const todaySchedule = [
    { time: '09:00 - 09:45', class: 'Grade 10-A', subject: 'Mathematics', room: 'Room 201', action: 'Take Attendance' },
    { time: '10:00 - 10:45', class: 'Grade 9-B', subject: 'Mathematics', room: 'Room 201', action: 'Take Attendance' },
    { time: '11:30 - 12:15', class: 'Grade 10-C', subject: 'Mathematics', room: 'Room 201', action: 'Submit Grades' }
  ];

  const gradeEntryData = [
    { name: 'Emily Johnson', rollNo: '2023001', marks: 85, maxMarks: 100, grade: 'A', status: 'completed' },
    { name: 'Michael Chen', rollNo: '2023002', marks: 92, maxMarks: 100, grade: 'A+', status: 'completed' },
    { name: 'Sarah Williams', rollNo: '2023003', marks: null, maxMarks: 100, grade: '-', status: 'pending' }
  ];

  const recentReviews = [
    { student: 'Anonymous Student', comment: 'Great teacher! Makes math fun and easy to understand.', class: 'Grade 10-A', rating: 5.0, timeAgo: '2 days ago' },
    { student: 'Anonymous Student', comment: 'Always patient and helpful during class.', class: 'Grade 9-B', rating: 4.8, timeAgo: '5 days ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Teacher KPIs */}
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
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarDays className="h-5 w-5 text-blue-600" />
              <span>Today's Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {todaySchedule.map((schedule, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{schedule.time}</TableCell>
                      <TableCell>{schedule.class}</TableCell>
                      <TableCell>{schedule.subject}</TableCell>
                      <TableCell>{schedule.room}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          {schedule.action}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reviews */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-600" />
              <span>Recent Reviews</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentReviews.map((review, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{review.student}</p>
                    <p className="text-xs text-gray-600 mt-1">"{review.comment}"</p>
                    <p className="text-xs text-gray-500 mt-1">{review.class} • {review.timeAgo}</p>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    ★ {review.rating}
                  </Badge>
                </div>
                {index < recentReviews.length - 1 && <hr className="my-3" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Grade Entry */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-blue-600" />
            <span>Quick Grade Entry - Mathematics Test</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Roll No.</TableHead>
                  <TableHead>Marks Obtained</TableHead>
                  <TableHead>Max Marks</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradeEntryData.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.rollNo}</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        max={student.maxMarks}
                        defaultValue={student.marks || ''}
                        placeholder="Enter marks"
                        className="w-24"
                      />
                    </TableCell>
                    <TableCell>{student.maxMarks}</TableCell>
                    <TableCell>
                      <Badge variant={student.grade === '-' ? 'secondary' : 'default'}>
                        {student.grade}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {student.status === 'completed' ? (
                        <span className="text-green-600">✓</span>
                      ) : (
                        <span className="text-yellow-600">⏳</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex space-x-4">
            <Button className="flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Save Grades</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Bulk Upload CSV</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
