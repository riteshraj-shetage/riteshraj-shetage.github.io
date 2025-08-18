import { GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
      period: '2024 – 2026',
      grade: 'CGPA: 9.04',
      status: 'current'
    },
    {
      degree: 'Bachelor of Science in Statistics',
      institution: 'Rajarshi Chhatrapati Shahu College, Kolhapur',
      period: '2021 – 2024',
      grade: 'CGPA: 7.82',
      status: 'completed'
    },
    {
      degree: '12th Grade',
      institution: 'Rajaram College, Kolhapur',
      period: '2020 – 2021',
      grade: '77.17%',
      status: 'completed'
    },
    {
      degree: '10th Grade',
      institution: 'Shaskiya Vidyaniketan Pusegaon, Satara',
      period: '2018 – 2019',
      grade: '95.60%',
      status: 'completed'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="portfolio-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-heading">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming innovative ideas into impactful digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="card-glass p-8 hover:shadow-elevated transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am an aspiring software developer passionate about turning ideas into impactful solutions. 
                Currently pursuing an MCA at JSPM's Rajarshi Shahu College of Engineering, Pune, I combine 
                academic excellence with hands-on project experience.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in technology began with a strong foundation in statistics and mathematics, 
                which has given me a unique perspective on problem-solving and data-driven development. 
                I believe in continuous learning and staying updated with the latest technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and mentoring fellow students in their programming journey.
              </p>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className={`card-glass p-6 hover:shadow-soft transition-all duration-300 relative ${
                    edu.status === 'current' ? 'border-primary/50 bg-primary/5' : ''
                  }`}
                >
                  {edu.status === 'current' && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        Current
                      </span>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="font-semibold text-accent">{edu.grade}</span>
                    </div>
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