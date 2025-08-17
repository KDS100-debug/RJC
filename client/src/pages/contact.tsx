import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      content: "Ramanujan Junior College, Assam, India"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "9435162455"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "info@ramanujancollege.edu"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Office Hours",
      content: "Mon - Sat: 8:00 AM - 5:00 PM"
    }
  ];

  const keyPersonnel = [
    {
      name: "Mr. Dilip Kumar Borah",
      position: "Principal & Secretary",
      qualification: "M.Sc., B.Ed. (NET Qualified)",
      phone: "9435162455",
      whatsapp: "9864750236"
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
      name: "Mr. Parag Paran Saikia",
      position: "Joint Co-ordinator",
      qualification: "M.Sc.",
      phone: "8486753110"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-contact">
              Contact Us
            </h1>
            <p className="text-xl" data-testid="text-contact-subtitle">
              Get in touch with us for admissions, inquiries, and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-8" data-testid="heading-contact-info">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`text-contact-${index}`}>
                    <div className="text-blue-600 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle data-testid="heading-contact-form">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          data-testid="input-first-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What is this regarding?"
                        data-testid="input-subject"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your inquiry..."
                        rows={4}
                        data-testid="textarea-message"
                      />
                    </div>
                    <Button type="submit" className="w-full" data-testid="button-submit">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Personnel */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12" data-testid="heading-personnel">
              Key Personnel
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyPersonnel.map((person, index) => (
                <Card key={index} data-testid={`card-person-${index}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg" data-testid={`text-person-name-${index}`}>
                      <User className="h-5 w-5 text-blue-600" />
                      {person.name}
                    </CardTitle>
                    <CardDescription data-testid={`text-person-position-${index}`}>
                      {person.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="outline" data-testid={`badge-person-qualification-${index}`}>
                        {person.qualification}
                      </Badge>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center gap-2" data-testid={`text-person-phone-${index}`}>
                          <Phone className="h-4 w-4" />
                          <span>Phone: {person.phone}</span>
                        </div>
                        {person.whatsapp && (
                          <div className="flex items-center gap-2" data-testid={`text-person-whatsapp-${index}`}>
                            <Phone className="h-4 w-4" />
                            <span>WhatsApp: {person.whatsapp}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8" data-testid="heading-quick-contact">
              Quick Contact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center" data-testid="card-admissions">
                <CardHeader>
                  <CardTitle className="text-lg">Admissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">For admission inquiries and application process</p>
                  <Button variant="outline" size="sm">
                    Contact Admissions
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center" data-testid="card-academic">
                <CardHeader>
                  <CardTitle className="text-lg">Academic Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">For academic queries and curriculum information</p>
                  <Button variant="outline" size="sm">
                    Academic Help
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center" data-testid="card-general">
                <CardHeader>
                  <CardTitle className="text-lg">General Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">For general questions and information</p>
                  <Button variant="outline" size="sm">
                    General Info
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}