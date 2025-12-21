import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const Education = () => {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-28 px-6 md:px-20 max-w-4xl mx-auto"
        >
            {/* ===== Education ===== */}
            <h2 className="text-4xl font-bold mb-10">Education</h2>

            {/* ONE timeline wrapper */}
            <div className="relative border-l-2 border-gray-800 ml-4 space-y-12 mb-16">

                {/* Undergraduate */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 bg-pink-500 w-4 h-4 rounded-full" />

                    <h3 className="text-2xl font-bold">B.Tech in AI & ML</h3>
                    <p className="text-pink-500 font-mono mb-2">
                        2023 – 2027 | 3rd Year (5th Semester)
                    </p>
                    <p className="text-gray-400">
                        CGPA: 7.65 <br />
                        Focus areas include Compiler Design, Agentic AI, Machine Learning,
                        and Competitive Programming. Planning higher studies via GATE / Europe.
                    </p>
                </div>

                {/* HSC */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 bg-blue-500 w-4 h-4 rounded-full" />

                    <h3 className="text-2xl font-bold">HSC</h3>
                    <p className="text-blue-500 font-mono mb-2">
                        Divine Providence High School and Junior College | 2022
                    </p>
                    <p className="text-gray-400">
                        Score: 66.50%
                    </p>
                </div>

                {/* SSC */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 bg-[#16814f] w-4 h-4 rounded-full" />

                    <h3 className="text-2xl font-bold">SSC</h3>
                    <p className="text-[#16814f] font-mono mb-2">
                        St. Mary's English High School | 2020
                    </p>
                    <p className="text-gray-400">
                        Score: 77.80%
                    </p>
                </div>

            </div>



            {/* ===== Certifications ===== */}
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>

            <div className="grid gap-4">
                <div className="glass-card p-5 flex items-center gap-4">
                    <FaFilePdf className="text-red-500 text-xl shrink-0" />
                    <div>
                        <p className="font-semibold">Google Data Analytics</p>
                        <p className="text-sm text-gray-400">
                            Coursera · Data analysis, visualization, SQL
                        </p>
                    </div>
                </div>

                <div className="glass-card p-5 flex items-center gap-4">
                    <FaFilePdf className="text-red-500 text-xl shrink-0" />
                    <div>
                        <p className="font-semibold">NVIDIA AI/ML Fundamentals</p>
                        <p className="text-sm text-gray-400">
                            NVIDIA · Neural networks, GPU computing basics
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
