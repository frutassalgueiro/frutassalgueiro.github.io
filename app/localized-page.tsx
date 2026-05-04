import Image from 'next/image';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { InfoCard } from '@/components/info-card';
import { Reveal } from '@/components/reveal';
import { WhereMap } from '@/components/where-map';
import { defaultLocale, dictionaries, isLocale, localeMap, type Locale } from '@/lib/i18n';

type CardItem = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

type LocalizedContent = {
  basketItems: CardItem[];
  eventItems: CardItem[];
  smoothies: CardItem[];
  tips: CardItem[];
  trustStats: Array<{ label: string; value: string }>;
  testimonials: Array<{ quote: string; author: string }>;
  contactLead: string;
  marketHours: string;
};

const baseImages = {
  basket: ['/img/cesta4.webp', '/img/cesta.webp', '/img/cesta2.webp', '/img/cesta3.webp'],
  event: ['/img/mesa3.webp', '/img/mesa2.webp', '/img/mesa1.webp'],
  smoothie: [
    '/img/smoothie-sandia.webp',
    '/img/smoothie-frutosrojos.webp',
    '/img/smoothie-mango.webp',
    '/img/smoothie-platano.webp',
    '/img/smoothie-kiwi.webp',
    '/img/smoothie-detox.webp'
  ],
  tips: ['/img/merienda.webp', '/img/frutas-acidas.webp', '/img/frutas-dulces.webp', '/img/guarnicion.webp', '/img/ensalada.webp', '/img/nevera.webp']
};

