"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const lastStep = window.localStorage.getItem("lastStep");
    if (
      lastStep &&
      !isNaN(parseInt(lastStep, 10)) &&
      parseInt(lastStep, 0) < 4
    ) {
      router.push(`/register?step=${lastStep}`);
    }
  }, [router]);

  const { toast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 ">
      <h1>Welcome to the Dashboard</h1>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
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
    </div>
  );
}
