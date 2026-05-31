import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillBadge = ({ skill, tier = 'familiar' }) => {
  const tierStyles = {
    expert: 'bg-primary/20 text-primary border-primary/40 hover:bg-primary/30',
    proficient: 'bg-secondary/60 text-secondary-foreground border-secondary hover:bg-secondary/80',
    familiar: 'bg-muted text-muted-foreground border-muted-foreground/20 hover:bg-muted/80'
  };

  return (
    <Badge 
      variant="outline" 
      className={`${tierStyles[tier]} transition-all duration-200 px-3 py-1 text-sm font-medium`}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;