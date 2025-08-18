import { Code, Database, Wrench, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Java', 'Python', 'R', 'PHP', 'SQL', 'JavaScript']
    },
    {
      icon: Globe,
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'AngularJS', 'jQuery', 'Responsive Design']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design']
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'IntelliJ IDEA', 'XAMPP']
    }
  ];

  const allSkills = [
    ...skillCategories.flatMap(category => category.skills),
    'Problem Solving', 'Algorithm Design', 'Data Structures', 'Object-Oriented Programming',
    'Statistical Analysis', 'Version Control', 'Software Testing', 'API Development', 'Code Optimization'
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-surface opacity-30 hover:opacity-40 transition-opacity duration-700" />
      
      <div className="portfolio-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill Categories */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card 
                  key={index}
                  className="card-glass p-6 hover:shadow-soft transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{category.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {category.skills.length} technologies
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* All Skills */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Card className="card-glass p-8 hover:shadow-elevated transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-surface-elevated hover:bg-primary/20 border border-border/50 hover:border-primary/50 rounded text-sm font-medium transition-all duration-300 hover:shadow-soft cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;