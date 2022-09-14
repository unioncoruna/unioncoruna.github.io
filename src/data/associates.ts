export type Contact = {
  formalName?: string;
  email: string;
  web: string;
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
  services?: { name: string; description: string }[];
  needs?: { name: string; description: string }[];
  description: string;
};
export const associates: Company[] = [
  {
    companySlug: "galicloud",
    companyName: "Galicloud",

    logoUrl: "/images/logos/logo_galicloud@2x.png",
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
      phone: "+34666555444",
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
    companySlug: "asesorenergetico.info",
    companyName: "Asesorenergetico.info",
    logoUrl: "/images/logos/ASESOR-ENERGETICO-LOGO-1.png",
    sector: "Eficiencia energética, movilidad eléctrica y Passivhaus",
    slogan: "Eficiencia energética, movilidad eléctrica y Passivhaus",
    description: `Abaratar facturas de electricidad y gas.
        Instalaciones fotovoltaicas, incluso sin inversión.
        Reformas integrales de edificios, sin inversión por parte del cliente.
        Movilidad eléctrica.
        Construcción de casas de consumo energético casi nulo.`,
    associate: {
      name: "Jesús López Carreira",
      imgUrl: "/images/avatar/JLC-DOBLE_LOGO_CENTRADO.jpeg",
      role: "CEO",
    },
    contact: {
      formalName: undefined,
      email: "jesus@asesorenergetico.info",
      web: "www.asesorenergetico.info",
      phone: "680434243",
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
    companySlug: "garal",
    companyName: "Empresa Molona",
    logoUrl: "/images/logos/logo_galicloud@2x.png",
    sector: "Desarrollo de software",
    slogan:
      "Desarrollamos Software para empresas. Especializados en aplicaciones web.",
    associate: {
      name: "Armando Guerra Torrente",
      imgUrl:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80",
      role: "CTO",
    },
    contact: {
      formalName: "Galicloud S. Coop. Galega",
      email: "asd",
      web: "asd",
      phone: "phone",
    },
    services: [],
    needs: [{ name: "nombre", description: "descripcion" }],
    description: "Hacemos reformas",
  },
];
