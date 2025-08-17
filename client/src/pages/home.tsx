import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, User, Phone, Mail } from "lucide-react";
import logoPath from "@assets/logo_1755410486904.jpg";
import backgroundImage from "@assets/images (1)_1755410690920.jpg";
import principalImage from "@assets/princi1_1755410744771.jpg";

export default function Home() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const principalPreview = "This prospectus is intended to give all the necessary information about our system of imparting excellent education to the sincere and devoted students wishing for a successful career and shine in today's competitive world. When a drop of water falls into a river, it has no identity, but when it falls on the leaf of a lotus, it shines like a pearl! So choose the best place where you can shine!";

  const principalFullMessage = `${principalPreview}

Our teachers are dedicated, hardworking and sincere. They teach with such efficacy that the question of private tuitions does not arise. Our students qualify in Medical and Engineering entrance examinations including IIT, ISAT(2011) & PMT without private coaching. Our college class-room teaching is complete and conceptual thus private coaching is not required.

In every Academic Session coaching classes along with regular classes and entrance based tests are held every Saturday.

Powerful tips to success in student life:
1. Use a study table if possible. Avoid studying while lying on bed.
2. Don't get up from your desk during the three hours of study session, not even for drinking water.
3. Don't listen to music during studies. If you have the habit then gradually overcome it day by day.
4. No phone calls and no messaging during studies. Study with 100% concentration as if you are appearing in an examination.
5. You need to scale up your efforts and set a target of 50-55 hours of study at home every week.
6. Update your home work and assignments regularly. Wishing you success in your endeavour.
7. Every student is a unique genius- including you. Discover your unique talent, abilities, interests and values.
8. Nobody can play your role better than you.
9. Manage your time in such a way that every second is being properly utilised.
10. Learn something new each day. Make sure that you understand everything that you study.
11. Look up the words that you do not understand. Do not leave it for later.
12. Expect much more from yourself than what you expect from others.
13. Help other people around you to the best of your ability.
14. Be very self-confident, self-reliant, self-respecting and self-motivated.
15. Remember one of the most important key to excellence is a positive mental attitude.
16. Believe in yourself, believe in your dreams and your actions will create a reality for yourself.

Request to parents/guardians:
1. Criticism of a teacher or college by parents in the presence of the child is harmful.
2. I request all the guardians not to lay stress on private tuition.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src={logoPath} 
                alt="Ramanujan Junior College Logo" 
                className="h-24 w-24 rounded-full object-cover shadow-2xl border-4 border-white"
                data-testid="img-hero-logo"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg" data-testid="heading-hero">
              Ramanujan Junior College
            </h1>
            <p className="text-xl mb-8 drop-shadow-md" data-testid="text-motto">
              "Education, Development and Progress"
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white text-blue-700 shadow-lg">
              Established 2005
            </Badge>
            <div className="mt-8">
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Celebrating success, building futures, and nurturing excellence in every student
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Desk Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4" data-testid="heading-principal">
                Principal's Desk
              </CardTitle>
              <div className="flex justify-center mb-6">
                <img 
                  src={principalImage} 
                  alt="Mr. Dilip Kumar Borah - Principal" 
                  className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                  data-testid="img-principal"
                />
              </div>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span data-testid="text-principal-name">Mr. Dilip Kumar Borah</span>
                <Badge variant="outline">M.Sc., B.Ed. (NET Qualified)</Badge>
              </div>
              <div className="flex justify-center items-center gap-6 mt-2 text-sm">
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  <span data-testid="text-principal-phone">9435162455</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={16} />
                  <span data-testid="text-principal-whatsapp">WhatsApp: 9864750236</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed" data-testid="text-principal-message">
                  {showFullMessage ? principalFullMessage : principalPreview}
                </p>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={() => setShowFullMessage(!showFullMessage)}
                    variant="outline"
                    className="gap-2"
                    data-testid="button-read-more"
                  >
                    {showFullMessage ? "Read Less" : "Read More"}
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievement Highlight Banner */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Success Story</h2>
            <p className="text-lg opacity-90">
              Witnessing the pride and joy of our achievers - from academic excellence to competitive exam success
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card data-testid="card-streams" className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Academic Streams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="mr-2">Science</Badge>
                  <Badge className="mr-2">Arts</Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Comprehensive education for H.S. 1st & 2nd year students
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-facilities" className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Key Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Boys & Girls Hostel</li>
                  <li>• Well-equipped Library</li>
                  <li>• Qualified Faculty</li>
                  <li>• Sports Activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-achievements" className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• IIT/JEE Success</li>
                  <li>• Medical Entrance</li>
                  <li>• No Private Tuition Needed</li>
                  <li>• 100% Result Oriented</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}