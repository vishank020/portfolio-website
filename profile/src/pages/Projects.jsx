import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaServer, FaCode, FaChartLine, FaLayerGroup } from 'react-icons/fa';

const projectList = [
  {
    title: "Saarthi (Under Development)",
    desc: "Agentic student onboarding system built for Indian engineering colleges. Implements a multi-role architecture with a React frontend and FastAPI backend. Uses PaddleOCR and rule-based extraction for document processing.",
    tags: ["FastAPI", "React", "PaddleOCR", "Socket.IO", "Agentic Systems"],
    icon: <FaServer />,
    github: "#",
    link: "#",
    category: "Full-Stack & Agents",
    gridClass: "md:col-span-2"
  },
  {
    title: "Vayam",
    desc: "A comprehensive college community platform featuring authentication, anonymous models for posts, and encrypted direct messaging. Built with a robust Java backend.",
    tags: ["Spring Boot 3", "Java 21", "Angular 18", "PostgreSQL"],
    icon: <FaLayerGroup />,
    github: "https://github.com/vishank020/Vayam",
    link: "https://vayam-prj.vercel.app/feed",
    category: "Full-Stack",
    gridClass: "md:col-span-1"
  },
  {
    title: "VC Intelligence Platform",
    desc: "AI-powered sourcing platform that turns a fund's investment thesis into an always-on discovery engine. Features faceted search, live web enrichment, and thesis-aligned company insights.",
    tags: ["AI", "Gemini API", "React", "Node.js"],
    icon: <FaChartLine />,
    github: "https://github.com/vishank020/VC-Intel",
    link: "https://vc-intel-project.vercel.app/companies",
    category: "AI & Agents",
    gridClass: "md:col-span-2"
  },
  {
    title: "FinCoach AI",
    desc: "Conversational financial assistant for budgeting and planning. Features a dual-interface CRUD application powered by LLaMA 3.2 via Ollama.",
    tags: ["LLaMA 3.2", "Ollama", "Python", "React"],
    icon: <FaChartLine />,
    github: "https://github.com/vishank020/fincoach",
    link: "https://fincoachai.vercel.app/",
    category: "AI & Agents",
    gridClass: "md:col-span-1"
  },
  {
    title: "CozyPixels Design System",
    desc: "A modern, semantic UI toolkit and theme engine. Features bespoke Tailwind utility classes, robust HSL color variables, and fluid transitions.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    icon: <FaCode />,
    github: "https://github.com/vishank020/CozyPixel.web",
    link: "https://vishank020.github.io/CozyPixel.web",
    category: "Frontend",
    gridClass: "md:col-span-1"
  },
  {
    title: "Portfolio Website",
    desc: "This very website! A highly intentional, responsive personal portfolio built with the CozyPixels design engine. Features terminal integrations, theme switching, and asymmetric bento layouts.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    icon: <FaLayerGroup />,
    github: "https://github.com/vishank020/portfolio-website",
    link: "https://vishank020.github.io/portfolio-website/",
    category: "Frontend",
    gridClass: "md:col-span-2"
  }
];

const categories = ["All", "Full-Stack", "AI & Agents", "Frontend"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projectList
    : projectList.filter(p => p.category.includes(activeTab));

  return (
    <m.div 
      initial={{ y: 20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-left"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-border pb-6 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            A showcase of my recent full-stack applications and AI-driven systems.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <m.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
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
