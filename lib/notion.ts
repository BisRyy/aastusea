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

export const databaseId = process.env.NOTION_DATABASE_ID;

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
  console.log("slug", slug);
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
