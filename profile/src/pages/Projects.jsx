import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaServer, FaCode, FaChartLine } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';

const projectList = [
  {
    title: "Saarthi",
    desc: "Agentic student onboarding system built with LangGraph and LangChain. Uses LLaMA 3 via Groq, ChromaDB for RAG, and FastAPI backend with a React frontend. IEEE paper submitted.",
    tags: ["LangGraph", "LangChain", "Groq", "ChromaDB", "FastAPI", "React"],
    icon: <FaServer />,
    github: "https://github.com/vishank020",
    link: "#",
    category: "AI & Agents",
    gridClass: "md:col-span-2"
  },
  {
    title: "Crop Disease Detection",
    desc: "CNN model for crop disease classification using the PlantVillage dataset. End-to-end deep learning pipeline covering preprocessing, augmentation, training, and evaluation across 15 disease classes. Achieved 66.33% test accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NumPy"],
    icon: <SiPython />,
    github: "https://github.com/vishank020",
    link: "#",
    category: "Machine Learning",
    gridClass: "md:col-span-1"
  },
  {
    title: "FinCoach AI",
    desc: "AI-powered financial assistant for budgeting, saving, and financial planning. Conversational query processing via LLM APIs with structured input handling and modular frontend/backend architecture.",
    tags: ["Python", "React.js", "LLM APIs"],
    icon: <FaChartLine />,
    github: "https://github.com/vishank020",
    link: "https://fincoachai.vercel.app",
    category: "AI & Agents",
    gridClass: "md:col-span-1"
  },
  {
    title: "VC Intelligence Platform",
    desc: "Precision AI scout for venture capital sourcing and triage.",
    tags: ["AI", "Gemini API", "React"],
    icon: <FaChartLine />,
    github: "https://github.com/vishank020/VC-Intel",
    link: "https://vc-intel-project.vercel.app/companies",
    category: "AI & Agents",
    gridClass: "md:col-span-2"
  },
  {
    title: "Automated CI/CD Pipeline",
    desc: "Automated CI/CD pipeline for a Python application using GitHub Actions. Covers linting, testing, build validation, and deployment — triggered on PRs and merges to main.",
    tags: ["GitHub Actions", "Python", "Flake8", "Pytest", "GCP"],
    icon: <FaCode />,
    github: "https://github.com/vishank020",
    link: "#",
    category: "DevOps",
    gridClass: "md:col-span-1"
  }
];

const categories = ["All", "AI & Agents", "Machine Learning", "DevOps"];
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projectList
    : projectList.filter(p => p.category === activeTab);

  return (
    <m.div 
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
              type="button"
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
      <m.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <m.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={p.title}
              className={activeTab === "All" ? p.gridClass : "md:col-span-1"}
            >
              <ProjectCard data={p} />
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>
    </m.div>
  );
};

export default Projects;
