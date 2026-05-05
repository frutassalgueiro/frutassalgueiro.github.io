import { type Locale } from '@/lib/i18n';

export type MarketLocation = {
  name: string;
  schedule: Record<Locale, string>;
  days: number[];
  lat: number;
  lng: number;
  mapUrl: string;
};

const hours = {
  market: '8:00 - 15:00'
} as const;

const labels = {
  es: {
    mondayThursday: 'Lunes y Jueves',
    tuesday: 'Martes',
    wednesdaySaturday: 'Miércoles y Sábado',
    friday: 'Viernes',
    allAfternoon: 'Tardes bajo llamada previa'
  },
  gl: {
    mondayThursday: 'Luns e Xoves',
    tuesday: 'Martes',
    wednesdaySaturday: 'Mércores e Sábado',
    friday: 'Venres',
    allAfternoon: 'Tardes mediante chamada previa'
  },
  en: {
    mondayThursday: 'Monday and Thursday',
    tuesday: 'Tuesday',
    wednesdaySaturday: 'Wednesday and Saturday',
    friday: 'Friday',
    allAfternoon: 'Afternoons by prior call'
  },
  pt: {
    mondayThursday: 'Segunda e Quinta',
    tuesday: 'Terça',
    wednesdaySaturday: 'Quarta e Sábado',
    friday: 'Sexta',
    allAfternoon: 'Tardes mediante chamada prévia'
  }
} as const;

function withHours(text: string) {
  return `${text} · ${hours.market}`;
}

export const marketLocations: MarketLocation[] = [
  {
    name: 'Portonovo',
    schedule: {
      es: withHours(labels.es.mondayThursday),
      gl: withHours(labels.gl.mondayThursday),
      en: withHours(labels.en.mondayThursday),
      pt: withHours(labels.pt.mondayThursday)
    },
    days: [0, 3],
    lat: 42.398968,
    lng: -8.82458,
    mapUrl: 'https://goo.gl/maps/RAhjwHUiBe72'
  },
  {
    name: 'Dena',
    schedule: {
      es: withHours(labels.es.tuesday),
      gl: withHours(labels.gl.tuesday),
      en: withHours(labels.en.tuesday),
      pt: withHours(labels.pt.tuesday)
    },
    days: [1],
    lat: 42.449228,
    lng: -8.814859,
    mapUrl: 'https://goo.gl/maps/cq7unfNywap'
  },
  {
    name: 'Cambados',
    schedule: {
      es: withHours(labels.es.wednesdaySaturday),
      gl: withHours(labels.gl.wednesdaySaturday),
      en: withHours(labels.en.wednesdaySaturday),
      pt: withHours(labels.pt.wednesdaySaturday)
    },
    days: [2, 5],
    lat: 42.51316,
    lng: -8.816315,
    mapUrl: 'https://goo.gl/maps/adYSvaZ3Bn92'
  },
  {
    name: 'O Grove',
    schedule: {
      es: withHours(labels.es.friday),
      gl: withHours(labels.gl.friday),
      en: withHours(labels.en.friday),
      pt: withHours(labels.pt.friday)
    },
    days: [4],
    lat: 42.497416,
    lng: -8.864399,
    mapUrl: 'https://goo.gl/maps/u8hqfqNXiJC2'
  },
  {
    name: 'Viliquín',
    schedule: {
      es: labels.es.allAfternoon,
      gl: labels.gl.allAfternoon,
      en: labels.en.allAfternoon,
      pt: labels.pt.allAfternoon
    },
    days: [0, 1, 2, 3, 4, 5],
    lat: 42.439606,
    lng: -8.818628,
    mapUrl: 'https://goo.gl/maps/73BJ2RD2sE82'
  }
];
