import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-surface opacity-50" />
      
      <div className="portfolio-container relative z-10">
        <div className="text-center space-y-6">
          {/* Back to Top Button */}
          <div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-3"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Riteshraj Shetage</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Aspiring Software Developer passionate about creating innovative solutions and meaningful digital experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#certifications" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-primary mx-auto" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Riteshraj Shetage. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary" /> and lots of coffee
            </span>
          </div>

          {/* Tech Stack Credit */}
          <div className="text-xs text-muted-foreground/60">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;