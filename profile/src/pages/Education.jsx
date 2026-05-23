import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const Education = () => {
    const powerBiLink = `${process.env.PUBLIC_URL}/powerBI.pdf`;
    const tutorialLink = `${process.env.PUBLIC_URL}/SpokenTutorial.pdf`;

    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 md:py-24 px-6 md:px-20 max-w-4xl mx-auto text-left"
        >
            {/* ===== Education ===== */}
            <h2 className="text-4xl font-bold mb-10">Education</h2>

            {/* Timeline wrapper */}
            <div className="relative border-l-2 border-gray-800 ml-4 space-y-12 mb-16">
                {[
                    {
                        degree: "B.Tech in AI & ML",
                        institution: "Thadomal Shahani Engineering College", 
                        date: "2023 – 2027 | 3rd Year",
                        grade: "CGPA: 7.73",
                        color: "bg-pink-500",
                        textColor: "text-pink-600 dark:text-pink-400",
                        desc: "Focus areas include Compiler Design, Agentic AI, Machine Learning, and Competitive Programming. Planning higher studies via GATE / Europe.",
                        tags: ["Agentic AI", "Machine Learning", "Compiler Design", "Competitive Programming"]
                    },
                    {
                        degree: "HSC",
                        institution: "Divine Providence High School and Junior College",
                        date: "2022",
                        grade: "Score: 66.50%",
                        color: "bg-blue-500",
                        textColor: "text-blue-600 dark:text-blue-400",
                        desc: "Completed Higher Secondary Certificate with focus on Science and Mathematics streams.",
                        tags: ["Physics", "Chemistry", "Mathematics"]
                    },
                    {
                        degree: "SSC",
                        institution: "St. Mary's English High School",
                        date: "2020",
                        grade: "Score: 77.80%",
                        color: "bg-emerald-500",
                        textColor: "text-emerald-600 dark:text-emerald-400",
                        desc: "Secondary School Certificate curriculum.",
                        tags: ["General Science", "Secondary Education"]
                    }
                ].map((edu, idx) => (
                    <div key={idx} className="relative pl-8">
                        {/* Timeline Node dot */}
                        <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${edu.color} ring-4 ring-[var(--bg-color)]`} />
                        
                        {/* Education Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="glass-card p-6"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                                    <p className="text-md text-emerald-500 dark:text-emerald-400 font-semibold">{edu.institution}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center">
                                    <span className="text-xs font-mono text-pink-500 bg-pink-500/10 px-2.5 py-0.5 rounded border border-pink-500/20">
                                        {edu.grade}
                                    </span>
                                    <span className={`text-xs md:text-sm font-mono ${edu.textColor} bg-gray-100 dark:bg-black/40 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800/80`}>
                                        {edu.date}
                                    </span>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                                {edu.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {edu.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-xs font-mono text-[var(--accent)] bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* ===== Certifications ===== */}
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                    href={powerBiLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="glass-card p-5 flex items-center gap-4 group no-underline hover:text-inherit"
                >
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shrink-0">
                        <FaFilePdf size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[var(--accent)] transition-colors">PowerBI Certification</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Udemy · Data visualization
                        </p>
                    </div>
                </a>

                <a 
                    href={tutorialLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="glass-card p-5 flex items-center gap-4 group no-underline hover:text-inherit"
                >
                    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                        <FaFilePdf size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[var(--accent)] transition-colors">Python Certification</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            IIT-Bombay · NumPy, Pandas, Matplotlib
                        </p>
                    </div>
                </a>
            </div>
        </motion.div>
    );
};

export default Education;
