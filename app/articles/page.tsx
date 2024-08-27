import { getAllArticles } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const articles = await getAllArticles();
  console.log(articles.length);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to our Knowledge Base
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Discover our latest articles and stay up to date with the newest
                technologies, features, and trends.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article: any) => (
                <article
                  key={article.sys.id}
                  className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <Image
                    alt="placeholder"
                    className="aspect-[4/3] object-cover w-full"
                    height="263"
                    src={article.featuredImage.url}
                    width="350"
                  />
                  <div className="flex-1 p-6">
                    <Link href={`/articles/${article.slug}`}>
                      <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                      {article.shortDescription}
                    </p>
                    <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
                      Written by: {article.author.name}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                        Date{" "}
                        {new Date(article.publishedDate).toLocaleDateString()}
                      </div>
                      <Link
                        className="inline-flex h-10 items-center justify-center text-sm font-medium"
                        href={`/articles/${article.slug}`}
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
