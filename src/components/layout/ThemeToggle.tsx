import { useState, useEffect } from "react";
import { CheckIcon, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light",
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            size={18}
          />
          <Moon
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            size={18}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setThemeState("theme-light")}
          className="flex items-center justify-between"
        >
          Light {theme === "theme-light" && <CheckIcon className="scale-50" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setThemeState("dark")}
          className="flex items-center justify-between"
        >
          Dark {theme === "dark" && <CheckIcon className="scale-50" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setThemeState("system")}
          className="flex items-center justify-between"
        >
          System {theme === "system" && <CheckIcon className="scale-50" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
