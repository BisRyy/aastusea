import {
  fetchBlogBySlug,
  fetchBlogs,
  fetchPageBlocks,
  notion,
} from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Work_Sans } from "next/font/google";
// import Script from "next/script"; // Removed unused import
import Comments from "./comment";
import { getDateStr } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await fetchBlogBySlug(params.slug);

  if (!post) return { title: slug };
  return {
    title: (post.properties.Title as any)?.title[0]?.plain_text || "",
    description: (post.properties.Description as any)?.rich_text[0]?.plain_text,
    keywords: (post.properties.Tags as any)?.multi_select.map(
      (tag: any) => tag.name
    ),
    openGraph: {
      title: (post.properties.Title as any)?.title[0]?.plain_text || "",
      description: (post.properties.Description as any)?.rich_text[0]
        ?.plain_text,
      type: "article",
      publishedTime: (post.properties.DatePublished as any)?.date.start,
      url: `https://aastu.software/blog/${slug}`,
      images: [
        {
          url: (post.properties.Cover as any)?.files[0]?.file?.url,
          alt: (post.properties.Title as any)?.title[0]?.plain_text || "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: (post.properties.Title as any)?.title[0]?.plain_text || "",
      description: (post.properties.Description as any)?.rich_text[0]
        ?.plain_text,
      site: "@ayoubkhial",
      creator: "@ayoubkhial",
      images: {
        url: (post.properties.Cover as any)?.files[0]?.file?.url,
        alt: (post.properties.Title as any)?.title[0]?.plain_text || "",
      },
    },
    alternates: {
      canonical: `https://aastu.software/blog/${slug}`,
    },
  };
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { shimmer, toBase64 } from "../page";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogBySlug(params.slug);
  const posts = await fetchBlogs();
  if (!post) {
    return <div>Post not found</div>;
  }

  let blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  // blocks.map((block) => {
  //   console.log(block.type);
  // });

  const html = await renderer.render(...blocks);

  return (
    <div>
      <div
        className={`prose-sm dark:prose-invert md:prose prose-img:max-h-96 flex flex-col items-center justify-center prose-img:mx-auto lg:prose-xl container py-16 ${worksans.className}`}
      >
        <Breadcrumb className="place-self-start items-start">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blogs</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="pt-10">
          {(post.properties.Title as any)?.title[0]?.plain_text || ""}
        </h1>
        <title className="hidden">
          {(post.properties.Title as any)?.title[0]?.plain_text || ""}
        </title>
        <div className="flex gap-2 flex-wrap place-self-start items-start pb-4">
          {(post.properties.Tags as any)?.multi_select.map((tag: any) => (
            <span
              key={tag.id}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          {post.properties.Author && (
            <div className="role">
              By {(post.properties.Author as any)?.people[0].name}
            </div>
          )}
          <div className="flex gap-4">
            {(post.properties.Estimate as any)?.number && (
              <div className="estimate">
                {(post.properties.Estimate as any)?.number} min read
              </div>
            )}
            •
            {(post.properties.DatePublished as any)?.date.start && (
              <div className="year">
                {getDateStr((post.properties.DatePublished as any)?.date.start)}
              </div>
            )}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        {(post.properties.Comment as any)?.checkbox && <Comments />}
      </div>
      <h2 className="font-manrope text-4xl font-bold text-center mb-14">
        Related Blogs
      </h2>
      {posts.length > 0 && (
        <BentoGrid className="max-w-4xl mx-4 md:mx-auto">
          {posts.slice(0, 3).map((post: any, i: number): any => (
            <BentoGridItem
              key={i}
              title={(post.properties.Title as any)?.title[0]?.plain_text}
              header={
                <div className="relative w-full h-full min-h-40 group-hover/bento:-translate-x-2 transition duration-200">
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
              link={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
            />
          ))}
        </BentoGrid>
      )}
    </div>
  );
}
