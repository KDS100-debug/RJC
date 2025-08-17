import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Phone, GraduationCap, Users, BookOpen } from "lucide-react";

const departmentsData = [
  {
    name: "FINANCE",
    icon: "💰",
    faculty: [
      {
        name: "Mr. Lakhyajit Baruah",
        qualification: "MBA",
        experience: "",
        contact: "7002081338",
        role: ""
      }
    ]
  },
  {
    name: "ACCOUNTANCY / BUSINESS STUDIES", 
    icon: "📊",
    faculty: [
      {
        name: "Mr. Satyabrata Chowdhury",
        qualification: "M.Com",
        experience: "",
        contact: "9864309793",
        role: ""
      }
    ]
  },
  {
    name: "PSYCHOLOGY",
    icon: "🧠",
    faculty: [
      {
        name: "Miss Gayatri Bora",
        qualification: "M.A",
        experience: "",
        contact: "9707203268",
        role: ""
      }
    ]
  },
  {
    name: "ANTHROPOLOGY",
    icon: "🏛️",
    faculty: [
      {
        name: "Mrs. Barnali Baishya",
        qualification: "M.A",
        experience: "8 years",
        contact: "9678058469",
        role: ""
      }
    ]
  },
  {
    name: "ENGLISH",
    icon: "📚",
    faculty: [
      {
        name: "Mrs. Dolly Das",
        qualification: "M.A, B.Ed",
        experience: "11 years",
        contact: "8486521418",
        role: ""
      },
      {
        name: "Dr. Karabi Bharali",
        qualification: "M.A, B.Ed, Ph.D",
        experience: "22 years",
        contact: "9864458844",
        role: ""
      },
      {
        name: "Mrs. Sumi Khound",
        qualification: "M.A",
        experience: "22 years",
        contact: "9435367751",
        role: ""
      },
      {
        name: "Mr. Nilutpal Sarma",
        qualification: "M.A, B.Ed",
        experience: "9 years",
        contact: "9707911870",
        role: ""
      },
      {
        name: "Miss Suman Phukan",
        qualification: "M.A",
        experience: "4 years",
        contact: "7002618978",
        role: ""
      },
      {
        name: "Mr. Kangkan Krishna Hazarika",
        qualification: "M.A",
        experience: "7 years",
        contact: "7002238996",
        role: ""
      },
      {
        name: "Mrs. Kankana Sarmah",
        qualification: "M.A (NET/SLET)",
        experience: "5 years",
        contact: "7002338271",
        role: ""
      },
      {
        name: "Miss Basabi Bora",
        qualification: "M.A (NET)",
        experience: "",
        contact: "8638957547",
        role: ""
      }
    ]
  },
  {
    name: "ASSAMESE",
    icon: "🗣️",
    faculty: [
      {
        name: "Mrs. Sangeeta Boruah Bora",
        qualification: "M.A",
        experience: "17 years",
        contact: "9864240898",
        role: "Vice-Principal"
      },
      {
        name: "Mr. Dipankar Sarma",
        qualification: "M.A (NET)",
        experience: "17 years",
        contact: "7002735240",
        role: ""
      },
      {
        name: "Mrs. Momee Devi Sarmah",
        qualification: "M.A",
        experience: "21 years",
        contact: "9707298662",
        role: ""
      },
      {
        name: "Mrs. Dipali Bora",
        qualification: "M.A",
        experience: "20 years",
        contact: "8761839069",
        role: ""
      },
      {
        name: "Mr. Saurav Deka",
        qualification: "M.A (NET)",
        experience: "10 years",
        contact: "9706333739",
        role: ""
      }
    ]
  },
  {
    name: "BENGALI",
    icon: "📖",
    faculty: [
      {
        name: "Miss Swapnali Guha",
        qualification: "M.A",
        experience: "14 years",
        contact: "9957012537",
        role: ""
      }
    ]
  },
  {
    name: "SANSKRIT",
    icon: "🕉️",
    faculty: [
      {
        name: "Mr. Netra Jyoti Mahanta",
        qualification: "M.A",
        experience: "18 years",
        contact: "7399229981",
        role: ""
      }
    ]
  },
  {
    name: "HINDI",
    icon: "🇮🇳",
    faculty: [
      {
        name: "Miss Bharati Singh",
        qualification: "M.A, D.El.Ed (NET)",
        experience: "6 years",
        contact: "7002896651",
        role: ""
      },
      {
        name: "Miss Maina Kumari Ram",
        qualification: "M.A",
        experience: "4 years",
        contact: "6003792515",
        role: ""
      },
      {
        name: "Mrs. Mira Rai",
        qualification: "M.A, D.El.Ed, DCA",
        experience: "6 years",
        contact: "8486345193",
        role: ""
      }
    ]
  },
  {
    name: "PHYSICS",
    icon: "⚛️",
    faculty: [
      {
        name: "Mr. Prasanta Sarma",
        qualification: "B.E",
        experience: "20 years",
        contact: "9435361063",
        role: ""
      },
      {
        name: "Mr. Chintu Moni Nath",
        qualification: "B.Tech",
        experience: "10 years",
        contact: "8486920862",
        role: ""
      },
      {
        name: "Mr. Bipul Duarah",
        qualification: "M.Sc",
        experience: "8 years",
        contact: "8638284220",
        role: ""
      },
      {
        name: "Mr. Ankit Saha",
        qualification: "M.Sc",
        experience: "",
        contact: "8638227166",
        role: ""
      },
      {
        name: "Mr. Ujjal Kumar Borah",
        qualification: "M.Sc",
        experience: "",
        contact: "8638823431",
        role: ""
      },
      {
        name: "Mr. Ishan Baruah",
        qualification: "B.Sc",
        experience: "",
        contact: "8638550232",
        role: "Lab Instructor"
      }
    ]
  },
  {
    name: "CHEMISTRY",
    icon: "🧪",
    faculty: [
      {
        name: "Mr. Dilip Kumar Borah",
        qualification: "M.Sc, B.Ed (NET)",
        experience: "27 years",
        contact: "9864750236",
        role: "Principal"
      },
      {
        name: "Mr. Parag Paran Saikia",
        qualification: "M.Sc",
        experience: "9 years",
        contact: "8486753110",
        role: ""
      },
      {
        name: "Mr. Tony Das",
        qualification: "M.Sc (NET)",
        experience: "6 years",
        contact: "7002875434",
        role: ""
      },
      {
        name: "Mr. Jitendra Sarma",
        qualification: "M.Sc",
        experience: "4 years",
        contact: "8472040046",
        role: ""
      },
      {
        name: "Jhulan Bordoloi",
        qualification: "M.Sc",
        experience: "9 years",
        contact: "8724895188",
        role: ""
      },
      {
        name: "Mr. Deepjyoti Bora",
        qualification: "M.Sc",
        experience: "",
        contact: "7578917673",
        role: "Lab Instructor"
      },
      {
        name: "Shashank Agarwal",
        qualification: "M.Sc",
        experience: "2 years",
        contact: "8638079180",
        role: ""
      }
    ]
  },
  {
    name: "BOTANY",
    icon: "🌱",
    faculty: [
      {
        name: "Mrs. Urmimala Borah",
        qualification: "M.Sc (Microbiology), PGDCA",
        experience: "5 years",
        contact: "7638065580",
        role: ""
      },
      {
        name: "Mrs. Rashmi Rekha Saikia",
        qualification: "M.Sc, B.Ed",
        experience: "9 years",
        contact: "8638437094",
        role: ""
      },
      {
        name: "Sheikh Mehe Abjan",
        qualification: "M.Sc",
        experience: "5 years",
        contact: "8638158267",
        role: ""
      },
      {
        name: "Mr. Tonmoy Jyoti Borah",
        qualification: "B.Sc, B.Ed",
        experience: "",
        contact: "9101923237",
        role: "Lab Instructor"
      }
    ]
  },
  {
    name: "ZOOLOGY",
    icon: "🦋",
    faculty: [
      {
        name: "Miss Nargis Sultana",
        qualification: "M.Sc",
        experience: "1.5 years",
        contact: "9864632157",
        role: ""
      },
      {
        name: "Miss Rajashree Devi",
        qualification: "M.Sc",
        experience: "1.5 years",
        contact: "9101643045",
        role: ""
      },
      {
        name: "Mr. Neeraj Bora",
        qualification: "M.Sc",
        experience: "4 years",
        contact: "8486932588",
        role: ""
      },
      {
        name: "Jagneswar Sarma",
        qualification: "M.Sc, B.Ed",
        experience: "4 years",
        contact: "8638513395",
        role: ""
      }
    ]
  },
  {
    name: "MATHEMATICS",
    icon: "📐",
    faculty: [
      {
        name: "Mr. Ranjit Kr. Borah",
        qualification: "M.Sc, B.Ed",
        experience: "14 years",
        contact: "9864243466",
        role: ""
      },
      {
        name: "Mr. Debajit Das",
        qualification: "M.Sc (Statistics), M.A (Economics)",
        experience: "20 years",
        contact: "9101500371",
        role: ""
      },
      {
        name: "Mr. Parag Borah",
        qualification: "M.Sc, B.Ed",
        experience: "7 years",
        contact: "8822140960",
        role: ""
      },
      {
        name: "Mr. Koushtuve Moni Sarma",
        qualification: "M.Sc, B.Ed",
        experience: "5 years",
        contact: "9101625639",
        role: ""
      },
      {
        name: "Mr. Hiranya Hazarika",
        qualification: "M.Sc, M.Ed, M.Phil",
        experience: "16 years",
        contact: "8638680082",
        role: ""
      },
      {
        name: "Mr. Keshabananda Goswami",
        qualification: "M.Sc",
        experience: "",
        contact: "9101439918",
        role: ""
      }
    ]
  },
  {
    name: "STATISTICS",
    icon: "📊",
    faculty: [
      {
        name: "Mr. Debajit Das",
        qualification: "M.Sc (Statistics), M.A (Economics)",
        experience: "20 years",
        contact: "9101500371",
        role: ""
      }
    ]
  },
  {
    name: "COMPUTER SCIENCE",
    icon: "💻",
    faculty: [
      {
        name: "Mr. Himan Jyoti Bairagi",
        qualification: "MCA, D.El.Ed",
        experience: "6 years",
        contact: "9706608750",
        role: ""
      },
      {
        name: "Mrs. Gitashri Bordoloi",
        qualification: "B.Tech",
        experience: "2 years",
        contact: "8638591016",
        role: ""
      },
      {
        name: "Mr. Jayanta Das",
        qualification: "B.Tech",
        experience: "",
        contact: "7002845523",
        role: ""
      }
    ]
  },
  {
    name: "ECONOMICS",
    icon: "💹",
    faculty: [
      {
        name: "Mrs. Tribedi Sarma",
        qualification: "M.A, B.Ed",
        experience: "20 years",
        contact: "9435970590",
        role: ""
      },
      {
        name: "Miss Bandana Das",
        qualification: "M.A (NET), PGDCA",
        experience: "4 years",
        contact: "9706505915",
        role: ""
      }
    ]
  },
  {
    name: "POLITICAL SCIENCE",
    icon: "🏛️",
    faculty: [
      {
        name: "Mrs. Gongotri Saikia",
        qualification: "M.A",
        experience: "9 years",
        contact: "9706867655",
        role: ""
      },
      {
        name: "Mrs. Minakshi Bora",
        qualification: "M.A, B.Ed",
        experience: "8 years",
        contact: "9000907079",
        role: ""
      }
    ]
  },
  {
    name: "EDUCATION",
    icon: "🎓",
    faculty: [
      {
        name: "Mr. Mukul Hazarika",
        qualification: "M.A",
        experience: "15 years",
        contact: "9854100672",
        role: ""
      },
      {
        name: "Mr. Debashis Bora",
        qualification: "M.A",
        experience: "1 year",
        contact: "9101687430",
        role: ""
      }
    ]
  },
  {
    name: "LOGIC & PHILOSOPHY",
    icon: "💭",
    faculty: [
      {
        name: "Mrs. Rajashree Neog Gayan",
        qualification: "M.A, B.Ed, PGDCA",
        experience: "14 years",
        contact: "7577014523",
        role: ""
      },
      {
        name: "Mrs. Pronita Mahanta Sharma",
        qualification: "M.A, B.Ed",
        experience: "15 years",
        contact: "7002299042",
        role: ""
      }
    ]
  },
  {
    name: "GEOGRAPHY",
    icon: "🌍",
    faculty: [
      {
        name: "Mrs. Madhumita Sarmah",
        qualification: "M.A",
        experience: "10 years",
        contact: "9101456121",
        role: ""
      },
      {
        name: "Mr. Nabajyoti Nath",
        qualification: "M.A (NET/SLET)",
        experience: "6 years",
        contact: "9706153818",
        role: ""
      }
    ]
  },
  {
    name: "SOCIOLOGY",
    icon: "👥",
    faculty: [
      {
        name: "Mrs. Swapna Devi",
        qualification: "M.A",
        experience: "14 years",
        contact: "8876902318",
        role: ""
      },
      {
        name: "Mrs. Tribeni Sarma",
        qualification: "M.A",
        experience: "16 years",
        contact: "9435319860",
        role: ""
      }
    ]
  },
  {
    name: "HISTORY",
    icon: "📜",
    faculty: [
      {
        name: "Mr. Adiptya Nayak",
        qualification: "M.A",
        experience: "",
        contact: "8638598398",
        role: ""
      }
    ]
  }
];

