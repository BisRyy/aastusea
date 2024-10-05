"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { STAGGER_CHILD_VARIANTS } from "./intro";
import Image from "next/image";

export function NotionConnect({ next }: { next: () => void }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isConnectLoading, setIsConnectLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const inviteLink = process.env.NEXT_PUBLIC_NOTION_INVITE_LINK || "";
  const inviteLinkGenerated =
    process.env.NEXT_PUBLIC_NOTION_INVITE_LINK_GENERATED || "";

  const handleConnect = async () => {
    setIsConnectLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    window.open(inviteLinkGenerated, "_blank", "noopener,noreferrer");
    setIsConnected(true);
    setIsConnectLoading(false);
  };

  const handleLogin = async () => {
    setIsLoginLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    window.open(inviteLink, "_blank", "noopener,noreferrer");
    setIsLoggedIn(true);
    setIsLoginLoading(false);
  };

  return (
    <motion.div
      className="z-10 p-5"
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
          className="font-display text-xl font-bold text-foreground transition-colors sm:text-2xl md:text-3xl flex items-center gap-2 flex-col"
          variants={STAGGER_CHILD_VARIANTS}
        >
          <Image src="/logos/notion.png" alt="Notion" width={64} height={64} />
          Join Our Notion Workspace
        </motion.h1>
        <motion.p
          className="max-w-md text-accent-foreground/80 transition-colors sm:text-lg"
          variants={STAGGER_CHILD_VARIANTS}
        >
          AASTUSEA uses Notion to manage projects, notes, and more. Create a new
          account and join Our Team Space.
        </motion.p>
        <div className="flex w-full gap-4 flex-col sm:flex-row">
          <Button
            className={`flex-1 ${isLoggedIn ? "opacity-50" : ""}`}
            onClick={handleLogin}
          >
            {isLoginLoading
              ? "Logging In..."
              : isLoggedIn
              ? "Logged In to Notion"
              : "Log In to Notion"}
          </Button>
          <Button
            className={`flex-1 ${isConnected ? "opacity-50" : ""}`}
            onClick={handleConnect}
          >
            {isConnectLoading
              ? "Generating Invite Link..."
              : isConnected
              ? "Generated Invite Link"
              : "Join AASTUSEA Notion Team Space"}
          </Button>
          {isConnected && (
            <Button className="flex-1" onClick={next}>
              Next
            </Button>
          )}
        </div>
        {/* {isConnected && (
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-accent-foreground/80">
              Here is your invite link to the AASTUSEA Notion Team Space:
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                readOnly
                value={inviteLinkGenerated}
                className="w-full px-2 py-1 border rounded-md text-sm"
              />
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(inviteLinkGenerated);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        )} */}
        <p className="text-sm ">
          Don&apos;t have a Notion account?{" "}
          <a
            href={inviteLink}
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
