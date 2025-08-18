import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="portfolio-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 animate-fade-up">
          {/* Profile Picture */}
          <div className="relative w-48 h-48 flex-shrink-0 group lg:order-2">
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-75 blur-sm group-hover:blur-md transition-all duration-300" />
            <img
              src={profilePicture}
              alt="Riteshraj Shetage"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-glow"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:order-1">
            {/* Name & Title */}
            <h1 className="text-3xl md:text-4xl font-mono font-bold mb-6 tracking-wider">
              <span className="gradient-text">&lt;</span>
              <span className="gradient-text">Riteshraj.Shetage</span>
              <span className="gradient-text">/&gt;</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-2">
              Aspiring Software Developer
            </div>
            <div className="text-lg md:text-xl text-accent mb-8">
              MCA Student | Passionate about Innovation
            </div>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl lg:max-w-none leading-relaxed">
              Transforming ideas into impactful digital solutions through code, creativity, and continuous learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <Button 
                onClick={scrollToProjects}
                variant="hero"
                size="hero"
              >
                View Projects
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a 
                href="https://github.com/riteshraj-shetage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface-elevated hover:bg-primary/20 transition-all duration-300 hover:shadow-soft group"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/riteshraj-shetage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface-elevated hover:bg-primary/20 transition-all duration-300 hover:shadow-soft group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:riteshraj.shetage@outlook.com"
                className="p-3 rounded-full bg-surface-elevated hover:bg-primary/20 transition-all duration-300 hover:shadow-soft group"
              >
                <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;