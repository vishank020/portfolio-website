import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

import myProfilePic from "../assets/images/profile-pic.webp";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16"
    >
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#16814f] mb-8">

        <img src={myProfilePic}
          alt="Vishank Singh"
          className="w-full h-full object-cover" />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Vishank Singh
      </h1>

      <div className="text-xl text-gray-500 md:text-2xl mb-8 h-12 mono-font">
        <Typewriter
          options={{
            strings: [
              'AI & ML Engineer',
              'Building FinCoach AI',
              'DevOps Enthusiast'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>

      <p className="max-w-xl  mb-10 text-lg leading-relaxed">
        I build intelligent systems and agentic workflows. Currently exploring Local LLMs and optimizing complex pipelines on modest hardware.
      </p>

      <div className="flex gap-4">
        <Link to="/projects">
          <button className="btn-primary">View Projects</button>
        </Link>
        <Link to="/contact">
          <button className="px-6 py-2 border border-gray-600 rounded-lg text-grey-700 hover:border-[#16814f]">
            Contact Me
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;