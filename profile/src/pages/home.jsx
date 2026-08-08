import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { m } from 'framer-motion';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import myProfilePic from "../assets/images/profile-pic.webp";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col px-4 pt-24 relative overflow-hidden"
    >
      {/* Ambient Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto py-12 md:py-24 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left: Text Content (Asymmetric) */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter text-foreground leading-tight">
            Hi, I'm Vishank.
          </h1>

          <div className="text-xl md:text-2xl text-primary font-medium mb-6 h-12 flex items-center gap-2">
            <span className="text-muted-foreground">I'm a</span>
            <div className="mono-font font-semibold">
              <Typewriter
                options={{
                  strings: [
                    'Full-Stack Developer',
                    'AI & Agentic Systems Builder',
                    'MLOps Engineer in progress'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </div>

          <p className="max-w-2xl mb-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
            I build agentic AI systems and robust RAG pipelines. I focus on the intersection of applied machine learning and real software engineering, building systems that run outside of notebook environments.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            >
              View My Work
            </button>
            <Link to="/contact">
              <button type="button" className="px-8 py-3.5 border border-border rounded-xl text-foreground font-medium hover:text-primary hover:border-primary hover:-translate-y-1 hover:bg-primary/5 transition-all duration-300 shadow-sm bg-card/50 backdrop-blur-sm">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Visual/Image */}
        <div className="lg:w-[400px] shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border shadow-2xl relative mx-auto lg:ml-auto">
            <img src={myProfilePic}
              alt="Vishank Singh"
              className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <section id="about" className="w-full text-left mt-20"><About /></section>
      <section id="projects" className="w-full text-left"><Projects /></section>
      <section id="experience" className="w-full text-left"><Experience /></section>
      <section id="education" className="w-full text-left"><Education /></section>
    </m.div>
  );
};

export default Home;
