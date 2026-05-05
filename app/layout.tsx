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
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }]
  },
  title: {
    default: 'Frutas Salgueiro',
    template: '%s | Frutas Salgueiro'
  },
  description:
    'Frutas Salgueiro: fruta fresca, cestas personalizadas y mesas para eventos en O Salnes (Galicia). Atencion cercana y calidad diaria.',
  keywords: [
    'frutas en Galicia',
    'fruta fresca O Salnes',
    'proveedor fruta local',
    'distribucion fruta Galicia',
    'cestas de fruta regalo',
    'mesas de fruta para eventos',
    'Frutas Salgueiro'
  ],
  alternates: {
    canonical: '/es',
    languages: {
      es: '/es',
      gl: '/gl',
      en: '/en',
      pt: '/pt',
      'x-default': '/es'
    }
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Frutas Salgueiro | Fruta fresca en O Salnes',
    description:
      'Proveedor local de fruta fresca, cestas y mesas para eventos en Cambados, Portonovo, Dena y O Grove.',
    url: 'https://frutassalgueiro.com/es',
    siteName: 'Frutas Salgueiro',
    locale: 'es_ES',
    images: [
      {
        url: '/img/portada.webp',
        width: 1200,
        height: 630,
        alt: 'Frutas Salgueiro'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frutas Salgueiro | Fruta fresca en O Salnes',
    description:
      'Fruta fresca, cestas personalizadas y mesas para eventos en la comarca do Salnes.',
    images: ['/img/portada.webp']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Frutas Salgueiro',
    url: 'https://frutassalgueiro.com/'
  };

  return (
    <html lang="es">
      <body className={roboto.variable}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}
