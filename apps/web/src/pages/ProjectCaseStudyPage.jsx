import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Github } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ProjectCaseStudyPage = ({ 
  title = '', 
  description = '', 
  image = '', 
  techStack = [], 
  problemStatement = '', 
  motivation = '',
  architecture = '',
  challenges = [],
  solutions = [],
  scalability = '',
  security = '',
  performance = '',
  lessonsLearned = [],
  futureImprovements = [],
  githubUrl = ''
}) => {
  return (
    <>
      <Helmet>
        <title>{`${title} - Case Study | Ashmit Kumar Srivastav`}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{title}</span>
          </nav>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            {image ? (
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted-foreground/5 flex items-center justify-center text-muted-foreground">Image not available</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight" style={{letterSpacing: '-0.02em'}}>
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                {description}
              </p>
            </div>
            
            {githubUrl && (
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 hover:brightness-110 hover:scale-105 transition-all duration-200 flex-shrink-0"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code on GitHub`}>
                  <Github className="mr-2 h-[18px] w-[18px]" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>

          <div className="mb-12">
            <h2 className="text-sm font-semibold text-foreground tracking-wide mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {(techStack || []).map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-primary/10 text-primary border-primary/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Problem Statement</h2>
            <p className="text-muted-foreground leading-relaxed max-w-prose">{problemStatement}</p>
          </section>

          {motivation && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Motivation</h2>
              <p className="text-muted-foreground leading-relaxed max-w-prose">{motivation}</p>
            </section>
          )}

          {architecture && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Architecture Overview</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">{architecture}</p>
              </div>
            </section>
          )}

          {challenges?.length > 0 && solutions?.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Challenges & Solutions</h2>
              <Accordion type="single" collapsible className="w-full">
                {challenges.map((challenge, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {challenge.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      <p className="mb-3">{challenge.description}</p>
                      <p className="text-sm"><span className="font-semibold text-primary">Solution:</span> {solutions[index]}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {scalability && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Scalability Analysis</h2>
              <p className="text-muted-foreground leading-relaxed max-w-prose">{scalability}</p>
            </section>
          )}

          {security && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Security Considerations</h2>
              <p className="text-muted-foreground leading-relaxed max-w-prose">{security}</p>
            </section>
          )}

          {performance && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Performance Optimizations</h2>
              <p className="text-muted-foreground leading-relaxed max-w-prose">{performance}</p>
            </section>
          )}

          {lessonsLearned?.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Lessons Learned</h2>
              <ul className="space-y-2 text-muted-foreground">
                {lessonsLearned.map((lesson, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="leading-relaxed">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {futureImprovements?.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug">Future Improvements</h2>
              <ul className="space-y-2 text-muted-foreground">
                {futureImprovements.map((improvement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="leading-relaxed">{improvement}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectCaseStudyPage;