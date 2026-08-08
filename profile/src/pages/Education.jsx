import React from 'react';
import { m } from 'framer-motion';

const education = [
  {
    id: "btech",
    title: "B.Tech in AI & ML",
    institution: "Thakur College of Engineering and Technology",
    date: "2023 – 2027",
    bullets: [
      "CGPA: 7.98",
      "Focus areas include Agentic AI, LLM Systems, Machine Learning, and Full-Stack Development."
    ]
  },
  {
    id: "hsc",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Divine Providence High School and Junior College",
    date: "2022",
    bullets: [
      "Score: 66.50%",
      "Focus on Science and Mathematics streams."
    ]
  },
  {
    id: "ssc",
    title: "Secondary School Certificate (SSC)",
    institution: "St. Mary's English High School",
    date: "2020",
    bullets: [
      "Score: 77.80%",
      "General Science and Secondary Education curriculum."
    ]
  }
];

const Education = () => {
  return (
    <m.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-left"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
        Education
      </h2>

      <div className="relative border-l border-border ml-3 space-y-12">
        {education.map((edu) => (
          <div key={edu.id} className="relative pl-8 md:pl-10">
            {/* Timeline Indicator Node */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-2">
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{edu.title}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
              </div>
              <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md w-fit">
                {edu.date}
              </span>
            </div>
            
            <ul className="list-disc list-outside text-muted-foreground leading-relaxed space-y-2 mt-4 ml-4">
              {edu.bullets.map((bullet, i) => (
                <li key={i} className="text-[0.95rem]">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default Education;
