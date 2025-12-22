import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaBookOpen, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-28 px-6 md:px-20 max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About <span className="text-[#16814f]">Me</span></h2>
          <ul>
            <li className="text-gray-400 text-lg leading-relaxed mb-6">
              I’m a B.Tech student specializing in Artificial Intelligence & Machine Learning, focused on building practical,
              real-world systems.
            </li>
            <li className="text-gray-400 text-lg leading-relaxed mb-6">
              I have solid hands-on experience with backend development, APIs, databases, and CI/CD pipelines, and
              I’m comfortable owning features end-to-end across the stack.
            </li>
            <li className="text-gray-400 text-lg leading-relaxed mb-6">
              My core interests include applied ML, conversational AI, automation, and data-driven systems that solve
              concrete, high-impact problems.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* <div className="glass-card p-6 flex items-center gap-4">
            <FaGamepad size={30} className="text-pink-500" />
            <div>
              <h3 className="font-bold text-white">Gamer & Organizer</h3>
              <p className="text-sm text-gray-400">Host Free Fire MAX tournaments for 100+ teams.</p>
            </div>
          </div> */}

          <div className="glass-card p-6 flex items-center gap-4">
            <FaBookOpen size={30} className="text-yellow-400" />
            <div>
              <h3 className="font-bold text-white">Avid Reader</h3>
              <p className="text-sm text-gray-400">Currently reading <i>The Pillars of the Earth</i>.</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-4">
            <FaLaptopCode size={30} className="text-[#16814f]" />
            <div>
              <h3 className="font-bold text-white">Tech Stack</h3>
              <p className="text-sm text-gray-400">React, JS, Python, n8n, Docker, MongoDB, ML, SQL.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;