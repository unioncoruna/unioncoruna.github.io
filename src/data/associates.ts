export type Contact = {
  formalName?: string;
  email: string;
  web?: string;
  phone: string;
};
export type Associate = {
  name: string;
  imgUrl?: string;
  role: string;
};
export type Company = {
  companySlug: string;
  companyName: string;
  logoUrl: string;
  sector: string;
  slogan: string;
  associate: Associate;
  contact: Contact;
  services?: { name: string; description?: string }[];
  needs?: { name: string; description?: string }[];
  description: string;
  address?: string;
};
export const associates: Company[] = [
  {
    // Galicloud
    companySlug: "galicloud",
    companyName: "Galicloud",

    logoUrl: "/images/logos/galicloud_color_sin_tagline_640x258.webp",
    sector: "Desarrollo de software",
    slogan:
      "Desarrollamos Software para empresas. Especializados en aplicaciones web.",
    associate: {
      name: "Xabi Trigo",
      imgUrl: "/images/avatar/punky_cresta_small.jpg",
      role: "CTO",
    },
    contact: {
      formalName: "Galicloud S. Coop. Galega",
      email: "contacto@galicloud.com",
      web: "www.galicloud.com",
      phone: "+34604026063",
    },
    services: [
      {
        name: "Aplicaciones web",
        description:
          "Desarrollamos software a medida que se puede usar desde cualquier dispositivo.",
      },
      {
        name: "Integraciones",
        description:
          "Conectamos distintas aplicaciones entre si para que transfieran información sin intervención humana. Por ejemplo: Tu tienda online, con tu programa de facturación, con tu software de gestión de almacén.",
      },
      {
        name: "Formación especializada",
        description:
          "Damos formación a empresas en algunas de las últimas tecnologías de programación.",
      },
    ],
    needs: [
      {
        name: "Contactar con potenciales clientes",
        description: `Conectar con potenciales clientes es nuestra asignatura pendiente.
         Preferentemente empresas ya en funcionamiento con procesos relativamente repetitivos que se puedan mejorar a través del software.`,
      },
    ],
    description:
      "Nos dedicamos al desarrollo de software y desarrollo de apps. Utilizamos y dominamos algunas de las tecnologías webs más modernas y demandadas. Somos expertos en desarrollo web y también impartimos formación a empresas en las últimas tecnologías web.",
  },
  {
    // Asesor energético
    companySlug: "asesorenergetico.info",
    companyName: "Asesorenergetico.info",
    logoUrl: "/images/logos/logo_asesor_energetico.svg",
    sector: "Eficiencia energética, movilidad eléctrica y Passivhaus",
    slogan: "Eficiencia energética, movilidad eléctrica y Passivhaus",
    description: `Abaratar facturas de electricidad y gas.
        Instalaciones fotovoltaicas, incluso sin inversión.
        Reformas integrales de edificios, sin inversión por parte del cliente.
        Movilidad eléctrica.
        Construcción de casas de consumo energético casi nulo.`,
    associate: {
      name: "Jesús López Carreira",
      imgUrl: "/images/avatar/JLC-DOBLE_LOGO_CENTRADO_200x200.webp",
      role: "CEO",
    },
    contact: {
      formalName: undefined,
      email: "jesus@asesorenergetico.info",
      web: "www.asesorenergetico.info",
      phone: "+34680434243",
    },
    services: [
      {
        name: "Optimización de facturas energéticas",
        description: `Reducción de costes en facturas energéticas de empresas e industrias (Electricidad, gas y combustibles).`,
      },
      {
        name: "Instalaciones fotovoltaicas",
        description: "Incluso, sin necesidad de inversión por el cliente.",
      },
      {
        name: "Reformas integrales de edificios",
        description:
          "Buscando la mayor eficiencia energética y sin inversión alguna por parte de los propietarios.",
      },
      {
        name: "Movilidad eléctrica",
        description:
          "Cargadores de vehículos, marquesinas, bicicletas y patines, eléctricos.",
      },
      {
        name: "PassivHaus",
        description: "Construcción de casas de consumo energético casi nulo",
      },
      { name: "Calderas de Biomasa", description: "" },
    ],
    needs: [
      {
        name: "Clientes",
        description:
          "Empresas, industrias, cadenas de establecimientos hosteleros, hoteles, restaurantes, administradores de fincas, asesorías, gestorías, etc.",
      },
    ],
  },
  {
    // Popup Marketing
    companySlug: "popup-marketing",
    companyName: "PopUp Marketing",
    logoUrl: "/images/logos/Logo_PopUp_Sin_Fondo.png",
    sector: "Marketing Digital",
    slogan: "Te ayudamos a conseguir nuevos clientes",
    description: `Publicidad en Google, Youtube, Redes Sociales. Automatizaciones de email marketing y embudos de venta.`,
    associate: {
      name: "Julio J. Gallego Sáenz",
      imgUrl: "/images/avatar/JulioGallego_popup_200x200.webp",
      role: "CEO",
    },
    contact: {
      formalName: undefined,
      email: "info@popupmarketing.es",
      web: "www.popupmarketing.es",
      phone: "+34698183224",
    },
    services: [
      {
        name: "Publicidad",
      },
      {
        name: "Creación de embudos de venta",
      },
      {
        name: "Email Marketing",
      },
    ],
    needs: [
      {
        name: "Clientes con ecommerce",
        description: "Empresas que tengan tienda online",
      },
    ],
  },
  {
    // Comercial Diresa
    companySlug: "diresa",
    companyName: "Comercial Diresa",
    logoUrl: "/images/logos/logo_diresa.webp",
    sector: "Ferretería. Suministros Industriales.",
    slogan: "Tu Ferretería Industrial de confianza",
    description: `<p>Comercial Diresa es una empresa familiar, constituída en el año 1984, que nace para dar servicio a la demanda de nuestros clientes en la Ría de Ferrol.</p>

<p>El auge del sector naval en aquella época hizo crecer a la empresa y forzó su diversificación en almacenamiento y distribución de productos de índole industrial.</p>

<p>Si bien es cierto que todo empezó como una ferretería de efectos navales e industriales, desde aquel entonces, siempre hemos estado a la vanguardia de las novedades introducidas por los fabricantes en el ámbio de los suministros industriales.</p>

<p>40 años después, seguimos trabajando todos los días para ofrecer una solución inmediata a nuestros clientes.</p>

<p>Hoy en día, gracias a nuestro desarrollo digital, no sólo abarcamos la geografía de Ferrol y Galicia, si no que tenemos un alcance nacional, sirviendo productos de soldadura e industriales en toda España.</p>`,
    associate: {
      name: "Alejandro M. Santos",
      imgUrl: "/images/avatar/AlejandroMSantos_200x200.webp",
      role: "CMO",
    },
    contact: {
      formalName: "Comercial Diresa S.L.",
      email: "info@comercialdiresa.com",
      web: "www.comercialdiresa.com",
      phone: "+34671409879",
    },
    services: [
      {
        name: "Herramientas manuales",
      },
      {
        name: "Herramientas eléctricas",
      },
      {
        name: "Ferretería",
      },
      {
        name: "Soldadura",
      },
      {
        name: "Materiales de construcción",
      },
      {
        name: "Corte de hierro a medida",
      },
      {
        name: "Malla hércules",
      },
      {
        name: "Jardinería",
      },
    ],
    needs: [
      {
        name: "Clientes profesionales (talleres, almacenistas, industria...)",
      },
    ],
  },
  {
    // Juifi
    companySlug: "juifi",
    companyName: "JUIFI",
    logoUrl: "/images/logos/Nuevo_Logo_Juifi.webp",
    sector: "Telecomunicaciones",
    slogan: "FIBRA e INTERNET RURAL",
    description: `Comenzamos ofreciendo servicios de internet en zonas rurales y/o de dificil acceso y actualmente hemos evolucionado a territorio nacional al disponer de fibra en cualquier ubicacion.`,
    associate: {
      name: "Óscar Iglesias Tarrío",
      imgUrl: undefined,
      role: "Administrador",
    },
    contact: {
      formalName: "WIMASNET SOLUTIONS SL",
      email: "oscar.iglesias@juifi.com",
      web: "www.juifi.com",
      phone: "+34693778866",
    },
    services: [
      {
        name: "Fibra",
      },
      {
        name: "Internet rural a través de wimax/4G",
      },
      {
        name: "Móvil",
      },
      {
        name: "TV",
      },
    ],
    needs: [
      {
        name: "Clientes interesados en tener un buen servicio a buen precio",
      },
    ],
  },
  {
    // Caviar
    companySlug: "caviar-calvisius",
    companyName: "Caviar Calvisius Distribución GAL",
    logoUrl: "/images/logos/logo_caviar_calvisius-v2.webp",
    sector: "Distribución Caviar",
    slogan: "Distribución Gallega de Caviar a particulares y empresas.",
    description: `<p>En 1998 La Convención CITES incluye al esturión entre las especies en peligro de extinción limitando su pesca. En 2008 La pesca fue totalmente prohibida y las pocas quotas de pesca para algunos paises del mar Caspio, tienen total y absolutamente prohibida su exportacion. Por lo tanto, todo el caviar que se comercializa en el mundo es de cultivo.</p>

    <p>En 1977 nace Agroittica Lombarda siendo la primera empresa de cultivo de esturiones para la producción de caviar.<br />
    Con los años, la empresa se ha convertido en el referente mundial por la frescura, calidad y buen sabor, y por la pureza de toda su producción.</p>
    
    <p>Agroittica S.p.A. se encuentra en Calvisano al lado del Lago de Garda, bello municipio de la provincia de Brescia, región rica en fuentes de aguas de manantial. Las características únicas y excepcionales de las aguas puras presentes en la zona, son la base para el excelente ecosistema que garantiza la autenticidad y frescura de nuestros productos.</p>
    
    <p>En 2007, justo antes de la prohibicion de pesca, Agroittica establece el récord de producción con 25 toneladas de caviar, que suponen aproximadamente el 30% de la producción mundial, superando a la de Irán.</p>
    
    <ul>
    <li>Agroittica es la reserva de esturiones puros mas grande del mundo jugando un papel crucial en la consevacion de las especies.</li>
    <li>Nos avalan 60 hectareas en un entorno puro y natural y una produccion de 25 toneladas de caviar anuales que exportamos al mundo.</li>
    <li>El fondo de las piscinas asimila el habitat natural de los esturiones, con los fondos cubiertos de piedras de rio y con la vegetacion natural de los fondos aquaticos y sus desembocaduras. Un entorno natural que da como resultado un caviar natural, original y puro.</li>
    <li>No sometemos a nuestros esturiones a ningun proceso de aceleracion biologico por lo que respetamos los ciclos naturales de produccion. Cada esturion llega a la edad madura segun su propia biologia y de forma totalmente natural.</li>
    <li>La produccion es malosol, utilizando un 2,5% de sal como conservante. La sal es de Cervia, sal marina llamada ‘sale dei Papi’, la sal de los Papas, excelente sal pura.</li>
    <li>La transparencia y pureza de sabor de nuestros caviares nos han abierto las puertas del mundo entero.</li>
    <li>Calvisius juega un papel clave en el suministro de este exquisito producto con todas las garantias de produccion y de trazabilidad desde el nacimiento de nuestros alevines hasta las entregas a nuestros estimados clientes sin límite de distancia.</li>
    </ul>
    `,
    associate: {
      name: "Carolina Goldsmith Bonigno",
      imgUrl: "/images/avatar/CarolinaGoldsmith.webp",
      role: "Distribuidora",
    },
    contact: {
      formalName: "INFINITE B2B INVEST 2022 SL",
      email: "caviar.calvisius.distribucion.gal@gmail.com",
      web: undefined,
      phone: "+34610139377",
    },
    services: [
      {
        name: "Caviar",
      },
    ],
    needs: [
      {
        name: "Clientes (particulares y empresas)",
      },
    ],
  },
  {
    // Rebeca
    companySlug: "rebeca-gil",
    companyName: "Rebeca Gil Liarte, centro de psicología",
    logoUrl: "/images/logos/placa_rebeca.png",
    sector: "Salud",
    slogan: "",
    description: `Servicio de psicología sanitaria de adultos con terapia cognitivos conductual. 
    Y servicio de psicología sanitaria y psicopedagogía a niños y adolescentes.`,
    address: "Payo Gomez 16, 5ºB, A Coruña, A Coruña, 15004, Spain",
    associate: {
      name: "Rebeca Gil Liarte",
      imgUrl: "/images/avatar/rebeca_200x213.webp",
      role: "Directora",
    },
    contact: {
      formalName: "",
      email: "",
      web: undefined,
      phone: "",
    },
    services: [],
    needs: [],
  },
  {
    // Mario
    companySlug: "ok-legal-abogados",
    companyName: "OK Legal Abogados",
    logoUrl: "/images/logos/ok-legal.webp",
    sector: "Abogacía",
    slogan: "Servicios Jurídicos",
    description: `Ofrecemos servicios jurídicos de todo tipo. Contamos con expertos en distintas áreas de capital importancia para
    nuestra actividad, tales como economistas, mediadores y administradores concursales, peritos, etc. Esto nos
    permite reaccionar eficazmente ante cualquier requerimiento.`,
    address: "C/José Echegaray, 4-8ºd, A Coruña, A Coruña, 15006, Spain",
    associate: {
      name: "Mario Fernández",
      imgUrl: "/images/avatar/mario_200x200.webp",
      role: "Gerente",
    },
    contact: {
      formalName: "",
      email: "contacto@oklegalabogados.es",
      web: "www.oklegalabogados.es",
      phone: "675590964",
    },
    services: [
      { name: "Gastos Hipotecarios." },
      { name: "Cláusulas Suelo." },
      { name: "Tarjetas de crédito." },
      { name: "Responsabilidad civil por daños." },
      { name: "Contratos." },
      { name: "Accidentes." },
      { name: "Concursos de acreedores." },
      { name: "Segunda oportunidad." },
      { name: "Herencias." },
      { name: "etc." },
    ],
    needs: [],
  },
  {
    // Tap 3
    companySlug: "tap3-ventanas",
    companyName: "TAP3 Ventanas",
    logoUrl: "/images/logos/tap3.svg",
    sector: "Ventanas, puertas y verandas",
    slogan: "Las mejores ventanas del mercado",
    description: `Tap3 Ventanas es la suma de un grupo de profesionales con dilatada experiencia en el sector de la carpintería metálica
      dedicados a la Distribución de productos de la marca FINSTRAL, industria europea líder en la técnica moderna de cerramientos.`,
    address: "RONDA DE NELLE, 133 BAJO IZQ., A CORUÑA, A CORUÑA, 15010, Spain",
    associate: {
      name: "Jose Fernández Martínez",
      imgUrl: "/images/avatar/jose_fernandez_200x250.webp",
      role: "Administrador",
    },
    contact: {
      formalName: "TAP3 Servicios Integrales S.L.",
      email: "info@grupotap.com",
      web: "www.grupotap.com",
      phone: "881243435",
    },
    services: [
      { name: "Puertas, ventanas, verandas y persianas." },
      { name: "Asesoramiento, medición, instalación." },
    ],
    needs: [
      {
        name: "Clientes",
        description:
          "Buscamos clientes interesados en la más alta calidad, prestaciones y estética para la carpintería exterior.",
      },
    ],
  },
  {
    // Alarkom Security Systems
    companySlug: "alarcom-security-systems",
    companyName: "Alarköm Security Systems",
    logoUrl: "/images/logos/logo_alarkom.webp",
    sector: "Sistemas de Seguridad",
    slogan: "La seguridad ante todo",
    description: `Empresa gallega de seguridad para todo tipo de instalaciones. Residencial y todo tipo de negocios`,
    address: "PARROQUIA DE LUBRE PARC.R.20, Bergondo, A Coruña, 15165, Spain",
    associate: {
      name: "Jose",
      imgUrl: "/images/avatar/Jose_Alarkom_200x200.webp",
      role: "Asesor de Seguridad",
    },
    contact: {
      formalName: "",
      email: "ja.sanchez@alarkom.es",
      web: "www.alarkom.es",
      phone: "607274860",
    },
    services: [
      { name: "Alarmas" },
      { name: "Sistemas CCTV" },
      { name: "Análisis de video" },
      { name: "Controles de acceso" },
      { name: "Control de personas" },
      { name: "Central receptora propia en Bergondo" },
    ],
    needs: [
      {
        name: "Clientes",
        description:
          "Todas las personas que les interese proteger su vivienda o su negocio.",
      },
    ],
  },
  {
    // DelaO
    companySlug: "banda-delao",
    companyName: "Banda DelaO",
    logoUrl: "/images/logos/logo_delao.webp",
    sector: "Entretenimiento, música en directo",
    slogan: "Guateque rock",
    description: `<p>Espectáculo retroshow 60s 70s 80s y alguna sorpresa, guateque rock con músicos profesionales de amplio recorrido.</p>
                  <p>Canciones que son himnos y una comunicación fuerte y viva con el público ejecutando e interpretando los temas.</p>
                  <p>Desde eventos privados a fiestas de ayuntamientos y locales de hostelería.</p>`,
    address: "A coruña, A coruña, A coruña, 1503, Spain",
    associate: {
      name: "Carlos Castro Villar",
      imgUrl: "/images/avatar/carlos_castro_villar.webp",
      role: "Vocalista",
    },
    contact: {
      formalName: "",
      email: "",
      web: "https://www.facebook.com/BandaDLORetroshow",
      phone: "680367429",
    },
    services: [{ name: "Conciertos bajo demanda con formato 4+." }],
    needs: [
      {
        name: "Conciertos",
        description: "Siempre que estemos disponibles, bienvenidos sean.",
      },
      {
        name: "Representación",
        description:
          "Con objeto de organizar mejor y crear rutas y giras en las provincias.",
      },
    ],
  },
  {
    // Sysega
    companySlug: "grupo-sysega",
    companyName: "Grupo Sysega",
    logoUrl: "/images/logos/LOGO_GRUPO_SYSEGA_PNG_TRANSPARENTE_402X402.webp",
    sector: "Marketing Online y Herramientas Digitales",
    slogan: "Marketing Online y Herramientas Digitales",
    description: `<p>Acercamos el Marketing Online y las Herramientas Digitales a las pequeñas empresas con precios aptos para cualquier negocio local, y con un soporte totalmente personalizado.</p>`,
    address:
      "Calle Miramar-Castrillón, 11-1ºD, A Coruña, A Coruña, 15009, Spain",
    associate: {
      name: "Manuel González Uzal",
      imgUrl: "/images/avatar/ManuelGonzalezUzal.webp",
      role: "Gerente",
    },
    contact: {
      formalName: "Sysega Coruña, S.L.",
      email: "contacto@gruposysega.es",
      web: "https://gruposysega.es/",
      phone: "615354155",
    },
    services: [
      { name: "Publicidad en Redes Sociales (Facebook Ads y Google Ads)" },
      { name: "Desarrollo Web y Tienda Online a medida" },
      { name: "Servicio de Comunity Manager" },
      {
        name: "Desarrollo de imagen corporativa, logos, tarjetas de visitas, ...",
      },
      { name: "Servicio de Video" },
      { name: "Marketing corporativo" },
      { name: "Fotografía de producto, corporativa" },
      { name: "Fotografía y vídeo gastronómico" },
      { name: "Sistemas de Pedidos Online para Restaurantes y Bares" },
      { name: "Constructor de Aplicaciones Móviles en PWA" },
      {
        name: "Constructor de Webs, Embudos de Venta, Tiendas Online, Membresías, ...",
      },
    ],
    needs: [
      {
        name: "Clientes",
        description: `Cualquier negocio que necesite cubrir cualquier necesidad de las indicadas en nuestros servicios.`,
      },
    ],
  },
  {
    // Dalmau
    companySlug: "dalmau-seguros",
    companyName: "Dalmau Seguros",
    logoUrl: "/images/logos/dalmau-gafas.webp",
    sector: "Seguros",
    slogan: "Asegúrate ya",
    description: `<p>Asesoramiento y contratación de todo tipo de seguros.</p>
                  <p>Ya sea para proteger el hogar, el negocio o la salud, mi objetivo es brindar una atención personalizada y soluciones de seguro asequibles que satisfagan necesidades específicas.</p>`,
    address: "Calle oleoducto, 2, bajo, A coruña, A coruña, 15009, Spain",
    associate: {
      name: "Dalmau",
      imgUrl: "/images/avatar/Dalmau_200x200.webp",
      role: "Agente de seguros",
    },
    contact: {
      formalName: "",
      email: "dalmauiferreiro@gmail.com",
      web: undefined,
      phone: "649933430",
    },
    services: [
      { name: "Asesoramiento y contratación de todo tipo de seguros" },
    ],
    needs: [
      {
        name: "Clientes",
        description: `Personas o empresas que necesiten seguros de cualquier tipo.`,
      },
      { name: "De accidentes" },
      { name: "Del hogar" },
      { name: "De responsabilidad civil" },
      { name: "De vehículos" },
      { name: "De salud" },
      { name: "etc." },
    ],
  },
];
