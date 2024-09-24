import { permanentRedirect } from "next/navigation";
import retry from "p-retry";
import NotFound from "@/app/not-found";

export const dynamic = "force-dynamic";

async function getData(slug: string) {
  try {
    const res = await retry(
      async () => {
        const pRes = await fetch(
          `${process.env.NEXT_PUBLIC_LINK_APP_URL}/api/redirect`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ slug }),
          }
        );

        if (pRes.status !== 200) {
          throw new Error("Failed to fetch");
        }

        return pRes;
      },
      {
        retries: 2,
        onFailedAttempt: (error) => {
          console.log(error);
        },
      }
    );

    return res.json();
  } catch {
    return { message: "Click to visit", status: 409 };
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const data = await getData(slug);

  if (data.redirect) {
    permanentRedirect(data.redirect);
  }

  // not found page
  return <NotFound />;
};

export default Page;
