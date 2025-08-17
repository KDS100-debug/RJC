import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, GraduationCap, Trophy, Calendar, MapPin } from "lucide-react";

export default function Gallery() {
  const imageCategories = [
    {
      title: "Campus Life",
      icon: <MapPin className="h-5 w-5" />,
      description: "Beautiful moments from our college campus",
      count: 45
    },
    {
      title: "Academic Events",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Classroom activities and educational programs", 
      count: 32
    },
    {
      title: "Student Activities",
      icon: <Users className="h-5 w-5" />,
      description: "Sports, cultural events, and student life",
      count: 58
    },
    {
      title: "Awards & Achievements",
      icon: <Trophy className="h-5 w-5" />,
      description: "Prize distributions and recognition ceremonies",
      count: 28
    },
    {
      title: "Special Events",
      icon: <Calendar className="h-5 w-5" />,
      description: "Annual functions, festivals, and celebrations",
      count: 41
    }
  ];

  const recentEvents = [
    {
      title: "Annual Prize Distribution 2024",
      date: "March 15, 2024",
      description: "Celebrating our top performers and achievers",
      images: 12
    },
    {
      title: "Science Exhibition 2024",
      date: "February 28, 2024", 
      description: "Students showcasing innovative projects and experiments",
      images: 18
    },
    {
      title: "Cultural Festival 2024",
      date: "January 20, 2024",
      description: "Traditional and modern performances by our talented students",
      images: 25
    },
    {
      title: "Sports Day 2023", 
      date: "December 10, 2023",
      description: "Athletic competitions and team spirit on display",
      images: 22
    },
    {
      title: "Freshers Welcome 2023",
      date: "August 15, 2023",
      description: "Welcoming new students to the RJC family",
      images: 15
    },
    {
      title: "Independence Day Celebration",
      date: "August 15, 2023",
      description: "Patriotic celebrations and cultural programs",
      images: 8
    }
  ];

  const campusHighlights = [
    "Modern Library with Digital Resources",
    "Well-equipped Science Laboratories", 
    "Spacious Classrooms with Smart Boards",
    "Boys and Girls Hostel Facilities",
    "Sports Ground and Indoor Games Room",
    "Auditorium for Events and Functions",
    "Computer Lab with Internet Access",
    "Cafeteria and Recreation Areas"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-gallery">
              Gallery
            </h1>
            <p className="text-xl" data-testid="text-gallery-subtitle">
              Capturing Memories, Celebrating Achievements, Showcasing Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Photo Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2" data-testid="heading-categories">
              <Camera className="h-6 w-6 text-blue-600" />
              Photo Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageCategories.map((category, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" data-testid={`card-category-${index}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg" data-testid={`text-category-title-${index}`}>
                      <div className="text-blue-600">{category.icon}</div>
                      {category.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-category-description-${index}`}>
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" data-testid={`badge-category-count-${index}`}>
                        {category.count} Photos
                      </Badge>
                      <span className="text-sm text-blue-600 hover:underline">View Gallery →</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12" data-testid="heading-recent-events">
              Recent Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentEvents.map((event, index) => (
                <Card key={index} className="h-full" data-testid={`card-event-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg" data-testid={`text-event-title-${index}`}>
                      {event.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-event-date-${index}`}>
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Placeholder for event image */}
                    <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center" data-testid={`img-event-${index}`}>
                      <Camera className="h-12 w-12 text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300" data-testid={`text-event-description-${index}`}>
                      {event.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" data-testid={`badge-event-images-${index}`}>
                        {event.images} Images
                      </Badge>
                      <span className="text-sm text-blue-600 hover:underline cursor-pointer">View Album →</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12" data-testid="heading-campus-highlights">
              Campus Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {campusHighlights.map((highlight, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600" data-testid={`card-highlight-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0" data-testid={`img-highlight-${index}`}>
                        <Camera className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white" data-testid={`text-highlight-${index}`}>
                          {highlight}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Photo gallery available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="heading-virtual-tour">
              Explore Our Campus
            </h2>
            <p className="text-xl mb-8" data-testid="text-virtual-tour-description">
              Take a virtual tour of our beautiful campus and world-class facilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="button-virtual-tour">
                Start Virtual Tour
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" data-testid="button-photo-gallery">
                Browse Photo Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Submission */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl" data-testid="heading-photo-submission">
                  Share Your Memories
                </CardTitle>
                <CardDescription>
                  Students and parents can submit photos from college events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                    <Camera className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Have photos from recent college events? Share them with us and help build our gallery!
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" data-testid="button-submit-photos">
                    Submit Photos
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}