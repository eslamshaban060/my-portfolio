"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 w-100 h-[150px] bg-[var(--gradient-gold)] rounded bg-primary  text-xxl-center"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
