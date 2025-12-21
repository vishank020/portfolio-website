import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaServer, FaCode, FaChartLine } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';

const Projects = () => {
  const projectList = [
    {
      title: "FinCoach AI",
      desc: "Agentic financial assistant for gig workers. Integrates n8n workflows with Sarvam AI and PostgreSQL for vernacular financial advice.",
      tags: ["n8n", "PostgreSQL", "Sarvam AI", "React"],
      icon: <FaServer />,
      github: "https://github.com/vishank020",
      link: "https://fincoachai.vercel.app"
    },
    {
      title: "PRISM (IoT)",
      desc: "Smart India Hackathon hardware project. A real-time deforestation monitoring system utilizing IoT sensors.",
      tags: ["IoT", "Python", "Hardware"],
      icon: <FaCode />,
      github: "https://github.com/vishank020",
      link: "#"
    },
    {
      title: "Auto-Correct Compiler",
      desc: "AI-based tool for students to auto-correct programming assignments using Streamlit and LLM APIs.",
      tags: ["Streamlit", "LLM", "Python"],
      icon: <SiPython />,
      github: "https://github.com/vishank020",
      link: "#"
    },
    {
      title: "Stock Market Analyzer",
      desc: "Automated fetcher for Indian stock data using Upstox API, stored in MongoDB for analysis.",
      tags: ["MongoDB", "Upstox API", "Data Engineering"],
      icon: <FaChartLine />,
      github: "https://github.com/vishank020",
      link: "#"
    }
  ];

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-28 px-6 md:px-20 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 border-b border-gray-800 pb-4">
        My <span className="text-[#16814f]">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectList.map((p, i) => (
          <ProjectCard key={i} data={p} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;