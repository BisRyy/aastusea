"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const isOnboardingCompleted = user.publicMetadata.isOnboardingCompleted;

  useEffect(() => {
    const lastStep = window.localStorage.getItem("lastStep");
    if (
      lastStep &&
      !isNaN(parseInt(lastStep, 10)) &&
      parseInt(lastStep, 0) < 4 &&
      !isOnboardingCompleted
    ) {
      router.push(`/welcome?step=${lastStep}`);
    }
  }, [router, isOnboardingCompleted]);

  return null;
}
