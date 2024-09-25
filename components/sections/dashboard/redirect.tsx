"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      return;
    }

    const isOnboardingCompleted = user.publicMetadata.isOnboardingCompleted;
    const lastStep = window.localStorage.getItem("lastStep");

    if (
      lastStep &&
      !isNaN(parseInt(lastStep, 10)) &&
      parseInt(lastStep, 10) < 4 &&
      !isOnboardingCompleted
    ) {
      router.push(`/welcome?step=${lastStep}&userId=${user.id}`);
    }
  }, [isLoaded, isSignedIn, user, router]);

  return null;
}
