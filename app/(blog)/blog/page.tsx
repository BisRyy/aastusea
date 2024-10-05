import { cn } from "@/lib/utils";
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
import { fetchBlogs } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import LoadMoreButton from "./button";

export default async function BentoGridDemo() {
  const posts = await fetchBlogs();

  if (!posts)
    return (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );

  return (
    <section className="py-24 ">
      <h2 className="font-manrope text-4xl font-bold text-center mb-14">
        Our popular blogs
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {posts.map((post: any, i: number): any => (
          <BentoGridItem
            key={i}
            title={(post.properties.Title as any)?.title[0]?.plain_text}
            description={
              i === 1 || i === 6
                ? (post.properties.Description as any)?.rich_text[0]?.plain_text
                : ""
            }
            header={
              <div className="relative w-full h-full">
                <Image
                  src={
                    (post.properties.Cover as any)?.files[0]?.file?.url ||
                    "/logo-light.png"
                  }
                  alt={
                    (post.properties.Title as any)?.title[0]?.plain_text ||
                    "AASTU Software Engineers Association AASTUSEA Blog"
                  }
                  className="rounded-lg object-cover border"
                  fill
                />
              </div>
            }
            className={i === 1 || i === 6 ? "md:col-span-2" : ""}
            link={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
          />
        ))}
      </BentoGrid>
      <LoadMoreButton />
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
