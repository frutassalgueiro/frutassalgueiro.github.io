import type { Metadata } from 'next';
import LocalizedPage, { generateLocaleMetadata } from '../localized-page';

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata('en');
}

export default async function EnPage() {
  return LocalizedPage({ locale: 'en' });
}
