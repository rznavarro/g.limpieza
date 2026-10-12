import { CarServicePackage, QuoteItem, FaqItem } from '../types.ts';

export const CAR_PACKAGES: CarServicePackage[] = [
  {
    id: 'carroceria',
    name: 'Lavado de carrocería premium con vapor',
    priceFormatted: 'desde $20.000',
    priceValue: 20000,
    description: 'Lavado exterior cuidadoso con vapor a alta temperatura para un brillo profundo y protección de pintura.',
    includes: [
      'Lavado y encerado de carrocería a vapor',
      'Limpieza profunda de llantas',
      'Renovador de neumáticos'
    ]
  },
  {
    id: 'aspirado',
    name: 'Aspirado premium y plásticos',
    priceFormatted: 'desde $30.000',
    priceValue: 30000,
    description: 'Aspirado exhaustivo de cada rincón del habitáculo y acondicionamiento de molduras plásticas.',
    includes: [
      'Aspirado de maletero, techo, asientos y alfombra',
      'Limpieza detallada de tablero',
      'Acondicionado y limpieza de superficies plásticas'
    ]
  },
  {
    id: 'motor',
    name: 'Lavado de motor a vapor',
    priceFormatted: 'desde $35.000',
    priceValue: 35000,
    description: 'El motor tiene múltiples sensores, por eso conviene mantenerlo limpio para evitar averías; se recomienda lavarlo al menos una vez al año.',
    includes: [
      'Limpieza técnica con vapor controlado',
      'Desengrase sin saturación de agua',
      'Protección de componentes y sensores críticos'
    ]
  },
  {
    id: 'tapiz-interior',
    name: 'Limpieza de tapiz e interior premium con vapor',
    priceFormatted: 'desde $55.000',
    priceValue: 55000,
    highlighted: true,
    tag: 'Más completo',
    description: 'El tratamiento integral definitivo para la cabina de tu auto. Desinfección termo-mecánica y renovación de tapicerías.',
    includes: [
      'Aspirado premium de todo el vehículo',
      'Limpieza y lavado de tapiz de maletero, techo, asientos y alfombra',
      'Limpieza de superficies plásticas, tablero y puertas',
      'Tratamiento antibacteria de alta eficacia',
      'Tratamiento de manchas difíciles',
      'Neutralización de olores',
      'Eliminación de pelo de mascotas',
      'Hidratación profunda para asientos de cuero'
    ]
  }
];

export const QUOTE_ITEMS: QuoteItem[] = [
  // Tapices
  {
    id: 'sillon_1',
    category: 'tapices',
    name: 'Sillón 1 cuerpo',
    unitLabel: 'cuerpo',
    price: 25000,
    type: 'unit'
  },
  {
    id: 'sillon_2',
    category: 'tapices',
    name: 'Sillón 2 cuerpos',
    unitLabel: 'cuerpos',
    price: 35000,
    type: 'unit'
  },
  {
    id: 'sillon_3',
    category: 'tapices',
    name: 'Sillón 3 cuerpos',
    unitLabel: 'cuerpos',
    price: 40000,
    type: 'unit'
  },
  {
    id: 'sillas',
    category: 'tapices',
    name: 'Sillas (asiento y respaldo)',
    unitLabel: 'unidad',
    price: 10000,
    type: 'unit'
  },
  {
    id: 'colchon_1p',
    category: 'tapices',
    name: 'Colchón 1 plaza',
    unitLabel: 'unidad',
    price: 30000,
    type: 'unit'
  },
  {
    id: 'colchon_2p',
    category: 'tapices',
    name: 'Colchón 2 plazas',
    unitLabel: 'unidad',
    price: 40000,
    type: 'unit'
  },
  {
    id: 'colchon_qk',
    category: 'tapices',
    name: 'Colchón Queen y King',
    unitLabel: 'unidad',
    price: 45000,
    type: 'unit'
  },

  // Casas, oficinas y edificios
  {
    id: 'bano',
    category: 'inmuebles',
    name: 'Baño (limpieza, sanitización + antihongos)',
    unitLabel: 'baño',
    price: 60000,
    type: 'unit'
  },
  {
    id: 'cocina',
    category: 'inmuebles',
    name: 'Cocina (desengrase de cocina y campana)',
    unitLabel: 'cocina',
    price: 60000,
    type: 'unit'
  },
  {
    id: 'piso_limpieza',
    category: 'inmuebles',
    name: 'Piso flotante, cerámica y baldosa (solo limpieza)',
    unitLabel: 'm²',
    price: 3500,
    type: 'sqm'
  },
  {
    id: 'piso_recuperacion',
    category: 'inmuebles',
    name: 'Piso flotante (recuperación profunda)',
    unitLabel: 'm²',
    price: 4500,
    type: 'sqm'
  },
  {
    id: 'alfombra_muro',
    category: 'inmuebles',
    name: 'Alfombra muro a muro',
    unitLabel: 'm²',
    price: 3500, // Dynamic base: $3.500 if >= 30, $5.000 if < 30
    type: 'sqm',
    variableRateNote: 'Tarifa: $3.500/m² sobre 30 m² · $5.000/m² bajo 30 m²'
  },
  {
    id: 'alfombra_suelta',
    category: 'inmuebles',
    name: 'Alfombras sueltas',
    unitLabel: 'm²',
    price: 5000,
    type: 'sqm'
  }
];

