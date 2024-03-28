import { PageData } from '@/app/data/page-data';
import HeroSection from '@/app/components/UI/products/components/hero-section';
import { butter } from '@/app/helps/butter-client';
import Features from '@/app/components/UI/products/components/features';
import ProductPagesVideoUrl from '@/app/components/UI/products/components/product-pages-video-url';
import TwoColumnWithImage from '@/app/components/UI/products/components/two-column-with-image';
import Instructions from '@/app/components/UI/products/components/instructions';
import Testimonials from '@/app/components/UI/products/components/testimonials';

import '@/app/styles/products/productPages.css';

export const revalidate = 5;

export async function generateMetadata() {
  const { seo } = await PageData('product_apps_delivered', 'ai-issue-creator');

  return {
    title: seo.title,
    description: seo.description,
		icons: {
			icon: "/favicon.ico",
		},
  };
}
export default async function SmartIssueTemplates() {
  const fetchData = async () => {
    const { data, status } = await butter.page.retrieve(
      'product_apps_delivered',
      'ai-issue-creator'
    );
    return data;
  };
  const data = await fetchData();

  const sections = data.data.fields.body;

  const getSection = (type, fields) => {
    switch (type) {
      case 'features': {
        return <Features fields={fields} />;
      }
      case 'hero': {
        return <HeroSection fields={fields} />;
      }
      case 'video_link_youtube': {
        return <ProductPagesVideoUrl fields={fields} />;
      }
      case 'two_column_with_image': {
        return <TwoColumnWithImage fields={fields} />;
      }
      case 'get_it_now': {
        return <Instructions fields={fields} />;
      }
      case 'testimonials': {
        return <Testimonials fields={fields} />;
      }
      default: {
        return;
      }
    }
  };

  return (
    <>
      {sections.map((section, index) => {
        return (
          <div key={index}>{getSection(section.type, section.fields)}</div>
        );
      })}
    </>
  );
}
