import { fetchBlogBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  let blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  blocks.map((block) => {
    console.log(block.type);
  });

  const html = await renderer.render(...blocks);

  return (
    <div
      className="prose dark:prose-invert container mx-auto pt-20"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
