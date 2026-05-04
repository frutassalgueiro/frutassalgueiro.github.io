import type { Metadata } from 'next';
import LocalizedPage, { generateLocaleMetadata } from '../localized-page';

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata('gl');
}

export default async function GlPage() {
  return LocalizedPage({ locale: 'gl' });
}
