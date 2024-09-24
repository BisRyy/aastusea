"use client";

import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ToggleTheme } from "../theme-toggle";
import Image from "next/image";

const DashboardNavbar = () => {
  return (
    <nav className="bg-background border-b border-border">
      <div className="flex justify-between items-center h-16 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-lg flex items-center">
            <Image
              src="/logo-light.png"
              alt="AASTUSEA"
              width={600}
              height={600}
              className="object-cover bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border"
            />
            AASTU
            <span className="text-transparent px-1 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              SEA
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ToggleTheme />
          <UserButton afterSwitchSessionUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
