import { ExternalLink, Github, FileText, Lightbulb, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: FileText,
      title: 'Academic Reports Generation Website',
      description: 'Automated system for generating student results and attendance reports in PDF format with secure authentication and role-based access control.',
      longDescription: 'A comprehensive web application that streamlines the academic reporting process by automating the generation of student performance reports, attendance summaries, and academic analytics.',
      techStack: ['Java', 'JSP', 'Servlet', 'JDBC', 'MySQL', 'Tomcat', 'Eclipse'],
      features: ['PDF Generation', 'User Authentication', 'Role-based Access', 'Report Templates', 'Data Analytics'],
      category: 'Web Application',
      status: 'Completed'
    },
    {
      icon: Lightbulb,
      title: 'Flashcards Vocabulary Learning WebApp',
      description: 'Interactive multimedia flashcard application designed to enhance vocabulary learning with spaced repetition algorithms and progress tracking.',
      longDescription: 'An engaging educational platform that uses interactive flashcards to help users expand their vocabulary through gamified learning experiences and intelligent review systems.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'AngularJS', 'PHP', 'MySQL', 'XAMPP'],
      features: ['Interactive UI', 'Progress Tracking', 'Multimedia Support', 'Spaced Repetition', 'User Analytics'],
      category: 'Educational Platform',
      status: 'Completed'
    },
    {
      icon: BarChart,
      title: 'Digital Adoption: Smartphone Usage Analysis',
      description: 'Comprehensive statistical research project analyzing smartphone adoption patterns and usage behaviors across different demographics.',
      longDescription: 'A detailed research initiative that examines the digital transformation in smartphone adoption, providing insights into usage patterns, demographic trends, and behavioral analytics.',
      techStack: ['Google Forms', 'MS Excel', 'R Programming', 'RStudio', 'Statistical Analysis'],
      features: ['Survey Design', 'Data Collection', 'Statistical Modeling', 'Data Visualization', 'Research Report'],
      category: 'Research Project',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="portfolio-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and technical implementations across various domains
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-glass p-8 hover:shadow-elevated transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Header */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-accent font-medium mb-3">{project.category}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <p className="text-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-surface-elevated border border-border/50 rounded-lg text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Actions */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      View Source
                    </Button>
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to discuss new projects and collaboration opportunities. 
              Let's connect and build something amazing together!
            </p>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;