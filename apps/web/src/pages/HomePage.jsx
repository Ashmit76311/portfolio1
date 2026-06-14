import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Download, Linkedin, Github, Code2, Mail, Phone, Award, Briefcase, Box, Database, Wrench, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import ExperienceCard from '@/components/ExperienceCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import SkillCategory from '@/components/SkillCategory.jsx';

const HomePage = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 'expert' },
        { name: 'SQL', level: 'expert' },
        { name: 'Java', level: 'proficient' },
        { name: 'JavaScript', level: 'proficient' },
        { name: 'HTML', level: 'proficient' },
        { name: 'CSS', level: 'proficient' },
        { name: 'C++', level: 'familiar' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Box,
      skills: [
        { name: 'React.js', level: 'expert' },
        { name: 'Node.js', level: 'expert' },
        { name: 'Flask', level: 'proficient' },
        { name: 'FastAPI', level: 'proficient' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 'proficient' },
        { name: 'MySQL', level: 'proficient' },
        { name: 'MongoDB', level: 'familiar' },
        { name: 'Firebase', level: 'familiar' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        { name: 'Docker', level: 'proficient' },
        { name: 'Git', level: 'proficient' },
        { name: 'Postman', level: 'proficient' },
        { name: 'Apache Superset', level: 'proficient' },
        { name: 'Excel', level: 'proficient' },
        { name: 'Tableau', level: 'familiar' },
        { name: 'Power BI', level: 'familiar' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: Lightbulb,
      skills: [
        { name: 'REST APIs', level: 'expert' },
        { name: 'DSA', level: 'proficient' },
        { name: 'DBMS', level: 'proficient' },
        { name: 'ETL Pipelines', level: 'proficient' },
        { name: 'Data Visualization', level: 'proficient' },
        { name: 'Automation Workflows', level: 'proficient' },
        { name: 'OS', level: 'familiar' }
      ]
    }
  ];

  const projects = [
    {
      title: 'URIS - Urban Route Intelligence System',
      description: 'AI-powered urban navigation system recommending safest and fastest routes using geospatial risk analysis and machine learning',
      image: 'https://images.unsplash.com/photo-1621273974925-b5b6d7a32140',
      techStack: ['React.js', 'Node.js', 'Python', 'Mapbox GL JS', 'Random Forest'],
      link: '/projects/uris',
      githubUrl: 'https://github.com/Ashmit76311/Urban-Route-Intelligence-System'
    },
    {
      title: 'Crypto Market Analytics Dashboard',
      description: 'Real-time cryptocurrency market analytics dashboard with automated Excel reporting and data visualization',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
      techStack: ['Python', 'Pandas', 'Apache Superset', 'CoinGecko API', 'MySQL'],
      link: '/projects/crypto-dashboard',
      githubUrl: 'https://github.com/Ashmit76311/Crypto-Market-Analytics-Dashboard'
    }
  ];

  const experiences = [
    {
      role: 'Google Student Ambassador',
      organization: 'Google for Developers',
      dateRange: 'May 2026 – Present',
      description: 'Conducted workshops introducing 100+ students to Gemini and Google AI tools. Organized technical sessions across campus. Created engaging social media content, awareness reels, and monthly LinkedIn highlight campaigns to promote AI literacy, increase student participation, and showcase community achievements.'
    },
    {
      role: 'Technical Head',
      organization: 'SPIC (Student Professional Interaction Cell)',
      dateRange: 'Nov 2025 – Present',
      description: 'Leading technical initiatives and mentoring students in full-stack development. Organizing coding competitions, technical talks, and industry interaction sessions. Managing technical infrastructure for club events.'
    },
    {
      role: 'Social Media Head',
      organization: 'Light De Literacy NGO',
      dateRange: 'June 2024 – Present',
      description: 'Managing digital presence and content strategy for education-focused NGO. Creating engaging content to promote literacy programs. Coordinating with volunteers and tracking social media analytics.'
    }
  ];

  const achievements = [
    'Google Data Analytics Professional Certificate',
    '1st Prize - Nebula Code Debugging Competition',
    'Solved 250+ DSA Problems'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Ashmit Kumar Srivastav - Full-Stack Data Engineer | Backend Developer</title>
        <meta name="description" content="Full-Stack Data Engineer and Backend Developer building intelligent systems that process, analyze, and visualize data at scale. Experienced in Python, React, Node.js, and ML-backed geospatial systems." />
      </Helmet>

      <Header />

      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://www.dropbox.com/scl/fi/d89crbbhcim3go0btr5uv/pngtree-matrix-code-flow-dark-gradient-abstract-background-image_770044.jpg?rlkey=j9r6goufz5xwl4rn2o3gh4ebi&st=xajutgrn&dl=1"
              alt="Hero background"
              className="w-full h-full object-cover"
            />

            {/* subtle gradient overlay for improved text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
          </div>
          
          <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div {...fadeInUp}>
              {/* Profile photo above the name - replace src with /public/profile.jpg to use local image */}
              <img
                src="/profile.jpg"
                alt="Profile"
                className="mx-auto mb-8 rounded-full object-cover border-4 border-primary shadow-lg"
                style={{ width: '222px', height: '222px', transform: 'translateY(-40px)' }}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Ashmit Kumar Srivastav
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                Full-Stack Data Engineer | Backend Developer | Google Student Ambassador
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Building intelligent systems that process, analyze, and visualize data at scale. Experienced in Python, React, Node.js, and ML-backed geospatial systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-[0.98]"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1u5Rq2-AiT4Ox7ji4XQsUaZu1_H9_BJYV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Ashmit Kumar Srivastav resume"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-card">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground mb-8 leading-snug">About me</h2>
              <div className="max-w-4xl">
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  I'm Ashmit, a 3rd-year Computer Science student at Raj Kumar Goel Institute of Technology and a Google Student Ambassador for Gemini. I'm passionate about building systems that turn raw data into actionable intelligence.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  I design and build full-stack systems that handle real-time data pipelines, write backend services in Python and Node.js that process, validate, and serve data, create interactive frontends in React that visualize complex datasets, and apply machine learning to solve real-world problems.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  I'm fascinated by the journey data takes—from extraction to transformation to visualization. I love the challenge of building systems that are fast, reliable, and scalable.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Currently driving AI literacy and Gemini adoption across RKGIT as a Google Student Ambassador, leading technical initiatives at SPIC, and building projects that combine backend engineering with data science. Looking for backend/full-stack internships where I can own features end-to-end, work with real data at scale, and learn from experienced engineers.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Technical skills</h2>
                <p className="text-muted-foreground max-w-2xl">
                  A comprehensive overview of my technical expertise, categorized by domain and proficiency level.
                </p>
              </div>
              
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <SkillCategory 
                    key={index}
                    title={category.title}
                    icon={category.icon}
                    skills={category.skills}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 bg-card">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground mb-8 leading-snug">Featured projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-snug">Experience</h2>
              
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ExperienceCard {...experience} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-card">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground mb-8 leading-snug">Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-background border-border hover:border-primary/40 transition-all duration-200">
                      <CardContent className="pt-6">
                        <Award className="h-8 w-8 text-primary mb-3" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Currently Building Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-snug">Currently building</h2>
              
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-card-foreground">AI Resume Analyzer</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Building an AI-powered resume screening platform using: "React, Node.js, PostgreSQL, Gemini API, and Tailwind CSS" that analyzes resumes, provides ATS-style feedback, identifies skill gaps, and generates personalized improvement suggestions. Stay tuned for updates.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-card">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground mb-8 leading-snug">Get in touch</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                      <a 
                        href="mailto:ashmitsrivastav40@gmail.com"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Mail className="h-5 w-5" />
                        <span>ashmitsrivastav40@gmail.com</span>
                      </a>
                      <a 
                        href="tel:+918368803400"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Phone className="h-5 w-5" />
                        <span>+91 8368803400</span>
                      </a>
                    </div>

                    <div className="space-y-4">
                      <a 
                        href="https://linkedin.com/in/ashmit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn Profile</span>
                      </a>
                      <a 
                        href="https://github.com/ashmit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub Profile</span>
                      </a>
                      <a 
                        href="https://leetcode.com/u/Ashmit_Srivastav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Code2 className="h-5 w-5" />
                        <span>LeetCode Profile</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                      asChild
                    >
                      <a 
                        href="https://drive.google.com/file/d/1u5Rq2-AiT4Ox7ji4XQsUaZu1_H9_BJYV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Ashmit Kumar Srivastav resume"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
