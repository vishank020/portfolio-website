import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ data }) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-5">
        <div className="text-3xl text-[var(--accent)]">{data.icon}</div>
        <div className="flex gap-3.5 text-lg text-gray-500 dark:text-gray-400">
          {data.github && (
            <a 
              href={data.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[var(--accent)] hover:scale-110 transition-all duration-200"
            >
              <FaGithub />
            </a>
          )}
          {data.link && data.link !== "#" && (
            <a 
              href={data.link} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[var(--accent)] hover:scale-110 transition-all duration-200"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 mono-font">
        {data.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 flex-grow leading-relaxed">
        {data.desc}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {data.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-2xs font-mono text-[var(--accent)] bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;