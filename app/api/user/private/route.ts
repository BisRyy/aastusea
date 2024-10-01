import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const { key, value, userId } = await request.json();
  const user = await clerkClient().users.updateUserMetadata(userId, {
    publicMetadata: {
      [key]: value,
    },
  });
  return NextResponse.json({ user, success: true });
}

export async function GET(request: Request) {
  const { userId } = await request.json();

  const user = await clerkClient().users.getUser(userId);
  return NextResponse.json(user.publicMetadata);
}
