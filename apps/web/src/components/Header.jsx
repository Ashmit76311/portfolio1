import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.hash === path.replace('/', '');
  };

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.includes('#')) {
      const element = document.querySelector(path.split('#')[1] ? `#${path.split('#')[1]}` : '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" aria-label="Home">
            {/* Small initials logo */}
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              AS
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary ${
                  isActive(link.path) ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://drive.google.com/file/d/1u5Rq2-AiT4Ox7ji4XQsUaZu1_H9_BJYV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ashmit Kumar Srivastav resume"
            >
              <Button 
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 hover:brightness-110 transition-all duration-200 active:scale-[0.98]"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
            <Button 
              asChild 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-border">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-base font-medium transition-all duration-200 hover:text-primary ${
                      isActive(link.path) ? 'text-primary font-semibold' : 'text-card-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a 
                  href="https://drive.google.com/file/d/1u5Rq2-AiT4Ox7ji4XQsUaZu1_H9_BJYV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Ashmit Kumar Srivastav resume"
                  onClick={() => setIsOpen(false)}
                >
                  <Button 
                    variant="outline"
                    className="w-full border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200 active:scale-[0.98]"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </a>
                <Button 
                  asChild 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] mt-4"
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>Get in Touch</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;