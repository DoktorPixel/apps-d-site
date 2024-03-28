import "@/app/styles/blog/blog.css";
import LoadingOrError from "@/app/components/loading-on-error";
import { PageData } from "@/app/data/page-data";
import { Articles } from "@/app/data/articles-data";
import { FilteredPosts } from "@/app/helps/FilteredPosts";

export const revalidate = 5;

export async function generateMetadata() {
  const { seo } = await PageData("blog_apps_delivered", "blog");

  return {
    title: seo.title,
    description: seo.description,
  };
}

export default async function Blog({ searchParams }) {
  const {
    body,
    isLoading: pageDataIsLoading,
    isError: pageDataIsError,
    error: pageDataError,
  } = await PageData("blog_apps_delivered", "blog");

  const currentPage =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const articlesPerPage =
    body.pagination && body.pagination["number_of_articles"];

  const {
    articles,
    meta,
    isLoading: articlesIsLoading,
    isError: articlesIsError,
    error: articlesError,
  } = await Articles(currentPage, articlesPerPage);

  const isLoading = articlesIsLoading || pageDataIsLoading;
  const isError = articlesIsError || pageDataIsError;
  const error = articlesError || pageDataError;

  const {allArticles} = await Articles(1, 100);
  // console.log("allArticles", allArticles);
  // console.log("articles", articles);

  return (
    <>
      <LoadingOrError isLoading={isLoading} isError={isError} error={error} />
      <FilteredPosts
        articles={articles}
        body={body}
        meta={meta}
        currentPage={currentPage}
        articlesPerPage={articlesPerPage}
        allArticles={allArticles}
      />
    </>
  );
}
