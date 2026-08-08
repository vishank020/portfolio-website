import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

// Context Imports
import { ThemeProvider } from './components/ThemeProvider';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Page Imports
import Home from './pages/home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Animated Routes Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function AppContent() {
  // Cursor tracking for spotlight glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <LazyMotion features={domAnimation}>
        {/* The noise texture */}
        <div className="theme-noise" />
        
        {/* Main wrapper using semantic tailwind classes */}
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 relative z-0">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </LazyMotion>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="catppuccin" defaultMode="dark">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
