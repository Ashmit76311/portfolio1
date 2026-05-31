import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, techStack, link, githubUrl }) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-primary/10 text-primary border-primary/30 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-col sm:flex-row gap-3">
        <Button 
          asChild 
          variant="outline" 
          className="w-full sm:flex-1 group/btn border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          <Link to={link}>
            View Case Study
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </Button>
        {githubUrl && (
          <Button 
            asChild 
            variant="outline" 
            className="w-full sm:flex-1 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:brightness-110 transition-all duration-200"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code on GitHub`}>
              <Github className="mr-2 h-[18px] w-[18px]" />
              View on GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;