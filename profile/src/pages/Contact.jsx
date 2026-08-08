import React from 'react';
import { m } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-32 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        Let's <span className="text-primary">Connect</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
        I'm currently looking for new opportunities, internships, and collaborations. Whether you have a question about my projects or just want to say hi, my inbox is open!
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <a 
          href="mailto:singhvishank20@gmail.com" 
          className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-sm group w-full md:w-auto justify-center"
        >
          <FaEnvelope className="text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="font-semibold">Email Me</span>
        </a>

        <a 
          href="https://linkedin.com/in/vishank-singh" 
          target="_blank" rel="noreferrer"
          className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-sm group w-full md:w-auto justify-center"
        >
          <FaLinkedin className="text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="font-semibold">LinkedIn</span>
        </a>

        <a 
          href="https://github.com/vishank020" 
          target="_blank" rel="noreferrer"
          className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-sm group w-full md:w-auto justify-center"
        >
          <FaGithub className="text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="font-semibold">GitHub</span>
        </a>
      </div>
    </m.div>
  );
};

export default Contact;
