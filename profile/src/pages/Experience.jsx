import React from 'react';
import { m } from 'framer-motion';

const experiences = [
  {
    id: "intern-rusaka",
    title: "AI and Software Developer Intern",
    company: "Rusaka Technologies",
    date: "Dec 2025 – Jan 2026",
    color: "bg-emerald-500",
    textColor: "text-emerald-600 dark:text-emerald-400",
    desc: "Working on social impact software solutions. Gaining hands-on experience in full-stack development and system design.",
    tags: ["Full-Stack", "System Design", "AI Integration", "React"]
  },
  {
    id: "volunteer-tcet",
    title: "Open Source Contributor",
    company: "Tcet ACM SIGAI",
    date: "Sept 2024 – Oct 2024",
    color: "bg-blue-500",
    textColor: "text-blue-600 dark:text-blue-400",
    desc: "Contributed to the club's official website as an open source collaborator. Built and improved components using React.js and Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS", "Git", "Collaboration"]
  },
  {
    id: "intern-junoon",
    title: "Social Internship",
    company: "Junoon Foundation",
    date: "May 2024 – June 2024",
    color: "bg-pink-500",
    textColor: "text-pink-600 dark:text-pink-400",
    desc: "Contributed to community-driven initiatives and on-ground NGO operations. Gained exposure to social impact work, coordination, and real-world problem solving.",
    tags: ["NGO Operations", "Community Service", "Coordination"]
  }
];

const Experience = () => {
  return (
    <m.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 px-6 md:px-20 max-w-4xl mx-auto text-left"
    >
      <h2 className="text-4xl font-bold mb-12">
        My <span className="text-[var(--accent)]">Experience</span>
      </h2>

      <div className="relative border-l-2 border-gray-800 ml-4 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative pl-8">
            {/* Timeline Indicator Node */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${exp.color} ring-4 ring-[var(--bg-color)]`} />
            
            {/* Experience Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                  <p className="text-md text-emerald-500 dark:text-emerald-400 font-semibold">{exp.company}</p>
                </div>
                <span className={`text-xs md:text-sm font-mono ${exp.textColor} bg-gray-100 dark:bg-black/40 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800/80`}>
                  {exp.date}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                {exp.desc}
              </p>

              {/* Technologies Applied */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-[var(--accent)] bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </m.div>
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default Experience;
