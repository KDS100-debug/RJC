import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Award, TrendingUp, Users } from "lucide-react";

export default function Achievements() {
  const majorAchievements = [
    {
      year: "2024",
      title: "Excellence in NEET Results",
      description: "76.2% of our students qualified for NEET, with 15 students securing ranks below 10,000",
      icon: <Medal className="h-6 w-6" />,
      category: "Academic"
    },
    {
      year: "2024", 
      title: "JEE Success Story",
      description: "28 out of 45 students qualified for JEE Main, with 8 students advancing to JEE Advanced",
      icon: <Trophy className="h-6 w-6" />,
      category: "Academic"
    },
    {
      year: "2023",
      title: "State-level Recognition",
      description: "Recognized as one of the top 10 junior colleges in Assam for academic excellence",
      icon: <Star className="h-6 w-6" />,
      category: "Recognition"
    },
    {
      year: "2023",
      title: "100% Result Achievement",
      description: "Achieved 100% pass rate in H.S. final examination for Arts stream students",
      icon: <Award className="h-6 w-6" />,
      category: "Academic"
    }
  ];

  const scholarshipWinners = [
    {
      name: "Arjun Sharma",
      year: "2024",
      scholarship: "Phulai Bora Memorial Prize",
      amount: "₹10,000",
      achievement: "Rank 1 in H.S. Final Examination"
    },
    {
      name: "Priya Devi", 
      year: "2024",
      scholarship: "Merit Scholarship", 
      amount: "₹10,000",
      achievement: "85% in H.S. Final Examination"
    },
    {
      name: "Rohit Kumar",
      year: "2024", 
      scholarship: "Dr. Satyendra Talukdar Award",
      amount: "₹25,000",
      achievement: "Medical entrance with financial need"
    },
    {
      name: "Anita Boro",
      year: "2023",
      scholarship: "Government Merit Scholarship",
      amount: "₹10,000", 
      achievement: "SC Category Excellence"
    }
  ];

  const competitiveSuccesses = [
    {
      exam: "IIT JEE",
      year: "2024",
      topRank: "AIR 1,247",
      qualified: "12 students",
      student: "Rajesh Kumar"
    },
    {
      exam: "NEET",
      year: "2024", 
      topRank: "AIR 2,156",
      qualified: "32 students",
      student: "Sita Sharma"
    },
    {
      exam: "ISAT",
      year: "2024",
      topRank: "State Rank 45",
      qualified: "15 students", 
      student: "Bikash Gogoi"
    },
    {
      exam: "PMT",
      year: "2023",
      topRank: "State Rank 12",
      qualified: "18 students",
      student: "Neha Devi"
    }
  ];

  const institutionalMilestones = [
    {
      year: "2024",
      milestone: "Hostel Expansion Completed",
      description: "Added new hostel facilities accommodating 100 additional students"
    },
    {
      year: "2023", 
      milestone: "Laboratory Upgrades",
      description: "Modern physics, chemistry, and biology labs with latest equipment installed"
    },
    {
      year: "2022",
      milestone: "Digital Learning Initiative", 
      description: "Implemented smart classrooms and digital learning management system"
    },
    {
      year: "2021",
      milestone: "Career Counseling Program",
      description: "Launched comprehensive career guidance and counseling services"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-achievements">
              Achievements
            </h1>
            <p className="text-xl" data-testid="text-achievements-subtitle">
              Celebrating Excellence, Success Stories, and Milestones
            </p>
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12" data-testid="heading-major">
              Major Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {majorAchievements.map((achievement, index) => (
                <Card key={index} className="h-full" data-testid={`card-achievement-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-amber-600">{achievement.icon}</div>
                        <div>
                          <CardTitle className="text-lg" data-testid={`text-achievement-title-${index}`}>
                            {achievement.title}
                          </CardTitle>
                          <CardDescription data-testid={`text-achievement-year-${index}`}>
                            {achievement.year}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" data-testid={`badge-achievement-category-${index}`}>
                        {achievement.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300" data-testid={`text-achievement-description-${index}`}>
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Winners */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2" data-testid="heading-scholarships">
              <Award className="h-6 w-6 text-green-600" />
              Scholarship Winners
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scholarshipWinners.map((winner, index) => (
                <Card key={index} data-testid={`card-scholarship-${index}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span data-testid={`text-scholarship-name-${index}`}>{winner.name}</span>
                      <Badge variant="secondary" data-testid={`badge-scholarship-year-${index}`}>
                        {winner.year}
                      </Badge>
                    </CardTitle>
                    <CardDescription data-testid={`text-scholarship-type-${index}`}>
                      {winner.scholarship}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Amount:</span>
                      <span className="font-semibold text-green-600" data-testid={`text-scholarship-amount-${index}`}>
                        {winner.amount}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Achievement:</span>
                      <p className="text-sm mt-1" data-testid={`text-scholarship-achievement-${index}`}>
                        {winner.achievement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Exam Successes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2" data-testid="heading-competitive">
              <Trophy className="h-6 w-6 text-blue-600" />
              Competitive Exam Successes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competitiveSuccesses.map((success, index) => (
                <Card key={index} className="text-center" data-testid={`card-competitive-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg" data-testid={`text-competitive-exam-${index}`}>
                      {success.exam}
                    </CardTitle>
                    <CardDescription data-testid={`text-competitive-year-${index}`}>
                      {success.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-blue-600" data-testid={`text-competitive-rank-${index}`}>
                        {success.topRank}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Best Rank</div>
                    </div>
                    <div>
                      <div className="font-semibold" data-testid={`text-competitive-qualified-${index}`}>
                        {success.qualified}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Qualified</div>
                    </div>
                    <Badge variant="outline" data-testid={`badge-competitive-student-${index}`}>
                      Top: {success.student}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Milestones */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2" data-testid="heading-milestones">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              Institutional Milestones
            </h2>
            <div className="space-y-6">
              {institutionalMilestones.map((milestone, index) => (
                <Card key={index} data-testid={`card-milestone-${index}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span data-testid={`text-milestone-title-${index}`}>{milestone.milestone}</span>
                      <Badge variant="outline" data-testid={`badge-milestone-year-${index}`}>
                        {milestone.year}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300" data-testid={`text-milestone-description-${index}`}>
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12" data-testid="heading-statistics">
              Key Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center" data-testid="card-stat-1">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mx-auto" />
                  <CardTitle className="text-3xl font-bold">1000+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Students Graduated</p>
                </CardContent>
              </Card>
              
              <Card className="text-center" data-testid="card-stat-2">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-amber-600 mx-auto" />
                  <CardTitle className="text-3xl font-bold">150+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">IIT/Medical Selections</p>
                </CardContent>
              </Card>
              
              <Card className="text-center" data-testid="card-stat-3">
                <CardHeader>
                  <Award className="h-8 w-8 text-green-600 mx-auto" />
                  <CardTitle className="text-3xl font-bold">95%+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Average Pass Rate</p>
                </CardContent>
              </Card>
              
              <Card className="text-center" data-testid="card-stat-4">
                <CardHeader>
                  <Star className="h-8 w-8 text-purple-600 mx-auto" />
                  <CardTitle className="text-3xl font-bold">50+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">State Rank Holders</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}