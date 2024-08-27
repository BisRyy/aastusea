// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  shortDescription
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  author {
    name
  }
  publishedDate
  featuredImage {
    url
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.pageBlogPostCollection?.items;
}

export async function getAllArticles(
  // For this demo set the default limit to always return 3 articles.
  limit = 10,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false,
  skip = 0
) {
  const articles = await fetchGraphQL(
    `query {
        pageBlogPostCollection(where:{slug_exists: true}, limit: ${limit}, skip: ${skip}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(articles);
}

export async function getArticle(slug, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
        pageBlogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}
