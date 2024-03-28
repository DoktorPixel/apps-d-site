import { fetchArticles } from "@/app/helps/butter-client";

export async function Articles(page, pageSize) {
  try {
    const data = await fetchArticles({ page, page_size: pageSize });

    const articles = data?.data || [];
    const meta = data?.meta || {
      count: 0,
      next_page: null,
      previous_page: null,
    };
    const total = meta?.count;

    return {
      articles,
      total,
      meta,
      isLoading: false,
      isError: false,
      error: null,
    };
  } catch (error) {
    return { articles: [], meta: {}, isLoading: false, isError: true, error };
  }
}
