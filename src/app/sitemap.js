import { Articles } from "@/app/data/articles-data";

export default async function sitemap() {
  const baseUrl = "https://www.appsdelivered.com";
  const productsSlug = `${baseUrl}/products`;
  const { articles, total } = await Articles(1, 100);

  const articlesPerPage = 6;
  const totalPages = Math.ceil(total / articlesPerPage);

  const articlesUrls = articles?.map((article) => {
    return {
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.updated),
      priority: 0.6,
    };
  });

  const paginatedUrls = Array.from({ length: totalPages }, (_, i) => ({
    url: `${baseUrl}/blog?page=${i + 1}`,
    lastModified: new Date(),
    priority: 0.5,
  }));

  const productUrls = [
    "ai-issue-creator",
    "ai-spam-detector",
    "rss-feeds",
    "smart-comments",
    "smart-issue-templates",
    "smart-time-off",
    "views-for-jira",
  ].map((product) => {
    return {
      url: `${productsSlug}/${product}`,
      lastModified: new Date(),
      priority: 0.8,
    };
  });

  return [
    // {
    //   url: baseUrl,
    //   lastModified: new Date(),
    //   priority: 1,
    // },
    {
      url: productsSlug,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/schedule-demo`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...productUrls,
    ...articlesUrls,
    ...paginatedUrls,
  ];
}
