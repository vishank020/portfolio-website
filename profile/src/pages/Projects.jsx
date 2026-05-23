import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaServer, FaCode, FaChartLine } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projectList = [
    {
      title: "FinCoach AI",
      desc: "Agentic financial assistant for gig workers. Integrates n8n workflows with Sarvam AI and PostgreSQL for vernacular financial advice.",
      tags: ["n8n", "PostgreSQL", "Sarvam AI", "React"],
      icon: <FaServer />,
      github: "https://github.com/vishank020",
      link: "https://fincoachai.vercel.app",
      category: "AI & Agents",
      gridClass: "md:col-span-2"
    },
    {
      title: "PRISM (IoT)",
      desc: "Smart India Hackathon hardware project. A real-time deforestation monitoring system utilizing IoT sensors.",
      tags: ["IoT", "Python", "Hardware"],
      icon: <FaCode />,
      github: "https://github.com/vishank020",
      link: "#",
      category: "IoT & Systems",
      gridClass: "md:col-span-1"
    },
    {
      title: "Auto-Correct Compiler",
      desc: "AI-based tool for students to auto-correct programming assignments using Streamlit and LLM APIs.",
      tags: ["Streamlit", "LLM", "Python"],
      icon: <SiPython />,
      github: "https://github.com/vishank020",
      link: "#",
      category: "AI & Agents",
      gridClass: "md:col-span-1"
    },
    {
      title: "VC Intelligence Platform",
      desc: "A precision AI scout for venture capital sourcing and triage.",
      tags: ["AI", "Gemini API", "React"],
      icon: <FaChartLine />,
      github: "https://github.com/vishank020/VC-Intel",
      link: "https://vc-intel-project.vercel.app/companies",
      category: "AI & Agents",
      gridClass: "md:col-span-2"
    },
    {
      title: "Stock Market Analyzer",
      desc: "Automated fetcher for Indian stock data using Upstox API, stored in MongoDB for analysis.",
      tags: ["MongoDB", "Upstox API", "Data Engineering"],
      icon: <FaChartLine />,
      github: "https://github.com/vishank020",
      link: "#",
      category: "Full-Stack",
      gridClass: "md:col-span-3"
    }
  ];

  const categories = ["All", "AI & Agents", "Full-Stack", "IoT & Systems"];

  const filteredProjects = activeTab === "All"
    ? projectList
    : projectList.filter(p => p.category === activeTab);

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 px-6 md:px-20 max-w-7xl mx-auto text-left"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-800 pb-6 gap-6">
        <h2 className="text-4xl font-bold">
          My <span className="text-[var(--accent)]">Projects</span>
        </h2>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[var(--accent)] text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-[var(--accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={p.title}
              className={activeTab === "All" ? p.gridClass : "md:col-span-1"}
            >
              <ProjectCard data={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;