const localizedContent: Record<Locale, LocalizedContent> = {
  es: {
    basketItems: [
      { image: baseImages.basket[0], alt: 'cesta pequena fruta', title: 'Cesta pequeña - 25€', description: 'Regalo saludable, original y personalizado con producto de máxima calidad.' },
      { image: baseImages.basket[1], alt: 'cesta brochetas', title: 'Centro de brochetas - 60€', description: 'Consulta con nuestro personal para encargarla en la forma y tamaño que prefieras.' },
      { image: baseImages.basket[2], alt: 'cesta mediana fruta', title: 'Cesta mediana - 35€', description: 'Una opción de regalo rica, saludable y totalmente personalizable.' },
      { image: baseImages.basket[3], alt: 'centro brochetas', title: 'Centro de brochetas - 50€', description: 'Preparaciones por encargo con fruta fresca seleccionada.' }
    ],
    eventItems: [
      { image: baseImages.event[0], alt: 'mesa fruta pequena', title: 'Mesa pequeña - Desde 300€', description: 'Para bodas, bautizos, comuniones y cumpleaños.' },
      { image: baseImages.event[1], alt: 'mesa fruta mediana', title: 'Mesa mediana - Desde 500€', description: 'Diseñamos mesas para cada tipo de ocasión.' },
      { image: baseImages.event[2], alt: 'mesa fruta grande', title: 'Mesa grande - Desde 800€', description: 'Fruta fresca para cerrar cualquier banquete con calidad.' }
    ],
    smoothies: [
      { image: baseImages.smoothie[0], alt: 'smoothie sandia', title: 'Sandía', description: '2 tazas de sandía, 1 manzana, 1 pera, 1 puñado de espinaca fresca, hojas de menta al gusto, leche vegetal de avellana opcional' },
      { image: baseImages.smoothie[1], alt: 'smoothie frutos rojos', title: 'Frutos rojos', description: '150g de fresas, 1/2 taza de frambuesas frescas o congeladas, 2/3 de taza de yogur natural, 1/3 taza de leche de almendra o avena (para 2 personas)' },
      { image: baseImages.smoothie[2], alt: 'smoothie pina mango', title: 'Piña y mango', description: '1/2 plátano, 1/2 mango, 3/4 taza de piña, 1/2 taza de yogur natural, 1/2 taza de leche de almendra' },
      { image: baseImages.smoothie[3], alt: 'smoothie desayuno', title: 'El smoothie de desayuno definitivo', description: '1 plátano maduro, 2 cucharadas grandes de copos de avena, 1 cucharada de semillas de lino, 150ml de leche de almendra o avena, 4 cucharadas de yogur natural probiótico o tu elección de yogur, 1/2 cucharadita de extracto de vainilla o de cacao en polvo (para una persona)' },
      { image: baseImages.smoothie[4], alt: 'smoothie adelgazar', title: 'Ayudante a adelgazar', description: '2 kiwis, 1/2 plátano, 1/2 manzana, 1 taza de espinacas, 1/2 taza de yogur de vainilla o natural, 2 cucharadas de semillas de lino molidas (opcional)' },
      { image: baseImages.smoothie[5], alt: 'smoothie detox', title: 'Detox', description: '6 rodajas de pimiento verde, 1/2 manzana verde, 3 trocitos de brócoli, 2 hojas de lechuga rizada, 1 taza de espinacas, zumo de 4 limas, 3 rodajas de calabacín, 1/2 pepino' }
    ],
    tips: [
      { image: baseImages.tips[0], alt: 'acompanar comidas', title: 'Mejor solas que mal acompañadas', description: 'Consumir las frutas fuera de las comidas, a media mañana o a media tarde es lo ideal.' },
      { image: baseImages.tips[1], alt: 'frutas acidas dulces', title: 'Frutas ácidas o semi-ácidas por la mañana', description: 'Piña, ciruela, mora, frambuesa, naranja, limón, fresas, mandarina, tomate, uva y manzana verde, entre otras.' },
      { image: baseImages.tips[2], alt: 'frutas dulces', title: 'Frutas dulces por la mañana o por la tarde', description: 'Melón, plátano, sandía, manzana golden, ciruelas, uvas, granada, pera conferencia y más.' },
      { image: baseImages.tips[3], alt: 'frutas acidas', title: 'Acompañante', description: 'Combina proteínas, carbohidratos y legumbres con verduras crudas o cocidas para mejorar el equilibrio de la comida.' },
      { image: baseImages.tips[4], alt: 'frutas ensalada', title: 'Complemento', description: 'Piña, kiwi, fresa o naranja en ensaladas aportan color y un toque fresco y tropical.' },
      { image: baseImages.tips[5], alt: 'frutas nevera', title: 'Conservación', description: 'El frigorífico solo cuando es necesario. Sacar fruta y verdura antes de consumir mejora sabor y textura.' }
    ],
    trustStats: [
      { label: 'Años de experiencia', value: '+30' },
      { label: 'Atención directa', value: '6 días/semana' },
      { label: 'Zona de reparto', value: 'Comarca do Salnés' }
    ],
    testimonials: [
      { quote: 'Producto fresco, trato cercano y siempre puntuales. Da gusto trabajar con ellos.', author: 'Cliente de hostelería' },
      { quote: 'Les encargamos una mesa de fruta para un evento familiar y quedó espectacular.', author: 'Familia de Cambados' },
      { quote: 'Se nota la experiencia y la calidad. Son nuestro proveedor de confianza.', author: 'Comercio local' }
    ],
    contactLead: 'Encargos de cestas, mesas para eventos y reparto local en la comarca. Respuesta rápida por llamada o WhatsApp.',
    marketHours: '8:00 - 15:00 (mercados)'
  },
  gl: {
    basketItems: [
      { image: baseImages.basket[0], alt: 'cesta pequena froita', title: 'Cesta pequena - 25€', description: 'Agasallo saudable, orixinal e personalizado con produto de máxima calidade.' },
      { image: baseImages.basket[1], alt: 'cesta brochetas', title: 'Centro de brochetas - 60€', description: 'Consulta co noso persoal para encargala coa forma e tamaño que prefiras.' },
      { image: baseImages.basket[2], alt: 'cesta mediana froita', title: 'Cesta mediana - 35€', description: 'Unha opción de agasallo rica, saudable e totalmente personalizable.' },
      { image: baseImages.basket[3], alt: 'centro brochetas', title: 'Centro de brochetas - 50€', description: 'Preparacións por encargo con froita fresca seleccionada.' }
    ],
    eventItems: [
      { image: baseImages.event[0], alt: 'mesa froita pequena', title: 'Mesa pequena - Desde 300€', description: 'Para vodas, bautizos, comuñóns e aniversarios.' },
      { image: baseImages.event[1], alt: 'mesa froita mediana', title: 'Mesa mediana - Desde 500€', description: 'Deseñamos mesas para cada tipo de ocasión.' },
      { image: baseImages.event[2], alt: 'mesa froita grande', title: 'Mesa grande - Desde 800€', description: 'Froita fresca para pechar calquera banquete con calidade.' }
    ],
    smoothies: [
      { image: baseImages.smoothie[0], alt: 'smoothie sandia', title: 'Sandía', description: '2 cuncas de sandía, 1 mazá, 1 pera, 1 puñado de espinaca fresca, follas de menta ao gusto, leite vexetal de abelá opcional' },
      { image: baseImages.smoothie[1], alt: 'smoothie froitos vermellos', title: 'Froitos vermellos', description: '150g de amorodos, 1/2 cunca de framboesas frescas ou conxeladas, 2/3 de cunca de iogur natural, 1/3 cunca de leite de améndoa ou avea (para 2 persoas)' },
      { image: baseImages.smoothie[2], alt: 'smoothie pina mango', title: 'Piña e mango', description: '1/2 plátano, 1/2 mango, 3/4 cunca de piña, 1/2 cunca de iogur natural, 1/2 cunca de leite de améndoa' },
      { image: baseImages.smoothie[3], alt: 'smoothie almorzo', title: 'O smoothie de almorzo definitivo', description: '1 plátano maduro, 2 culleradas de copos de avea, 1 cullerada de sementes de liño, 150 ml de leite de améndoa ou avea, 4 culleradas de iogur natural probiótico, 1/2 culleradiña de vainilla ou cacao en po (para 1 persoa)' },
      { image: baseImages.smoothie[4], alt: 'smoothie adelgazar', title: 'Axudante para adelgazar', description: '2 kiwis, 1/2 plátano, 1/2 mazá, 1 cunca de espinacas, 1/2 cunca de iogur de vainilla ou natural, 2 culleradas de sementes de liño moídas (opcional)' },
      { image: baseImages.smoothie[5], alt: 'smoothie detox', title: 'Detox', description: '6 rodas de pemento verde, 1/2 mazá verde, 3 anacos de brócoli, 2 follas de leituga rizada, 1 cunca de espinacas, zume de 4 limas, 3 rodas de cabaciña, 1/2 pepino' }
    ],
    tips: [
      { image: baseImages.tips[0], alt: 'acompanar comidas', title: 'Mellor soas que mal acompañadas', description: 'Consumir a froita fóra das comidas, a media mañá ou media tarde, é o ideal.' },
      { image: baseImages.tips[1], alt: 'froitas acidas doces', title: 'Froitas ácidas ou semiácidas pola mañá', description: 'Piña, ameixa, mora, framboesa, laranxa, limón, amorodos, mandarina, tomate, uva e mazá verde, entre outras.' },
      { image: baseImages.tips[2], alt: 'froitas doces', title: 'Froitas doces pola mañá ou pola tarde', description: 'Melón, plátano, sandía, mazá golden, ameixas, uvas, granada, pera conferencia e máis.' },
      { image: baseImages.tips[3], alt: 'froitas acidas', title: 'Acompañamento', description: 'Combina proteínas, hidratos e legumes con verduras crÃºas ou cocidas para mellorar o equilibrio da comida.' },
      { image: baseImages.tips[4], alt: 'froitas ensalada', title: 'Complemento', description: 'Piña, kiwi, amorodo ou laranxa en ensaladas achegan cor e un toque fresco e tropical.' },
      { image: baseImages.tips[5], alt: 'froitas neveira', title: 'Conservación', description: 'A neveira só cando sexa necesario. Sacar froita e verdura antes de consumir mellora sabor e textura.' }
    ],
    trustStats: [
      { label: 'Anos de experiencia', value: '+30' },
      { label: 'Atención directa', value: '6 días/semana' },
      { label: 'Zona de reparto', value: 'Comarca do Salnés' }
    ],
    testimonials: [
      { quote: 'Produto fresco, trato próximo e sempre puntuais. Dá gusto traballar con eles.', author: 'Cliente de hostalaría' },
      { quote: 'Encargámoslles unha mesa de froita para un evento familiar e quedou espectacular.', author: 'Familia de Cambados' },
      { quote: 'Nótase a experiencia e a calidade. Son o noso provedor de confianza.', author: 'Comercio local' }
    ],
    contactLead: 'Encargos de cestas, mesas para eventos e reparto local na comarca. Resposta rápida por chamada ou WhatsApp.',
    marketHours: '8:00 - 15:00 (mercados)'
  },
  en: {
    basketItems: [
      { image: baseImages.basket[0], alt: 'small fruit basket', title: 'Small basket - €25', description: 'Healthy, original and customized gift with top-quality produce.' },
      { image: baseImages.basket[1], alt: 'fruit skewers centerpiece', title: 'Fruit skewers centerpiece - €60', description: 'Talk to our team to order the shape and size you prefer.' },
      { image: baseImages.basket[2], alt: 'medium fruit basket', title: 'Medium basket - €35', description: 'A tasty, healthy and fully customizable gift option.' },
      { image: baseImages.basket[3], alt: 'fruit skewers center', title: 'Fruit skewers centerpiece - €50', description: 'Made-to-order preparations with selected fresh fruit.' }
    ],
    eventItems: [
      { image: baseImages.event[0], alt: 'small fruit table', title: 'Small table - From €300', description: 'For weddings, baptisms, communions and birthdays.' },
      { image: baseImages.event[1], alt: 'medium fruit table', title: 'Medium table - From €500', description: 'We design fruit tables for every kind of event.' },
      { image: baseImages.event[2], alt: 'large fruit table', title: 'Large table - From €800', description: 'Fresh fruit to close any celebration with quality.' }
    ],
    smoothies: [
      { image: baseImages.smoothie[0], alt: 'watermelon smoothie', title: 'Watermelon', description: '2 cups watermelon, 1 apple, 1 pear, 1 handful fresh spinach, mint leaves to taste, optional hazelnut plant milk' },
      { image: baseImages.smoothie[1], alt: 'berry smoothie', title: 'Red berries', description: '150g strawberries, 1/2 cup fresh or frozen raspberries, 2/3 cup plain yogurt, 1/3 cup almond or oat milk (for 2 people)' },
      { image: baseImages.smoothie[2], alt: 'pineapple mango smoothie', title: 'Pineapple and mango', description: '1/2 banana, 1/2 mango, 3/4 cup pineapple, 1/2 cup plain yogurt, 1/2 cup almond milk' },
      { image: baseImages.smoothie[3], alt: 'breakfast smoothie', title: 'The ultimate breakfast smoothie', description: '1 ripe banana, 2 tbsp oats, 1 tbsp flaxseed, 150ml almond or oat milk, 4 tbsp probiotic plain yogurt, 1/2 tsp vanilla extract or cocoa powder (for 1 person)' },
      { image: baseImages.smoothie[4], alt: 'weight loss smoothie', title: 'Weight-loss helper', description: '2 kiwis, 1/2 banana, 1/2 apple, 1 cup spinach, 1/2 cup vanilla or plain yogurt, 2 tbsp ground flaxseed (optional)' },
      { image: baseImages.smoothie[5], alt: 'detox smoothie', title: 'Detox', description: '6 slices green pepper, 1/2 green apple, 3 broccoli pieces, 2 curly lettuce leaves, 1 cup spinach, juice of 4 limes, 3 zucchini slices, 1/2 cucumber' }
    ],
    tips: [
      { image: baseImages.tips[0], alt: 'fruit between meals', title: 'Better alone than badly paired', description: 'Eating fruit between meals, mid-morning or mid-afternoon, is ideal.' },
      { image: baseImages.tips[1], alt: 'acidic fruits', title: 'Acidic or semi-acidic fruits in the morning', description: 'Pineapple, plum, blackberry, raspberry, orange, lemon, strawberries, tangerine, tomato, grapes and green apple, among others.' },
      { image: baseImages.tips[2], alt: 'sweet fruits', title: 'Sweet fruits in the morning or afternoon', description: 'Melon, banana, watermelon, golden apple, plums, grapes, pomegranate, conference pear and more.' },
      { image: baseImages.tips[3], alt: 'fruit as side dish', title: 'Side pairing', description: 'Combine proteins, carbs and legumes with raw or cooked vegetables for better meal balance.' },
      { image: baseImages.tips[4], alt: 'fruit in salad', title: 'Complement', description: 'Pineapple, kiwi, strawberry or orange in salads add color and a fresh tropical touch.' },
      { image: baseImages.tips[5], alt: 'fruit fridge', title: 'Storage', description: 'Use the fridge only when needed. Taking fruit and vegetables out before serving improves flavor and texture.' }
    ],
    trustStats: [
      { label: 'Years of experience', value: '30+' },
      { label: 'Direct support', value: '6 days/week' },
      { label: 'Delivery area', value: 'Salnés region' }
    ],
    testimonials: [
      { quote: 'Fresh produce, friendly service and always on time. A pleasure to work with them.', author: 'Hospitality client' },
      { quote: 'We ordered a fruit table for a family event and it looked amazing.', author: 'Family from Cambados' },
      { quote: 'You can feel their experience and quality. They are our trusted supplier.', author: 'Local business' }
    ],
    contactLead: 'Orders for baskets, event tables and local delivery across the region. Fast response by phone or WhatsApp.',
    marketHours: '8:00 - 15:00 (markets)'
  },
  pt: {
    basketItems: [
      { image: baseImages.basket[0], alt: 'cesta pequena fruta', title: 'Cesta pequena - 25€', description: 'Presente saudável, original e personalizado com produto de máxima qualidade.' },
      { image: baseImages.basket[1], alt: 'cesta espetadas', title: 'Centro de espetadas - 60€', description: 'Fale com a nossa equipa para encomendar no formato e tamanho que preferir.' },
      { image: baseImages.basket[2], alt: 'cesta media fruta', title: 'Cesta média - 35€', description: 'Uma opção de presente saborosa, saudável e totalmente personalizável.' },
      { image: baseImages.basket[3], alt: 'centro espetadas', title: 'Centro de espetadas - 50€', description: 'Preparações por encomenda com fruta fresca selecionada.' }
    ],
    eventItems: [
      { image: baseImages.event[0], alt: 'mesa fruta pequena', title: 'Mesa pequena - Desde 300€', description: 'Para casamentos, batizados, comunhões e aniversários.' },
      { image: baseImages.event[1], alt: 'mesa fruta media', title: 'Mesa média - Desde 500€', description: 'Criamos mesas de fruta para cada tipo de ocasião.' },
      { image: baseImages.event[2], alt: 'mesa fruta grande', title: 'Mesa grande - Desde 800€', description: 'Fruta fresca para encerrar qualquer evento com qualidade.' }
    ],
    smoothies: [
      { image: baseImages.smoothie[0], alt: 'smoothie melancia', title: 'Melancia', description: '2 chávenas de melancia, 1 maçã, 1 pera, 1 punhado de espinafre fresco, folhas de hortelã a gosto, bebida vegetal de avelã opcional' },
      { image: baseImages.smoothie[1], alt: 'smoothie frutos vermelhos', title: 'Frutos vermelhos', description: '150g de morangos, 1/2 chávena de framboesas frescas ou congeladas, 2/3 de chávena de iogurte natural, 1/3 de chávena de bebida de amêndoa ou aveia (para 2 pessoas)' },
      { image: baseImages.smoothie[2], alt: 'smoothie ananas manga', title: 'Ananás e manga', description: '1/2 banana, 1/2 manga, 3/4 de chávena de ananás, 1/2 chávena de iogurte natural, 1/2 chávena de bebida de amêndoa' },
      { image: baseImages.smoothie[3], alt: 'smoothie pequeno almoco', title: 'O smoothie de pequeno-almoço definitivo', description: '1 banana madura, 2 colheres de sopa de flocos de aveia, 1 colher de sopa de sementes de linhaça, 150ml de bebida de amêndoa ou aveia, 4 colheres de sopa de iogurte probiótico, 1/2 colher de chá de baunilha ou cacau em pó (para 1 pessoa)' },
      { image: baseImages.smoothie[4], alt: 'smoothie emagrecer', title: 'Ajuda para emagrecer', description: '2 kiwis, 1/2 banana, 1/2 maçã, 1 chávena de espinafres, 1/2 chávena de iogurte de baunilha ou natural, 2 colheres de sopa de linhaça moída (opcional)' },
      { image: baseImages.smoothie[5], alt: 'smoothie detox', title: 'Detox', description: '6 rodelas de pimento verde, 1/2 maçã verde, 3 pedaços de brócolos, 2 folhas de alface crespa, 1 chávena de espinafres, sumo de 4 limas, 3 rodelas de curgete, 1/2 pepino' }
    ],
    tips: [
      { image: baseImages.tips[0], alt: 'fruta entre refeicoes', title: 'Melhor sozinhas do que mal acompanhadas', description: 'Consumir fruta fora das refeições, a meio da manhã ou da tarde, é o ideal.' },
      { image: baseImages.tips[1], alt: 'frutas acidas', title: 'Frutas ácidas ou semiácidas de manhã', description: 'Ananás, ameixa, amora, framboesa, laranja, limão, morango, tangerina, tomate, uva e maçã verde, entre outras.' },
      { image: baseImages.tips[2], alt: 'frutas doces', title: 'Frutas doces de manhã ou à tarde', description: 'Melão, banana, melancia, maçã golden, ameixas, uvas, romã, pera conference e mais.' },
      { image: baseImages.tips[3], alt: 'fruta acompanhamento', title: 'Acompanhamento', description: 'Combine proteínas, hidratos e leguminosas com legumes crus ou cozinhados para melhorar o equilíbrio da refeição.' },
      { image: baseImages.tips[4], alt: 'fruta salada', title: 'Complemento', description: 'Ananás, kiwi, morango ou laranja em saladas dão cor e um toque fresco e tropical.' },
      { image: baseImages.tips[5], alt: 'fruta frigorifico', title: 'Conservação', description: 'Use o frigorífico apenas quando necessário. Retirar fruta e legumes antes de consumir melhora o sabor e a textura.' }
    ],
    trustStats: [
      { label: 'Anos de experiência', value: '+30' },
      { label: 'Atendimento direto', value: '6 dias/semana' },
      { label: 'Zona de entrega', value: 'Comarca do Salnés' }
    ],
    testimonials: [
      { quote: 'Produto fresco, atendimento próximo e sempre pontuais. É um prazer trabalhar com eles.', author: 'Cliente de hotelaria' },
      { quote: 'Encomendámos uma mesa de fruta para um evento familiar e ficou espetacular.', author: 'Família de Cambados' },
      { quote: 'Nota-se a experiência e a qualidade. São o nosso fornecedor de confiança.', author: 'Comércio local' }
    ],
    contactLead: 'Encomendas de cestas, mesas para eventos e entrega local na comarca. Resposta rápida por chamada ou WhatsApp.',
    marketHours: '8:00 - 15:00 (mercados)'
  }
};

