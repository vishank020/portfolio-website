import React from 'react';
import { m } from 'framer-motion';

const experiences = [
  {
    id: "intern-rusaka",
    title: "Backend Developer Intern",
    company: "Rusaka Technologies",
    date: "Dec 2025 – Jan 2026",
    bullets: [
      "Built a SEBI-compliant API extraction pipeline for live stock market data (extraction → DB storage → WhatsApp-app rerouting).",
      "Built a separate backend for an astrology-platform app handling profile creation and media posts."
    ]
  },
  {
    id: "volunteer-tcet",
    title: "Contributor",
    company: "TCET ACM SIGAI Club",
    date: "Sep 2024 – Oct 2024",
    bullets: [
      "Contributed to the official club website as an open source collaborator.",
      "Built and improved components using React.js and Tailwind CSS."
    ]
  }
];

const Experience = () => {
  return (
    <m.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-left"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
        Experience
      </h2>

      <div className="relative border-l border-border ml-3 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-10">
            {/* Timeline Indicator Node */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            {/* Experience Content (Clean text, no bulky cards) */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-2">
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
              <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md w-fit">
                {exp.date}
              </span>
            </div>
            
            <ul className="list-disc list-outside text-muted-foreground leading-relaxed space-y-2 mt-4 ml-4">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-[0.95rem]">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default Experience;
