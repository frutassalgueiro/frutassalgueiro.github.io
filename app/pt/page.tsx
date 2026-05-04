import type { Metadata } from 'next';
import LocalizedPage, { generateLocaleMetadata } from '../localized-page';

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata('pt');
}

export default async function PtPage() {
  return LocalizedPage({ locale: 'pt' });
}
