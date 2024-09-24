import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="secondary"
      className="w-full justify-start"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-5" />
        <span className="hidden">Dark</span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun className="size-5" />
        <span className="hidden">Light</span>
      </div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
