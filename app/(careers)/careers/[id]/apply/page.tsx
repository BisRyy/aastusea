"use client";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

export default function JobApplicationForm() {
  const searchParams = useSearchParams();
  const fullJobUrl = searchParams.get("jobUrl");
  const jobUrl = fullJobUrl?.split("/").pop();

  return (
    <div className="w-full">
      <iframe
        data-tally-src={`https://tally.so/embed/${jobUrl}?transparentBackground=1&dynamicHeight=1`}
        width="100%"
        height="100%"
        style={{ border: 0, margin: 0 }}
        title="AASTUSEA Job Post form"
        className="h-full"
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-ignore
          Tally?.loadEmbeds();
        }}
      />
    </div>
  );
}
