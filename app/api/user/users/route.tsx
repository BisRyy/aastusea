import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { total_count } = await fetch("https://api.clerk.dev/v1/users/count", {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
    cache: "no-store",
  }).then((res) => res.json());

  return NextResponse.json({ total_count }, { status: 200 });
}
