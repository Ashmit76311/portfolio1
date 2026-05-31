import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard.jsx';

const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <SkillCard 
              skill={skill.name} 
              level={skill.level} 
              icon={skill.icon} 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCategory;