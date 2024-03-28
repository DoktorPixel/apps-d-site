import { fetchArticle } from "@/app/helps/butter-client";

export async function Article(slug) {
  try {
    const article = await fetchArticle(slug);

    let data = {};
    let meta = {};

    if (article) {
      data = article.data || {};
      meta = article.meta || {};
    }

    return { data, meta, isLoading: false, isError: false, error: null };
  } catch (error) {
    return { data: {}, meta: {}, isLoading: false, isError: true, error };
  }
}
