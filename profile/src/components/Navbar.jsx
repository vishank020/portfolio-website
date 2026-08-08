import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes, FaPalette } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const navLinkClass = ({ isActive }) =>
  `nav-link relative py-1 ${isActive ? "text-primary font-semibold nav-link-active" : "text-muted-foreground hover:text-primary transition-colors"}`;

const baseNavClass = "text-muted-foreground hover:text-primary transition-colors text-left py-1";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, resolvedMode, toggleMode, setTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    navigate('/');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const cycleTheme = () => {
    const themes = ["catppuccin", "nord", "onedark"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <Link to="/" className="text-2xl font-bold tracking-tighter mono-font text-foreground" onClick={closeMenu}>
          Vishank Singh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <button type="button" onClick={() => scrollToSection('projects')} className={baseNavClass}>Projects</button>
          <button type="button" onClick={() => scrollToSection('experience')} className={baseNavClass}>Experience</button>
          <button type="button" onClick={() => scrollToSection('education')} className={baseNavClass}>Education</button>
          <button type="button" onClick={() => scrollToSection('about')} className={baseNavClass}>About Me</button>
          <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
          
          <div className="flex items-center gap-2 border-l border-border pl-6 ml-2">
            <button
              type="button"
              onClick={cycleTheme}
              aria-label="Cycle theme"
              className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:scale-110 hover:bg-secondary/80 transition shadow-sm"
              title={`Current Theme: ${theme}`}
            >
              <FaPalette size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={toggleMode}
              aria-label="Toggle mode"
              className="p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:scale-110 hover:bg-secondary/80 transition shadow-sm"
            >
              {resolvedMode === "dark" ? <FaSun size={16} aria-hidden="true" className="text-yellow-500" /> : <FaMoon size={16} aria-hidden="true" className="text-primary" />}
            </button>
          </div>
        </div>

        <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" className="md:hidden text-xl p-2 text-foreground">
          <FaBars aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile Backdrop */}
      <button
        type="button"
        className={`fixed inset-0 z-40 bg-overlay backdrop-blur-sm transition-opacity border-none outline-none w-full h-full cursor-default ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        aria-label="Close menu"
      />

      {/* Mobile Slide Menu */}
      <aside className={`fixed top-0 right-0 h-full w-72 bg-card border-l border-border shadow-2xl z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-6 border-b border-border">
          <span className="mono-font text-lg text-foreground">Menu</span>
          <button type="button" onClick={closeMenu} aria-label="Close menu" className="text-muted-foreground hover:text-foreground p-2"><FaTimes aria-hidden="true" /></button>
        </div>
        <nav className="flex flex-col gap-6 p-6 text-sm font-medium">
          <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <button type="button" onClick={() => scrollToSection('projects')} className={baseNavClass}>Projects</button>
          <button type="button" onClick={() => scrollToSection('experience')} className={baseNavClass}>Experience</button>
          <button type="button" onClick={() => scrollToSection('education')} className={baseNavClass}>Education</button>
          <button type="button" onClick={() => scrollToSection('about')} className={baseNavClass}>About Me</button>
          <NavLink to="/resume" onClick={closeMenu} className={navLinkClass}>Resume</NavLink>
          
          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
            <button
              type="button"
              onClick={() => { cycleTheme(); }}
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition"
            >
              <FaPalette aria-hidden="true" />
              <span className="capitalize">Theme: {theme}</span>
            </button>
            <button
              type="button"
              onClick={() => { toggleMode(); }}
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition"
            >
              {resolvedMode === "dark" ? <FaSun className="text-yellow-500" aria-hidden="true" /> : <FaMoon className="text-primary" aria-hidden="true" />}
              <span className="capitalize">Mode: {resolvedMode}</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;