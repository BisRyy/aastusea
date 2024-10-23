import React from "react";
import { fetchApplicantCount, fetchPositions } from "@/lib/notion";
import Image from "next/image";
import LoadMoreButton from "@/app/(blog)/blog/button";
import Link from "next/link";
import { ListEndIcon, MapPin, Timer, TimerIcon } from "lucide-react";
import { getDateStr, shimmer, shimmerDark } from "@/lib/utils";
import { PersonIcon } from "@radix-ui/react-icons";

export default async function BentoGridDemo() {
  const positions = await fetchPositions();
  const pastPositions = await fetchPositions("Archive");
  const applicantCount = await fetchApplicantCount("All");

  if (!positions)
    return (
      <section className="py-24 flex items-center justify-center">
        <p className="text-center">No open positions found.</p>
      </section>
    );

  return (
    <section className="container mx-auto py-12" id="positions">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Open Positions
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10  dark:text-gray-400">
        Check out our open positions and apply to join our team.
      </p>
      <div className="flex items-center justify-center mb-10">
        <PersonIcon className="mr-2" />
        <p className="text-gray-700 dark:text-gray-400">
          {applicantCount} applicantions received.
        </p>
      </div>
      {/* <pre>{JSON.stringify(positions[0], null, 2)}</pre> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-1 gap-3 md:mx-auto">
        {positions.map((position: any, i: number): any => (
          <PositionCard key={i} position={position} />
        ))}
      </div>
      {positions.length === 0 && (
        <p className="text-center">
          No open positions found. Check back later.
        </p>
      )}
      <h2 className="font-manrope text-3xl font-bold my-14">
        Archived Positions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-1 gap-3 md:mx-auto">
        {pastPositions.map((position: any, i: number): any => (
          <PositionCard key={i} position={position} />
        ))}
      </div>
      {pastPositions.length === 0 && (
        <p className="text-center">No archived positions found.</p>
      )}
      {pastPositions.length > 0 && <LoadMoreButton />}
    </section>
  );
}

const PositionCard = ({ position }: { position: any }) => {
  const { Title, Description, Type, Deadline, ID, icon } = position.properties;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="bg-white/40 dark:bg-gray-800/40 border border-gray-200 rounded-lg shadow dark:border-gray-700 p-2 hover:shadow-xl transition-all duration-300 dark:hover:bg-gray-900/30">
      <Link href={`/careers/${ID.unique_id.number}`}>
        <div className="p-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400 flex gap-2 items-center">
                <Timer size={16} className="mr-1" />
                {getDateStr(Deadline?.date?.start)}
              </p>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                {Title?.title[0]?.plain_text}
              </h5>
            </div>
            <Image
              width={100}
              height={100}
              src={position.icon?.external?.url || "/logo-full.png"}
              alt={
                Title?.title[0]?.plain_text + "AASTUSEA" || "AASTUSEA Positions"
              }
            />
          </div>
          <p className="mb-2 text-gray-700 dark:text-gray-400 line-clamp-6">
            {Description?.rich_text[0]?.plain_text}
          </p>
        </div>
      </Link>
    </div>
  );
};
