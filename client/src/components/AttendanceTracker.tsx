import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { apiRequest } from '@/lib/api';
import { format } from 'date-fns';
import { CalendarIcon, UserCheck, UserX, Clock, Save, Download } from 'lucide-react';
import type { Attendance, Student } from '@/types';

interface AttendanceRecord extends Attendance {
  student?: {
    user: {
      name: string;
    };
    rollNo: number;
    admissionNo: string;
  };
}

export default function AttendanceTracker() {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [attendanceRecords, setAttendanceRecords] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch students for the selected class
  const { data: students, isLoading: studentsLoading } = useQuery<Student[]>({
    queryKey: ['/api/students', selectedClass],
    enabled: !!selectedClass,
  });

  // Fetch existing attendance for the selected date and class
  const { data: existingAttendance, isLoading: attendanceLoading } = useQuery<AttendanceRecord[]>({
    queryKey: ['/api/attendance', selectedClass, format(selectedDate, 'yyyy-MM-dd')],
    enabled: !!selectedClass && !!selectedDate,
  });

  // Submit attendance mutation
  const submitAttendanceMutation = useMutation({
    mutationFn: async (attendanceData: any[]) => {
      const response = await apiRequest('POST', '/api/attendance', { records: attendanceData });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Attendance submitted successfully'
      });
      queryClient.invalidateQueries({ queryKey: ['/api/attendance'] });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });

  const handleAttendanceChange = (studentId: string, status: string) => {
    setAttendanceRecords(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const handleSubmitAttendance = () => {
    if (!selectedClass || !selectedDate || Object.keys(attendanceRecords).length === 0) {
      toast({
        title: 'Error',
        description: 'Please select a class, date, and mark attendance for students',
        variant: 'destructive'
      });
      return;
    }

    const attendanceData = Object.entries(attendanceRecords).map(([studentId, status]) => ({
      studentId,
      date: selectedDate,
      status,
      remarks: ''
    }));

    submitAttendanceMutation.mutate(attendanceData);
  };

  const getAttendanceStats = () => {
    const total = students?.length || 0;
    const present = Object.values(attendanceRecords).filter(status => status === 'present').length;
    const absent = Object.values(attendanceRecords).filter(status => status === 'absent').length;
    const late = Object.values(attendanceRecords).filter(status => status === 'late').length;

    return { total, present, absent, late };
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'present': return 'default';
      case 'absent': return 'destructive';
      case 'late': return 'secondary';
      default: return 'outline';
    }
  };

  const stats = getAttendanceStats();
  const attendancePercentage = stats.total > 0 ? ((stats.present + stats.late) / stats.total * 100).toFixed(1) : '0';

  return (
    <div className="space-y-6">
      {/* Attendance Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <UserCheck className="h-5 w-5 text-blue-600" />
            <span>Attendance Tracker</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <Label>Select Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="class-1">Grade 10-A</SelectItem>
                  <SelectItem value="class-2">Grade 10-B</SelectItem>
                  <SelectItem value="class-3">Grade 9-A</SelectItem>
                  <SelectItem value="class-4">Grade 9-B</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Actions</Label>
              <div className="flex space-x-2">
                <Button
                  onClick={handleSubmitAttendance}
                  disabled={submitAttendanceMutation.isPending}
                  className="flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Attendance Stats */}
          {selectedClass && students && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
                <p className="text-sm text-blue-600">Total Students</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">{stats.present}</p>
                <p className="text-sm text-green-600">Present</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600">{stats.absent}</p>
                <p className="text-sm text-red-600">Absent</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-yellow-600">{stats.late}</p>
                <p className="text-sm text-yellow-600">Late</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600">{attendancePercentage}%</p>
                <p className="text-sm text-purple-600">Attendance Rate</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Student Attendance List */}
      {selectedClass && (
        <Card>
          <CardHeader>
            <CardTitle>Student Attendance - {format(selectedDate, 'MMMM dd, yyyy')}</CardTitle>
          </CardHeader>
          <CardContent>
            {studentsLoading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : students && students.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Roll No.</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Admission No.</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Quick Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.rollNo}</TableCell>
                        <TableCell>
                          {student.userId ? `Student ${student.rollNo}` : 'Unknown Student'}
                        </TableCell>
                        <TableCell>{student.admissionNo}</TableCell>
                        <TableCell>
                          <Select
                            value={attendanceRecords[student.id] || ''}
                            onValueChange={(value) => handleAttendanceChange(student.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Mark" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="present">Present</SelectItem>
                              <SelectItem value="absent">Absent</SelectItem>
                              <SelectItem value="late">Late</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAttendanceChange(student.id, 'present')}
                              className="p-1"
                            >
                              <UserCheck className="h-4 w-4 text-green-600" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAttendanceChange(student.id, 'absent')}
                              className="p-1"
                            >
                              <UserX className="h-4 w-4 text-red-600" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAttendanceChange(student.id, 'late')}
                              className="p-1"
                            >
                              <Clock className="h-4 w-4 text-yellow-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <UserCheck className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No students found</p>
                <p className="text-sm">Please select a different class</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {!selectedClass && (
        <Card>
          <CardContent className="text-center py-12">
            <UserCheck className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Class to Begin</h3>
            <p className="text-gray-500">Choose a class from the dropdown above to start marking attendance</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
