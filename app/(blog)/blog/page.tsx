import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { fetchBlogs } from "@/lib/notion";
import Image from "next/image";
import LoadMoreButton from "./button";

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export default async function BentoGridDemo() {
  const posts = await fetchBlogs();

  if (!posts)
    return (
      <section className="py-24 flex items-center justify-center">
        <p className="text-center">No blog posts found.</p>
      </section>
    );

  return (
    <section className="container mx-auto py-12" id="blogs">
      <h1 className="text-3xl font-bold mb-8 text-center">Our popular blogs</h1>
      <p className="text-lg text-center text-gray-600 mb-10 dark:text-gray-400">
        Read our latest blog posts and stay up-to-date with the latest trends.
      </p>
      <BentoGrid className="max-w-4xl mx-4 md:mx-auto">
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
              <div className="relative w-full h-full min-h-44">
                <Image
                  src={
                    (post.properties.Cover as any)?.files[0]?.file?.url ||
                    "/logo-light.png"
                  }
                  alt={
                    (post.properties.Title as any)?.title[0]?.plain_text ||
                    "AASTU Software Engineers Association AASTUSEA Blog"
                  }
                  className="rounded-lg object-cover border dark:border-white/[0.2] border-black/20 "
                  fill
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
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
