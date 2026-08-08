import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const systemLogs = [
  "guest@vishank-dev:~$ whoami --skills",
  "Loading neural modules... SUCCESS",
  "Fetching technical stack...",
  "",
  "[LANGUAGES & FRAMEWORKS]",
  "  > JavaScript, TypeScript, Python, Java",
  "  > React.js, Angular 18, Node.js, Spring Boot 3",
  "",
  "[AI & MLOPS]",
  "  > LangChain, LangGraph, LLaMA, Groq API",
  "  > RAG pipelines, ChromaDB, FastAPI",
  "",
  "[DATABASES & DEVOPS]",
  "  > PostgreSQL, MongoDB, MinIO",
  "  > Docker, GitHub Actions, Vercel, Render",
  "",
  "System ready. Type 'help' for navigation commands."
];

const TerminalWidget = () => {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Run boot sequence on mount
  useEffect(() => {
    let timer;
    let currentLine = 0;
    
    const printLine = () => {
      if (currentLine < systemLogs.length) {
        setHistory((prev) => [...prev, { id: `boot-${currentLine}`, text: systemLogs[currentLine], isCmd: false }]);
        currentLine++;
        timer = setTimeout(printLine, 120);
      }
    };
    
    timer = setTimeout(printLine, 0);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom of the terminal window internally (NOT the whole page)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = inputVal.trim().toLowerCase();
      const newHistory = [
        ...history,
        { id: `cmd-${Date.now()}-${Math.random()}`, text: `guest@vishank-dev:~$ ${inputVal}`, isCmd: true }
      ];
      
      if (command === "clear") {
        setHistory([]);
        setInputVal("");
        return;
      }

      let response = "";
      switch (command) {
        case "help":
          response = 
            "Available commands:\n" +
            "  about      - Scroll to About section\n" +
            "  experience - Scroll to Experience section\n" +
            "  education  - Scroll to Education section\n" +
            "  projects   - Scroll to Projects section\n" +
            "  resume     - Navigate to Resume page\n" +
            "  contact    - Navigate to Contact page\n" +
            "  clear      - Clear terminal logs";
          break;
        case "about":
          response = "Scrolling to About section...";
          setTimeout(() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
          break;
        case "experience":
          response = "Scrolling to Experience section...";
          setTimeout(() => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
          break;
        case "education":
          response = "Scrolling to Education section...";
          setTimeout(() => {
            document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
          break;
        case "projects":
          response = "Scrolling to Projects section...";
          setTimeout(() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
          break;
        case "resume":
          response = "Navigating to Resume page...";
          setTimeout(() => {
            navigate('/resume');
          }, 150);
          break;
        case "contact":
          response = "Navigating to Contact page...";
          setTimeout(() => {
            navigate('/contact');
          }, 150);
          break;
        case "skills":
          response = "Scrolling to skills (About) section...";
          setTimeout(() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
          break;
        case "":
          response = "";
          break;
        default:
          response = `Command not found: '${command}'. Type 'help' to see list of valid commands.`;
      }

      if (response) {
        newHistory.push({ id: `resp-${Date.now()}-${Math.random()}`, text: response, isCmd: false });
      }
      
      setHistory(newHistory);
      setInputVal("");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl border border-border overflow-hidden bg-black/90 font-mono text-xs md:text-sm text-green-400">
      {/* Window Title Bar */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-muted-foreground font-semibold text-2xs md:text-xs">visitor@vishank-sandbox: ~</span>
        <div className="w-10" />
      </div>

      {/* Terminal Screen Console */}
      <div ref={containerRef} className="p-4 h-[340px] overflow-y-auto flex flex-col gap-2 text-left selection:bg-green-700 selection:text-white scrollbar-thin scrollbar-thumb-gray-800">
        {history.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap leading-relaxed">
            {line.isCmd ? (
              <span className="text-emerald-300">{line.text}</span>
            ) : (
              <span className="text-green-400">{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Input Console */}
      <div className="p-3 bg-gray-950/80 flex items-center gap-2 border-t border-gray-900">
        <span className="text-emerald-400 shrink-0 select-none">guest@vishank-dev:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-green-400 flex-grow font-mono text-xs md:text-sm focus:ring-0 p-0"
          placeholder="type 'help'..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-label="Terminal command input"
        />
      </div>
    </div>
  );
};

export default TerminalWidget;
