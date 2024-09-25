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
      <div className="flex items-center gap-2">
        {theme === "dark" ? (
          <Sun className="size-5" />
        ) : (
          <Moon className="size-5" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
