"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/20 text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
    >
      {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
