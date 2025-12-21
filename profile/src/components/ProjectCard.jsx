import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ data }) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full hover:translate-y-[-5px] transition-transform duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="text-3xl text-[#16814f]">{data.icon}</div>
        <div className="flex gap-3 text-lg text-gray-400">
          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer" className="hover:text-[#16814f] transition">
              <FaGithub />
            </a>
          )}
          {data.link && (
            <a href={data.link} target="_blank" rel="noreferrer" className="hover:text-[#16814f] transition">
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-grey-700 mb-2">{data.title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{data.desc}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {data.tags.map((tag, index) => (
          <span key={index} className="text-xs font-mono text-[#16814f] bg-[#51bd8a]/30 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;