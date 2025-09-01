import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 90 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Firebase", level: 85 },
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Testing", level: 80 },
      ]
    }
  ];

  const tools = [
    "VS Code", "Git", "Docker", "Figma", "Postman", "Jira", 
    "Slack", "Notion", "Adobe Creative Suite", "Chrome DevTools"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tools & Software */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Tools & Software
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="px-4 py-2 bg-card-gradient border border-primary/20 rounded-full text-sm text-foreground hover:border-primary/40 transition-all duration-300 hover:shadow-glow cursor-default">
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <Card className="mt-16 p-8 text-center bg-card-gradient border-primary/20">
            <h3 className="text-xl font-semibold mb-2 text-foreground">Fun Fact</h3>
            <p className="text-muted-foreground">
              I've written over <span className="text-primary font-semibold">100,000 lines of code</span> and 
              consumed approximately <span className="text-primary font-semibold">2,000 cups of coffee</span> in my development journey! ☕
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;