import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ message: "User not found" });
  }

  // Get the OAuth access token for the user
  const provider = "oauth_notion";

  try {
    const clerkResponse: any =
      await clerkClient().users.getUserOauthAccessToken(userId, provider);

    if (!clerkResponse) {
      return NextResponse.json({ message: "No OAuth token found for Notion" });
    }

    const accessToken = clerkResponse[0].token;

    if (!accessToken) {
      return NextResponse.json({ message: "Invalid OAuth token for Notion" });
    }

    console.log("accessToken", accessToken);

    // Fetch the user data from the Notion API
    // This endpoint fetches a list of users
    // https://developers.notion.com/reference/get-users
    const notionUrl = "https://api.notion.com/v1/users";

    const notionResponse = await fetch(notionUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Notion-Version": "2022-06-28",
      },
    });

    // Handle the response from the Notion API
    const notionData = await notionResponse.json();

    return NextResponse.json({ message: notionData });
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return NextResponse.json(
      { message: "Error fetching Notion data" },
      { status: 500 }
    );
  }
}
