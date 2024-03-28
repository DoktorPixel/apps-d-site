import '@/app/styles/products/products.css';
import { ProductItem } from '../components/UI/products/productItem';
import Link from 'next/link';
import Image from 'next/image';
import OpenSVG from 'public/img/products/open.svg';
import Phone from 'public/img/home/phone.svg';
import { PageData } from '../data/page-data';
import LoadingOrError from '@/app/components/loading-on-error';

export const revalidate = 5;

export async function generateMetadata() {
  const { seo } = await PageData(
    'products_apps_delivered',
    'products'
  );

  return {
    title: seo.title,
    description: seo.description,
		icons: {
			icon: "/favicon.ico",
		},
  };
}

export default async function Products() {
  const { body, isLoading, isError, error } = await PageData(
    'products_apps_delivered',
    'products'
  );

  return (
    <>
      <div className='products-page-wrapper'>
        <div className='products-page body'>
          <LoadingOrError
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
          {body.banner && (
            <div
              className='products-banner'
              style={{
                background: `url(${body.banner.background}) no-repeat center center`,
                backgroundSize: 'cover',
              }}
            >
              <div className='products-banner-content'>
                <div className='products-left-part'>
                  <h1>{body.banner.title}</h1>
                  <p>{body.banner.description}</p>
                </div>
                <div className='products-right-part'>
                  <div className='breadcrumb'>
                    <Link href='/'>Home </Link>{' '}
                    <Image src={OpenSVG} alt='Open SVG' width={8} height={13} />
                    <Link href='/products'> Products</Link>
                  </div>
                  <div className='products-buttons-wrapper'>
                    <p>{body.banner.subtitle}</p>
                    <Link href='/contact-us'>
                      <button className='btn hidden-button'>
                        <Image src={Phone} alt='Phone' width={12} height={12} />{' '}
                        Contact us
                      </button>
                    </Link>
                    <Link href='/schedule-demo'>
                      <button className='btn schedule-demo'>
                        {body.banner['btn-text']}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {body.cards && (
            <>
              <div className='products-cards'>
                {body.cards.card.map((item, index) => (
                  <Link href={item.link} target='blank'>
                    <div className='products-card' key={index}>
                      <div className='card-description'>
                        <h6>{item.title}</h6>
                        <Link
                          href='https://www.atlassian.com/software/jira'
                          target='blank'
                        >
                          {item.subtitle}
                        </Link>
                      </div>
                      <div className='card-img'>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={154}
                          height={170}
                        />
                      </div>
                      <div className='products-card-content'>
                        <p>{item.description}</p>
                      </div>
                      <div>
                        <Link href={item['link-btn-1']}>
                          <button className='products-card-btn card-btn-left'>
                            {item['btn-text-1']}
                          </button>
                        </Link>
                        <Link href={item['link-btn-2']} role='button'>
                          <button className='products-card-btn card-btn-right'>
                            {item['btn-text-2']}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className='products-cards-mobile'>
                {body.cards.card.map((item, index) => (
                  <ProductItem
                    key={index}
                    number={`0${index + 1}`}
                    icon={item.icon}
                    title={item.title}
                    subtitle1={`For ${item.subtitle}`}
                    subtitle2={item.subtitlemob}
                    siteHref={item.link}
                  />
                ))}
              </div>
            </>
          )}
          {body.image && (
            <Link
              href={body.image.link}
              target='blank'
              className='link-logo-marketplace'
            >
              <img
                className='logo-marketplace'
                src={body.image.img}
                alt='logoMarketplace '
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
