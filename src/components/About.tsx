import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      number: "2+",
      label: "Years Experience",
      description: "Building AI & Software solutions"
    },
    {
      number: "10+",
      label: "Projects Completed",
      description: "From prototypes to real-world application"
    },
    {
      number: "5+",
      label: "Industry-Led Hackathons",
      description: "Keep track with new world trend"
    },
    {
      number: "∞",
      label: "Coffee Cups",
      description: "Endless fuel for creativity and late-night coding"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating exceptional webs and applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Crafting the Future with AI
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-justify">
                I’m a junior in the world of AI and software development, passionate about exploring Machine Learning, AI, Blockchain and Data Science. Currently, 
                I’m pursuing a Bachelor’s degree in Computer Science (Artificial Intelligence) at the University of Malaya, 
                where I’m building a strong foundation in algorithms, data-driven problem solving, and intelligent systems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-justify">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while sketching out ideas 
                for my next project. I believe in the power of continuous learning and staying 
                up-to-date with the latest industry trends.
              </p>

              <p className="text-muted-foreground leading-relaxed text-justify">
                My approach combines technical expertise with creative problem-solving to deliver 
                solutions that not only work flawlessly but also provide an exceptional user experience.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-text-gradient bg-clip-text text-transparent mb-2">
                      {item.number}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;