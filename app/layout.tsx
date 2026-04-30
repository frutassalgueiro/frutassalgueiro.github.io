import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const roboto = localFont({
  src: [
    { path: '../fonts/roboto/Roboto-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/roboto/Roboto-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/roboto/Roboto-Bold.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://frutassalgueiro.com'),
  title: {
    default: 'Frutas Salgueiro | Fruta fresca en O Salnés',
    template: '%s | Frutas Salgueiro'
  },
  description:
    'Frutas Salgueiro: fruta fresca, cestas personalizadas y mesas para eventos en O Salnés (Galicia). Atención cercana y calidad diaria.',
  keywords: [
    'frutas en A Coruña',
    'frutas en Galicia',
    'fruta fresca O Salnés',
    'proveedor fruta local',
    'distribución fruta Galicia',
    'cestas de fruta regalo',
    'mesas de fruta para eventos',
    'Frutas Salgueiro'
  ],
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Frutas Salgueiro | Fruta fresca en O Salnés',
    description:
      'Proveedor local de fruta fresca, cestas y mesas para eventos en Cambados, Portonovo, Dena y O Grove.',
    url: 'https://frutassalgueiro.com',
    siteName: 'Frutas Salgueiro',
    locale: 'es_ES',
    images: ['/img/portada.webp'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frutas Salgueiro | Fruta fresca en O Salnés',
    description:
      'Fruta fresca, cestas personalizadas y mesas para eventos en la comarca do Salnés.',
    images: ['/img/portada.webp']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
