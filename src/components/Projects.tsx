import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "BOSSolution",
      description: "A cross-platform AI marketing platform with smart ad suggestions, ROI analytics, and competitor insights.",
      image: "https://i.pinimg.com/736x/21/96/d3/2196d3dbcf94afdc850ca8f9ca1c79b2.jpg",
      technologies: ["React", "Next.js","TypeScript", "Python", "Supabase","LangChain","FastAPI","Google AI studio", "Tailwind CSS", "Vercel", "Render"],
      liveUrl: "http://bos-solution.vercel.app/",
      githubUrl: "https://github.com/KaiHuang05/Future-Ready-Hackathon-BOSSolution",
      featured: true
    },
    {
      title: "FraudGuard",
      description: "An on-chain marketplace app with AI-powered fraud detection and an integrated AI assistant.",
      image: "https://i.pinimg.com/1200x/b2/8f/c5/b28fc50044c043419274cb989e6a9253.jpg",
      technologies: ["Mov", "Warlus & Seal", "Vite", "TypeScript", "Python", "LangChain", "FastAPI", "Supabase", "Vercel", "Render", "Gemini API"],
      liveUrl: "https://hokkien-mee-is-red-and-black.vercel.app",
      githubUrl: "https://github.com/KaiHuang05/DevMatch-hokkien-mee-is-red-and-black",
      featured: true
    },
    {
      title: "AI Data Scientist",
      description: "A smart data exploration app that enabling deep insights and natural language understanding about SDG 14 - Life Under Water.",
      image: "https://i.pinimg.com/736x/62/ef/ad/62efad978f6c2b68196b61471c41d043.jpg",
      technologies: ["Streamlit", "Python", "Google Collab", "Scikit -learn", "Kaggle", "LlamaIndex", "Gemini API"],
      liveUrl: "#",
      githubUrl: "https://github.com/KaiHuang05/DataHacks2025-AI-Powered-EDA-AI-Chat-Assistant",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and TypeScript, featuring custom design and elegant animations.",
      image: "https://i.pinimg.com/736x/38/f2/e4/38f2e4e6e6529b0943676a50bbc8c3f5.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work and personal projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button 
                        variant="hero" 
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </Button>
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;