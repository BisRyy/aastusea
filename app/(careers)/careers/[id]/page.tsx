import {
  fetchBlogBySlug,
  fetchBlogs,
  fetchPageBlocks,
  fetchPositionById,
  notion,
} from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Work_Sans } from "next/font/google";
import { getDateStr, shimmerDark } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const position = await fetchPositionById(id);

  if (!position) return { title: id };
  return {
    title:
      (position.properties.Title as any)?.title[0]?.plain_text || "AASTUSEA",
    description: (position.properties.Description as any)?.rich_text[0]
      ?.plain_text,
    keywords: (position.properties.Tags as any)?.multi_select.map(
      (tag: any) => tag.name
    ),
    openGraph: {
      title: (position.properties.Title as any)?.title[0]?.plain_text || "",
      description: (position.properties.Description as any)?.rich_text[0]
        ?.plain_text,
      type: "article",
      publishedTime: (position.properties.DatePublished as any)?.date.start,
      url: `https://aastu.software/career/${id}`,
      images: [
        {
          url:
            (position.properties.Cover as any)?.files[0]?.file?.url ||
            "https://aastu.software/logo-full.png",
          alt:
            (position.properties.Title as any)?.title[0]?.plain_text ||
            "AASTUSEA Positions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: (position.properties.Title as any)?.title[0]?.plain_text || "",
      description: (position.properties.Description as any)?.rich_text[0]
        ?.plain_text,
      site: "@ayoubkhial",
      creator: "@ayoubkhial",
      images: {
        url:
          (position.properties.Cover as any)?.files[0]?.file?.url ||
          "https://aastu.software/logo-full.png",
        alt: (position.properties.Title as any)?.title[0]?.plain_text || "",
      },
    },
    alternates: {
      canonical: `https://aastu.software/careers/${id}`,
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
import { shimmer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default async function JobPostDetails({
  params,
}: {
  params: { id: string };
}) {
  const position = await fetchPositionById(params.id);
  const user = await currentUser();
  //   const positions = await fetchBlogs();
  if (!position) {
    return (
      <section className="py-24 flex items-center justify-center">
        <p className="text-center">Position not found.</p>
      </section>
    );
  }

  if (!user) {
    return null;
  }

  let blocks = await fetchPageBlocks(position.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  // blocks.map((block) => {
  //   console.log(block.type);
  // });

  const html = await renderer.render(...blocks);

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div>
      <div
        className={`prose-sm dark:prose-invert md:prose prose-ul:list-disc  prose-img:max-h-96 flex flex-col items-center justify-center prose-img:mx-auto lg:prose-xl container pt-8 lg:pt-10 ${worksans.className}`}
      >
        <Breadcrumb className="place-self-start items-start">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/careers">Positions</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex justify-start w-full items-end">
          <h1 className="pt-10">
            {(position.properties.Title as any)?.title[0]?.plain_text || ""}
          </h1>
          <Image
            width={100}
            height={100}
            src={(position.icon as any)?.external?.url || "/logo-full.png"}
            alt={
              (position.properties.Title as any)?.title[0]?.plain_text +
                "AASTUSEA" || "AASTUSEA Positions"
            }
            className="self-end"
          />
        </div>
        <title className="hidden">
          {(position.properties.Title as any)?.title[0]?.plain_text || ""}
        </title>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 flex-wrap place-self-start items-start pb-4">
            {(position.properties.Tags as any)?.multi_select.map((tag: any) => (
              <span
                key={tag.id}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {(position.properties.Deadline as any)?.date.start && (
              <div className="year">
                {(position.properties.Status as any)?.status.name === "Active"
                  ? "Deadline: "
                  : "Closed on: "}
                {getDateStr((position.properties.Deadline as any)?.date.start)}
              </div>
            )}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        {(position.properties.Status as any)?.status.name === "Active" && (
          <Button
            variant="default"
            className="mt-8 w-full text-md text-white dark:text-white"
          >
            <Link
              href={`/careers/${params.id}/apply?userId=${user.id}&position=${
                (position.properties.Title as any)?.title[0]?.plain_text
              }`}
              className="no-underline w-full text-white dark:text-white"
            >
              Apply for{" "}
              {(position.properties.Title as any)?.title[0]?.plain_text}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
