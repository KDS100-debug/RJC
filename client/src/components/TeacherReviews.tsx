import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { apiRequest } from '@/lib/api';
import { format } from 'date-fns';
import { Star, MessageSquare, ThumbsUp, ThumbsDown, Send, Filter, TrendingUp, Users } from 'lucide-react';
import type { TeacherReview, Teacher } from '@/types';

interface ReviewWithTeacher extends TeacherReview {
  teacher?: {
    user: {
      name: string;
      avatar?: string;
    };
    employeeNo: string;
  };
}

interface TeacherStats {
  id: string;
  name: string;
  averageRating: number;
  totalReviews: number;
  subjects: string[];
  ratingDistribution: { [key: number]: number };
}

export default function TeacherReviews() {
  const { user } = useAuth();
  const [selectedTeacher, setSelectedTeacher] = useState<string>('');
  const [isSubmitReviewOpen, setIsSubmitReviewOpen] = useState(false);
  const [filterRating, setFilterRating] = useState<string>('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch teachers
  const { data: teachers, isLoading: teachersLoading } = useQuery<Teacher[]>({
    queryKey: ['/api/teachers'],
  });

  // Fetch reviews for selected teacher
  const { data: reviews, isLoading: reviewsLoading } = useQuery<ReviewWithTeacher[]>({
    queryKey: ['/api/teachers', selectedTeacher, 'reviews'],
    enabled: !!selectedTeacher,
  });

  // Submit review mutation
  const submitReviewMutation = useMutation({
    mutationFn: async (reviewData: any) => {
      const response = await apiRequest('POST', '/api/teacher-reviews', reviewData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Review submitted successfully'
      });
      queryClient.invalidateQueries({ queryKey: ['/api/teachers'] });
      setIsSubmitReviewOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });

  // Calculate teacher statistics
  const getTeacherStats = (teacherId: string): TeacherStats | null => {
    if (!reviews || !teachers) return null;

    const teacher = teachers.find(t => t.id === teacherId);
    if (!teacher) return null;

    const teacherReviews = reviews.filter(r => r.teacherId === teacherId);
    const totalReviews = teacherReviews.length;
    const averageRating = totalReviews > 0 
      ? teacherReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews 
      : 0;

    const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    teacherReviews.forEach(review => {
      ratingDistribution[review.rating] = (ratingDistribution[review.rating] || 0) + 1;
    });

    return {
      id: teacherId,
      name: `Teacher ${teacher.employeeNo}`, // This would come from the user relation
      averageRating,
      totalReviews,
      subjects: ['Mathematics', 'Physics'], // This would come from teacher subjects
      ratingDistribution
    };
  };

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClass = {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5'
    }[size];

    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const filteredReviews = reviews?.filter(review => 
    !filterRating || review.rating.toString() === filterRating
  ) || [];

  const teacherStats = selectedTeacher ? getTeacherStats(selectedTeacher) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-600" />
              <span>Teacher Reviews & Ratings</span>
            </CardTitle>
            {user?.role === 'student' && (
              <Dialog open={isSubmitReviewOpen} onOpenChange={setIsSubmitReviewOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Submit Review</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Submit Teacher Review</DialogTitle>
                  </DialogHeader>
                  <SubmitReviewForm 
                    teachers={teachers || []}
                    onSubmit={(data) => submitReviewMutation.mutate(data)}
                    isLoading={submitReviewMutation.isPending}
                  />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Select Teacher</Label>
              <Select value={selectedTeacher} onValueChange={setSelectedTeacher}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a teacher" />
                </SelectTrigger>
                <SelectContent>
                  {teachers?.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.id}>
                      Teacher {teacher.employeeNo} - {teacher.qualification}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Filter by Rating</Label>
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger>
                  <SelectValue placeholder="All ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Teacher Statistics */}
      {teacherStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Average Rating</p>
                  <p className="text-3xl font-bold mt-2">{teacherStats.averageRating.toFixed(1)}</p>
                </div>
                <Star className="h-12 w-12 opacity-80" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Total Reviews</p>
                  <p className="text-3xl font-bold mt-2">{teacherStats.totalReviews}</p>
                </div>
                <MessageSquare className="h-12 w-12 opacity-80" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Subjects</p>
                  <p className="text-3xl font-bold mt-2">{teacherStats.subjects.length}</p>
                </div>
                <Users className="h-12 w-12 opacity-80" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Top Rating</p>
                  <p className="text-3xl font-bold mt-2">
                    {Math.max(...Object.keys(teacherStats.ratingDistribution).map(Number))}
                  </p>
                </div>
                <TrendingUp className="h-12 w-12 opacity-80" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Rating Distribution */}
      {teacherStats && (
        <Card>
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = teacherStats.ratingDistribution[rating] || 0;
                const percentage = teacherStats.totalReviews > 0 
                  ? (count / teacherStats.totalReviews) * 100 
                  : 0;
                
                return (
                  <div key={rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 w-20">
                      <span className="text-sm font-medium">{rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12">{count}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      {selectedTeacher && (
        <Card>
          <CardHeader>
            <CardTitle>Student Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            {reviewsLoading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : filteredReviews.length > 0 ? (
              <div className="space-y-4">
                {filteredReviews.map((review) => (
                  <div key={review.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {review.isAnonymous ? 'A' : 'S'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {review.isAnonymous ? 'Anonymous Student' : 'Student'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {format(new Date(review.createdAt), 'MMM dd, yyyy')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <Badge variant="secondary">
                          {review.rating}.0
                        </Badge>
                      </div>
                    </div>
                    {review.comment && (
                      <p className="text-sm text-gray-700 pl-11">
                        "{review.comment}"
                      </p>
                    )}
                    {!review.isModerated && user?.role === 'admin' && (
                      <div className="flex items-center space-x-2 pl-11">
                        <Badge variant="outline" className="text-yellow-600">
                          Pending Moderation
                        </Badge>
                        <Button size="sm" variant="outline">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          <ThumbsDown className="h-3 w-3 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No reviews found</p>
                <p className="text-sm">
                  {filterRating 
                    ? `No reviews found with ${filterRating} star${filterRating !== '1' ? 's' : ''}`
                    : 'This teacher has no reviews yet'
                  }
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {!selectedTeacher && (
        <Card>
          <CardContent className="text-center py-12">
            <Star className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Teacher</h3>
            <p className="text-gray-500">Choose a teacher from the dropdown above to view their reviews and ratings</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Submit Review Form Component
function SubmitReviewForm({ 
  teachers, 
  onSubmit, 
  isLoading 
}: { 
  teachers: Teacher[]; 
  onSubmit: (data: any) => void; 
  isLoading: boolean; 
}) {
  const [teacherId, setTeacherId] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      teacherId,
      rating: parseInt(rating),
      comment: comment || undefined,
      isAnonymous
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="teacher">Select Teacher</Label>
        <Select value={teacherId} onValueChange={setTeacherId}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a teacher" />
          </SelectTrigger>
          <SelectContent>
            {teachers.map((teacher) => (
              <SelectItem key={teacher.id} value={teacher.id}>
                Teacher {teacher.employeeNo} - {teacher.qualification}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="rating">Rating</Label>
        <Select value={rating} onValueChange={setRating}>
          <SelectTrigger>
            <SelectValue placeholder="Select rating" />
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
      <div className="space-y-2">
        <Label htmlFor="comment">Comments (Optional)</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts about this teacher..."
          rows={3}
        />
      </div>
      <Button type="submit" disabled={isLoading || !teacherId || !rating} className="w-full">
        <Send className="h-4 w-4 mr-2" />
        {isLoading ? 'Submitting...' : 'Submit Review'}
      </Button>
    </form>
  );
}
