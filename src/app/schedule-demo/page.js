import { PageData } from '@/app/data/page-data';
import { ScheduleDemoForm } from '@/app/components/UI/contact/ScheduleDemoForm';
import '@/app/styles/contact/schedule-demo.css';

export const revalidate = 5;

export async function generateMetadata() {
  const { seo } = await PageData('contact_apps_delivered', 'contact-us');

  return {
    title: seo.title,
    description: seo.description,
		icons: {
			icon: "/favicon.ico",
		},
  };
}

export default async function ScheduleDemo() {
  return <ScheduleDemoForm />;
}
