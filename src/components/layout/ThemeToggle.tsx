import { useState, useEffect } from "react";
import { CheckIcon, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMounted } from "@/hooks/use-mounted";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const setTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  const mounted = useMounted();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  return mounted ? (
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
          onClick={() => setTheme("light")}
          className="flex items-center justify-between"
        >
          Light {theme === "light" && <CheckIcon className="scale-50" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center justify-between"
        >
          Dark {theme === "dark" && <CheckIcon className="scale-50" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center justify-between"
        >
          System {theme === "system" && <CheckIcon className="scale-50" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <div />
  );
}
