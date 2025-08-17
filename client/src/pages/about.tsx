import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Users, Award } from "lucide-react";
import logoPath from "@assets/logo_1755410486904.jpg";

export default function About() {
  const objectives = [
    "Impart conceptual clarity in core subjects",
    "Train students for competitive exams (JEE, Medical, IIT, PMT, ISAT)",
    "Develop analytical and problem-solving abilities",
    "Promote moral education and all-round development",
    "Regular parent-teacher interaction"
  ];

  const managementTeam = [
    {
      name: "Mr. Dilip Kumar Borah",
      position: "Principal & Secretary",
      qualification: "M.Sc., B.Ed. (NET Qualified)",
      phone: "9435162455"
    },
    {
      name: "Mrs. Sangeeta Baruah Bora",
      position: "Vice Principal",
      qualification: "M.A",
      phone: "9864240898"
    },
    {
      name: "Mr. Parag Borah",
      position: "Controller of Examination",
      qualification: "M.Sc, B.Ed",
      phone: "8822140960"
    },
    {
      name: "Mr. Ankush Kahar",
      position: "Career Counsellor",
      qualification: "B.Tech (USA)",
      phone: ""
    }
  ];

  const facilities = [
    "Well-trained, dedicated faculty",
    "Boys & Girls hostel accommodation", 
    "Stress on moral education & discipline",
    "Library with reference books",
    "Sports, cultural, and personality development activities"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img 
                src={logoPath} 
                alt="Ramanujan Junior College Logo" 
                className="h-20 w-20 rounded-full object-cover shadow-lg"
                data-testid="img-about-logo"
              />
            </div>
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-about">
              About Ramanujan Junior College
            </h1>
            <p className="text-xl" data-testid="text-about-subtitle">
              Excellence in Education Since 2005
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2" data-testid="heading-establishment">
                  <GraduationCap className="text-blue-600" />
                  Our Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none dark:prose-invert">
                <p data-testid="text-about-description">
                  Ramanujan Junior College, founded in 2005, stands true to its motto - "Education, Development and Progress" 
                  along with a long-cherished desire to impart quality education. The emphasis is laid on success in a 
                  competitive educational field. Its ultimate goal is to pave the way for a splendid career.
                </p>
                <p>
                  Primarily the college was started as a coaching institute named Ramanujan Academy in 2003, which grew into 
                  a premier institution offering both Science & Arts streams, providing dual service as Ramanujan Junior 
                  College and Ramanujan Academy (Co-educational).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2" data-testid="heading-objectives">
                  <Target className="text-green-600" />
                  Objectives of the College
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`text-objective-${index}`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2" data-testid="heading-management">
              <Users className="text-purple-600" />
              Management Team
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {managementTeam.map((member, index) => (
                <Card key={index} data-testid={`card-member-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg" data-testid={`text-member-name-${index}`}>
                      {member.name}
                    </CardTitle>
                    <CardDescription data-testid={`text-member-position-${index}`}>
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="outline" data-testid={`badge-qualification-${index}`}>
                        {member.qualification}
                      </Badge>
                      {member.phone && (
                        <p className="text-sm text-gray-600 dark:text-gray-400" data-testid={`text-member-phone-${index}`}>
                          Phone: {member.phone}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2" data-testid="heading-facilities">
                  <Award className="text-orange-600" />
                  Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`text-facility-${index}`}>
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">{facility}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}