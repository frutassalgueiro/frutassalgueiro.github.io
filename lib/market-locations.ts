export type MarketLocation = {
  name: string;
  schedule: string;
  days: string[];
  lat: number;
  lng: number;
  mapUrl: string;
};

export const marketLocations: MarketLocation[] = [
  {
    name: 'Portonovo',
    schedule: 'Lunes y Jueves · 8:00 - 15:00',
    days: ['Lunes', 'Jueves'],
    lat: 42.398968,
    lng: -8.82458,
    mapUrl: 'https://goo.gl/maps/RAhjwHUiBe72'
  },
  {
    name: 'Dena',
    schedule: 'Martes · 8:00 - 15:00',
    days: ['Martes'],
    lat: 42.449228,
    lng: -8.814859,
    mapUrl: 'https://goo.gl/maps/cq7unfNywap'
  },
  {
    name: 'Cambados',
    schedule: 'Miércoles y Sábado · 8:00 - 15:00',
    days: ['Miércoles', 'Sábado'],
    lat: 42.51316,
    lng: -8.816315,
    mapUrl: 'https://goo.gl/maps/adYSvaZ3Bn92'
  },
  {
    name: 'O Grove',
    schedule: 'Viernes · 8:00 - 15:00',
    days: ['Viernes'],
    lat: 42.497416,
    lng: -8.864399,
    mapUrl: 'https://goo.gl/maps/u8hqfqNXiJC2'
  },
  {
    name: 'Viliquín (almacén)',
    schedule: 'Todos los días por la tarde',
    days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    lat: 42.439606,
    lng: -8.818628,
    mapUrl: 'https://goo.gl/maps/73BJ2RD2sE82'
  }
];
