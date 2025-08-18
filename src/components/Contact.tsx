import { Mail, Phone, Linkedin, Github, Globe, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'riteshraj.shetage@outlook.com',
      href: 'mailto:riteshraj.shetage@outlook.com',
      description: 'Drop me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 86000 29971',
      href: 'tel:+918600029971',
      description: 'Call me for urgent matters'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'riteshraj-shetage',
      href: 'https://www.linkedin.com/in/riteshraj-shetage',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'riteshraj-shetage',
      href: 'https://github.com/riteshraj-shetage',
      description: 'Check out my repositories'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'riteshrajshetage.me',
      href: 'https://www.riteshrajshetage.me/',
      description: 'Visit my complete portfolio'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
      description: 'Currently based in Pune'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Hi Riteshraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:riteshraj.shetage@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="portfolio-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="card-glass p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Let's Connect</h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborations, or just have a chat about technology and innovation. 
                Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-start gap-4 p-4 rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-all duration-300 hover:shadow-soft"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-1">
                          {contact.label}
                        </h4>
                        <p className="font-medium mb-1">{contact.value}</p>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Card className="card-glass p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-surface-elevated/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-surface-elevated/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-surface-elevated/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    rows={6}
                    required
                    className="bg-surface-elevated/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-3 text-lg font-semibold"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>

              <p className="text-sm text-muted-foreground mt-6 text-center">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;