import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      description: 'Comprehensive certification covering HTML5, CSS3, responsive design principles, and modern web development best practices.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'Grid Layout', 'Media Queries'],
      date: '2023',
      category: 'Web Development',
      verified: true
    },
    {
      title: 'TCS ion Career Edge - Young Professional',
      issuer: 'Tata Consultancy Services',
      description: 'Professional development program focusing on industry-ready skills, soft skills, and career advancement strategies.',
      skills: ['Professional Skills', 'Communication', 'Leadership', 'Industry Knowledge', 'Career Planning'],
      date: '2024',
      category: 'Professional Development',
      verified: true
    },
    {
      title: 'Computation of Statistics using R Software',
      issuer: 'Academic Institution',
      description: 'Advanced certification in statistical computing, data analysis, and visualization using R programming language.',
      skills: ['R Programming', 'Statistical Analysis', 'Data Visualization', 'Statistical Modeling', 'Research Methods'],
      date: '2023',
      category: 'Data Science',
      verified: true
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining CGPA of 9.04 in MCA program',
      icon: Award
    },
    {
      title: 'Project Leadership',
      description: 'Led multiple successful academic projects',
      icon: Building
    },
    {
      title: 'Continuous Learning',
      description: 'Actively pursuing new certifications and skills',
      icon: Calendar
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-surface opacity-30" />
      
      <div className="portfolio-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-heading">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="card-glass p-6 hover:shadow-elevated transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                {cert.verified && (
                  <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                    Verified
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div>
                  <p className="text-xs font-semibold text-accent mb-2">{cert.category}</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-surface-elevated text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-surface-elevated text-xs rounded opacity-60">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <ExternalLink className="mr-2 w-3 h-3" />
                  View Certificate
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-center mb-12">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="card-glass p-6 text-center hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Card className="card-glass p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-6">
              I believe in continuous improvement and stay updated with the latest technologies and industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'React', 'Cloud Computing', 'DevOps', 'AI/ML'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary"
                >
                  Currently Learning: {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;