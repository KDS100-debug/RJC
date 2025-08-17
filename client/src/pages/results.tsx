import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy, TrendingUp, Users, Award, Search } from "lucide-react";

export default function Results() {
  const recentResults = [
    {
      year: "2024",
      stream: "Science",
      totalStudents: 120,
      passPercentage: 96.7,
      firstClass: 85,
      distinctions: 42
    },
    {
      year: "2024", 
      stream: "Arts",
      totalStudents: 80,
      passPercentage: 98.8,
      firstClass: 65,
      distinctions: 28
    },
    {
      year: "2023",
      stream: "Science", 
      totalStudents: 115,
      passPercentage: 95.2,
      firstClass: 78,
      distinctions: 38
    },
    {
      year: "2023",
      stream: "Arts",
      totalStudents: 75,
      passPercentage: 97.3,
      firstClass: 58,
      distinctions: 25
    }
  ];

  const toppers = [
    {
      name: "Arjun Sharma",
      year: "2024",
      stream: "Science",
      percentage: 96.8,
      rank: 1
    },
    {
      name: "Priya Devi",
      year: "2024", 
      stream: "Arts",
      percentage: 95.2,
      rank: 1
    },
    {
      name: "Rohit Kumar",
      year: "2024",
      stream: "Science", 
      percentage: 95.6,
      rank: 2
    },
    {
      name: "Anita Boro",
      year: "2024",
      stream: "Arts",
      percentage: 94.8,
      rank: 2
    }
  ];

  const competitiveResults = [
    {
      exam: "JEE Main",
      year: "2024",
      qualified: 28,
      total: 45,
      percentage: 62.2
    },
    {
      exam: "NEET",
      year: "2024", 
      qualified: 32,
      total: 42,
      percentage: 76.2
    },
    {
      exam: "ISAT",
      year: "2024",
      qualified: 15,
      total: 25,
      percentage: 60.0
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-results">
              Results
            </h1>
            <p className="text-xl" data-testid="text-results-subtitle">
              Academic Excellence and Achievement Records
            </p>
          </div>
        </div>
      </section>

      {/* Result Search */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2" data-testid="heading-search">
                  <Search className="h-5 w-5" />
                  Search Individual Results
                </CardTitle>
                <CardDescription>
                  Enter your admission number or roll number to view your results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="admissionNo">Admission Number</Label>
                      <Input 
                        id="admissionNo"
                        placeholder="Enter admission number"
                        data-testid="input-admission-number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rollNo">Roll Number</Label>
                      <Input 
                        id="rollNo"
                        placeholder="Enter roll number"
                        data-testid="input-roll-number"
                      />
                    </div>
                  </div>
                  <Button className="w-full" data-testid="button-search">
                    <Search className="h-4 w-4 mr-2" />
                    Search Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overall Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12" data-testid="heading-overall">
              Overall Results Summary
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentResults.map((result, index) => (
                <Card key={index} data-testid={`card-result-${index}`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span data-testid={`text-result-year-${index}`}>{result.year}</span>
                      <Badge variant={result.stream === 'Science' ? 'default' : 'secondary'}>
                        {result.stream}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between" data-testid={`text-result-students-${index}`}>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Total Students:</span>
                      <span className="font-semibold">{result.totalStudents}</span>
                    </div>
                    <div className="flex justify-between" data-testid={`text-result-pass-${index}`}>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Pass %:</span>
                      <span className="font-semibold text-green-600">{result.passPercentage}%</span>
                    </div>
                    <div className="flex justify-between" data-testid={`text-result-first-${index}`}>
                      <span className="text-sm text-gray-600 dark:text-gray-400">First Class:</span>
                      <span className="font-semibold">{result.firstClass}</span>
                    </div>
                    <div className="flex justify-between" data-testid={`text-result-distinction-${index}`}>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Distinctions:</span>
                      <span className="font-semibold text-blue-600">{result.distinctions}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2" data-testid="heading-toppers">
              <Trophy className="h-6 w-6 text-yellow-600" />
              Top Performers 2024
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {toppers.map((topper, index) => (
                <Card key={index} data-testid={`card-topper-${index}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span data-testid={`text-topper-name-${index}`}>{topper.name}</span>
                      <Badge variant={topper.rank === 1 ? 'default' : 'secondary'}>
                        Rank {topper.rank}
                      </Badge>
                    </CardTitle>
                    <CardDescription data-testid={`text-topper-stream-${index}`}>
                      {topper.stream} Stream • {topper.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Percentage:</span>
                      <span className="text-2xl font-bold text-green-600" data-testid={`text-topper-percentage-${index}`}>
                        {topper.percentage}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Exam Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2" data-testid="heading-competitive">
              <Award className="h-6 w-6 text-purple-600" />
              Competitive Exam Results 2024
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {competitiveResults.map((exam, index) => (
                <Card key={index} data-testid={`card-competitive-${index}`}>
                  <CardHeader className="text-center">
                    <CardTitle data-testid={`text-exam-name-${index}`}>{exam.exam}</CardTitle>
                    <CardDescription>Entrance Examination</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="text-3xl font-bold text-blue-600" data-testid={`text-exam-percentage-${index}`}>
                      {exam.percentage}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400" data-testid={`text-exam-ratio-${index}`}>
                      {exam.qualified} out of {exam.total} students qualified
                    </div>
                    <Badge variant="outline">Success Rate</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8" data-testid="heading-highlights">
              Achievement Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center" data-testid="card-highlight-1">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto" />
                  <CardTitle className="text-lg">Consistent Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Maintaining above 95% pass rate for the last 5 years</p>
                </CardContent>
              </Card>
              
              <Card className="text-center" data-testid="card-highlight-2">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mx-auto" />
                  <CardTitle className="text-lg">IIT/Medical Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Over 60% students qualify for premier entrance exams</p>
                </CardContent>
              </Card>
              
              <Card className="text-center" data-testid="card-highlight-3">
                <CardHeader>
                  <Award className="h-8 w-8 text-purple-600 mx-auto" />
                  <CardTitle className="text-lg">State Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Multiple state-level achievers and rank holders</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}