import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const SkillCard = ({ skill, level = 'familiar', icon: Icon }) => {
  const levelConfig = {
    expert: {
      color: 'hsl(var(--expert))',
      bgClass: 'bg-[hsl(var(--expert)_/_0.1)]',
      textClass: 'text-[hsl(var(--expert))]',
      borderClass: 'border-[hsl(var(--expert)_/_0.3)]',
      shadowClass: 'hover:shadow-[0_0_15px_hsl(var(--expert)_/_0.3)]',
      width: '100%',
      label: 'Expert'
    },
    proficient: {
      color: 'hsl(var(--proficient))',
      bgClass: 'bg-[hsl(var(--proficient)_/_0.1)]',
      textClass: 'text-[hsl(var(--proficient))]',
      borderClass: 'border-[hsl(var(--proficient)_/_0.3)]',
      shadowClass: 'hover:shadow-[0_0_15px_hsl(var(--proficient)_/_0.3)]',
      width: '80%',
      label: 'Proficient'
    },
    familiar: {
      color: 'hsl(var(--familiar))',
      bgClass: 'bg-[hsl(var(--familiar)_/_0.1)]',
      textClass: 'text-[hsl(var(--familiar))]',
      borderClass: 'border-[hsl(var(--familiar)_/_0.3)]',
      shadowClass: 'hover:shadow-[0_0_15px_hsl(var(--familiar)_/_0.3)]',
      width: '60%',
      label: 'Familiar'
    }
  };

  const config = levelConfig[level.toLowerCase()] || levelConfig.familiar;

  // Generate initials if no icon is provided
  const initials = skill.substring(0, 2).toUpperCase();

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative flex flex-col p-4 rounded-xl bg-card border border-border ${config.shadowClass} transition-all duration-200 overflow-hidden group`}
      aria-label={`${skill} - ${config.label} proficiency`}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div 
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${config.bgClass} ${config.textClass} border ${config.borderClass}`}
        >
          {Icon ? <Icon className="w-5 h-5" /> : <span className="text-sm font-bold tracking-wider">{initials}</span>}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-card-foreground truncate" title={skill}>
            {skill}
          </h4>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className={`${config.bgClass} ${config.textClass} ${config.borderClass} text-xs px-2 py-0.5 border`}>
            {config.label}
          </Badge>
          <span className="text-xs text-muted-foreground font-medium">{config.width}</span>
        </div>
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: config.width }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full rounded-full"
            style={{ backgroundColor: config.color }}
          />
        </div>
      </div>
      
      {/* Subtle hover border highlight */}
      <div 
        className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ borderColor: config.color }}
      />
    </motion.div>
  );
};

export default SkillCard;