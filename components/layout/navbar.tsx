"use client";
import { ArrowRight, ChevronsDown, Github, Menu, MenuIcon } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "../theme-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/event",
    label: "Events",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/careers",
    label: "Career",
  },

  {
    href: "/learning",
    label: "Learning",
  },
  // {
  //   href: "/#projects",
  //   label: "Projects",
  // },
  // {
  //   href: "/#team",
  //   label: "Team",
  // },
  // {
  //   href: "/#faq",
  //   label: "FAQ",
  // },
  {
    href: "/#community",
    label: "Community",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Learn Continuously",
    description:
      "Offer trainings and workshops to expand students knowledge and development skills.",
  },
  {
    title: "Practice Effectively",
    description:
      "Facilitate hands-on projects and coding challenges to apply learning in real-world scenarios.",
  },
  {
    title: "Advance Careers",
    description:
      " Provide mentorship, resume support, and networking opportunities to help students secure job placements.",
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const path = usePathname();
  const currentPath = path.split("/")[1] || "home";
  return (
    <header
      className={cn(
        "shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card",
        className
      )}
    >
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/logo-light.png"
          alt="AASTUSEA"
          width={600}
          height={600}
          className="object-cover bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
        />
        AASTU
        <span className="text-transparent px-1 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          SEA
        </span>
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden gap-x-2">
        <div className=" lg:hidden">
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/dashboard" />
          </SignedIn>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <MenuIcon
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
              size={32}
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo-light.png"
                      alt="AASTUSEA"
                      width={600}
                      height={600}
                      className="object-cover bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
                    />
                    AASTU
                    <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                      SEA
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base hover:underline"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="mb-2" />
            <SheetFooter className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 w-full">
                <ToggleTheme className="w-full" />
              </div>
              <SignedIn>
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  size="sm"
                  variant="default"
                  aria-label="Dashboard"
                >
                  <Link
                    aria-label="Dashboard"
                    href="/dashboard"
                    className="flex items-center justify-between"
                  >
                    Dashboard
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </SignedIn>
              <SignedOut>
                <Button
                  asChild
                  size="sm"
                  variant="default"
                  aria-label="Sign In"
                >
                  <Link
                    aria-label="Sign In"
                    href="/dashboard"
                    className="flex items-center justify-between"
                  >
                    Sign In
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </SignedOut>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className={cn(
                    "text-base px-2 hover:underline",
                    currentPath === href.split("/")[1] && "underline"
                  )}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Our Mission
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/logo-full-light.png"
                  alt="AASTU SEA logo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-3 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex gap-x-2">
        <ToggleTheme />
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/dashboard" />
          <Button
            asChild
            size="sm"
            className=""
            variant="default"
            aria-label="Dashboard"
          >
            <Link aria-label="Dashboard" href="/dashboard">
              Dashboard
            </Link>
          </Button>
        </SignedIn>

        <SignedOut>
          <Button asChild size="sm" variant="default" aria-label="Sign In">
            <Link aria-label="Sign In" href="/dashboard">
              Sign In
            </Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};
