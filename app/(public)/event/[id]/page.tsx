"use client";
import { useSearchParams } from "next/navigation";

export default function EventPage({ params }: { params?: { id?: string } }) {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("id") || "evt-Ij1eA0fNLbusyV5"; // Default event ID

  return (
    <div className="flex items-center min-h-screen pt-10">
      <iframe
        src={`https://lu.ma/embed/event/${eventId}/simple`}
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
