import Butter from 'buttercms';

export const butter = Butter(process.env.REACT_APP_BUTTER_CMS_API_KEY);
export const fetchPageData = async (pageType, pageSlug, options) => {
  try {
    const response = await butter.page.retrieve(pageType, pageSlug, options);
    if (response.data) {
      return response.data.data;
    }
    throw new Error('No data received');
  } catch (error) {
    throw error;
  }
};

// Articles
export const fetchArticles = async ({ page, page_size } = {}) => {
  try {
    const response = await butter.post.list(
      {
        page,
        page_size,
        category_slug: 'atlassian-apps',
      },
      { cache: 'no-store' }
    );

    if (response.data) {
      return response.data;
    }

    throw new Error('No data received');
  } catch (error) {
    throw new Error('Error fetching articles');
  }
};

export const fetchAllArticles = async () => {
  let allArticles = [];
  let page = 1;
  const page_size = 10; // Set the desired page size
  let hasMorePages = true;

  try {
    while (hasMorePages) {
      const response = await butter.post.list({
        page,
        page_size,
        category_slug: 'atlassian-apps',
      }, {
        cache: 'no-store'
      });

      if (response.data && response.data.data.length > 0) {
        allArticles = allArticles.concat(response.data.data);
        page++;
        hasMorePages = response.data.meta.next_page !== null;
      } else {
        hasMorePages = false;
      }
    }

    return allArticles;
  } catch (error) {
    throw new Error('Error fetching articles');
  }
};

// Article
export const fetchArticle = async (slug) => {
  try {
    const response = await butter.post.retrieve(slug, { cache: 'no-store' });

    if (response.data) {
      return response.data;
    }

    throw new Error('No data received');
  } catch (error) {
    throw new Error('Error fetching the article');
  }
};
