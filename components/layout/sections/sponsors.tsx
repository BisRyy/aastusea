"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import { useTheme } from "next-themes";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Crown",
    name: "Microsoft",
  },
  {
    icon: "Github",
    name: "Github",
  },
  {
    icon: "Ghost",
    name: "Notion",
  },
  {
    icon: "Puzzle",
    name: "Efuye Gela",
  },
  {
    icon: "Squirrel",
    name: "GDSC AASTU",
  },
];

export const SponsorsSection = () => {
  const { theme } = useTheme();
  return (
    <section id="sponsors" className="container mx-auto p-12 ">
      <h1 className="text-xl md:text-3xl font-bold mb-8 text-center">
        Our Partners
      </h1>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color={theme === "dark" ? "white" : "black"}
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
      {/* <div className="flex justify-center mt-20">
        <Button variant="default" className="text-lg md:text-xl">
          <Icon name="Heart" size={24} color="white" className="mr-2" />
          Become a sponsor
        </Button>
      </div> */}
    </section>
  );
};
