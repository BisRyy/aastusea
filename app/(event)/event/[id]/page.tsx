import {
  fetchEventById,
  fetchBlogBySlug,
  fetchBlogs,
  fetchPageBlocks,
  notion,
} from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Work_Sans } from "next/font/google";
import { getDateStr, shimmer, shimmerDark } from "@/lib/utils";

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const { id } = params;
//   const event = await fetchBlogBySlug(params.id);

//   if (!event) return { title: id };
//   return {
//     title: (event.properties.Title as any)?.title[0]?.plain_text || "",
//     description: (event.properties.Description as any)?.rich_text[0]?.plain_text,
//     keywords: (event.properties.Tags as any)?.multi_select.map(
//       (tag: any) => tag.name
//     ),
//     openGraph: {
//       title: (event.properties.Title as any)?.title[0]?.plain_text || "",
//       description: (event.properties.Description as any)?.rich_text[0]
//         ?.plain_text,
//       type: "article",
//       publishedTime: (event.properties.DatePublished as any)?.date.start,
//       url: `https://aastu.software/blog/${id}`,
//       images: [
//         {
//           url: (event.properties.Cover as any)?.files[0]?.file?.url,
//           alt: (event.properties.Title as any)?.title[0]?.plain_text || "",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: (event.properties.Title as any)?.title[0]?.plain_text || "",
//       description: (event.properties.Description as any)?.rich_text[0]
//         ?.plain_text,
//       site: "@ayoubkhial",
//       creator: "@ayoubkhial",
//       images: {
//         url: (event.properties.Cover as any)?.files[0]?.file?.url,
//         alt: (event.properties.Title as any)?.title[0]?.plain_text || "",
//       },
//     },
//     alternates: {
//       canonical: `https://aastu.software/blog/${id}`,
//     },
//   };
// }

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Comments from "@/app/(blog)/blog/[slug]/comment";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await fetchEventById(params.id);
  if (!event) {
    return <div>Post not found</div>;
  }

  console.log(event);

  let blocks = await fetchPageBlocks(event.id);

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
        className={`prose-sm dark:prose-invert md:prose prose-img:max-h-96 flex flex-col items-center justify-center prose-img:mx-auto lg:prose-xl container py-16 ${worksans.className}`}
      >
        <h1 className="pt-10">
          {(event.properties.Title as any)?.title[0]?.plain_text || ""}
        </h1>
        {/* <title className="hidden">
          {(event.properties.Title as any)?.title[0]?.plain_text || ""}
        </title>
        <div className="flex gap-2 flex-wrap place-self-start items-start pb-4">
          {(event.properties.Tags as any)?.multi_select.map((tag: any) => (
            <span
              key={tag.id}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          {event.properties.Organiser && (
            <div className="role">
              By {(event.properties.Organiser as any)?.people[0].name}
            </div>
          )}
          <div className="flex gap-4">
            {(event.properties.Estimate as any)?.number && (
              <div className="estimate">
                {(event.properties.Estimate as any)?.number} min read
              </div>
            )}
            •
            {(event.properties.StartDate as any)?.date.start && (
              <div className="year">
                {getDateStr((event.properties.StartDate as any)?.date.start)}
              </div>
            )}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        {(event.properties.Comment as any)?.checkbox && <Comments />} */}
      </div>
      {/* <h2 className="font-manrope text-4xl font-bold text-center mb-14">
        Related Blogs
      </h2>
      {events.length > 0 && (
        <BentoGrid className="max-w-4xl mx-4 md:mx-auto">
          {events.slice(0, 3).map((event: any, i: number): any => (
            <BentoGridItem
              key={i}
              title={(event.properties.Title as any)?.title[0]?.plain_text}
              header={
                <div className="relative w-full h-full min-h-40 group-hover/bento:-translate-x-2 transition duration-200">
                  <Image
                    src={
                      (event.properties.Cover as any)?.files[0]?.file?.url ||
                      "/logo-light.png"
                    }
                    alt={
                      (event.properties.Title as any)?.title[0]?.plain_text ||
                      "AASTU Software Engineers Association AASTUSEA Blog"
                    }
                    className="hidden dark:block rounded-lg object-cover border dark:border-white/[0.2] border-black/20 "
                    fill
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                  />
                  <Image
                    src={
                      (event.properties.Cover as any)?.files[0]?.file?.url ||
                      "/logo-light.png"
                    }
                    alt={
                      (event.properties.Title as any)?.title[0]?.plain_text ||
                      "AASTU Software Engineers Association AASTUSEA Blog"
                    }
                    className="dark:hidden rounded-lg object-cover border dark:border-white/[0.2] border-black/20 "
                    fill
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmerDark(700, 475)
                    )}`}
                  />
                </div>
              }
              link={`/blog/${event.properties.Slug.rich_text[0].plain_text}`}
            />
          ))}
        </BentoGrid>
      )} */}
    </div>
  );
}
