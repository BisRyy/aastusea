import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export const ToggleTheme = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="secondary"
      className={className}
    >
      <Moon className="size-5 dark:hidden" />
      <Sun className="size-5 hidden dark:block" />
    </Button>
  );
};
