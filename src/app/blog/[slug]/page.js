import LoadingOrError from '@/app/components/loading-on-error';
import { FilteredPost } from '@/app/helps/FilteredPost';
import { Articles } from '@/app/data/articles-data';
import { Article } from '@/app/data/article-data';

import '@/app/styles/blog/postDetail.css';

export const revalidate = 5;

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const { data } = await Article(slug);

  return {
    title: data.seo_title,
    description: data.meta_description,
  };
}

export default async function PostDetail({ params }) {
  const slug = params.slug;
  const {
    data,
    isLoading: articleIsLoading,
    isError: articleIsError,
    error: articleError,
  } = await Article(slug);

  const {
    articles,
    isLoading: articlesIsLoading,
    isError: articlesIsError,
    error: articlesError,
  } = await Articles();

  const isLoading = articleIsLoading || articlesIsLoading;
  const isError = articleIsError || articlesIsError;
  const error = articleError || articlesError;

  return (
    <>
      {data && (
        <>
          <LoadingOrError
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
          <FilteredPost data={data} articles={articles} slug={slug} />
        </>
      )}
    </>
  );
}
