import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 px-6 md:px-20 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12">Experience</h2>

      <div className="relative border-l-2 border-gray-800 ml-4 space-y-12">

        {/* Social Internship */}
        <div className="relative pl-8">
          <div className="absolute -left-[9px] top-0 bg-pink-500 w-4 h-4 rounded-full"></div>

          <h3 className="text-2xl font-bold">Social Internship</h3>
          <p className="text-pink-500 font-mono mb-2">
            Junoon Foundation | May 2024 – June 2024
          </p>
          <p className="text-gray-400">
            Contributed to community-driven initiatives and on-ground NGO operations.
            Gained exposure to social impact work, coordination, and real-world problem solving.
          </p>
        </div>

        {/* Fullstack Internship */}
        <div className="relative pl-8">
          <div className="absolute -left-[9px] top-0 bg-[#16814f] w-4 h-4 rounded-full shadow-[0_0_10px_#00f2ea]"></div>

          <h3 className="text-2xl font-bold">Fullstack Developer Intern</h3>
          <p className="text-[#16814f] font-mono mb-2">
            Rusaka Technologies | Dec 2025 – Present
          </p>
          <p className="text-gray-400">
            Working on social impact software solutions. Gaining hands-on experience
            in full-stack development, system design.
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default Experience;
