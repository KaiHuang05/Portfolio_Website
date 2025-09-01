import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Hackathons = () => {
  const hackathons = [
    {
      title: "DEVMatch Hackathon 2025",
      position: "1st Place Winner",
      project: "FraudGuard",
      description: "An AI-powered, zero-fraud on-chain marketplace with a secure ecosystem for NFT trading, designed for users of all skill levels.",
      date: "August 2025",
      technologies: ["Mov", "Warlus & Seal", "Vite", "TypeScript", "Python", "LangChain", "FastAPI", "Supabase", "Vercel", "Render", "Gemini API"],
      prize: "RM 4000+",
      participants: "500+",
      featured: true,
      projectUrl: "https://github.com/KaiHuang05/DevMatch-hokkien-mee-is-red-and-black"
    },
    {
      title: "DataHacks 2025",
      position: "1st Place Winner",
      project: "AI Data Scientist",
      description: "A multi-AI agents-powered Exploratory Data Analysis platform that intelligently performs data analysis and automatically web-scrapes additional relevant information to enrich insights.",
      date: "January 2024",
      technologies: ["Streamlit", "Python", "Google Collab", "Scikit -learn", "Kaggle", "LlamaIndex", "Gemini API"],
      prize: "RM 300",
      participants: "70+",
      featured: true,
      projectUrl: "https://github.com/KaiHuang05/DataHacks2025-AI-Powered-EDA-AI-Chat-Assistant"
    },
    {
      title: "UMHackathon 2025",
      position: "Participation",
      project: "Grab Mex AI Assistant",
      description: "An advanced RAG chatbot agent that transforms queries into interactive visual analytics and context-rich insights for deeper understanding.",
      date: "April 2025",
      technologies: ["Streamlit", "LlamaIndex", "Python", "Plotly", "Gemini API"],
      prize: "RM 0",
      participants: "1000+",
      featured: true,
      projectUrl: "https://github.com/KaiHuang05/Grab-Mex-AI-Assistant"
    },
    {
      title: "Future Ready Hackathon 2025",
      position: "Ongoing",
      project: "BOSSolution",
      description: "Business Operations System - AI-Powered Marketing Intelligence Platform.",
      date: "August 2025",
      technologies: ["React", "Next.js","TypeScript", "Python", "Supabase","LangChain","FastAPI","Google AI studio", "Tailwind CSS", "Vercel", "Render"],
      prize: "Ongoing",
      participants: "200+",
      featured: true,
      projectUrl: "https://github.com/KaiHuang05/Future-Ready-Hackathon-BOSSolution"
    },
  ];

  const achievements = {
    total: hackathons.length,
    wins: hackathons.filter(h => h.position.includes('1st')).length,
    topThree: "2"/*hackathons.filter(h => h.position.includes('1st') || h.position.includes('2nd') || h.position.includes('3rd')).length*/,
    totalPrize: "RM 4700+"
  };

  return (
    <section id="hackathons" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Hackathons & Competitions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Turning innovative ideas into award-winning solutions
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{achievements.total}</div>
                <div className="text-sm text-muted-foreground">Competitions</div>
              </div>
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{achievements.wins}</div>
                <div className="text-sm text-muted-foreground">First Places</div>
              </div>
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{achievements.topThree}</div>
                <div className="text-sm text-muted-foreground">Finalist</div>
              </div>
              <div className="bg-card-gradient p-4 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{achievements.totalPrize}</div>
                <div className="text-sm text-muted-foreground">Prize Money</div>
              </div>
            </div>
          </div>

          {/* Hackathons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow ${
                  hackathon.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {hackathon.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant={hackathon.position.includes('1st') ? 'default' : hackathon.position.includes('2nd') || hackathon.position.includes('3rd') ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {hackathon.position}
                        </Badge>
                        {hackathon.featured && (
                          <Badge variant="default" className="bg-primary/20 text-primary border-primary/30 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Name */}
                  <h4 className="text-md font-semibold text-primary mb-2">
                    {hackathon.project}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {hackathon.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground">{hackathon.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="text-foreground">{hackathon.participants}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Prize:</span>
                      <span className="text-primary font-medium">{hackathon.prize}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {hackathon.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {hackathon.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{hackathon.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      asChild
                    >
                      <a href={hackathon.projectUrl} target="_blank" rel="noopener noreferrer">
                        View Project Details
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                   </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;