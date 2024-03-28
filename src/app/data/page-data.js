import { fetchPageData } from '@/app/helps/butter-client';

export async function PageData(pageType, pageSlug, options) {
  try {
    const pageData = await fetchPageData(pageType, pageSlug, options);

    let body = [];
    let seo = {};

    if (pageData) {
      body = pageData.fields.body.reduce((acc, item) => {
        acc[item.type] = item.fields;
        return acc;
      }, {});

      seo = pageData.fields.seo;
    }

    return { body, seo, isLoading: false, isError: false, error: null };
  } catch (error) {
    return { body: {}, seo: {}, isLoading: false, isError: true, error };
  }
}
