import React from 'react';
import { m } from 'framer-motion';
import TerminalWidget from '../components/TerminalWidget';

const About = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-left"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left: Bio / Text */}
        <div className="flex-1 w-full lg:max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
            Who am <span className="text-primary">I?</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I’m a B.Tech AI/ML student (TCET, Mumbai, Class of 2027) building agentic systems with tools like LangGraph and LangChain. I focus on designing RAG pipelines that hold up outside of demo environments, often working with local models or fast APIs like Groq where inference speed matters.
            </p>
            <p>
              Beyond the AI layer, I’m comfortable across the full stack—handling APIs, databases (PostgreSQL/MongoDB), and deployment pipelines to own features end-to-end.
            </p>
            <p>
              My goal is to work at the intersection of applied machine learning and real software engineering. Not just writing notebooks, but shipping reliable software.
            </p>
          </div>
        </div>

        {/* Right: Terminal Skills Widget */}
        <div className="flex-1 w-full relative group">
          {/* Subtle glow behind terminal */}
          <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl -z-10 group-hover:bg-primary/20 transition-all duration-500" />
          <TerminalWidget />
        </div>
      </div>
    </m.div>
  );
};

export default About;
