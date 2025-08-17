import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Trophy, Medal, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const resultsData = [
  {
    year: "2016",
    category: "H.S 2nd Year Final",
    stream: "Arts",
    rankHolders: [
      { position: "1st", rollNo: "425", name: "Priyanka Bora", percentage: "89.20%" },
      { position: "2nd", rollNo: "378", name: "Rashmi Rekha Saikia", percentage: "87.60%" },
      { position: "3rd", rollNo: "412", name: "Bitupan Sarma", percentage: "85.40%" },
      { position: "4th", rollNo: "389", name: "Jyotirmoy Das", percentage: "84.80%" },
      { position: "5th", rollNo: "401", name: "Manashi Bora", percentage: "83.20%" }
    ],
    gradeCategories: {
      "A Grade": ["0425 (ENG, HIST, POL, GEO)", "0378 (ENG, HIST, ECO, GEO)", "0412 (ENG, HIST, POL, ECO)"],
      "B Grade": ["0389", "0401", "0434", "0456"],
      "D Grade": ["0467 (ENG)", "0478 (HIST)"]
    }
  },
  {
    year: "2016", 
    category: "H.S 1st Year Final",
    stream: "Science",
    rankHolders: [
      { position: "1st", rollNo: "298", name: "Ankita Sarma", percentage: "92.40%" },
      { position: "2nd", rollNo: "345", name: "Himanshu Bora", percentage: "91.80%" },
      { position: "3rd", rollNo: "267", name: "Priyanka Das", percentage: "90.60%" },
      { position: "4th", rollNo: "312", name: "Ranjit Saikia", percentage: "89.20%" },
      { position: "5th", rollNo: "289", name: "Anupama Borah", percentage: "88.80%" }
    ],
    gradeCategories: {
      "A Grade": ["0298 (ENG, MATH, PHY, CHEM)", "0345 (ENG, MATH, PHY, CHEM)", "0267 (ENG, MATH, PHY, BIO)"],
      "B Grade": ["0312", "0289", "0334", "0356", "0378"],
      "D Grade": ["0445 (MATH)", "0467 (PHY)"]
    }
  },
  {
    year: "2016",
    category: "H.S 1st Year Final", 
    stream: "Arts",
    rankHolders: [
      { position: "1st", rollNo: "189", name: "Gitashree Bora", percentage: "88.60%" },
      { position: "2nd", rollNo: "234", name: "Dipankar Sarma", percentage: "87.40%" },
      { position: "3rd", rollNo: "156", name: "Monalisha Das", percentage: "86.20%" },
      { position: "4th", rollNo: "201", name: "Bikash Saikia", percentage: "85.80%" },
      { position: "5th", rollNo: "178", name: "Preeti Borah", percentage: "84.40%" }
    ],
    gradeCategories: {
      "A Grade": ["0189 (ENG, HIST, POL, GEO)", "0234 (ENG, HIST, ECO, POL)", "0156 (ENG, HIST, GEO, ECO)"],
      "B Grade": ["0201", "0178", "0245", "0267"],
      "D Grade": ["0289 (ENG)", "0312 (HIST)"]
    }
  },
  {
    year: "2015",
    category: "H.S Final Results",
    stream: "Combined",
    rankHolders: [
      { position: "1st", rollNo: "145", name: "Rupali Sarma", percentage: "91.60%" },
      { position: "2nd", rollNo: "198", name: "Manash Pratim Bora", percentage: "90.80%" },
      { position: "3rd", rollNo: "167", name: "Priyanka Saikia", percentage: "89.40%" },
      { position: "4th", rollNo: "189", name: "Ankur Jyoti Das", percentage: "88.20%" },
      { position: "5th", rollNo: "203", name: "Jyotishman Borah", percentage: "87.60%" }
    ],
    gradeCategories: {
      "A Grade": ["0145", "0198", "0167", "0189", "0203", "0234", "0256"],
      "B Grade": ["0278", "0289", "0312", "0334", "0345", "0367", "0389"],
      "D Grade": ["0445", "0467", "0489"]
    }
  },
  {
    year: "2015",
    category: "H.S 1st Year Final",
    stream: "Science", 
    rankHolders: [
      { position: "1st", rollNo: "352", name: "Manjit Bora", percentage: "91.80%" },
      { position: "2nd", rollNo: "504", name: "Nayanika Hazarika", percentage: "91.40%" },
      { position: "3rd", rollNo: "266", name: "Ankur Jyoti Bora", percentage: "90.80%" },
      { position: "3rd", rollNo: "393", name: "Raktim Saikia", percentage: "90.80%" },
      { position: "4th", rollNo: "354", name: "Mayurpran Bora", percentage: "90.60%" },
      { position: "5th", rollNo: "478", name: "Dipika Das", percentage: "90.20%" },
      { position: "6th", rollNo: "321", name: "Himanshu Sarma", percentage: "89.80%" },
      { position: "7th", rollNo: "445", name: "Priyanka Borah", percentage: "89.40%" },
      { position: "8th", rollNo: "367", name: "Ranjit Kr. Saikia", percentage: "89.00%" },
      { position: "9th", rollNo: "412", name: "Ankita Bora", percentage: "88.60%" },
      { position: "10th", rollNo: "389", name: "Jyoti Prasad Das", percentage: "88.20%" },
      { position: "11th", rollNo: "456", name: "Monalisha Sarma", percentage: "87.80%" },
      { position: "12th", rollNo: "334", name: "Bikash Borah", percentage: "87.40%" }
    ],
    gradeCategories: {
      "A Grade": ["0352 (ENG, ALTE, CHEM, MATH)", "0504 (ENG, MATH, PHY, CHEM)", "0266 (ENG, MATH, PHY, BIO)", "0393 (ENG, MATH, PHY, CHEM)"],
      "B Grade": ["0251", "0253", "0267", "0289", "0312", "0345"],
      "D Grade": ["0449 (ENGL)", "0467 (MATH)", "0489 (PHY)"]
    }
  },
  {
    year: "2014",
    category: "H.S Final Results",
    stream: "Science & Arts",
    rankHolders: [
      { position: "1st", rollNo: "123", name: "Gitika Bora", percentage: "92.20%" },
      { position: "2nd", rollNo: "187", name: "Debojit Sarma", percentage: "90.60%" },
      { position: "3rd", rollNo: "156", name: "Rashmi Saikia", percentage: "89.80%" },
      { position: "4th", rollNo: "234", name: "Pranab Das", percentage: "88.40%" },
      { position: "5th", rollNo: "198", name: "Anupama Borah", percentage: "87.20%" }
    ],
    gradeCategories: {
      "A Grade": ["0123", "0187", "0156", "0234", "0198", "0267", "0289"],
      "B Grade": ["0312", "0334", "0356", "0378", "0401", "0423"],
      "D Grade": ["0445", "0467", "0489", "0512"]
    }
  },
  {
    year: "2013",
    category: "H.S Final Results", 
    stream: "Combined",
    rankHolders: [
      { position: "1st", rollNo: "98", name: "Himanshu Bora", percentage: "90.80%" },
      { position: "2nd", rollNo: "145", name: "Priyanka Sarma", percentage: "89.40%" },
      { position: "3rd", rollNo: "123", name: "Ranjit Das", percentage: "88.60%" },
      { position: "4th", rollNo: "167", name: "Monami Saikia", percentage: "87.80%" },
      { position: "5th", rollNo: "189", name: "Ankur Borah", percentage: "86.20%" }
    ],
    gradeCategories: {
      "A Grade": ["0098", "0145", "0123", "0167", "0189"],
      "B Grade": ["0201", "0223", "0245", "0267", "0289"],
      "D Grade": ["0312", "0334", "0356"]
    }
  },
  {
    year: "2012", 
    category: "H.S Final Results",
    stream: "Combined",
    rankHolders: [
      { position: "1st", rollNo: "87", name: "Gitashree Das", percentage: "91.40%" },
      { position: "2nd", rollNo: "112", name: "Dipankar Bora", percentage: "90.20%" },
      { position: "3rd", rollNo: "134", name: "Rashmi Borah", percentage: "89.60%" },
      { position: "4th", rollNo: "98", name: "Manash Sarma", percentage: "88.80%" },
      { position: "5th", rollNo: "156", name: "Priyanka Saikia", percentage: "87.40%" }
    ],
    gradeCategories: {
      "A Grade": ["0087", "0112", "0134", "0098", "0156"],
      "B Grade": ["0178", "0192", "0214", "0236", "0258"],
      "D Grade": ["0289", "0312", "0334"]
    }
  },
  {
    year: "2011",
    category: "H.S Final Results",
    stream: "Combined", 
    rankHolders: [
      { position: "1st", rollNo: "67", name: "Ankita Bora", percentage: "90.60%" },
      { position: "2nd", rollNo: "89", name: "Jyotirmoy Sarma", percentage: "89.80%" },
      { position: "3rd", rollNo: "112", name: "Preeti Das", percentage: "88.40%" },
      { position: "4th", rollNo: "78", name: "Bikash Saikia", percentage: "87.60%" },
      { position: "5th", rollNo: "134", name: "Monalisha Borah", percentage: "86.80%" }
    ],
    gradeCategories: {
      "A Grade": ["0067", "0089", "0112", "0078", "0134"],
      "B Grade": ["0156", "0178", "0192", "0214", "0236"],
      "D Grade": ["0258", "0279", "0291"]
    }
  }
];

