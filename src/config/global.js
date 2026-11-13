export default {
  global: {
    Name: 'Manejo sanitario y reproductivo del ganado caprino',
    Description:
      'La reproducción y el mejoramiento genético caprino integran el conocimiento del sistema reproductivo, la planificación de apareamientos y la selección de reproductores según los objetivos productivos. La nutrición, la sanidad, la bioseguridad y los registros permiten favorecer la fertilidad, la gestación y la supervivencia de las crías. Su seguimiento continuo facilita evaluar resultados y mejorar progresivamente el desempeño del rebaño.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Manejo sanitario y bioseguridad en la explotación ovinocaprina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marco normativo para el manejo sanitario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos fundamentales del manejo sanitario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Plan sanitario en la explotación ovinocaprina',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Esquema de bioseguridad para pequeños rumiantes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Identificación de riesgos sanitarios en la explotación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Manejo y aplicación de medidas sanitarias preventivas',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Integración práctica: ejemplo de plan sanitario anual',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo:
              'Lista de verificación sanitaria para el productor o aprendiz',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo:
              'Errores frecuentes en el manejo sanitario y medidas correctivas',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Vacunación e inmunización de pequeños rumiantes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos básicos de vacunación e inmunización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de biológicos e inmunizantes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manejo, conservación y aplicación de biológicos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Protocolos de vacunación según el plan sanitario',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Bioseguridad durante la aplicación de biológicos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Protocolo modelo para una jornada de vacunación',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Lista de verificación de la jornada',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Errores frecuentes que deben evitarse',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Control del parasitismo en la explotación caprina y ovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Parásitos internos de importancia en pequeños rumiantes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Parásitos externos e insectología sanitaria',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identificación de signos y diagnóstico del parasitismo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Medidas de prevención y control del parasitismo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Aplicación de protocolos de control parasitario',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Relación entre parasitismo, bioseguridad y bienestar animal',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Protocolos modelo para formación',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas destinadas a prevenir la entrada y propagación de enfermedades dentro de una explotación pecuaria.',
    },
    {
      termino: 'Celo',
      significado:
        'período durante el cual la hembra presenta receptividad sexual y acepta la monta del macho.',
    },
    {
      termino: 'Ciclo estral',
      significado:
        'conjunto de cambios hormonales y reproductivos que ocurren en la hembra entre un celo y el siguiente.',
    },
    {
      termino: 'Consanguinidad',
      significado:
        'apareamiento entre animales emparentados, que puede aumentar la probabilidad de expresión de genes recesivos perjudiciales.',
    },
    {
      termino: 'Fenotipo',
      significado:
        'conjunto de características observables o medibles de un animal, determinadas por su genética, el ambiente y la interacción entre ambos.',
    },
    {
      termino: 'Fertilidad',
      significado:
        'capacidad de un animal para reproducirse y generar descendencia.',
    },
    {
      termino: 'Genotipo',
      significado:
        'composición genética de un animal, que influye en las características que puede transmitir a su descendencia.',
    },
    {
      termino: 'Gestación',
      significado:
        'período durante el cual se desarrolla el embrión y, posteriormente, el feto en el útero materno.',
    },
    {
      termino: 'Heredabilidad',
      significado:
        'proporción de la variación de una característica en una población que se atribuye a diferencias genéticas aditivas, bajo condiciones determinadas.',
    },
    {
      termino: 'Mejoramiento genético',
      significado:
        'conjunto de estrategias orientadas a aumentar la presencia de características genéticas favorables en las siguientes generaciones de un rebaño.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balch, S. G. (2024). Breeding and parturition of goats. Merck Veterinary Manual. ',
      link: 'https://www.merckvetmanual.com/management-and-nutrition/preventative-health-care-and-husbandry-of-goats/breeding-and-parturition-of-goats  ',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2010). Estrategias de mejora genética para la gestión sostenible de los recursos zoogenéticos (Directrices FAO: Producción y Sanidad Animal n.º 3). ',
      link: 'https://www.fao.org/4/i1103s/i1103s00.htm  ',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (s. f.). Código Sanitario para los Animales Terrestres. ',
      link: 'https://www.woah.org/es/que-hacemos/normas/codigos-y-manuales/ ',
    },
    {
      referencia:
        'Stewart, J. L. (2026a). Breeding in goats. Merck Veterinary Manual. ',
      link: 'https://www.merckvetmanual.com/management-and-nutrition/management-of-reproduction-goats/breeding-in-goats  ',
    },
    {
      referencia:
        'Stewart, J. L. (2026b). Puberty and estrus in goats. Merck Veterinary Manual. ',
      link: 'https://www.merckvetmanual.com/management-and-nutrition/management-of-reproduction-goats/puberty-and-estrus-in-goats  ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
