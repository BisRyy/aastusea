import { fetchBlogs } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Blogs() {
  const posts = await fetchBlogs();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16">
      {posts.map((post: any) => (
        <article
          key={post.id}
          className=" shadow-md rounded-lg overflow-hidden"
        >
          <Link href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}>
          <Image
            src={post.properties.Cover.files[0]?.file?.url || "/logo-full.png"}
            width={300}
            height={400}
            alt="AASTU Software Engineers Associaltion"
          />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {post.properties.Title.title[0].plain_text}
              </h2>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
