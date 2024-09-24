"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
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
  }, []);

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
        className={`w-64 h-screen bg-background text-foreground p-4 flex flex-col border border-r border-border fixed top-16 left-0 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 shadow-lg text-center">
            <span className="text-5xl font-extrabold text-white">74</span>
            <span className="text-lg ml-2 text-white">+</span>
          </div>
          <p className="text-center mt-4 text-md text-gray-400">
            Membership Level
          </p>
        </div>

        <nav className="flex-grow">
          <Button
            variant="ghost"
            className="w-full justify-start text-left mb-2"
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-left mb-2"
          >
            Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-left mb-2"
          >
            Tasks
          </Button>
          {/* Add more navigation items here */}
        </nav>

        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start text-left">
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
