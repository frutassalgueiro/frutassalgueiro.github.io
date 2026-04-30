import Image from 'next/image';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { InfoCard } from '@/components/info-card';
import { Reveal } from '@/components/reveal';
import { WhereMap } from '@/components/where-map';

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Frutas Salgueiro ofrece fruta fresca a domicilio, cestas de fruta y mesas para eventos en O Salnés, Galicia.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Frutas Salgueiro | Fruta fresca en O Salnés',
    description:
      'Servicio local de fruta fresca, cestas y mesas para bodas, comuniones y celebraciones en Galicia.',
    url: 'https://frutassalgueiro.com',
    images: ['/img/portada.webp']
  }
};

const basketItems = [
  {
    image: '/img/cesta4.webp',
    alt: 'cesta pequeña fruta',
    title: 'Cesta pequeña - 25€',
    description: 'Regalo saludable, original y personalizado con producto de máxima calidad.'
  },
  {
    image: '/img/cesta.webp',
    alt: 'cesta brochetas',
    title: 'Centro de brochetas - 60€',
    description: 'Consulta con nuestro personal para encargarla en la forma y tamaño que prefieras.'
  },
  {
    image: '/img/cesta2.webp',
    alt: 'cesta mediana fruta',
    title: 'Cesta mediana - 35€',
    description: 'Una opción de regalo rica, saludable y totalmente personalizable.'
  },
  {
    image: '/img/cesta3.webp',
    alt: 'centro brochetas',
    title: 'Centro de brochetas - 50€',
    description: 'Preparaciones por encargo con fruta fresca seleccionada.'
  }
];

const eventItems = [
  {
    image: '/img/mesa3.webp',
    alt: 'mesa fruta pequeña',
    title: 'Mesa pequeña - Desde 300€',
    description: 'Para bodas, bautizos, comuniones y cumpleaños.'
  },
  {
    image: '/img/mesa2.webp',
    alt: 'mesa fruta mediana',
    title: 'Mesa mediana - Desde 500€',
    description: 'Diseñamos mesas para cada tipo de ocasión.'
  },
  {
    image: '/img/mesa1.webp',
    alt: 'mesa fruta grande',
    title: 'Mesa grande - Desde 800€',
    description: 'Fruta fresca para cerrar cualquier banquete con calidad.'
  }
];

const smoothies = [
  {
    image: '/img/smoothie-sandia.webp',
    alt: 'smoothie sandia',
    title: 'Sandía',
    description:
      '2 tazas de sandía, 1 manzana, 1 pera, 1 puñado de espinaca fresca, hojas de menta al gusto, leche vegetal de avellana opcional'
  },
  {
    image: '/img/smoothie-frutosrojos.webp',
    alt: 'smoothie frutos rojos',
    title: 'Frutos rojos',
    description:
      '150g de fresas, 1/2 taza de frambuesas frescas o congeladas, 2/3 de taza de yogur natural, 1/3 taza de leche de almendra o avena (para 2 personas)'
  },
  {
    image: '/img/smoothie-mango.webp',
    alt: 'smoothie piña mango',
    title: 'Piña y mango',
    description:
      '1/2 plátano, 1/2 mango, 3/4 taza de piña, 1/2 taza de yogur natural, 1/2 taza de leche de almendra'
  },
  {
    image: '/img/smoothie-platano.webp',
    alt: 'smoothie desayuno',
    title: 'El smoothie de desayuno definitivo',
    description:
      '1 plátano maduro, 2 cucharadas grandes de copos de avena, 1 cucharada de semillas de lino, 150ml de leche de almendra o avena, 4 cucharadas de yogur natural probiótico o tu elección de yogur, 1/2 cucharadita de extracto de vainilla o de cacao en polvo (para una persona)'
  },
  {
    image: '/img/smoothie-kiwi.webp',
    alt: 'smoothie adelgazar',
    title: 'Ayudante a adelgazar',
    description:
      '2 kiwis, 1/2 plátano, 1/2 manzana, 1 taza de espinacas, 1/2 taza de yogur de vainilla o natural, 2 cucharadas de semillas de lino molidas (opcional)'
  },
  {
    image: '/img/smoothie-detox.webp',
    alt: 'smoothie detox',
    title: 'Detox',
    description:
      '6 rodajas de pimiento verde, 1/2 manzana verde, 3 trocitos de brócoli, 2 hojas de lechuga rizada, 1 taza de espinacas, zumo de 4 limas, 3 rodajas de calabacín, 1/2 pepino'
  }
];

