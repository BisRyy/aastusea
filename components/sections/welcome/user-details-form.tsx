"use client";
import Script from "next/script";

export function UserDetailsForm({
  next,
  finish,
}: {
  next: () => void;
  finish: () => void;
}) {
  return (
    <div className="w-screen h-screen">
      <iframe
        data-tally-src="https://tally.so/r/3EDegr?transparentBackground=1"
        width="100%"
        height="100%"
        style={{ border: 0, margin: 0 }}
        // Removed deprecated marginHeight and marginWidth
        title="AASTUSEA Registration form"
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
