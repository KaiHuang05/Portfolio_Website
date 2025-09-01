import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      year: "2024 - Current",
      degree: "Bachelor of Computer Science (Artificial Intelligence)",
      institution: "University of Malaya, Kuala Lumpur",
      description: "Pursuing a computer science degree specializing in Artificial Intelligence with strong focus on algorithms, machine learning, and intelligent systems. Recipient of the Dean's List Award.",
      skills: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Data Science", "Machine Learning", "Computer System and Networking", "+"]
    },
    {
      year: "2023 - 2024",
      degree: "Life Science, Foundation (CGPA - 4.0)",
      institution: "Malacca Matriculation College, Malacca",
      description: "Completed an intensive 1-year foundation program with emphasis on STEM disciplines as preparation for undergraduate studies.",
      skills: ["Physics", "Mathematics", "Chemistry", "Biology", "+"]
    },
    {
      year: "2018 - 2022",
      degree: "Malaysian Certificate of Education (SPM - 10A)",
      institution: "Yok Bin Secondary High School, Malacca",
      description: "Comprehensive academic program with a strong foundation in science and mathematics, preparing for higher education.",
      skills: ["10 As Award", "Pelajar Cemerlang Kerajaan Negeri Melaka", "King's Scout Candidate", "+"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My learning journey and academic achievements
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-glow" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8 ml-16 md:ml-0' : 'md:pl-8 ml-16 md:ml-0'
                  }`}>
                    <Card className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                          {item.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-primary font-medium">
                          {item.institution}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;