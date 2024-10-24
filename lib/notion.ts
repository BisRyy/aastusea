import "server-only";
import React from "react";
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const databaseId = process.env.NOTION_BLOGS_DATABASE_ID;

export const fetchBlogs = React.cache(async () => {
  const response = await notion.databases.query({
    database_id: databaseId!,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "DatePublished",
        direction: "ascending",
      },
    ],
  });

  return response.results;
});

export const fetchBlogBySlug = React.cache(async (slug: string) => {
  return notion.databases
    .query({
      database_id: databaseId!,
      filter: {
        and: [
          {
            property: "Status",
            status: {
              equals: "Published",
            },
          },
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })
    .then((response) => response.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache(async (pageId: string) => {
  return notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((response) => response.results as BlockObjectResponse[]);
});

export const fetchEvents = React.cache(async (status?: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_EVENTS_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: status || "Upcoming",
      },
    },
    sorts: [
      {
        property: "StartDate",
        direction: "ascending",
      },
    ],
  });

  return response.results;
});

export const fetchEventById = React.cache(async (id: any) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_EVENTS_DATABASE_ID!,
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
    })
    .then((response) => response.results[0] as PageObjectResponse | undefined);
});

export const fetchPositions = React.cache(async (status?: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_POSITIONS_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: status || "Active",
      },
    },
    sorts: [
      {
        property: "ID",
        direction: "ascending",
      },
    ],
  });

  return response.results;
});

export const fetchPositionById = React.cache(async (id: any) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_POSITIONS_DATABASE_ID!,
      filter: {
        property: "ID",
        number: {
          equals: parseInt(id),
        },
      },
    })
    .then((response) => response.results[0] as PageObjectResponse | undefined);
});

// applicant count for a position
export const fetchApplicantCount = React.cache(async (position: string) => {
  if (!position) {
    return 0;
  }

  if (position === "All") {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_APPLICATIONS_DATABASE_ID!,
    });

    return response.results.length;
  }

  const response = await notion.databases.query({
    database_id: process.env.NOTION_APPLICATIONS_DATABASE_ID!,
    filter: {
      property: "position",
      rich_text: {
        contains: position,
      },
    },
  });

  return response.results.length;
});
