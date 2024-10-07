import React from "react";
import { fetchEvents } from "@/lib/notion";
import Image from "next/image";
import LoadMoreButton from "@/app/(blog)/blog/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { shimmer } from "@/lib/utils";

export default async function BentoGridDemo() {
  const events = await fetchEvents();
  const pastEvents = await fetchEvents("Completed");

  if (!events)
    return (
      <section className="py-24 flex items-center justify-center">
        <p className="text-center">No events found.</p>
      </section>
    );

  return (
    <section className="container mx-auto py-12" id="events">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Upcoming Events
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10  dark:text-gray-400">
        Check out our upcoming events and stay up-to-date with the latest
        happenings.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-1 gap-3 md:mx-auto">
        {events.map((event: any, i: number): any => (
          <EventCard key={i} event={event} />
        ))}
      </div>
      {events.length === 0 && (
        <p className="text-center">
          No upcoming events found. Check back later.
        </p>
      )}
      <h2 className="font-manrope text-4xl font-bold my-14">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-1 gap-3 md:mx-auto">
        {pastEvents.map((event: any, i: number): any => (
          <EventCard key={i} event={event} />
        ))}
      </div>
      {pastEvents.length === 0 && (
        <p className="text-center">No past events found.</p>
      )}
      {pastEvents.length > 0 && <LoadMoreButton />}
    </section>
  );
}

const EventCard = ({ event }: { event: any }) => {
  const {
    Title,
    StartDate,
    EndDate,
    Location,
    RegistrationDeadline,
    RegistrationLink,
    Audience,
    Organizer,
    Time,
    Type,
    Cover,
  } = event.properties;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="max-w-sm bg-white/40 dark:bg-gray-800/40 border border-gray-200 rounded-lg shadow dark:border-gray-700 p-2">
      <Link href={RegistrationLink.url || `/event/${event.id}`}>
        <div className="relative w-full h-48">
          <Image
            src={Cover?.files[0]?.file?.url || "/default-image.png"}
            alt={
              Title?.title[0]?.plain_text ||
              "AASTU Software Engineers Association AASTUSEA Blog"
            }
            className="rounded-lg object-cover border dark:border-white/[0.2] border-black/20 dark:invert object-top"
            fill
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>
        <div className="p-1">
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            {StartDate?.date?.start}
          </p>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {Title?.title[0]?.plain_text}
          </h5>
        </div>
        <div className="p-1 flex gap-1">
          <MapPin className="w-5 h-5 mr-2" />
          <p className="mb-2 text-gray-700 dark:text-gray-400">
            {Location?.rich_text[0]?.plain_text}
          </p>
        </div>
      </Link>
    </div>
  );
};
