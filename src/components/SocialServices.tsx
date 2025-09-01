import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SocialServices = () => {
  const services = [
    {
      title: "Activity & Welfare Division",
      role: "Director",
      organization: "Persatuan Komputer Universiti Malaya (PEKOM, Computer Society of University Malaya)",
      description: "Strengthened the PEKOM community by organizing diverse events, fostering member engagement, and implementing initiatives based on feedback. Focused on creating an inclusive environment where every member feels supported and valued.",
      impact: "1200+ students involved",
      duration: "Aug 2025 - Present",
      type: "Education & IT",
      achievements: [
        "Organized academic and welfare-focused events for student development",
        "Recruited and managed volunteer committees for event execution",
        "Led interview sessions for 20+ committee candidates to build a strong team",
      ],
      featured: true,
      projectUrl: "https://www.instagram.com/pekomum/"
    },
    {
      title: "Programming League National 2025",
      role: "Program Manager & Emcee",
      organization: "Programming League National, PEKOM",
      description: "Managed a nationwide competitive programming event, overseeing logistics, workshops, and ceremonies to provide a platform for students to showcase algorithmic problem-solving skills.",
      impact: "400+ participants from various universities",
      duration: "Mar 2025 - June 2025",
      type: "Programming",
      achievements: [
        "Designed and executed enhancement workshops for participants",
        "Served as emcee for the closing ceremony, ensuring smooth proceedings",
        "Coordinated event flow and managed participant experience",
      ],
      featured: true,
      projectUrl: "programmingleaguenational2025.vercel.app"
    },
    {
      title: "Dean's Cup 2024",
      role: "Contest Protocol Bureau Member",
      organization: "Dean's Cup, Faculty of Computer Science & Information Technology, UM",
      description: "Supported the organization and management of large-scale sports competitions, ensuring fair play and efficient event operations for hundreds of attendees.",
      impact: "500+ attendees",
      duration: "Jun 2023 - Apr 2024",
      type: "Event Management",
      achievements: [
        "Oversaw registration and logistics for multiple sports events",
        "Acted as judge and referee for basketball and badminton competitions",
        "Served as main coordinator for the kayak competition",
      ],
      featured: true,
      projectUrl: "https://dc24.vercel.app"
    },
    {
      title: "Chinese Society",
      role: "Vice President & Founder",
      organization: "Chinese Society, Malacca Matriculation College (KMM)",
      description: "Founded and led the Chinese Society, organizing cultural events and advocating for student rights to promote inclusivity and cross-cultural understanding.",
      impact: "500+ students joined",
      duration: "Sep 2023 - May 2024",
      type: "Student Movement",
      achievements: [
        "Secured official recognition from college administration",
        "Strengthened bonds among students through cultural activities",
        "Mentored teams in planning and executing celebration events",
      ],
      featured: true,
      projectUrl: "https://www.instagram.com/kmmc.2526/p/CwZtakUuVwi/"
    },
    {
      title: "Future Study Talk 2024",
      role: "Speaker & Event Coordinator",
      organization: "Chinese Society, Malacca Matriculation College (KMM)",
      description: "Coordinated a sharing session for juniors interested in pursuing degrees, featuring speakers from various fields to provide guidance and inspiration.",
      impact: "300+ participants joined",
      duration: "Dec 2024",
      type: "Sharing Talk",
      achievements: [
        "Invited 30 speakers from diverse academic backgrounds including Medicine, Computer Science, Law, and Accounting",
        "Collaborated with 5+ media partners for event promotion",
        "Received positive feedback from participants for event impact",
      ],
      featured: false,
      projectUrl: "https://www.instagram.com/kmmc.2526/p/DDjgDcJhcES/"
    }
  ];

  const totalStats = {
    events: services.length,
    peopleImpacted: "2500+",
    fundsRaised: "RM5000+",
    volunteersCoordinated: "100+"
  };

  return (
    <section id="social-services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Social Services & Community Impact
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Using technology and leadership to create positive change in communities
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{totalStats.events}</div>
                <div className="text-sm text-muted-foreground">Programs Led</div>
              </div>
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{totalStats.peopleImpacted}</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{totalStats.fundsRaised}</div>
                <div className="text-sm text-muted-foreground">Funds Raised</div>
              </div>
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{totalStats.volunteersCoordinated}</div>
                <div className="text-sm text-muted-foreground">Volunteers Led</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow ${
                  service.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {service.type}
                        </Badge>
                        {service.featured && (
                          <Badge variant="default" className="bg-primary/20 text-primary border-primary/30 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Role & Organization */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-primary mb-2">
                      {service.role}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-foreground">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Impact:</span>
                      <span className="text-primary font-medium">{service.impact}</span>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {service.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <li key={achIndex} className="text-xs text-muted-foreground flex items-start">
                          <svg className="w-3 h-3 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                      {service.achievements.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{service.achievements.length - 3} more achievements
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <a href={service.projectUrl} target="_blank" rel="noopener noreferrer" className="block mt-4">
                    <Button variant="outline" size="sm" className="w-full group-hover:border-primary/60 transition-colors">
                      Learn More About This Initiative
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card-gradient p-10 rounded-lg border border-primary/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Interested in Collaboration?
                </span>
              </h3>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                I'm always looking for opportunities to contribute to meaningful causes and organize impactful events. Let's work together to create positive change in our communities.
              </p>
              <Button variant="portfolio" size="lg" className="px-8 py-6 text-base">
                Get In Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialServices;