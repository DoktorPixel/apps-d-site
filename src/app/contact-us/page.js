import { PageData } from '@/app/data/page-data';
import { ContactForm } from '@/app/components/UI/contact/ContactForm';

// import '@/app/styles/contact/contact-us.css';

export const revalidate = 5;

export async function generateMetadata() {
  const { seo } = await PageData('contact_apps_delivered', 'contact-us');

  return {
    title: seo.title,
    description: seo.description,
  };
}

export default async function ContactUs() {
  const { body, isLoading, isError, error } = await PageData(
    'contact_apps_delivered',
    'contact-us'
  );

  return (
    <>
      <ContactForm
        body={body}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </>
  );
}
