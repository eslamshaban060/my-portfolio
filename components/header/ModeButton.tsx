import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ModeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        style={{ borderRadius: "12px" }}
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
        className="w-9 h-9 rounded-lg dark:rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary  hover:border-primary transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );
};

export default ModeButton;
