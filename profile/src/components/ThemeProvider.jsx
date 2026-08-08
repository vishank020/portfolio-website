import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { themes, THEME_STORAGE_KEY, MODE_STORAGE_KEY } from "../lib/themes";

const ThemeContext = createContext(null);

function getSystemMode() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "catppuccin",
  defaultMode = "system",
}) {
  const [theme, setThemeState] = useState(defaultTheme);
  const [mode, setModeState] = useState(defaultMode);
  const [resolvedMode, setResolvedMode] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const resolveMode = useCallback((currentMode) => {
    if (currentMode === "system") return getSystemMode();
    return currentMode;
  }, []);

  const applyTheme = useCallback((nextTheme, nextMode) => {
    const root = document.documentElement;
    const resolved = resolveMode(nextMode);

    root.setAttribute("data-theme", nextTheme);
    root.setAttribute("data-mode", resolved);
    root.classList.toggle("dark", resolved === "dark");

    setResolvedMode(resolved);
  }, [resolveMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const storedMode = localStorage.getItem(MODE_STORAGE_KEY);

    const initialTheme = storedTheme && themes[storedTheme] ? storedTheme : defaultTheme;
    const initialMode = storedMode ?? defaultMode;

    setThemeState(initialTheme);
    setModeState(initialMode);
    applyTheme(initialTheme, initialMode);
    setMounted(true);
  }, [defaultTheme, defaultMode, applyTheme]);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme(theme, "system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode, theme, applyTheme]);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next, mode);
  }, [mode, applyTheme]);

  const setMode = useCallback((next) => {
    setModeState(next);
    localStorage.setItem(MODE_STORAGE_KEY, next);
    applyTheme(theme, next);
  }, [theme, applyTheme]);

  const toggleMode = useCallback(() => {
    const next = resolvedMode === "dark" ? "light" : "dark";
    setMode(next);
  }, [resolvedMode, setMode]);

  const value = useMemo(() => ({
    theme,
    mode,
    resolvedMode,
    setTheme,
    setMode,
    toggleMode,
  }), [theme, mode, resolvedMode, setTheme, setMode, toggleMode]);

  if (!mounted) {
    return (
      <ThemeContext.Provider value={value}>
        <div style={{ visibility: "hidden" }} aria-hidden>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
