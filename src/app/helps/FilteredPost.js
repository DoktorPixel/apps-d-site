'use client';
import Link from 'next/link';
import Image from 'next/image';
import OpenSVG from '/public/img/products/open.svg';
import Dot from '/public/img/dot.svg';
import ArrowBack from '/public/img/Arrow-back.svg';
import ArrowNext from '/public/img/Arrow-next.svg';
import RecentPostCard from '@/app/components/UI/blog/RecentPostCard';

export function FilteredPost({ data, articles, slug }) {
  function TagList({ tags }) {
    const tagNames = tags.map((tag) => tag.name);
    const formattedTags = tagNames.join(' ');
    return (
      <div className='blog-tags'>
        <p>Tags:</p>
        <p>{formattedTags}</p>
      </div>
    );
  }

  const currentIndex = articles.findIndex(
    (article) => article.slug === data.slug
  );
  const previousPost = articles[currentIndex - 1] || null;
  const nextPost = articles[currentIndex + 1] || null;
  return (
    <div>
      <div className='blog-banner'>
        <div className='blog-banner-content'>
          <div className='blog-left-part mobile'>
            <h1>Blog</h1>
            <p className='blog-description mobile'>

            </p>
          </div>
          <div className='contactUs-right-part'>
            <div className='breadcrumb'>
              <Link href='/'>Home </Link>{' '}
              <Image src={OpenSVG} alt='Open SVG' width={8} height={13} />
              <Link href='/blog'> Blog</Link>{' '}
              <Image src={OpenSVG} alt='Open SVG' width={8} height={13} />
              <Link href={`/blog/${slug}`}>Post</Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className='postDetail-wrapper'>
        <Image
          src={data.featured_image}
          alt={data.featured_image_alt}
          width={760}
          height={432}
        />
        <div className='post-card-title'>{data.title}</div>
        <div className='post-card-description'>
          <p>{data.categories && <>{data.categories[0].name}</>} </p>
          <p>
            {data.author && (
              <>
                by {data.author.first_name} {data.author.last_name}
              </>
            )}
          </p>
          <p style={{ display: 'flex' }}>
            <Image
              className='post-card-description-img'
              src={Dot}
              alt='Dot'
              width={6}
              height={6}
            />
          </p>
          <p>{data.published && <>{data.published.split('T')[0]}</>}</p>
        </div>
        <div
          className='inner-data'
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
        {data.tags && (
          <div className='tags-wrapper'>
            <TagList tags={data.tags} />
          </div>
        )}
        <div className='posts-navigation-buttons'>
          {articles.length > 0 && (
            <>
              {previousPost && (
                <Link href={`/blog/${previousPost.slug}`}>
                  <button className='posts-button'>
                    <Image
                      src={ArrowBack}
                      alt='ArrowBack'
                      className='buttons-arrow-img'
                      width={26}
                      height={8}
                    />
                    Previous Post
                  </button>
                </Link>
              )}

              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`}>
                  <button className='posts-button'>
                    Next Post
                    <Image
                      src={ArrowNext}
                      alt='ArrowNext'
                      className='buttons-arrow-img'
                      width={26}
                      height={8}
                    />
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>

      {articles && articles.length > 0 && (
        <div className='recent-post-wrapper'>
          <h2>Recent Posts</h2>
          <div className='recent-post-cards'>
            {articles.slice(0, 3).map((article) => (
              <RecentPostCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
