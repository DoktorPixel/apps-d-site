'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OpenSVG from 'public/img/products/open.svg';
import Dot from 'public/img/dot.svg';
import ArrowBack from 'public/img/Arrow-back.svg';
import ArrowNext from 'public/img/Arrow-next.svg';
import { useRouter } from 'next/navigation';

export function FilteredPosts({
  articles,
  body,
  meta,
  currentPage,
  articlesPerPage,
  allArticles
}) {
  // const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  useEffect(() => {
    if (articles) {
      setFilteredPosts(articles);
    }
  }, [articles]);

  const handleSearch = () => {
    const keyword = searchKeyword.toLowerCase().trim();
    const filtered = articles.filter((article) => {
      const title = article.title.toLowerCase();
      const category = article.categories[0].name.toLowerCase();
      const summary = article.summary.toLowerCase();
      const authorFirstName = article.author.first_name.toLowerCase();
      const authorLastName = article.author.last_name.toLowerCase();

      return (
        title.includes(keyword) ||
        category.includes(keyword) ||
        summary.includes(keyword) ||
        authorFirstName.includes(keyword) ||
        authorLastName.includes(keyword)
      );
    });

    setFilteredPosts(filtered);
  };

  //Pagination

  const totalPages = meta ? Math.ceil(meta.count / articlesPerPage) : 0;

  const setPage = (pageNumber) => {
    router.push(`/blog?page=${pageNumber}`);
  };
  const nextPage = () => {
    const nextPageNumber = Math.min(currentPage + 1, totalPages);
    router.push(`/blog?page=${nextPageNumber}`);
  };
  const prevPage = () => {
    const prevPageNumber = Math.max(currentPage - 1, 1);
    router.push(`/blog?page=${prevPageNumber}`);
  };

  return (
    <>
      {body.banner && (
        <div
          className='blog-banner'
          style={{
            background: `url(${body.banner.background}) no-repeat center center`,
            backgroundSize: 'cover',
          }}
        >
          <div className='blog-banner-content'>
            <div className='blog-left-part'>
              <h1>{body.banner.title}</h1>
              <div className='buttons-wrapper blog mobile'>
                <input
                  type='text'
                  placeholder='Search'
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyPress={handleEnterKeyPress}
                />
                <button className='btn search-btn' onClick={handleSearch}>
                  {body.banner['btn-text']}
                </button>
              </div>
              <p className='blog-description'>{body.banner.subtitle}</p>
            </div>
            <div className='contactUs-right-part'>
              <div className='breadcrumb'>
                <Link href='/'>Home </Link>{' '}
                <Image src={OpenSVG} alt='Open SVG' width={8} height={13} />
                <Link href='/blog'> Blog</Link>
              </div>
              <div className='buttons-wrapper blog'>
                <input
                  type='text'
                  placeholder='Search'
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyPress={handleEnterKeyPress}
                />
                <button className='btn search-btn' onClick={handleSearch}>
                  {body.banner['btn-text']}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='blog-page-wrapper'>
        <div className='recent-posts'>
          <h2>Recent Posts</h2>
          {articles.slice(0, 4).map((article) => (
            <div key={article.slug} className='recent-posts-item'>
              <Link href={`/blog/${article.slug}`}>
                <h3>{article.title}</h3>
              </Link>
              <p>{article.published.split('T')[0]}</p>
            </div>
          ))}
        </div>

        <div className='post-cards'>
          <div className='post-cards'>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((article) => (
                <div key={article.slug} className='post-card'>
                  <Image
                    src={article.featured_image}
                    alt={article.title}
                    width={420}
                    height={239}
                  />
                  <div className='post-card-content'>
                    <h2>{article.title}</h2>
                    <div className='post-card-description'>
                      <p>{article.categories[0].name} </p>
                      <p>
                        By {article.author.first_name}{' '}
                        {article.author.last_name}
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
                      <p>{article.published.split('T')[0]}</p>
                    </div>
                    <p>{article.summary.slice(0, 150)}</p>
                    <Link className='post-link' href={`/blog/${article.slug}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className='no-matching-posts'>No matching posts found.</p>
            )}
          </div>
          {filteredPosts.length > 0 && (
            <div className='pagination-container'>
              <div
                onClick={prevPage}
                className=''
                style={{
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                }}
              >
                <Image
                  src={ArrowBack}
                  alt='ArrowBack'
                  className='buttons-arrow-img'
                  width={25}
                  height={8}
                />{' '}
                Previous Page
              </div>
              <div className='blog-navigation-indicators'>
                {[...Array(totalPages)].map((_, index) => (
                  <div
                    key={index}
                    className={`navigation-indicator ${
                      currentPage === index + 1 ? 'active' : ''
                    }`}
                    onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div
                onClick={nextPage}
                className=''
                style={{
                  cursor:
                    currentPage === totalPages ? 'not-allowed' : 'pointer',
                }}
              >
                Next Page{' '}
                <Image
                  src={ArrowNext}
                  alt='ArrowNext'
                  className='buttons-arrow-img'
                  width={25}
                  height={8}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
