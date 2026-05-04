import { type Locale } from '@/lib/i18n';

export type MarketLocation = {
  name: string;
  schedule: Record<Locale, string>;
  days: number[];
  lat: number;
  lng: number;
  mapUrl: string;
};

export const marketLocations: MarketLocation[] = [
  {
    name: 'Portonovo',
    schedule: {
      es: 'Lunes y Jueves · 8:00 - 15:00',
      gl: 'Luns e Xoves · 8:00 - 15:00',
      en: 'Monday and Thursday · 8:00 - 15:00',
      pt: 'Segunda e Quinta · 8:00 - 15:00'
    },
    days: [0, 3],
    lat: 42.398968,
    lng: -8.82458,
    mapUrl: 'https://goo.gl/maps/RAhjwHUiBe72'
  },
  {
    name: 'Dena',
    schedule: {
      es: 'Martes · 8:00 - 15:00',
      gl: 'Martes · 8:00 - 15:00',
      en: 'Tuesday · 8:00 - 15:00',
      pt: 'Terca · 8:00 - 15:00'
    },
    days: [1],
    lat: 42.449228,
    lng: -8.814859,
    mapUrl: 'https://goo.gl/maps/cq7unfNywap'
  },
  {
    name: 'Cambados',
    schedule: {
      es: 'Miércoles y Sábado · 8:00 - 15:00',
      gl: 'Mércores e Sábado · 8:00 - 15:00',
      en: 'Wednesday and Saturday · 8:00 - 15:00',
      pt: 'Quarta e Sabado · 8:00 - 15:00'
    },
    days: [2, 5],
    lat: 42.51316,
    lng: -8.816315,
    mapUrl: 'https://goo.gl/maps/adYSvaZ3Bn92'
  },
  {
    name: 'O Grove',
    schedule: {
      es: 'Viernes · 8:00 - 15:00',
      gl: 'Venres · 8:00 - 15:00',
      en: 'Friday · 8:00 - 15:00',
      pt: 'Sexta · 8:00 - 15:00'
    },
    days: [4],
    lat: 42.497416,
    lng: -8.864399,
    mapUrl: 'https://goo.gl/maps/u8hqfqNXiJC2'
  },
  {
    name: 'Viliquín',
    schedule: {
      es: 'Todos los días por la tarde',
      gl: 'Todos os días pola tarde',
      en: 'Every day in the afternoon',
      pt: 'Todos os dias a tarde'
    },
    days: [0, 1, 2, 3, 4, 5],
    lat: 42.439606,
    lng: -8.818628,
    mapUrl: 'https://goo.gl/maps/73BJ2RD2sE82'
  }
];