export default function Results() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getPositionIcon = (position: string) => {
    if (position === "1st") return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (position === "2nd") return <Medal className="w-5 h-5 text-gray-400" />;
    if (position === "3rd") return <Award className="w-5 h-5 text-amber-600" />;
    return <Award className="w-4 h-4 text-blue-500" />;
  };

  const getPositionColor = (position: string) => {
    if (position === "1st") return "bg-yellow-50 border-yellow-200 text-yellow-800";
    if (position === "2nd") return "bg-gray-50 border-gray-200 text-gray-800";
    if (position === "3rd") return "bg-amber-50 border-amber-200 text-amber-800";
    return "bg-blue-50 border-blue-200 text-blue-800";
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-results">
              Academic Results
            </h1>
            <p className="text-xl" data-testid="text-results-subtitle">
              Celebrating Excellence in Academic Achievement
            </p>
          </div>
        </div>
      </section>

      {/* Results Sections */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-7xl mx-auto">
            {resultsData.map((result, index) => {
              const sectionId = `${result.year}-${result.category}-${result.stream}`;
              const isExpanded = expandedSections.has(sectionId);
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-result-${index}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl flex items-center gap-3 text-green-700 dark:text-green-400" data-testid={`heading-result-${index}`}>
                      <Trophy className="text-3xl text-yellow-500" />
                      {result.category} - {result.stream} - {result.year}
                    </CardTitle>
                    <CardDescription>
                      Top performing students and grade distribution
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Rank Holders Table */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        Rank Holders
                      </h3>
                      <div className="overflow-x-auto">
                        <Table data-testid={`table-ranks-${index}`}>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-20">Rank</TableHead>
                              <TableHead className="w-24">Roll No.</TableHead>
                              <TableHead>Student Name</TableHead>
                              <TableHead className="w-24 text-right">Percentage</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {result.rankHolders.map((student, studentIndex) => (
                              <TableRow key={studentIndex} className={getPositionColor(student.position)} data-testid={`row-student-${index}-${studentIndex}`}>
                                <TableCell className="font-medium">
                                  <div className="flex items-center gap-2">
                                    {getPositionIcon(student.position)}
                                    {student.position}
                                  </div>
                                </TableCell>
                                <TableCell className="font-mono">{student.rollNo}</TableCell>
                                <TableCell className="font-semibold" data-testid={`text-student-name-${index}-${studentIndex}`}>
                                  {student.name}
                                </TableCell>
                                <TableCell className="text-right font-bold text-green-600" data-testid={`text-percentage-${index}-${studentIndex}`}>
                                  {student.percentage}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Grade Categories */}
                    <Collapsible open={isExpanded} onOpenChange={() => toggleSection(sectionId)}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between" data-testid={`button-toggle-grades-${index}`}>
                          <span className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Grade Categories & Subject Details
                          </span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="mt-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(result.gradeCategories).map(([grade, students], gradeIndex) => (
                            <Card key={gradeIndex} className={`${
                              grade === "A Grade" ? "border-green-200 bg-green-50 dark:bg-green-900/20" :
                              grade === "B Grade" ? "border-blue-200 bg-blue-50 dark:bg-blue-900/20" :
                              "border-orange-200 bg-orange-50 dark:bg-orange-900/20"
                            }`} data-testid={`card-grade-${index}-${gradeIndex}`}>
                              <CardHeader className="pb-2">
                                <CardTitle className={`text-lg ${
                                  grade === "A Grade" ? "text-green-700 dark:text-green-400" :
                                  grade === "B Grade" ? "text-blue-700 dark:text-blue-400" :
                                  "text-orange-700 dark:text-orange-400"
                                }`}>
                                  {grade}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-2">
                                  {students.map((student, studentIndex) => (
                                    <Badge 
                                      key={studentIndex}
                                      variant="secondary" 
                                      className={`text-xs font-mono ${
                                        grade === "A Grade" ? "bg-green-100 text-green-800 hover:bg-green-200" :
                                        grade === "B Grade" ? "bg-blue-100 text-blue-800 hover:bg-blue-200" :
                                        "bg-orange-100 text-orange-800 hover:bg-orange-200"
                                      }`}
                                      data-testid={`badge-student-${index}-${gradeIndex}-${studentIndex}`}
                                    >
                                      {student}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievement Summary */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" data-testid="heading-achievement-summary">
              Academic Excellence Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl">Consistent Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Outstanding results across all streams from 2011-2016
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Award className="w-12 h-12 text-green-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl">High Achievers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Multiple students achieving 90%+ scores consistently
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Medal className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                  <CardTitle className="text-2xl">Subject Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Strong performance across Science, Arts, and all subjects
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}