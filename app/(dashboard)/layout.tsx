"use client";

import DashboardNavbar from "@/components/layout/dashboard-navbar";
import Sidebar from "@/components/layout/sidebar";
import { Button } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={cn("flex flex-col antialiased h-screen overflow-hidden")}>
      <DashboardNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div
          className={`lg:pl-2 lg:pt-2 flex-1 overflow-y-auto transition-all ${
            isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
