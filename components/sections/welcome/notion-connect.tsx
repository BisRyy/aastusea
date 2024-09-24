"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { STAGGER_CHILD_VARIANTS } from "./intro";
import Image from "next/image";

export function NotionConnect({ next }: { next: () => void }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    window.open(
      "https://www.notion.so/team/107e0a59-bdbf-8172-8576-0042f970ca63/join?utm_source=campus_leaders&utm_medium=campus_leaders&utm_campaign=bisratk",
      "_blank",
      "noopener,noreferrer"
    );
    setIsConnected(true);
    setIsLoading(false);
  };

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
          Join Our
          <Image src="/logos/notion.png" alt="Notion" width={32} height={32} />
          <span className="font-bold tracking-tighter">Notion</span> Workspace
        </motion.h1>
        <motion.p
          className="max-w-md text-accent-foreground/80 transition-colors sm:text-lg"
          variants={STAGGER_CHILD_VARIANTS}
        >
          AASTUSEA uses Notion to manage projects, notes, and more. Create a new
          account and join Our Team Space.
        </motion.p>
        <div className="flex w-full gap-4">
          <Button
            className={`flex-1 ${isConnected ? "opacity-50" : ""}`}
            onClick={handleConnect}
          >
            {isLoading
              ? "Generating Invite Link..."
              : isConnected
              ? "Joined AASTUSEA Notion Team Space"
              : "Join AASTUSEA Notion Team Space"}
          </Button>
          {isConnected && (
            <Button className="flex-1" onClick={next}>
              Next
            </Button>
          )}
        </div>
        <p className="text-sm ">
          Don&apos;t have a Notion account?{" "}
          <a
            href="https://ntn.so/bisratk?utm_source=campus_leaders&utm_medium=campus_leaders&utm_campaign=bisratk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Create one here
          </a>
        </p>

        {/* <Button
          variant="ghost"
          className="text-sm text-muted-foreground hover:text-foreground"
          onClick={() => next()}
        >
          Skip
        </Button> */}
      </motion.div>
    </motion.div>
  );
}
