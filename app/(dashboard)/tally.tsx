"use client";

import { Button } from "@/components/ui/button";
import Script from "next/script";

const TallyButton = () => {
  return (
    <>
      <Button
        data-tally-open="wQYlQA"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        data-tally-auto-close="3000"
        className="fixed bottom-4 right-4"
      >
        🐛
      </Button>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-ignore
          Tally?.loadEmbeds();
        }}
      />
    </>
  );
};

export default TallyButton;
