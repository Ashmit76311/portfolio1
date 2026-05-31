import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceCard = ({ role, organization, dateRange, description }) => {
  return (
    <Card className="bg-card border-l-4 border-l-primary border-t-border border-r-border border-b-border hover:border-l-primary/80 transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-xl text-card-foreground">{role}</CardTitle>
        <CardDescription className="text-secondary-foreground font-medium">
          {organization} • {dateRange}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;