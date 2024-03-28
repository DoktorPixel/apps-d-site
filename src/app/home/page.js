import { PageData } from '@/app/data/page-data';
import { Articles } from '@/app/data/articles-data';
import LoadingOrError from '@/app/components/loading-on-error';
import HeroSection from '@/app/components/UI/home/heroSection';
import RecentPostCard from '@/app/components/UI/blog/RecentPostCard';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from 'public/img/home/Arrow.svg';
import Phone from 'public/img/home/phone.svg';
import '@/app/styles/home/home.css';

export const revalidate = 5;

export default async function Home() {
  const {
    body,
    isLoading: pageDataIsLoading,
    isError: pageDataIsError,
    error: pageDataError,
  } = await PageData('home_apps_delivered', 'home');
  const {
    articles,
    isLoading: articlesIsLoading,
    isError: articlesIsError,
    error: articlesError,
  } = await Articles();

  const isLoading = articlesIsLoading || pageDataIsLoading;
  const isError = articlesIsError || pageDataIsError;
  const error = articlesError || pageDataError;

  return (
    <>
      <LoadingOrError isLoading={isLoading} isError={isError} error={error} />
      <div className='home-page'>
        <div className='hero-section'>
          {body.fullscreen && (
            <HeroSection
              background={body.fullscreen.background}
              title1={body.fullscreen['title-1']}
              title2={body.fullscreen['title-2']}
              img={body.fullscreen.icon}
              btnText1={body.fullscreen['btn-text-1']}
              btnText2={body.fullscreen['btn-text-2']}
            />
          )}
        </div>
        <div className='home-page-wrapper body'>
          {body.about && (
            <div className='benefits'>
              <div className='benefits-content'>
                <div className='delivering'>
                  <h2
                    className='delivering-header'
                    style={{ color: body.about['color-title-1'] }}
                  >
                    {body.about['title-1']}
                  </h2>
                  <h3>{body.about['description-title-1']}</h3>
                  <p>{body.about['description-text-1']}</p>
                  <p>{body.about['description-text-2']}</p>
                </div>
                <div className='help'>
                  <h2 className='help-header'>{body.about['title-2']}</h2>
                  <h3>{body.about['description-title-2']}</h3>
                  <p>{body.about['description-text-3']}</p>
                  <p>{body.about['description-text-4']}</p>
                </div>
              </div>
            </div>
          )}

          {body.products && (
            <div className='products'>
              <div className='products-left'>
                <h4>
                  {body.products.title}{' '}
                  <span className='color-blue'>
                    {body.products['blue-title']} <br />
                    <span className='underlined-text'>
                      {body.products['blue-title-underline']}
                      <Image src={Arrow} alt='Arrow' />
                    </span>
                  </span>
                </h4>
              </div>
              <div className='products-right'>
                {body.products['product-item'].map((item, index) => (
                  <Link
                    href={item.link}
                    target='blank'
                    rel='noopener noreferrer'
                    key={index}
                  >
                    <div className='product-item'>
                      <div className='item-number'>0{index + 1}</div>
                      <div
                        className={`item-img img-0${index + 1}`}
                        style={{
                          backgroundImage: `url(${item.icon})`,
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div className='item-box'>
                        <h6>{item.title}</h6>
                        <p>{item.subtitle}</p>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {body.customers && (
            <div className='customers'>
              <div className='customers-header'>
                <h3>{body.customers.title}</h3>
              </div>
              <div className='brands'>
                <div className='brands-wrapper'>
                  <span>
                    {body.customers['customers-image'].map((item, index) => (
                      <Image
                        src={item.img}
                        alt={`customers-img-${index}`}
                        key={index + 1}
                        width={200}
                        height={70}
                      />
                    ))}
                  </span>
                  <span>
                    {body.customers['customers-image'].map((item, index) => (
                      <Image
                        src={item.img}
                        alt={`customers-img-${index}`}
                        key={index + 1}
                        width={200}
                        height={70}
                      />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          )}

          {body.advantages && (
            <div className='advantages'>
              {body.advantages['advantages-item'].map((item, index) => (
                <div className='advantages-card' key={index}>
                  <div className='card-logo'>
                    <Image
                      src={item.icon}
                      alt={`Advantages icon ${index + 1}`}
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className='advantages-card-description'>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {body.banner && (
            <div
              className='banner-wrapper'
              style={{
                background: `url(${body.banner.background}) no-repeat center center`,
                backgroundSize: 'cover',
              }}
            >
              <div className='banner'>
                <div className='banner-caption'>
                  <h2>
                    {body.banner['title-1']}
                    <span className='professional-experts'>
                      {body.banner['title-2']}
                    </span>
                  </h2>
                </div>
                <div
                  className={`banner-content ${
                    body.banner['flex-reverse'] ? 'flex-reverse' : ''
                  }`}
                >
                  <p>{body.banner.description}</p>
                  <div className='banner-btn-wrapper'>
                    <Link href='/contact-us'>
                      <button className='btn btn-contact'>
                        <Image src={Phone} alt='Phone' width={23} height={24} />{' '}
                        Contact us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {body.statistics && (
            <div className='statistics'>
              {body.statistics.info.map((item, index) => (
                <div className='statistics-info' key={index}>
                  <div style={{ color: item['number-color'] }}>
                    {item.number}
                  </div>
                  <div style={{ color: item['title-color'] }}>{item.title}</div>
                </div>
              ))}
            </div>
          )}

          {body.blog && (
            <div className='recent-post-wrapper home'>
              <h2 className='recent-post-title'>{body.blog.title}</h2>
              {articles && (
                <div className='recent-post-cards'>
                  {articles.slice(0, 3).map((article) => (
                    <RecentPostCard key={article.slug} article={article} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
