"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, University } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="w-full h-[40rem] dark:bg-background bg-white relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)]"></div>

      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>News</Badge>
            </span>
            <span> Members registration will start soon! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              AASTU
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Software Engineers
              </span>
              Association
            </h1>
          </div>

          <p className="z-20 max-w-screen-sm mx-auto text-xl text-muted-foreground">
            We are a community of software engineers who are passionate about
            technology and innovation. We are committed to empowering the next
            generation of software engineers.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-4/6 md:w-1/4 font-bold group/arrow">
              Apply Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="https://t.me/aastusea" target="_blank">
                Telegram Community
              </Link>
            </Button>
          </div>

          <div className="container absolute top-28 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>

        {/* <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={theme === "light" ? "/logo-full-light.png" : "/logo-full.png"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div> */}
      </div>
    </section>
  );
};
