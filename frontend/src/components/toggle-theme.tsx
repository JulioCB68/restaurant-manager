"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "./ui/toggle";

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  function handleDarkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Toggle
        variant="outline"
        size="sm"
        onClick={handleDarkMode}
        className="cursor-pointer"
      >
        <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Toggle>
    </>
  );
}