const tips = [
  {
    image: '/img/merienda.webp',
    alt: 'acompañar comidas',
    title: 'Mejor solas que mal acompañadas',
    description:
      'Consumir las frutas fuera de las comidas, a media mañana o a media tarde es lo ideal.'
  },
  {
    image: '/img/frutas-acidas.webp',
    alt: 'frutas acidas dulces',
    title: 'Frutas ácidas o semi-ácidas por la mañana',
    description: 'Piña, ciruela, mora, frambuesa, naranja, limón, fresas, mandarina, tomate, uva y manzana verde, entre otras.'
  },
  {
    image: '/img/frutas-dulces.webp',
    alt: 'frutas dulces',
    title: 'Frutas dulces por la mañana o por la tarde',
    description: 'Melón, plátano, sandía, manzana golden, ciruelas, uvas, granada, pera conferencia y más.'
  },
  {
    image: '/img/guarnicion.webp',
    alt: 'frutas acidas',
    title: 'Acompañante',
    description:
      'Combina proteínas, carbohidratos y legumbres con verduras crudas o cocidas para mejorar el equilibrio de la comida.'
  },
  {
    image: '/img/ensalada.webp',
    alt: 'frutas ensalada',
    title: 'Complemento',
    description: 'Piña, kiwi, fresa o naranja en ensaladas aportan color y un toque fresco y tropical.'
  },
  {
    image: '/img/nevera.webp',
    alt: 'frutas nevera',
    title: 'Conservación',
    description:
      'El frigorífico solo cuando es necesario. Sacar fruta y verdura un tiempo antes de consumir mejora sabor y textura.'
  }
];

const trustStats = [
  { label: 'Años de experiencia', value: '+30' },
  { label: 'Atención directa', value: '6 días/semana' },
  { label: 'Zona de reparto', value: 'Comarca do Salnés' }
];

const testimonials = [
  {
    quote: 'Producto fresco, trato cercano y siempre puntuales. Da gusto trabajar con ellos.',
    author: 'Cliente de hostelería'
  },
  {
    quote: 'Les encargamos una mesa de fruta para un evento familiar y quedó espectacular.',
    author: 'Familia de Cambados'
  },
  {
    quote: 'Se nota la experiencia y la calidad. Son nuestro proveedor de confianza.',
    author: 'Comercio local'
  }
];

