"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ToggleTheme } from "../theme-toggle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import RightSidebar from "./right-sidebar";
import { ExternalLinkIcon, LockIcon } from "lucide-react"; // Added import for ExternalLinkIcon and LockIcon
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Added import for Tooltip

const DashboardNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Events", path: "/events", external: false, locked: true },
    {
      name: "Workspace",
      path: "https://www.notion.so/aastusea?utm_source=campus_leaders&utm_medium=campus_leaders&utm_campaign=bisratk",
      external: true,
    },
    { name: "Community", path: "https://t.me/aastu_sea", external: true },
  ];

  return (
    <nav
      className={`bg-background border-b border-border sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center h-16 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-lg flex items-center">
            <Image
              src="/logo-light.png"
              alt="AASTUSEA"
              width={600}
              height={600}
              className="object-cover bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-8 h-8 md:w-9 md:h-9 mr-2 border"
            />
            <span className="hidden sm:inline">AASTU</span>
            <span className="hidden sm:inline text-transparent px-1 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              SEA
            </span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                {item.locked ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                          active={pathname === item.path}
                          style={{ opacity: 0.5 }}
                        >
                          {item.name}
                          <LockIcon className="ml-2 h-3 w-3" />
                        </NavigationMenuLink>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="text-xs ml-16 border border-border flex gap-2 bg-primary/80"
                        sideOffset={10}
                        align="start"
                        alignOffset={10}
                      >
                        <p>Coming Soon</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Link href={item.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === item.path}
                      target={item.external ? "_blank" : undefined}
                    >
                      {item.name}
                      {item.external && (
                        <ExternalLinkIcon className="ml-2 h-3 w-3" />
                      )}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* mobile */}
        <div className="flex items-center space-x-4">
          <ToggleTheme />
          <UserButton afterSwitchSessionUrl="/dashboard" />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-between h-full mb-4">
                <div className="py-4">
                  {navItems.map((item) =>
                    item.locked ? (
                      <div
                        key={item.path}
                        className="py-2 text-base font-medium transition-colors duration-200 opacity-50 flex items-center gap-2"
                      >
                        {item.name}
                        <LockIcon className="ml-2 h-3 w-3" />
                      </div>
                    ) : (
                      <Link
                        key={item.path}
                        href={item.path}
                        target={item.external ? "_blank" : undefined}
                        className={`flex items-center gap-2 py-2 text-base font-medium transition-colors duration-200 ${
                          pathname === item.path
                            ? "text-primary"
                            : "hover:text-primary"
                        }`}
                      >
                        {item.name}
                        {item.external && (
                          <ExternalLinkIcon className="ml-2 h-3 w-3" />
                        )}
                      </Link>
                    )
                  )}
                </div>
                <RightSidebar className="w-full mx-2" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