export const SANTIAGO_COMUNAS = [
  'Cerrillos',
  'Cerro Navia',
  'Conchalí',
  'El Bosque',
  'Estación Central',
  'Huechuraba',
  'Independencia',
  'La Cisterna',
  'La Florida',
  'La Granja',
  'La Pintana',
  'La Reina',
  'Las Condes',
  'Lo Barnechea',
  'Lo Espejo',
  'Lo Prado',
  'Macul',
  'Maipú',
  'Ñuñoa',
  'Pedro Aguirre Cerda',
  'Peñalolén',
  'Providencia',
  'Pudahuel',
  'Quilicura',
  'Quinta Normal',
  'Recoleta',
  'Renca',
  'San Joaquín',
  'San Miguel',
  'San Ramón',
  'Santiago Centro',
  'Vitacura',
  'Colina',
  'Lampa',
  'Tiltil',
  'San Bernardo',
  'Buin',
  'Calera de Tango',
  'Paine',
  'Melipilla',
  'Curacaví',
  'Talagante',
  'Peñaflor',
  'Isla de Maipo',
  'Padre Hurtado',
  'El Monte',
  'Puente Alto',
  'Pirque',
  'San José de Maipo'
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Cuál es el pedido mínimo?',
    answer: '$30.000 en total de servicios.'
  },
  {
    question: '¿Los precios incluyen IVA?',
    answer: 'No, los precios no incluyen IVA.'
  },
  {
    question: '¿Cobran por distancia?',
    answer: 'Sin recargo dentro de la Provincia de Santiago. Fuera de ella hay un cargo adicional según la comuna; consúltalo directamente por WhatsApp.'
  },
  {
    question: '¿Qué necesito tener listo?',
    answer: 'Una conexión eléctrica a no más de 30 m del lugar de trabajo. Si vives en un edificio, confirma con la administración que se puede trabajar en sus dependencias. Si es un auto, retira tus objetos de valor (la empresa no se responsabiliza por su pérdida).'
  },
  {
    question: '¿Tienen garantía?',
    answer: 'Garantía de 4 días para tapiz e interior, carrocería, motor, sillón, silla y alfombra. Garantía de 6 meses para pulido y simonizado.'
  },
  {
    question: '¿Qué pasa si no se puede realizar el servicio?',
    answer: 'Si el móvil llega al domicilio agendado y el servicio no se realiza por causas ajenas a la empresa, se cobra $10.000 más el cargo según la comuna por costos operacionales.'
  },
  {
    question: '¿Qué días trabajan?',
    answer: 'Trabajos garantizados de lunes a domingo. Horarios publicados de atención: 10:00 · 14:00 · 17:00.'
  }
];

export const TREATMENT_ROWS = [
  {
    num: '01',
    title: 'Limpieza y sanitización con vapor y espuma',
    desc: 'Tecnología termo-mecánica de alta temperatura combinada con formulaciones activas para desincrustar suciedad profunda.',
    image: '/images/paste134.jpg'
  },
  {
    num: '02',
    title: 'Tratamiento de manchas difíciles',
    desc: 'Acción focalizada sobre grasa, café, fluidos y desgaste sin dañar la trama textil ni los polímeros.',
    image: '/images/paste140.jpg'
  },
  {
    num: '03',
    title: 'Neutralización de olor',
    desc: 'Eliminación de la raíz bacteriana causante del mal olor, no sólo perfumado superficial.',
    image: '/images/paste143.jpg'
  },
  {
    num: '04',
    title: 'Eliminación de pelo de mascotas',
    desc: 'Extracción minuciosa de pelos incrustados en fibras textiles mediante microcepillado y succión profunda.',
    image: '/images/paste132.jpg'
  },
  {
    num: '05',
    title: 'Tratamiento antibacteria (interior de autos)',
    desc: 'Desinfección integral de ductos, tableros, asientos y maletero para un habitáculo aséptico.',
    image: '/images/aspirado.jpg'
  },
  {
    num: '06',
    title: 'Hidratación de asientos de cuero',
    desc: 'Nutrición con emulsiones específicas que restauran la flexibilidad, evitan grietas y devuelven el tacto original.',
    image: '/images/paste142.jpg'
  },
  {
    num: '07',
    title: 'Tratamiento antihongos en baños',
    desc: 'Aplicación a vapor en junturas, cerámicas y artefactos para erradicar esporas y moho persistente.',
    image: '/images/image1_(3).JPG'
  }
];