export default function HomePage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://frutassalgueiro.com/#localbusiness',
      name: 'Frutas Salgueiro',
      url: 'https://frutassalgueiro.com',
      image: 'https://frutassalgueiro.com/img/portada.webp',
      description:
        'Frutería y distribuidor local de fruta fresca, cestas de fruta y mesas para eventos en la comarca do Salnés.',
      telephone: '+34 617 384 147',
      priceRange: '€€',
      areaServed: ['Cambados', 'O Grove', 'Portonovo', 'Dena', 'O Salnés'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lugar Viliquín 29 - Dena',
        postalCode: '36967',
        addressLocality: 'Dena',
        addressRegion: 'Pontevedra',
        addressCountry: 'ES'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 42.4839,
        longitude: -8.7776
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00'
        }
      ],
      sameAs: ['https://www.facebook.com/frutassalgueiro/']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://frutassalgueiro.com/#website',
      url: 'https://frutassalgueiro.com',
      name: 'Frutas Salgueiro',
      inLanguage: 'es'
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main id="inicio">
        <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
          <div className="absolute inset-0">
            <Image src="/img/portada.webp" alt="Frutas Salgueiro" fill priority className="object-cover opacity-20" />
          </div>
          <div className="hero-glow" aria-hidden />
          <div className="container-shell relative py-20 sm:py-28">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-moss">Frutas Salgueiro</p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-leaf sm:text-6xl">
                Llevando la mejor fruta a tu casa desde hace más de 30 años
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                Selección diaria de fruta fresca para hogares, eventos y negocios de la comarca del Salnés.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contacto" className="btn-primary">
                  Contactar
                </a>
                <a href="https://api.whatsapp.com/send?phone=34617384147" className="btn-secondary">
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="cestas" className="container-shell py-14 sm:py-20">
          <Reveal>
            <SectionTitle
              title="¡Regala fruta!"
              subtitle="¿Qué hay mejor que una cesta de fruta para regalar? Rico, saludable y original."
            />
            <p className="mb-8 max-w-3xl text-neutral-700">
              Consulta nuestras cestas y anímate a elegir la tuya. Totalmente personalizada, de cualquier forma y tamaño y, lo más importante, con producto de máxima calidad. Consulta a nuestro personal y haz tu encargo.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {basketItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <InfoCard {...item} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white py-14 sm:py-20">
          <div className="container-shell">
            <Reveal>
              <SectionTitle
                title="Confianza local que se nota"
                subtitle="Calidad diaria, cercanía y compromiso con cada pedido."
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {trustStats.map((item, index) => (
                <Reveal key={item.label} delay={index * 80}>
                  <article className="card p-5">
                    <p className="text-3xl font-bold tracking-tight text-leaf">{item.value}</p>
                    <p className="mt-2 text-sm font-medium text-neutral-700">{item.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.author} delay={index * 90}>
                  <article className="card p-5">
                    <p className="text-sm leading-relaxed text-neutral-700">&ldquo;{item.quote}&rdquo;</p>
                    <p className="mt-3 text-sm font-semibold text-leaf">{item.author}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="eventos" className="border-y border-neutral-200 bg-white py-14 sm:py-20">
          <div className="container-shell">
            <Reveal>
              <SectionTitle title="También en eventos" subtitle="Bodas, bautizos, cumpleaños..." />
              <p className="mb-8 max-w-3xl text-neutral-700">
                Nada mejor que una buena pieza de fruta fresca después de un buen banquete. Si quieres una para tu próximo evento, no dudes en consultarnos.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {eventItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <InfoCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="donde-estamos" className="container-shell py-14 sm:py-20">
          <Reveal>
            <SectionTitle title="¿Dónde estamos?" />
            <p className="max-w-3xl text-neutral-700">
              Nos movemos de lunes a sábado por la comarca del Salnés, desde Cambados hasta O Grove, pasando por Portonovo y Dena. Además nos puedes encontrar en nuestro almacén local, en Viliquín.
            </p>
            <WhereMap />
          </Reveal>
        </section>

        <section id="recetas-consejos" className="border-y border-neutral-200 bg-white py-14 sm:py-20">
          <div className="container-shell">
            <Reveal>
              <SectionTitle title="Smoothies" />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {smoothies.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <InfoCard {...item} descriptionStyle="ingredients" />
                </Reveal>
              ))}
            </div>

            <div className="mt-14">
              <Reveal>
                <SectionTitle title="Consejos" />
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {tips.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70}>
                    <InfoCard {...item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="container-shell py-14 sm:py-20">
          <Reveal>
            <SectionTitle
              title="Contacto"
              subtitle="Estamos cerca de ti. Escríbenos o llámanos y te ayudamos a preparar tu pedido."
            />
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div className="card relative overflow-hidden p-6">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80" aria-hidden />
              <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-50" aria-hidden />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">Atención directa</p>
                <p className="mt-3 text-3xl font-bold leading-tight text-leaf">(+34) 617 384 147</p>
                <p className="mt-3 max-w-lg text-sm text-neutral-700">
                  Encargos de cestas, mesas para eventos y reparto local en la comarca. Respuesta rápida por llamada o WhatsApp.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="tel:+34617384147" className="btn-primary">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                      <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.25.56 3.45.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.36.56 3.45a1 1 0 0 1-.25 1.01L6.6 10.8Z" />
                    </svg>
                    Llamar ahora
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=34617384147" className="btn-secondary">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                      <path d="M12.04 2C6.5 2 2 6.37 2 11.77c0 1.9.56 3.66 1.53 5.15L2 22l5.3-1.5a10.2 10.2 0 0 0 4.74 1.17c5.55 0 10.04-4.37 10.04-9.77S17.6 2 12.04 2Zm5.9 13.85c-.25.69-1.45 1.3-2 1.38-.52.08-1.17.11-1.89-.1-.44-.14-1-.33-1.72-.64-3.03-1.3-5-4.4-5.15-4.6-.14-.2-1.23-1.6-1.23-3.06 0-1.46.77-2.17 1.04-2.46.28-.29.6-.37.8-.37h.58c.18 0 .42-.07.65.46.24.57.8 1.96.87 2.1.07.14.12.3.02.49-.1.2-.15.32-.3.5-.14.16-.3.36-.42.48-.14.15-.3.3-.13.58.17.29.75 1.22 1.6 1.97 1.1.97 2.03 1.27 2.32 1.41.3.15.47.12.64-.07.17-.2.74-.84.94-1.13.2-.29.39-.24.66-.14.27.1 1.7.78 1.99.92.29.14.48.22.55.34.07.12.07.7-.18 1.4Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <a href="https://goo.gl/maps/73BJ2RD2sE82" className="card p-5 text-sm text-neutral-700">
                <p className="inline-flex items-center gap-2 font-semibold text-leaf">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M12 2a7 7 0 0 0-7 7c0 4.4 5.1 10.6 6.2 11.9a1 1 0 0 0 1.6 0C13.9 19.6 19 13.4 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                  </svg>
                  Dirección
                </p>
                <p className="mt-1">Lugar Viliquín 29 - Dena</p>
                <p className="text-neutral-600">CP 36967 (Pontevedra)</p>
              </a>
              <a href="https://www.facebook.com/frutassalgueiro/" className="card p-5 text-sm text-neutral-700">
                <p className="inline-flex items-center gap-2 font-semibold text-leaf">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.26-1.47 1.55-1.47h1.66V4.96a22.4 22.4 0 0 0-2.42-.12c-2.4 0-4.04 1.4-4.04 4v2.24H8v3h2.2v8h3.3Z" />
                  </svg>
                  Facebook
                </p>
                <p className="mt-1">Frutas Salgueiro</p>
              </a>
              <div className="card p-5 text-sm text-neutral-700">
                <p className="inline-flex items-center gap-2 font-semibold text-leaf">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm1-10.6V7h-2v5.2l4.2 2.5 1-1.7-3.2-1.9Z" />
                  </svg>
                  Horario habitual
                </p>
                <p className="mt-1">Lunes a sábado</p>
                <p>8:00 - 15:00 (mercados)</p>
                <p className="mt-1">Almacén local por la tarde</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://api.whatsapp.com/send?phone=34617384147"
        className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-leaf px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 sm:hidden"
      >
        Hablar por WhatsApp
      </a>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="container-shell flex flex-col gap-3 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© Frutas Salgueiro</p>
          <a href="#inicio" className="font-medium text-leaf">
            Volver arriba
          </a>
        </div>
      </footer>
    </>
  );
}

