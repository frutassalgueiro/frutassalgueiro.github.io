export const locales = ['gl', 'es', 'en', 'pt'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type Dictionary = {
  languageName: string;
  nav: {
    baskets: string;
    events: string;
    where: string;
    recipes: string;
    contact: string;
    call: string;
    openMenu: string;
  };
  home: {
    heroKicker: string;
    heroTitle: string;
    heroDescription: string;
    ctaContact: string;
    ctaWhatsapp: string;
    basketsTitle: string;
    basketsSubtitle: string;
    basketsDescription: string;
    trustTitle: string;
    trustSubtitle: string;
    eventsTitle: string;
    eventsSubtitle: string;
    eventsDescription: string;
    whereTitle: string;
    whereDescription: string;
    smoothiesTitle: string;
    tipsTitle: string;
    contactTitle: string;
    contactSubtitle: string;
    directSupport: string;
    callNow: string;
    address: string;
    facebook: string;
    regularHours: string;
    mondayToSaturday: string;
    localWarehouse: string;
    mobileWhatsapp: string;
    backToTop: string;
    routeWeekly: string;
    howToGetThere: string;
  };
  metadata: {
    title: string;
    description: string;
    ogDescription: string;
  };
};

export const localeMap: Record<Locale, string> = {
  es: 'es_ES',
  gl: 'gl_ES',
  en: 'en_GB',
  pt: 'pt_PT'
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    languageName: 'Español',
    nav: {
      baskets: 'Cestas',
      events: 'Eventos',
      where: 'Dónde estamos',
      recipes: 'Recetas y consejos',
      contact: 'Contacto',
      call: 'Llamar',
      openMenu: 'Abrir menú'
    },
    home: {
      heroKicker: 'Frutas Salgueiro',
      heroTitle: 'Llevando la mejor fruta a tu casa desde hace más de 30 años',
      heroDescription: 'Selección diaria de fruta fresca para hogares, eventos y negócios de la comarca del Salnés.',
      ctaContact: 'Contactar',
      ctaWhatsapp: 'WhatsApp',
      basketsTitle: '¡Regala fruta!',
      basketsSubtitle: '¿Qué hay mejor que una cesta de fruta para regalar? Rico, saludable y original.',
      basketsDescription:
        'Consulta nuestras cestas y anímate a elegir la tuya. Totalmente personalizada, de cualquier forma y tamaño y, lo más importante, con producto de máxima calidad. Consulta a nuestro personal y haz tu encargo.',
      trustTitle: 'Confianza local que se nota',
      trustSubtitle: 'Calidad diaria, cercanía y compromiso con cada pedido.',
      eventsTitle: 'También en eventos',
      eventsSubtitle: 'Bodas, bautizos, cumpleaños...',
      eventsDescription:
        'Nada mejor que una buena pieza de fruta fresca después de un buen banquete. Si quieres una para tu próximo evento, no dudes en consultarnos.',
      whereTitle: 'Dónde estamos?',
      whereDescription:
        'Nos movemos de lunes a sábado por la comarca del Salnés, desde Cambados hasta O Grove, pasando por Portonovo y Dena. Además nos puedes encontrar en nuestro almacén local, en Viliquín.',
      smoothiesTitle: 'Smoothies',
      tipsTitle: 'Consejos',
      contactTitle: 'Contacto',
      contactSubtitle: 'Estamos cerca de ti. Escríbenos o llámaños y te ayudamos a preparar tu pedido.',
      directSupport: 'Atención directa',
      callNow: 'Llamar ahora',
      address: 'Dirección',
      facebook: 'Facebook',
      regularHours: 'Horário habitual',
      mondayToSaturday: 'Lunes a sábado',
      localWarehouse: 'Almacen local por là tarde',
      mobileWhatsapp: 'Hablar por WhatsApp',
      backToTop: 'Volver arriba',
      routeWeekly: 'Ruta semanal',
      howToGetThere: 'Cómo llegar'
    },
    metadata: {
      title: 'Inicio',
      description: 'Frutas Salgueiro ofrece fruta fresca a domicílio, cestas de fruta y mesas para eventos en O Salnés, Galicia.',
      ogDescription: 'Servicio local de fruta fresca, cestas y mesas para bodas, comuniones y celebraciones en Galicia.'
    }
  },
  gl: {
    languageName: 'Galego',
    nav: {
      baskets: 'Cestas',
      events: 'Eventos',
      where: 'Onde estamos',
      recipes: 'Receitas e consellos',
      contact: 'Contacto',
      call: 'Chamar',
      openMenu: 'Abrir menú'
    },
    home: {
      heroKicker: 'Froitas Salgueiro',
      heroTitle: 'Levando a mellor froita á túa casa desde hai máis de 30 años',
      heroDescription: 'Selección diaria de froita fresca para fogares, eventos e negócios da comarca do Salnés.',
      ctaContact: 'Contactar',
      ctaWhatsapp: 'WhatsApp',
      basketsTitle: 'Regala froita!',
      basketsSubtitle: 'Que hai mellor ca unha cesta de froita para regalar? Rico, saudable e orixinal.',
      basketsDescription:
        'Consulta as nosas cestas e anímate a escoller a túa. Totalmente personalizada, de calquera forma e tamaño e, o máis importante, con produto de máxima calidade.',
      trustTitle: 'Confianza local que se nota',
      trustSubtitle: 'Calidade diaria, proximidade e compromiso en cada pedido.',
      eventsTitle: 'Tamén en eventos',
      eventsSubtitle: 'Bodas, bautizos, aniversarios...',
      eventsDescription:
        'Nada mellor ca unha boa peza de froita fresca despois dun bo banquete. Se queres unha para o teu próximo evento, non dubides en consultarnos.',
      whereTitle: 'Onde estamos?',
      whereDescription:
        'Movémonos de luns a sábado pola comarca do Salnés, desde Cambados ata O Grove, pasando por Portonovo e Dena. Tamén nos podes atopar no noso almacén local, en Viliquín.',
      smoothiesTitle: 'Smoothies',
      tipsTitle: 'Consellos',
      contactTitle: 'Contacto',
      contactSubtitle: 'Estamos preto de ti. Escríbenos ou chámaños e axudámoste a preparar o teu pedido.',
      directSupport: 'Atención directa',
      callNow: 'Chamar agora',
      address: 'Enderezo',
      facebook: 'Facebook',
      regularHours: 'Horario habitual',
      mondayToSaturday: 'Luns a sábado',
      localWarehouse: 'Almacen local pola tarde',
      mobileWhatsapp: 'Falar por WhatsApp',
      backToTop: 'Volver arriba',
      routeWeekly: 'Ruta semanal',
      howToGetThere: 'Como chegar'
    },
    metadata: {
      title: 'Inicio',
      description: 'Froitas Salgueiro ofrece froita fresca a domicílio, cestas de froita e mesas para eventos no Salnés, Galicia.',
      ogDescription: 'Servizo local de froita fresca, cestas e mesas para vodas, comuñóns e celebracións en Galicia.'
    }
  },
  en: {
    languageName: 'English',
    nav: {
      baskets: 'Baskets',
      events: 'Events',
      where: 'Where to find us',
      recipes: 'Recipes and tips',
      contact: 'Contact',
      call: 'Call',
      openMenu: 'Open menú'
    },
    home: {
      heroKicker: 'Frutas Salgueiro',
      heroTitle: 'Bringing the best fruit to your home for over 30 years',
      heroDescription: 'Daily selection of fresh fruit for households, events and businesses in the Salnés area.',
      ctaContact: 'Contact us',
      ctaWhatsapp: 'WhatsApp',
      basketsTitle: 'Give fruit as a gift!',
      basketsSubtitle: 'What is better than a fruit basket as a gift? Tasty, healthy and original.',
      basketsDescription:
        'Take a look at our baskets and choose yours. Fully customizable in size and style, always with top-quality produce.',
      trustTitle: 'Local trust you can feel',
      trustSubtitle: 'Daily quality, close service and commitment in every order.',
      eventsTitle: 'Also for events',
      eventsSubtitle: 'Weddings, baptisms, birthdays...',
      eventsDescription:
        'Nothing beats a fresh fruit table after a great celebration. If you want one for your next event, get in touch.',
      whereTitle: 'Where are we?',
      whereDescription:
        'We work Monday to Saturday across the Salnés area, from Cambados to O Grove, including Portonovo and Dena. You can also find us at our local warehouse in Viliquín.',
      smoothiesTitle: 'Smoothies',
      tipsTitle: 'Tips',
      contactTitle: 'Contact',
      contactSubtitle: 'We are close to you. Message or call us and we will help you prepare your order.',
      directSupport: 'Direct support',
      callNow: 'Call now',
      address: 'Address',
      facebook: 'Facebook',
      regularHours: 'Regular schedule',
      mondayToSaturday: 'Monday to Saturday',
      localWarehouse: 'Local warehouse in the afternoon',
      mobileWhatsapp: 'Chat on WhatsApp',
      backToTop: 'Back to top',
      routeWeekly: 'Weekly route',
      howToGetThere: 'How to get there'
    },
    metadata: {
      title: 'Home',
      description: 'Frutas Salgueiro offers fresh fruit delivery, gift baskets and fruit tables for events in O Salnés, Galicia.',
      ogDescription: 'Local fresh fruit service, custom baskets and event fruit tables in Galicia.'
    }
  },
  pt: {
    languageName: 'Português',
    nav: {
      baskets: 'Cestas',
      events: 'Eventos',
      where: 'Onde estamos',
      recipes: 'Receitas e dicas',
      contact: 'Contacto',
      call: 'Ligar',
      openMenu: 'Abrir menú'
    },
    home: {
      heroKicker: 'Frutas Salgueiro',
      heroTitle: 'Levando a melhor fruta para a sua casa há máis de 30 años',
      heroDescription: 'Seleção diaria de fruta fresca para casas, eventos e negócios da comarca do Salnés.',
      ctaContact: 'Contactar',
      ctaWhatsapp: 'WhatsApp',
      basketsTitle: 'Ofereça fruta!',
      basketsSubtitle: 'O que há de melhor do que uma cesta de fruta para oferecer? Saudável e original.',
      basketsDescription:
        'Veja as nossas cestas e escolha a sua. Totalmente personalizadas em forma e tamanho, sempre com produto de máxima qualidade.',
      trustTitle: 'Confiança local que se sente',
      trustSubtitle: 'Qualidade diaria, proximidade e compromisso em cada pedido.',
      eventsTitle: 'Também em eventos',
      eventsSubtitle: 'Casamentos, batizados, aniversários...',
      eventsDescription:
        'Nada melhor do que fruta fresca depois de um bom banquete. Se quiser para o seu próximo evento, fale connosco.',
      whereTitle: 'Onde estamos?',
      whereDescription:
        'Trabalhamos de segunda a sábado por toda a comarca do Salnés, de Cambados a O Grove, passando por Portonovo e Dena. Também nos encontra no nosso armazem local em Viliquín.',
      smoothiesTitle: 'Smoothies',
      tipsTitle: 'Dicas',
      contactTitle: 'Contacto',
      contactSubtitle: 'Estamos perto de si. Escreva-nos ou ligue-nos e ajudamos a preparar o seu pedido.',
      directSupport: 'Atendimento direto',
      callNow: 'Ligar agora',
      address: 'Morada',
      facebook: 'Facebook',
      regularHours: 'Horário habitual',
      mondayToSaturday: 'Segunda a sábado',
      localWarehouse: 'Armazém local à tarde',
      mobileWhatsapp: 'Falar no WhatsApp',
      backToTop: 'Voltar ao topo',
      routeWeekly: 'Rota semanal',
      howToGetThere: 'Como chegar'
    },
    metadata: {
      title: 'Início',
      description: 'Frutas Salgueiro oferece fruta fresca ao domicílio, cestas de fruta e mesas para eventos no Salnés, Galiza.',
      ogDescription: 'Serviço local de fruta fresca, cestas e mesas para casamentos e celebrações na Galiza.'
    }
  }
};
