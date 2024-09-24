"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Lock, InfoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize(); // Set initial state based on current window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navItems = [
    { name: "Learn", path: "/dashboard", requiredLevel: 1 },
    { name: "Build", path: "/profile", requiredLevel: 10 },
    { name: "Deploy", path: "/deploy", requiredLevel: 20 },
    { name: "Work", path: "/work", requiredLevel: 50 },
    { name: "Earn", path: "/earn", requiredLevel: 100 },
  ];

  return (
    <>
      <div
        className={`fixed top-32 -left-4 z-10 transition-transform transform ${
          isOpen ? "translate-x-64" : "translate-x-0"
        }`}
      >
        <Button
          className="pl-4 pr-1"
          variant="default"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronLeft className="w-6 h-6" />
          ) : (
            <ChevronRight className="w-6 h-6" />
          )}
        </Button>
      </div>
      <div
        className={`w-64 pb-20 h-screen bg-background text-foreground p-4 flex flex-col border border-r border-border fixed top-16 left-0 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="my-8 bg-gradient-to-r from-violet-600 to-indigo-600 relative rounded-lg p-6 shadow-lg text-center gap-3 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-primary via-black to-primary opacity-50"></div>
          <div className="relative z-10">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">
              Membership Level
            </span>
            <div className="flex items-center justify-center">
              <span className="text-5xl font-extrabold bg-gradient-to-b from-[#00E3B2] via-[#00E3B2] to-[#202C79] text-transparent bg-clip-text">
                1
              </span>
              <MembershipSign />
            </div>
          </div>
        </div>
        <nav className="flex-grow">
          {navItems.map((item) => (
            <div key={item.name} className="w-full mb-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                    <Button
                      variant={
                        pathname === item.path
                          ? "default"
                          : item.name === "Learn"
                          ? "ghost"
                          : "secondary"
                      }
                      className="w-full py-6 text-left text-lg flex items-center justify-between"
                      disabled={item.requiredLevel > 1}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      {item.requiredLevel > 1 && <Lock className="w-4 h-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className={`text-xs ml-16 border border-border flex gap-2  ${
                      item.requiredLevel > 1 ? "bg-primary/80" : "hidden"
                    }`}
                    sideOffset={10}
                    align="start"
                    alignOffset={10}
                  >
                    <MembershipSign size={10} />
                    <p>Membership Level {item.requiredLevel} is required.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

export const MembershipSign = ({ size = 15 }) => {
  const height = size * 1.73; // Maintain aspect ratio

  return (
    <svg
      className="ml-2"
      width={size}
      height={height}
      viewBox="0 0 15 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09218 25.1992H4.69694L6.09218 15.477H0.148438C0.148438 15.477 5.28294 6.50477 8.88267 0.199219H10.2779L8.88267 9.92144H14.8543L6.09218 25.1992Z"
        fill="url(#paint0_linear_3119_44267)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3119_44267"
          x1="7.50138"
          y1="0.199219"
          x2="7.50138"
          y2="35.1992"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.457304" stopColor="#00E3B2"></stop>
          <stop offset="0.871146" stopColor="#202C79"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};