const nonTeachingStaff = [
  {
    name: "Mr. Mrinal Kr. Bora",
    qualification: "B.A",
    role: "Personal Secretary to Principal (P.S)",
    contact: "9401164152"
  },
  {
    name: "Mrs. Rupali Borah",
    qualification: "",
    role: "Girls' Hostel Warden",
    contact: ""
  },
  {
    name: "Mr. Sanjay Gupta",
    qualification: "B.Sc (Computer), HDCA, PGDCA",
    role: "Network & Computer System Administrator",
    contact: "7664003639"
  },
  {
    name: "Mrs. Sonali Devi",
    qualification: "MBA",
    role: "Accountant",
    contact: "6003170190"
  },
  {
    name: "Mr. Prabhat Ch. Medhi",
    qualification: "",
    role: "Office Associate",
    contact: "6000872182"
  },
  {
    name: "Mr. Jayanta Bezbaruah",
    qualification: "B.A",
    role: "Office Associate",
    contact: "9706824485"
  },
  {
    name: "Mr. Rupam Saikia",
    qualification: "M.A",
    role: "Office Associate",
    contact: "8133806830"
  },
  {
    name: "Rakesh Bhuyan",
    qualification: "B.A",
    role: "Office Associate",
    contact: "8638011379"
  },
  {
    name: "Mrs. Monimala Bora",
    qualification: "",
    role: "Librarian",
    contact: "8473896783"
  },
  {
    name: "Mr. Umananda Hazarika",
    qualification: "B.Com",
    role: "Office Associate",
    contact: "8638550234"
  },
  {
    name: "Mrs. Mira Deka Doloi",
    qualification: "",
    role: "Receptionist",
    contact: "9101274808"
  },
  {
    name: "Mr. Siva Das",
    qualification: "",
    role: "Supervisor, Boy's Hostel",
    contact: "8473025380"
  },
  {
    name: "Mr. Minaram Bora",
    qualification: "",
    role: "Chowkidar",
    contact: ""
  },
  {
    name: "Mr. Jitendra Rabi Das",
    qualification: "",
    role: "Chowkidar",
    contact: ""
  },
  {
    name: "Mrs. Rajib Medhi",
    qualification: "",
    role: "Cook",
    contact: ""
  },
  {
    name: "Mrs. Rita Das",
    qualification: "",
    role: "Cook",
    contact: ""
  },
  {
    name: "Mrs. Mamoni Bora",
    qualification: "",
    role: "Cook",
    contact: ""
  }
];

