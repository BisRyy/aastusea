import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { userId, getToken } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = await getToken({ template: "supabase" });
  const user = await fetch("https://api.supabase.io/auth/v1/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  // Fetch data from Supabase and return it.
  const data = { supabaseData: "Hello World" };

  return NextResponse.json({ user, token, data, userId }, { status: 200 });
}
