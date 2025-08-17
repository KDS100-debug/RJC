import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Book, FileText, Home, Trophy, DollarSign } from "lucide-react";

export default function Academics() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-academics">
              Academics
            </h1>
            <p className="text-xl" data-testid="text-academics-subtitle">
              Comprehensive Educational Programs & Support Systems
            </p>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2" data-testid="heading-library">
                  <Book className="text-blue-600" />
                  Library
                </CardTitle>
                <CardDescription>
                  The college authority provides suitable reference books to students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4 text-lg" data-testid="heading-library-rules">
                  Rules and Regulations for Library Books
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3" data-testid="text-library-rule-1">
                    <span className="font-semibold text-blue-600">1.</span>
                    <p>A book will be issued only to students who are sincere.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-library-rule-2">
                    <span className="font-semibold text-blue-600">2.</span>
                    <p>Students can borrow a maximum of two books at a time for 15 (fifteen) days.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-library-rule-3">
                    <span className="font-semibold text-blue-600">3.</span>
                    <p>Students must return borrowed books within 15 (fifteen) days from the date of issue.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-library-rule-4">
                    <span className="font-semibold text-blue-600">4.</span>
                    <p>A fine of Rs. 20/- shall be charged for every book beyond the stipulated date of return.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-library-rule-5">
                    <span className="font-semibold text-blue-600">5.</span>
                    <p>Books can be re-issued once returned, if there is no reservation by another person.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-library-rule-6">
                    <span className="font-semibold text-blue-600">6.</span>
                    <p>Any mutilation to a book is a serious offense.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-library-rule-7">
                    <span className="font-semibold text-blue-600">7.</span>
                    <p>Students must return all books and obtain "No Dues" from the librarian before filling final exam forms.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examination System */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2" data-testid="heading-examination">
                  <FileText className="text-green-600" />
                  Examination System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4" data-testid="text-examination-description">
                  Unit test, class test, pre final test and screening test conducted in the college are compulsory for all students.
                </p>
                <Alert>
                  <AlertDescription data-testid="text-examination-fine">
                    <strong>Important:</strong> In case of absence, a fine of Rs. 500/- will be imposed.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hostel & Scholarships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Hostel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2" data-testid="heading-hostel">
                  <Home className="text-purple-600" />
                  Hostel Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3" data-testid="text-hostel-1">
                    <span className="font-semibold text-purple-600">1.</span>
                    <p>The college has full fledged boys' & girls' hostels.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-hostel-2">
                    <span className="font-semibold text-purple-600">2.</span>
                    <p>Once allotted seats, students will not be allowed to leave the hostel for the entire year except on medical grounds.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scholarships */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2" data-testid="heading-scholarships">
                  <DollarSign className="text-green-600" />
                  Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div data-testid="text-scholarship-govt">
                    <Badge variant="outline" className="mb-2">Government Scholarships</Badge>
                    <p className="text-sm">Students belonging to SC/ST/OBC communities are eligible for scholarships from the Govt. of Assam.</p>
                  </div>
                  <div data-testid="text-scholarship-merit">
                    <Badge variant="outline" className="mb-2">Merit Scholarship</Badge>
                    <p className="text-sm">Students who secured 80% or above in H.S. final examination are eligible for merit scholarship from the Govt. of India. Rs. 10,000/- per year.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Renewal Month: Sept/October</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Prizes */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2" data-testid="heading-prizes">
                  <Trophy className="text-yellow-600" />
                  Academic Prizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div data-testid="text-prize-phulai">
                    <h3 className="font-semibold text-lg mb-2">Phulai Bora Memorial Prize</h3>
                    <p className="mb-2">Awarded to the Rank Holders student of H.S. final examination appearing from the college.</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">Rs. 10,000/- + Trophy (1st Rank)</Badge>
                      <Badge variant="outline">Rs. 5,000/- + Trophy (Other Ranks)</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Donor: Mr. Dilip Kr. Bora (Son)</p>
                  </div>
                  
                  <div data-testid="text-prize-satyendra">
                    <h3 className="font-semibold text-lg mb-2">Dr. Satyendra Talukdar Award</h3>
                    <p className="mb-2">Awarded to the meritorious medical student having poor financial background.</p>
                    <Badge variant="secondary">Rs. 25,000/-</Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Donor: Mrs. Rita Talukdar (wife)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parent Interaction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" data-testid="heading-parent-interaction">
                  Interaction with Parents / Guardians
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3" data-testid="text-parent-1">
                    <span className="font-semibold text-blue-600">1.</span>
                    <p>Parents and guardians are requested to co-operate with the college authority regarding rules, attendance and character building of their sons/daughters/wards.</p>
                  </div>
                  <div className="flex items-start gap-3" data-testid="text-parent-2">
                    <span className="font-semibold text-blue-600">2.</span>
                    <p>Parents are requested to meet the Principal as and when required for the interests of the students.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}