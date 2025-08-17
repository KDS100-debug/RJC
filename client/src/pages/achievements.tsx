import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Medal, Zap, BookOpen, Target, Users } from "lucide-react";

const achievementsData = [
  {
    category: "IISER & Competitive Exams 2025",
    icon: Trophy,
    color: "text-yellow-600 dark:text-yellow-400",
    achievements: [
      {
        title: "IISER Aptitude Test (IAT) 2025",
        description: "Successfully qualified for prestigious Indian Institute of Science Education and Research",
        student: "Multiple Students",
        year: "2025",
        highlight: true
      },
      {
        title: "JEE Main 2025",
        description: "Outstanding performance in Joint Entrance Examination",
        student: "Science Stream Students",
        year: "2025",
        highlight: false
      }
    ]
  },
  {
    category: "Olympiad Excellence 2024-25",
    icon: Medal,
    color: "text-blue-600 dark:text-blue-400",
    achievements: [
      {
        title: "Physics Olympiad",
        description: "All-Assam Physics Olympiad Center Topper (Classes IX–X)",
        student: "ARJUNAV BORAH",
        year: "2024-25",
        highlight: true
      },
      {
        title: "Chemistry Olympiad",
        description: "Regional level excellence in Chemistry competition",
        student: "RJC Students",
        year: "2024-25",
        highlight: false
      },
      {
        title: "NSO, IEO & IMO 2023",
        description: "National Science, English & Mathematics Olympiads",
        student: "Multiple Students",
        year: "2023",
        highlight: false
      }
    ]
  },
  {
    category: "IIT Qualifications 2024",
    icon: Star,
    color: "text-green-600 dark:text-green-400",
    achievements: [
      {
        title: "IIT ISM Dhanbad",
        description: "Successfully qualified and admitted to prestigious IIT",
        student: "AREEJEET ROY",
        year: "2024",
        highlight: true
      },
      {
        title: "IIT BHU Varanasi",
        description: "Secured admission to Indian Institute of Technology",
        student: "BIBEK BARMAN",
        year: "2024",
        highlight: true
      },
      {
        title: "IIT Bombay",
        description: "Achieved admission to India's premier technical institute",
        student: "SAMIRAN DAS",
        year: "2024",
        highlight: true
      },
      {
        title: "IIT Guwahati",
        description: "Successfully qualified for IIT Guwahati admission",
        student: "JOUDI WARISA",
        year: "2024",
        highlight: true
      }
    ]
  },
  {
    category: "Medical & Engineering 2024",
    icon: BookOpen,
    color: "text-purple-600 dark:text-purple-400",
    achievements: [
      {
        title: "NEET 2024",
        description: "Excellent performance in National Eligibility cum Entrance Test",
        student: "Medical Aspirants",
        year: "2024",
        highlight: false
      },
      {
        title: "Engineering 2024",
        description: "Outstanding results in various engineering entrance exams",
        student: "Engineering Students",
        year: "2024",
        highlight: false
      },
      {
        title: "JEE Main 2024",
        description: "Exceptional performance in Joint Entrance Examination",
        student: "Science Stream",
        year: "2024",
        highlight: false
      }
    ]
  },
  {
    category: "Board Examination Excellence",
    icon: Award,
    color: "text-red-600 dark:text-red-400",
    achievements: [
      {
        title: "HSLC Final Examination Result 2024",
        description: "Secured 3rd Rank with outstanding 98% marks",
        student: "DEVASHREE KASHYAP",
        year: "2024",
        highlight: true
      },
      {
        title: "HS Final Examination Result 2024",
        description: "Exceptional performance in Higher Secondary examinations",
        student: "Class XII Students",
        year: "2024",
        highlight: false
      }
    ]
  },
  {
    category: "Prestigious Recognitions",
    icon: Zap,
    color: "text-orange-600 dark:text-orange-400",
    achievements: [
      {
        title: "UPSC AIR 5 (2022-23)",
        description: "All India Rank 5 in Union Public Service Commission",
        student: "DR. MAYUR HAZARIKA",
        year: "2022-23",
        highlight: true
      },
      {
        title: "Dr. Ambedkar National Merit Award",
        description: "Prestigious national recognition for academic excellence",
        student: "MINTU HAZARIKA, MRIGANKA DAS, SANGITA BAISHYA",
        year: "2024",
        highlight: true
      },
      {
        title: "Mukhya Mantrir Bigyan Pratibha Sandhan",
        description: "State government mentoring programme recognition",
        student: "Selected Students",
        year: "2024",
        highlight: false
      }
    ]
  },
  {
    category: "Competitions & Cultural Events",
    icon: Users,
    color: "text-teal-600 dark:text-teal-400",
    achievements: [
      {
        title: "78th Independence Day Quiz Competition",
        description: "2nd Position in inter-school quiz competition",
        student: "ANURANAN SARMAH & SNIGDHA PARAN SAIKIA",
        year: "2024",
        details: "Class XI",
        highlight: false
      },
      {
        title: "Science Model Competition 2024",
        description: "1st Position at Nagaon District Level",
        student: "DUKE BHUYAN BORA & BIKASH BARUAH",
        year: "2024",
        details: "Class X-A",
        highlight: true
      },
      {
        title: "Science Model Competition 2024",
        description: "2nd Position at Nagaon District Level",
        student: "BARNA JYOTI SUT & RUPJYOTI SAIKIA",
        year: "2024",
        details: "Class X-C",
        highlight: false
      },
      {
        title: "Dhai Akhar Letter Writing Competition 2023",
        description: "All-Assam 1st Prize in state-level writing competition",
        student: "ANURANAN SARMAH",
        year: "2023",
        highlight: true
      }
    ]
  },
  {
    category: "Previous Years' Excellence",
    icon: Target,
    color: "text-indigo-600 dark:text-indigo-400",
    achievements: [
      {
        title: "IIT 2023",
        description: "Successfully qualified for IIST (Trivandrum)",
        student: "RISHAB UPADHYAY",
        year: "2023",
        highlight: true
      },
      {
        title: "Mock Test 2023-24",
        description: "Outstanding performance in preparatory examinations",
        student: "Multiple Students",
        year: "2023-24",
        highlight: false
      }
    ]
  }
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-achievements">
              Student Achievements
            </h1>
            <p className="text-xl" data-testid="text-achievements-subtitle">
              Celebrating Excellence and Success Stories
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-7xl mx-auto">
            {achievementsData.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="hover:shadow-lg transition-shadow" data-testid={`card-category-${categoryIndex}`}>
                  <CardHeader>
                    <CardTitle className={`text-2xl flex items-center gap-3 ${category.color}`} data-testid={`heading-category-${categoryIndex}`}>
                      <IconComponent className="w-8 h-8" />
                      {category.category}
                    </CardTitle>
                    <CardDescription>
                      Outstanding achievements and recognitions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {category.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex} 
                          className={`p-6 rounded-lg border transition-all hover:shadow-md ${
                            achievement.highlight 
                              ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-700' 
                              : 'bg-white dark:bg-gray-800'
                          }`} 
                          data-testid={`card-achievement-${categoryIndex}-${achievementIndex}`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white" data-testid={`text-title-${categoryIndex}-${achievementIndex}`}>
                              {achievement.title}
                            </h4>
                            {achievement.highlight && (
                              <Trophy className="w-5 h-5 text-yellow-500 flex-shrink-0 ml-2" />
                            )}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed" data-testid={`text-description-${categoryIndex}-${achievementIndex}`}>
                            {achievement.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge 
                              variant={achievement.highlight ? "default" : "secondary"} 
                              className={achievement.highlight ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" : ""}
                              data-testid={`badge-student-${categoryIndex}-${achievementIndex}`}
                            >
                              {achievement.student}
                            </Badge>
                            
                            <Badge variant="outline" data-testid={`badge-year-${categoryIndex}-${achievementIndex}`}>
                              {achievement.year}
                            </Badge>
                            
                            {achievement.details && (
                              <Badge variant="secondary" className="text-xs" data-testid={`badge-details-${categoryIndex}-${achievementIndex}`}>
                                {achievement.details}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6" data-testid="heading-highlights">
              Achievement Highlights
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              A testament to our commitment to academic excellence and holistic development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
              <CardHeader>
                <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-2xl text-yellow-700 dark:text-yellow-400">IIT Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-2">4+</div>
                <p className="text-gray-600 dark:text-gray-400">Students qualified for IITs in 2024</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <CardHeader>
                <Medal className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">Olympiad Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">State</div>
                <p className="text-gray-600 dark:text-gray-400">Level toppers and winners</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
              <CardHeader>
                <Star className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-2xl text-green-700 dark:text-green-400">Board Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600 dark:text-gray-400">Highest HSLC score achieved</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardHeader>
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-2xl text-purple-700 dark:text-purple-400">National Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">AIR 5</div>
                <p className="text-gray-600 dark:text-gray-400">UPSC All India Rank by alumnus</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}


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