export async function generateLocaleMetadata(locale: Locale): Promise<Metadata> {
  const normalizedLocale = locale.toLowerCase();
  const safeLocale: Locale = isLocale(normalizedLocale) ? normalizedLocale : defaultLocale;

  const dict = dictionaries[safeLocale];
  const canonical = `/${safeLocale}`;

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical,
      languages: {
        es: '/es',
        gl: '/gl',
        en: '/en',
        pt: '/pt',
        'x-default': '/es'
      }
    },
    openGraph: {
      title: 'Frutas Salgueiro',
      description: dict.metadata.ogDescription,
      url: `https://frutassalgueiro.com${canonical}`,
      locale: localeMap[safeLocale],
      images: [
        {
          url: '/img/portada.webp',
          width: 1200,
          height: 630,
          alt: 'Frutas Salgueiro'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Frutas Salgueiro',
      description: dict.metadata.ogDescription,
      images: ['/img/portada.webp']
    }
  };
}

export default async function LocalizedPage({ locale }: { locale: Locale }) {
  const normalizedLocale = locale.toLowerCase();
  const safeLocale: Locale = isLocale(normalizedLocale) ? normalizedLocale : defaultLocale;
  const dict = dictionaries[safeLocale];
  const content = localizedContent[safeLocale];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `https://frutassalgueiro.com/${safeLocale}#localbusiness`,
      name: 'Frutas Salgueiro',
      url: `https://frutassalgueiro.com/${safeLocale}`,
      image: 'https://frutassalgueiro.com/img/portada.webp',
      description: dict.metadata.description,
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
      '@type': 'Organization',
      '@id': `https://frutassalgueiro.com/${safeLocale}#organization`,
      name: 'Frutas Salgueiro',
      url: `https://frutassalgueiro.com/${safeLocale}`,
      logo: 'https://frutassalgueiro.com/img/log.webp',
      sameAs: ['https://www.facebook.com/frutassalgueiro/']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `https://frutassalgueiro.com/${safeLocale}#website`,
      url: `https://frutassalgueiro.com/${safeLocale}`,
      name: 'Frutas Salgueiro',
      inLanguage: safeLocale
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar locale={safeLocale} dictionary={dict} />
      <main id="inicio">
        <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
          <div className="absolute inset-0">
            <Image src="/img/portada.webp" alt="Frutas Salgueiro" fill priority className="object-cover opacity-20" />
          </div>
          <div className="hero-glow" aria-hidden />
          <div className="container-shell relative py-20 sm:py-28">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-moss">{dict.home.heroKicker}</p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-leaf sm:text-6xl">{dict.home.heroTitle}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">{dict.home.heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contacto" className="btn-primary">{dict.home.ctaContact}</a>
                <a href="https://api.whatsapp.com/send?phone=34617384147" className="btn-secondary">{dict.home.ctaWhatsapp}</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="cestas" className="container-shell py-14 sm:py-20">
          <Reveal>
            <SectionTitle title={dict.home.basketsTitle} subtitle={dict.home.basketsSubtitle} />
            <p className="mb-8 max-w-3xl text-neutral-700">{dict.home.basketsDescription}</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.basketItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <InfoCard {...item} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white py-14 sm:py-20">
          <div className="container-shell">
            <Reveal>
              <SectionTitle title={dict.home.trustTitle} subtitle={dict.home.trustSubtitle} />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {content.trustStats.map((item, index) => (
                <Reveal key={item.label} delay={index * 80}>
                  <article className="card p-5">
                    <p className="text-3xl font-bold tracking-tight text-leaf">{item.value}</p>
                    <p className="mt-2 text-sm font-medium text-neutral-700">{item.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {content.testimonials.map((item, index) => (
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
              <SectionTitle title={dict.home.eventsTitle} subtitle={dict.home.eventsSubtitle} />
              <p className="mb-8 max-w-3xl text-neutral-700">{dict.home.eventsDescription}</p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.eventItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <InfoCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="donde-estamos" className="container-shell py-14 sm:py-20">
          <Reveal>
            <SectionTitle title={dict.home.whereTitle} />
            <p className="max-w-3xl text-neutral-700">{dict.home.whereDescription}</p>
            <WhereMap locale={safeLocale} routeWeeklyLabel={dict.home.routeWeekly} howToGetThereLabel={dict.home.howToGetThere} />
          </Reveal>
        </section>

        <section id="recetas-consejos" className="border-y border-neutral-200 bg-white py-14 sm:py-20">
          <div className="container-shell">
            <Reveal>
              <SectionTitle title={dict.home.smoothiesTitle} />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.smoothies.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <InfoCard {...item} descriptionStyle="ingredients" />
                </Reveal>
              ))}
            </div>

            <div className="mt-14">
              <Reveal>
                <SectionTitle title={dict.home.tipsTitle} />
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {content.tips.map((item, index) => (
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
            <SectionTitle title={dict.home.contactTitle} subtitle={dict.home.contactSubtitle} />
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div className="card relative overflow-hidden p-6">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80" aria-hidden />
              <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-50" aria-hidden />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">{dict.home.directSupport}</p>
                <p className="mt-3 text-3xl font-bold leading-tight text-leaf">(+34) 617 384 147</p>
                <p className="mt-3 max-w-lg text-sm text-neutral-700">{content.contactLead}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="tel:+34617384147" className="btn-primary">{dict.home.callNow}</a>
                  <a href="https://api.whatsapp.com/send?phone=34617384147" className="btn-secondary">{dict.home.ctaWhatsapp}</a>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <a href="https://goo.gl/maps/73BJ2RD2sE82" className="card p-5 text-sm text-neutral-700">
                <p className="inline-flex items-center gap-2 font-semibold text-leaf">{dict.home.address}</p>
                <p className="mt-1">Lugar Viliquín 29 - Dena</p>
                <p className="text-neutral-600">CP 36967 (Pontevedra)</p>
              </a>
              <a href="https://www.facebook.com/frutassalgueiro/" className="card p-5 text-sm text-neutral-700">
                <p className="inline-flex items-center gap-2 font-semibold text-leaf">{dict.home.facebook}</p>
                <p className="mt-1">Frutas Salgueiro</p>
              </a>
              <div className="card p-5 text-sm text-neutral-700">
                <p className="inline-flex items-center gap-2 font-semibold text-leaf">{dict.home.regularHours}</p>
                <p className="mt-1">{dict.home.mondayToSaturday}</p>
                <p>{content.marketHours}</p>
                <p className="mt-1">{dict.home.localWarehouse}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://api.whatsapp.com/send?phone=34617384147"
        className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-leaf px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 sm:hidden"
      >
        {dict.home.mobileWhatsapp}
      </a>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="container-shell flex flex-col gap-3 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© Frutas Salgueiro</p>
          <a href="#inicio" className="font-medium text-leaf">
            {dict.home.backToTop}
          </a>
        </div>
      </footer>
    </>
  );
}
