import Home from '@/app/home/page';
import { PageData } from '@/app/data/page-data';
import '@/app/globals.css';

export const revalidate = 5;

export async function generateMetadata() {
  const { seo } = await PageData('home_apps_delivered', 'home');

  return {
    title: seo.title,
    description: seo.description,
		icons: {
			icon: "/favicon.ico",
		},
  };
}
export default function HomePage() {
  return <Home />;
}
