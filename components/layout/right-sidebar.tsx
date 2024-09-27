import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const RightSidebar = ({ className }: { className?: string }) => {
  const importantLinks = [
    { href: "https://t.me/AASTUSEA", label: "Telegram" },
    { href: "https://www.linkedin.com/company/aastusea/", label: "LinkedIn" },
    { href: "https://www.ntn.so/bisratk", label: "Notion" },
  ];

  return (
    <div className={cn("max-w-64 flex flex-col gap-4", className)}>
      <Link href="https://ntn.so/bisratk">
        <Image
          src={"/ads/Notion1.png"}
          alt="Campus Leader Logo"
          height={1000}
          width={1000}
          className="rounded-md dark:invert"
        />
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <nav>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium border rounded-md text-bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="https://ntn.so/bisratk">
                  <Image
                    src={"/ads/Notion2.png"}
                    alt="Campus Leader Logo"
                    height={1000}
                    width={1000}
                    className="rounded-md dark:invert"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
