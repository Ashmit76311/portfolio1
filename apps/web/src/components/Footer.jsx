import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Code2, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ashmit-kumar-srivastav/' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/Ashmit76311' },
    { name: 'LeetCode', icon: Code2, url: 'https://leetcode.com/u/Ashmit_Srivastav/' },
    { name: 'Email', icon: Mail, url: 'mailto:ashmitsrivastav40@gmail.com' }
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-bold text-card-foreground">
              Ashmit Kumar Srivastav
            </span>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Full-Stack Data Engineer building intelligent systems that process, analyze, and visualize data at scale.
            </p>
          </div>

          <div className="flex flex-col items-start md:col-start-3">
            <span className="text-sm font-semibold text-card-foreground tracking-wide">Connect</span>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ashmit Kumar Srivastav. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
