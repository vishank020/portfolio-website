import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ data }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col h-full group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-5 relative z-10">
        <div className="text-3xl text-primary">{data.icon}</div>
        <div className="flex gap-3.5 text-lg text-muted-foreground">
          {data.github && (
            <a 
              href={data.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <FaGithub />
            </a>
          )}
          {data.link && data.link !== "#" && (
            <a 
              href={data.link} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-primary hover:scale-110 transition-all duration-200"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-card-foreground mb-2 mono-font relative z-10">
        {data.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed relative z-10">
        {data.desc}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {data.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;