import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 animate-pulse"></div>
);

const TextSkeleton = ({ width }: { width: string }) => (
  <div
    className={`h-4 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 animate-pulse rounded`}
    style={{ width }}
  ></div>
);

export default function Loading() {
  return (
    <section className="py-24 ">
      <h2 className="font-manrope text-4xl font-bold text-center mb-14">
        Our popular blogs
      </h2>
      <BentoGrid className="max-w-4xl mx-4 md:mx-auto">
        {[0, 1, 2, 3, 4, 5, 6].map((item, i) => (
          <BentoGridItem
            key={i}
            title={<TextSkeleton width="70%" />}
            description={<TextSkeleton width="90%" />}
            header={<Skeleton />}
            className={i === 1 || i === 6 ? "md:col-span-2" : ""}
            link="#"
          />
        ))}
      </BentoGrid>
    </section>
  );
}
