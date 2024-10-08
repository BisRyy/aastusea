import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";

export default function TimelineDemo() {
  const data = [
    {
      title: "Foundation",
      subtitle: "March 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            We started as a group of students who wanted to learn more about
            software engineering.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Established AASTUSEA
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ First meeting held
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ First event organized in partnership with Efuye Gela
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/membership/landing-light.png"
              alt="hero template"
              width={1000}
              height={1000}
              className="dark:hidden rounded-lg object-cover aspect-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/membership/landing-dark.png"
              alt="hero template"
              width={1000}
              height={1000}
              className="rounded-lg object-cover aspect-auto w-full hidden dark:block"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
