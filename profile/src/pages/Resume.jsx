import React from "react";
import { m } from "framer-motion";
import { GraduationCap, Award, ExternalLink, FileText } from "lucide-react";

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1w0VfXwR7QKncp_XO4f50YIj-DC0BcInO/view?usp=sharing";
  const resumeEmbedLink = "https://drive.google.com/file/d/1w0VfXwR7QKncp_XO4f50YIj-DC0BcInO/preview";
  const powerBiLink = `${process.env.PUBLIC_URL}/powerBI.pdf`;
  const tutorialLink = `${process.env.PUBLIC_URL}/SpokenTutorial.pdf`;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      {/* Header */}
      <m.div variants={item} className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg">Detailed overview of my academic and technical journey.</p>
        </div>

        <a
          href={resumeLink}
          target="_blank"
          rel="noreferrer"
          aria-label="View Resume PDF"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2 no-underline group"
        >
          <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" /> 
          <span>View Full Resume</span>
        </a>
      </m.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Highlights) */}
        <m.div variants={item} className="lg:col-span-4 space-y-6">
          
          {/* Education Card */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 transition-colors relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            
            <div className="relative z-10 border-l-2 border-border pl-5 ml-3 space-y-1">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              <p className="font-bold text-lg leading-tight">B.Tech in AI & ML</p>
              <p className="text-sm font-medium text-muted-foreground">TCET, Mumbai</p>
              <p className="text-xs text-muted-foreground pt-1">2023 – 2027</p>
              <div className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                CGPA: 7.98 (Current)
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 transition-colors relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-3 relative z-10">
              <a 
                href={powerBiLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all group/link"
              >
                <div className="flex items-center gap-3">
                  <FileText size={16} className="text-red-500" />
                  <span className="text-sm font-medium">PowerBI</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover/link:text-primary transition-colors">Udemy</span>
              </a>

              <a 
                href={tutorialLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all group/link"
              >
                <div className="flex items-center gap-3">
                  <FileText size={16} className="text-red-500" />
                  <span className="text-sm font-medium">Python</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover/link:text-primary transition-colors">IIT Bombay</span>
              </a>
              
              <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-background/50 cursor-default opacity-80">
                <div className="flex items-center gap-3">
                  <Award size={16} className="text-muted-foreground" />
                  <span className="text-sm font-medium">FullStack Dev</span>
                </div>
                <span className="text-xs text-muted-foreground">Udemy</span>
              </div>
            </div>
          </div>
          
        </m.div>

        {/* Right Column (PDF Preview) */}
        <m.div variants={item} className="lg:col-span-8 relative">
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-[2.5rem] z-0" />
          
          <div className="bg-card border border-border rounded-[2rem] shadow-2xl overflow-hidden relative h-[70vh] min-h-[600px] z-10 p-2">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-muted/50">
              {/* View Fullscreen Button */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-6 z-20 bg-background/80 backdrop-blur-md border border-border text-foreground text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ExternalLink size={14} />
                Fullscreen
              </a>

              {/* Embedded PDF Preview */}
              <iframe
                src={resumeEmbedLink}
                className="w-full h-full border-none"
                title="Resume PDF Preview"
                allow="autoplay"
              />
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6 italic relative z-10">
            Trouble viewing? Use the Fullscreen button to open it natively in Google Drive.
          </p>
        </m.div>

      </div>
    </m.div>
  );
};

export default Resume;
