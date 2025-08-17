import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Microscope, Globe, Palette, Music } from "lucide-react";

export default function Departments() {
  const scienceDepartments = [
    {
      name: "Physics",
      icon: <Calculator className="h-6 w-6" />,
      description: "Comprehensive physics curriculum covering mechanics, thermodynamics, optics, and modern physics",
      subjects: ["Classical Mechanics", "Thermodynamics", "Optics", "Modern Physics"]
    },
    {
      name: "Chemistry", 
      icon: <Microscope className="h-6 w-6" />,
      description: "In-depth study of organic, inorganic, and physical chemistry with practical laboratory work",
      subjects: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry"]
    },
    {
      name: "Mathematics",
      icon: <Calculator className="h-6 w-6" />,
      description: "Advanced mathematics including calculus, algebra, trigonometry, and statistics",
      subjects: ["Calculus", "Algebra", "Trigonometry", "Statistics", "Coordinate Geometry"]
    },
    {
      name: "Biology",
      icon: <Microscope className="h-6 w-6" />,
      description: "Life sciences covering botany, zoology, and human biology with laboratory sessions",
      subjects: ["Botany", "Zoology", "Human Physiology", "Genetics", "Ecology"]
    }
  ];

  const artsDepartments = [
    {
      name: "English",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Literature, language skills, and communication development",
      subjects: ["Literature", "Grammar", "Composition", "Communication Skills"]
    },
    {
      name: "Assamese",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Regional language and literature studies",
      subjects: ["Assamese Literature", "Language Studies", "Cultural Studies"]
    },
    {
      name: "History",
      icon: <Globe className="h-6 w-6" />,
      description: "World history, Indian history, and regional historical studies",
      subjects: ["Ancient History", "Medieval History", "Modern History", "Regional History"]
    },
    {
      name: "Political Science",
      icon: <Globe className="h-6 w-6" />,
      description: "Political theory, governance, and public administration",
      subjects: ["Political Theory", "Indian Polity", "International Relations", "Public Administration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-departments">
              Departments
            </h1>
            <p className="text-xl" data-testid="text-departments-subtitle">
              Academic Excellence Across Science & Arts Streams
            </p>
          </div>
        </div>
      </section>

      {/* Science Stream */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4" data-testid="heading-science">
              Science Stream
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12" data-testid="text-science-description">
              Comprehensive science education preparing students for medical and engineering entrance exams
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {scienceDepartments.map((dept, index) => (
                <Card key={index} className="h-full" data-testid={`card-science-${index}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl" data-testid={`text-dept-name-${dept.name.toLowerCase()}`}>
                      <div className="text-blue-600">{dept.icon}</div>
                      {dept.name}
                    </CardTitle>
                    <CardDescription data-testid={`text-dept-description-${dept.name.toLowerCase()}`}>
                      {dept.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                        Key Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" data-testid={`badge-subject-${subject.toLowerCase().replace(/\s+/g, '-')}`}>
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arts Stream */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4" data-testid="heading-arts">
              Arts Stream
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12" data-testid="text-arts-description">
              Liberal arts education fostering critical thinking and cultural understanding
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {artsDepartments.map((dept, index) => (
                <Card key={index} className="h-full" data-testid={`card-arts-${index}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl" data-testid={`text-arts-dept-name-${dept.name.toLowerCase()}`}>
                      <div className="text-green-600">{dept.icon}</div>
                      {dept.name}
                    </CardTitle>
                    <CardDescription data-testid={`text-arts-dept-description-${dept.name.toLowerCase()}`}>
                      {dept.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                        Key Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" data-testid={`badge-arts-subject-${subject.toLowerCase().replace(/\s+/g, '-')}`}>
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8" data-testid="heading-special-features">
              Special Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card data-testid="card-feature-coaching">
                <CardHeader>
                  <CardTitle className="text-lg">Entrance Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Specialized coaching for JEE, NEET, and other competitive exams integrated with regular curriculum.</p>
                </CardContent>
              </Card>
              
              <Card data-testid="card-feature-labs">
                <CardHeader>
                  <CardTitle className="text-lg">Well-equipped Labs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Modern laboratories for physics, chemistry, and biology with latest equipment and safety measures.</p>
                </CardContent>
              </Card>
              
              <Card data-testid="card-feature-faculty">
                <CardHeader>
                  <CardTitle className="text-lg">Expert Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Highly qualified and experienced teachers dedicated to student success and conceptual clarity.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}