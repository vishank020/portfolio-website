import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const Resume = () => {
  // PDF must be placed inside /public
  const resumeLink = "/Resume.pdf";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen pt-28 px-6 md:px-20 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h2 className="text-4xl font-bold">
          My <span className="text-[#16814f]">Resume</span>
        </h2>

        <a
          href={resumeLink}
          download
          aria-label="Download Resume PDF"
          className="btn-primary flex items-center gap-2 no-underline"
        >
          <FaDownload aria-hidden="true" /> Download PDF
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4 text-[#16814f]">Education</h3>
            <div className="border-l-2 border-gray-700 pl-4">
              <p className="font-bold text-grey-700">B.Tech in AI & ML</p>
              <p className="text-sm text-gray-400">2023 – 2027</p>
              <p className="text-xs text-pink-500">CGPA: 7.65 (Current)</p>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4 text-[#16814f]">
              Certifications
            </h3>
            <ul className="text-sm space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <FaFilePdf
                  className="mt-1 text-red-500"
                  aria-hidden="true"
                />
                Google Data Analytics
              </li>
              <li className="flex items-start gap-2">
                <FaFilePdf
                  className="mt-1 text-red-500"
                  aria-hidden="true"
                />
                NVIDIA AI/ML Fundamentals
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: PDF Preview */}
        <div className="lg:col-span-2">
          <div className="glass-card overflow-hidden relative h-[80vh] min-h-[520px]">

            {/* View Fullscreen Button (Top-Right Corner) */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="
        absolute top-4 right-4 z-20
        bg-white/90 backdrop-blur-sm
        text-black text-sm font-semibold
        px-4 py-2 rounded-full
        flex items-center gap-2
          shadow-md hover:bg-white transition
        "
            >
              <FaExternalLinkAlt size={14} aria-hidden="true" />
              View Fullscreen
            </a>

            {/* Embedded PDF Preview */}
            <iframe
              src={`${resumeLink}#toolbar=0`}
              className="w-full h-full border-none"
              title="Resume PDF Preview"
            />
          </div>

          <p className="text-center text-gray-500 text-sm mt-4 italic">
            If the preview doesn’t load, use the download button above.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