export default function Departments() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-departments">
              Academic Departments
            </h1>
            <p className="text-xl" data-testid="text-departments-subtitle">
              Meet Our Distinguished Faculty Members
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-7xl mx-auto">
            {departmentsData.map((department, deptIndex) => (
              <Card key={deptIndex} className="hover:shadow-lg transition-shadow" data-testid={`card-department-${deptIndex}`}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl flex items-center gap-3 text-purple-700 dark:text-purple-400" data-testid={`heading-dept-${deptIndex}`}>
                    <span className="text-3xl">{department.icon}</span>
                    {department.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {department.faculty.map((faculty, facultyIndex) => (
                      <div key={facultyIndex} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border" data-testid={`card-faculty-${deptIndex}-${facultyIndex}`}>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white" data-testid={`text-faculty-name-${deptIndex}-${facultyIndex}`}>
                              {faculty.name}
                            </h4>
                            {faculty.role && (
                              <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
                                {faculty.role}
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <GraduationCap className="w-4 h-4" />
                              <span data-testid={`text-faculty-qualification-${deptIndex}-${facultyIndex}`}>
                                {faculty.qualification}
                              </span>
                            </div>
                            {faculty.experience && (
                              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <BookOpen className="w-4 h-4" />
                                <span data-testid={`text-faculty-experience-${deptIndex}-${facultyIndex}`}>
                                  {faculty.experience} experience
                                </span>
                              </div>
                            )}
                            {faculty.contact && (
                              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                                <Phone className="w-4 h-4" />
                                <a href={`tel:${faculty.contact}`} className="hover:underline" data-testid={`link-faculty-contact-${deptIndex}-${facultyIndex}`}>
                                  {faculty.contact}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Teaching Staff */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3" data-testid="heading-non-teaching">
              <Users className="text-green-600" />
              Non-Teaching Staff
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonTeachingStaff.map((staff, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow" data-testid={`card-staff-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg" data-testid={`text-staff-name-${index}`}>
                          {staff.name}
                        </CardTitle>
                        <CardDescription data-testid={`text-staff-role-${index}`}>
                          {staff.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {staff.qualification && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <GraduationCap className="w-4 h-4" />
                          <span data-testid={`text-staff-qualification-${index}`}>
                            {staff.qualification}
                          </span>
                        </div>
                      )}
                      {staff.contact && (
                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${staff.contact}`} className="hover:underline" data-testid={`link-staff-contact-${index}`}>
                            {staff.contact}
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}