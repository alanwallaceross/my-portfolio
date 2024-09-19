"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

console.log(typeof window);

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    console.log(theme);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  // Check user's theme preference from localStorage or system settings
  // useLayoutEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   if (storedTheme) {
  //     setIsDarkMode(storedTheme === "dark");
  //     document.documentElement.classList.toggle("dark", storedTheme === "dark");
  //   } else {
  //     const systemPrefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;
  //     setIsDarkMode(systemPrefersDark);
  //     document.documentElement.classList.toggle("dark", systemPrefersDark);
  //   }
  // }, []);

  // Toggle between dark and light modes
  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
    // const newTheme = isDarkMode === "light" ? "dark" : "light";
    // setIsDarkMode(newTheme);
    // document.documentElement.classList.toggle("dark", isDarkMode === "dark");
    // localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-8 flex items-center p-3 transition-colors duration-300 focus:outline-none"
    >
      {theme === "dark" ? (
        <MoonIcon className="text-yellow-100" />
      ) : (
        <SunIcon className="text-yellow-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;
