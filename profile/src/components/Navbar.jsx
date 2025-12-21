import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 glass-card rounded-none border-t-0 border-x-0">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter mono-font"
          onClick={closeMenu}
        >
          Vishank Singh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
          <NavLink to="/education" className={navLinkClass}>Education</NavLink>
          <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Me</NavLink>
          {/* <NavLink to="/contact" className={navLinkClass}>Contact</NavLink> */}

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-[#16814f] hover:scale-110 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-xl p-2"
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMenu}
      />

      {/* Mobile Slide Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 glass-card z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="mono-font text-lg">Menu</span>
          <button onClick={closeMenu} aria-label="Close Menu">
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 text-sm font-medium">
          <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={navLinkClass}>Projects</NavLink>
          <NavLink to="/experience" onClick={closeMenu} className={navLinkClass}>Experience</NavLink>
          <NavLink to="/resume" onClick={closeMenu} className={navLinkClass}>Resume</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>About Me</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>Contact</NavLink>

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-[#16814f]"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>Select Theme</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
