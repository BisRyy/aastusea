"use client";
import { useSearchParams } from "next/navigation";

export default function EventPage() {
  const searchParams = useSearchParams();
  const calendarId = searchParams.get("calId") || "cal-7nrj5XW7BPF2SsM"; // Default event ID

  return (
    <div className="flex items-center min-h-screen pt-10">
      <iframe
        src={`https://lu.ma/embed/calendar/${calendarId}/events?`}
        width="100%"
        height="800"
        className=""
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
}
