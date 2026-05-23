import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaLaptopCode, FaBrain } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 px-6 md:px-20 max-w-5xl mx-auto text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bio Narrative */}
        <div>
          <h2 className="text-4xl font-bold mb-8">
            About <span className="text-[var(--accent)]">Me</span>
          </h2>
          
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            >
              I’m a B.Tech AI/ML student who builds agentic systems with LangGraph and LangChain. I design RAG pipelines that hold up outside of demo environments, and work with LLMs like LLaMA via Groq where inference speed actually matters.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            >
              I’m comfortable across the full stack, handling APIs, databases, and CI/CD pipelines to own features end-to-end.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            >
              Most of what I build sits at the intersection of applied machine learning and real software engineering. Not the notebook kind.
            </motion.p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex items-start gap-4"
          >
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <FaBrain size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">AI & ML Focus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Agentic workflows, local LLM orchestration, and prompt pipelines.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="glass-card p-6 flex items-start gap-4"
          >
            <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-400 shrink-0">
              <FaBookOpen size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Avid Reader</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently reading <i>The Pillars of the Earth</i> by Ken Follett.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="glass-card p-6 flex flex-col gap-5"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <FaLaptopCode size={24} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">Tech Stack</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { category: "Languages & Frameworks", skills: ["React", "JavaScript", "Python", "Node.js"] },
                { category: "AI & ML", skills: ["LangChain", "LangGraph", "LLMs", "RAG"] },
                { category: "Databases", skills: ["MongoDB", "PostgreSQL"] },
                { category: "DevOps & Tools", skills: ["Docker", "GitHub Actions"] }
              ].map((stack) => (
                <div key={stack.category}>
                  <h4 className="text-2xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">{stack.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.skills.map((skill) => (
                      <span key={skill} className="text-2xs font-mono text-[var(--accent)] bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
