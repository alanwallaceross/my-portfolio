"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-8 flex items-center p-3 transition-colors duration-300"
      aria-label="light"
    >
      {theme === "dark" ? (
        <MoonIcon className="text-yellow-100">
          <span className="sr-only">Click to turn on night mode</span>
        </MoonIcon>
      ) : (
        <SunIcon className="text-yellow-500">
          <span className="sr-only">Click to turn on day mode</span>
        </SunIcon>
      )}
    </button>
  );
};

export default DarkModeToggle;
