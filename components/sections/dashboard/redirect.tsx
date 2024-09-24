"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    const lastStep = window.localStorage.getItem("lastStep");
    if (
      lastStep &&
      !isNaN(parseInt(lastStep, 10)) &&
      parseInt(lastStep, 0) < 4
    ) {
      router.push(`/welcome?step=${lastStep}`);
    }
  }, [router]);

  return null;
}
