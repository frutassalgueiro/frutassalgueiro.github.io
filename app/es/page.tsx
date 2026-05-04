import type { Metadata } from 'next';
import LocalizedPage, { generateLocaleMetadata } from '../localized-page';

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata('es');
}

export default async function EsPage() {
  return LocalizedPage({ locale: 'es' });
}
