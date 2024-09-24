"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { STAGGER_CHILD_VARIANTS } from "./intro";
import Image from "next/image";
import { LinkedInIcon } from "@/components/ui/icon";

export function LinkedInConnect({
  next,
  finish,
}: {
  next: () => void;
  finish: () => void;
}) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);

  const handleFollow = async () => {
    setIsFollowLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    window.open("https://www.linkedin.com/company/aastusea", "_blank");
    setIsFollowed(true);
    setIsFollowLoading(false);
  };

  const handleAddExperience = async () => {
    setIsAddLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    window.open("https://www.linkedin.com/in/", "_blank");
    setIsAdded(true);
    setIsAddLoading(false);
  };

  const listItems = [
    "Go to your LinkedIn profile and click on 'Add profile section', then choose 'Experience'",
    "Enter 'AASTU Software Engineering Association' as the organization",
    "For your title, choose a position you'd like to work on professionally and add 'Associate' to it (e.g., 'Software Engineer Associate or DevOps Engineer Associate')",
    "Set the start date, add a brief description of your role, and click 'Save'",
  ];

  return (
    <motion.div
      className="z-10"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <motion.div
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      >
        <motion.h1
          className="font-display text-2xl font-bold text-foreground transition-colors md:text-3xl flex items-center gap-2"
          variants={STAGGER_CHILD_VARIANTS}
        >
          Add AASTUSEA to Your <LinkedInIcon className="w-5 h-5" />
          <span className="font-bold tracking-tighter">LinkedIn</span>{" "}
          Experience
        </motion.h1>
        <motion.p
          className="max-w-md text-accent-foreground/80 transition-colors sm:text-lg"
          variants={STAGGER_CHILD_VARIANTS}
        >
          Showcase your involvement with AASTUSEA on your professional profile
          by following these steps:
        </motion.p>
        <motion.ol
          className="text-left space-y-4 w-full max-w-xl"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-2 bg-secondary/50 rounded-lg p-4 shadow-sm transition-all duration-200 hover:shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, type: "spring" },
                },
              }}
            >
              <span className="font-bold text-primary mr-2">{index + 1}.</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ol>
        <div className="flex gap-4 flex-col sm:flex-row w-full max-w-md">
          <Button
            className={`w-full ${
              isFollowed || isFollowLoading ? "opacity-50" : ""
            }`}
            onClick={handleFollow}
          >
            {isFollowed
              ? "Followed AASTUSEA"
              : isFollowLoading
              ? "Following..."
              : "Follow AASTUSEA on LinkedIn"}
          </Button>
          <Button
            className={`w-full ${isAdded || isAddLoading ? "opacity-50" : ""}`}
            onClick={handleAddExperience}
          >
            {isAdded
              ? "Opened LinkedIn"
              : isAddLoading
              ? "Opening LinkedIn..."
              : "Open LinkedIn to Add Experience"}
          </Button>
          {isFollowed && isAdded && (
            <Button className="w-full" onClick={() => next()}>
              Next
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          className="text-sm text-muted-foreground hover:text-foreground"
          onClick={() => next()}
        >
          Skip
        </Button>
      </motion.div>
    </motion.div>
  );
}
