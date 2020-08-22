// Definimos los datos estáticos que nuestra aplicación utilizará para funcionar.
// En una aplicación convencional estos datos provendrían desde un back-end pero a los fines de este ejercicio utilizaremos variables pre-definidas.
// Utilizamos fechas dinámicas para que la aplicación siempre muestre un rango de días entre la fecha actual y el futuro.

const today = new Date();
const hotelsData = [
  {
    slug: "la-bamba-de-areco",
    name: "La Bamba de Areco",
    photo: "./src/assets/images/la-bamba-de-areco.jpg",
    description:
      "La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: "Buenos Aires",
    country: "Argentina",
    price: 4,
    url: "https://www.labambadeareco.com/?lang=es",
  },
  {
    slug: "sainte-jeanne",
    name: "Sainte Jeanne Boutique & Spa",
    photo: "./src/assets/images/sainte-jeanne.jpg",
    description:
      "Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 23,
    city: "Mar del Plata",
    country: "Argentina",
    price: 2,
    url: "https://hotelsaintejeanne.com/es/",
  },
  {
    slug: "entre-cielos",
    name: "Entre Cielos",
    photo: "./src/assets/images/entre-cielos.jpg",
    description:
      "Ubicado en una de las regiones vitivinícolas más grandes de América Latina, Entre Cielos fue pensado y construido en un campo de 8 hectáreas rodeado de viñedos malbec y una imponente vista de la Cordillera de Los Andes.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 16,
    city: "Mendoza",
    country: "Argentina",
    price: 4,
    url: "https://www.entrecielos.com/es",
  },
  {
    slug: "huacalera",
    name: "Hotel Huacalera",
    photo: "./src/assets/images/huacalera.jpg",
    description:
      "Esta casona neocolonial, construida en la década de 1940, está ubicada en el corazón de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas montañosas, recorrido por el Río Grande y declarado Patrimonio de la Humanidad en 2003.",
    availabilityFrom: today.valueOf() + 1728000000, // 20 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 32,
    city: "Jujuy",
    country: "Argentina",
    price: 1,
    url: "https://www.hotelhuacalera.com/",
  },
  {
    slug: "merced-del-alto",
    name: "La Merced del Alto",
    photo: "./src/assets/images/merced-del-alto.jpg",
    description:
      "Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, ríos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaquíes o simplemente a disfrutar de la paz del lugar.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 14,
    city: "Salta",
    country: "Argentina",
    price: 2,
    url: "https://www.lamerceddelalto.com/",
  },
  {
    slug: "azur-real",
    name: "Azur Real Hotel",
    photo: "./src/assets/images/azur-real.jpg",
    description:
      "La exclusividad rodeada de historia. Azur Real Hotel Boutique está ubicado en el corazón de la zona comercial y el centro histórico de Córdoba, dentro de uno de los principales circuitos culturales y turísticos de la ciudad.",
    availabilityFrom: today.valueOf() + 1296000000, // 15 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 16,
    city: "Córdoba",
    country: "Argentina",
    price: 1,
    url: "https://www.azurrealhotel.com/",
  },
  {
    slug: "rincon-del-socorro",
    name: "Rincón del Socorro",
    photo: "./src/assets/images/rincon-del-socorro.jpg",
    description:
      "Rincón del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iberá, un santuario de vida silvestre, donde la Fundación Conservation Land Trust decidió desarrollar un ambicioso proyecto de recuperación y conservación.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 11,
    city: "Corrientes",
    country: "Argentina",
    price: 2,
    url: "https://rincondelsocorro.com.ar/",
  },
  {
    slug: "luma-casa-de-montana",
    name: "Luma Casa de Montaña",
    photo: "./src/assets/images/luma-casa-de-montana.jpg",
    description:
      "Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Montaña se presenta majestuosa pero a la vez simple y hogareña: un lugar diferente, atemporal y mágico.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 8,
    city: "Villa La Angostura",
    country: "Argentina",
    price: 2,
    url: "https://www.lumapatagonia.com.ar/es/",
  },
  {
    slug: "casa-turquesa",
    name: "Casa Turquesa",
    photo: "./src/assets/images/casa-turquesa.jpg",
    description:
      "Casa Turquesa es una histórica mansión del siglo XVIII que recrea el encanto típico de Paraty, una de las herencias coloniales más bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 9,
    city: "Río de Janeiro",
    country: "Brasil",
    price: 3,
    url: "https://www.casaturquesa.com.br/",
  },
  {
    slug: "vila-da-santa",
    name: "Vila Da Santa",
    photo: "./src/assets/images/vila-da-santa.jpg",
    description:
      "Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su espíritu original. Se abre a un gran patio central con dos piscinas de diseño, una de ellas climatizada.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 19,
    city: "Buzios",
    country: "Brasil",
    price: 3,
    url: "https://www.viladasanta.com/es",
  },
  {
    slug: "uxua-casa",
    name: "UXUA Casa Hotel & Spa",
    photo: "./src/assets/images/uxua-casa.jpg",
    description:
      "UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extraídos de la selva.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: "Bahía",
    country: "Brasil",
    price: 4,
    url: "https://uxua.com/",
  },
  {
    slug: "ponta-dos-ganchos",
    name: "Ponta dos Ganchos",
    photo: "./src/assets/images/ponta-dos-ganchos.jpg",
    description:
      "Ubicado a pasos de San Pablo, Río de Janeiro, e incluso Buenos Aires, en una península privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa más exclusivos del sur de Brasil.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 25,
    city: "Santa Catarina",
    country: "Brasil",
    price: 4,
    url: "https://www.pontadosganchos.com.br/",
  },
  {
    slug: "alto-atacama",
    name: "Alto Atacama",
    photo: "./src/assets/images/alto-atacama.jpg",
    description:
      "Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukará de Quitor en el imponente desierto de Atacama al norte de Chile.",
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 42,
    city: "San Pedro de Atacama",
    country: "Chile",
    price: 4,
    url: "https://www.altoatacama.com/",
  },
  {
    slug: "tierra-patagonia",
    name: "Tierra Patagonia",
    photo: "./src/assets/images/tierra-patagonia.jpg",
    description:
      "Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de montañas, cascadas, glaciares, lagos y peñascos, declarado Reserva de la Biosfera por la UNESCO en 1978.",
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    rooms: 40,
    city: "Torres del Paine",
    country: "Chile",
    price: 4,
    url: "https://tierrahotels.com/patagonia/es/",
  },
  {
    slug: "vira-vira",
    name: "Vira Vira",
    photo: "./src/assets/images/vira-vira.jpg",
    description:
      "Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicación privilegiada, muy cerca de Pucón, Chile. Su impresionante parque nativo de 23 hectáreas a orillas del río Liucura ofrece un oasis único de paz y tranquilidad.",
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 21,
    city: "Pucón",
    country: "Chile",
    price: 4,
    url:
      "https://www.relaischateaux.com/es/chile/hacienda-hotel-vira-vira-araucania-pucon",
  },
  {
    slug: "vik-chile",
    name: "Vik Chile",
    photo: "./src/assets/images/vik-chile.jpg",
    description:
      "Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el diseño de vanguardia, una ubicación sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atención por el medioambiente.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 22,
    city: "Millahue",
    country: "Chile",
    price: 4,
    url: "https://vikchile.com/esp/",
  },
  {
    slug: "casa-higueras",
    name: "Casa Higueras",
    photo: "./src/assets/images/casa-higueras.jpg",
    description:
      "Ubicada en el corazón del Cerro Alegre, frente a la imponente bahía de Valparaíso, se encuentra Casa Higueras, el primer hotel boutique y de diseño del puerto.",
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 20,
    city: "Valparaíso",
    country: "Chile",
    price: 4,
    url: "https://casahigueras.cl/esp/",
  },
  {
    slug: "campo-tinto",
    name: "Campo Tinto",
    photo: "./src/assets/images/campo-tinto.jpg",
    description:
      "Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.",
    availabilityFrom: today.valueOf() + 2160000000, // 25 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 4,
    city: "Colonia",
    country: "Uruguay",
    price: 1,
    url: "https://posadacampotinto.com/",
  },
];

export default hotelsData;
