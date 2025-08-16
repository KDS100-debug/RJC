import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/api';
import { BookOpen, Save } from 'lucide-react';

interface GradeEntryProps {
  studentId?: string;
  examId?: string;
}

export default function GradeEntry({ studentId, examId }: GradeEntryProps) {
  const [marksObtained, setMarksObtained] = useState('');
  const [gradeLetter, setGradeLetter] = useState('');
  const [remarks, setRemarks] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitGradeMutation = useMutation({
    mutationFn: async (gradeData: any) => {
      const response = await apiRequest('POST', '/api/grades', gradeData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Grade submitted successfully'
      });
      queryClient.invalidateQueries({ queryKey: ['/api/grades'] });
      // Reset form
      setMarksObtained('');
      setGradeLetter('');
      setRemarks('');
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!studentId || !examId || !marksObtained) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    submitGradeMutation.mutate({
      studentId,
      examId,
      marksObtained: parseInt(marksObtained),
      gradeLetter: gradeLetter || undefined,
      remarks: remarks || undefined
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <span>Grade Entry</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="marks">Marks Obtained</Label>
              <Input
                id="marks"
                type="number"
                placeholder="Enter marks"
                value={marksObtained}
                onChange={(e) => setMarksObtained(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade Letter</Label>
              <Select value={gradeLetter} onValueChange={setGradeLetter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="C+">C+</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="C-">C-</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                  <SelectItem value="F">F</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks (Optional)</Label>
            <Input
              id="remarks"
              placeholder="Enter remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
          <Button 
            type="submit" 
            disabled={submitGradeMutation.isPending}
            className="flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>
              {submitGradeMutation.isPending ? 'Submitting...' : 'Submit Grade'}
            </span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
