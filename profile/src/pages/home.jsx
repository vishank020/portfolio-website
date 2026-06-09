import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { m } from 'framer-motion';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import TerminalWidget from '../components/TerminalWidget';
import myProfilePic from "../assets/images/profile-pic.webp";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center px-4 pt-20"
    >
      <meta name="google-site-verification" content="Np7fSZl9XrJ9n1uYmtep4jcWNEdJLOK9bNhkxDTaRFc" />
      
      {/* Hero Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-6xl mx-auto py-12 md:py-20">
        
        {/* Profile Card & Info (Left Column) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--accent)] mb-6 shadow-xl">
            <img src={myProfilePic}
              alt="Vishank Singh"
              className="w-full h-full object-cover" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Vishank Singh
          </h1>

          <div className="text-lg md:text-xl text-emerald-500 font-semibold mb-6 h-10 mono-font">
            <Typewriter
              options={{
                strings: [
                  'AI & ML Engineer',
                  'Building AI Agents',
                  'MLOps Enthusiast'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <p className="max-w-xl mb-8 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I’m a B.Tech AI/ML student building agentic systems and robust RAG pipelines. I focus on the intersection of applied machine learning and real software engineering, building systems that run outside of notebook environments.
          </p>

          <div className="flex gap-4">
            <button 
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <Link to="/contact">
              <button type="button" className="px-6 py-2.5 border border-gray-400 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5 hover:bg-[var(--accent)]/5 transition-all duration-200 shadow-sm hover:shadow-md">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Terminal Widget (Right Column) */}
        <div className="lg:col-span-5 w-full">
          <TerminalWidget />
        </div>
      </div>

      <section id="projects" className="w-full text-left"><Projects /></section>
      <section id="experience" className="w-full text-left"><Experience /></section>
      <section id="education" className="w-full text-left"><Education /></section>
      <section id="about" className="w-full text-left"><About /></section>
    </m.div>
  );
};

export default Home;
