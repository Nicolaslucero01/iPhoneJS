const productsData = [
  {
    id: 1,
    nombre: "Samsung A15 4GB 128GB",
    precio: 210,
    imagen: "./assets/img/a15.png",
    category: "Samsung",
  },
  {
    id: 2,
    nombre: "Samsung A15 6GB 128GB",
    precio: 220,
    imagen: "./assets/img/a15.png",
    category: "Samsung",
  },
  {
    id: 3,
    nombre: "Samsung A15 8GB 256GB",
    precio: 260,
    imagen: "./assets/img/a15.png",
    category: "Samsung",
  },

  {
    id: 39,
    nombre: "Samsung A15 5G 8GB 256GB",
    precio: 280,
    imagen: "./assets/img/a15.png",
    category: "Samsung",
  },
  {
    id: 4,
    nombre: "Samsung A25 5G 8GB 256GB",
    precio: 280,
    imagen: "./assets/img/a25.png",
    category: "Samsung",
  },
  {
    id: 5,
    nombre: "Samsung A25 5G 8GB 128GB",
    precio: 300,
    imagen: "./assets/img/a25.png",
    category: "Samsung",
  },
  {
    id: 6,
    nombre: "Samsung A35 5G 8GB 128GB",
    precio: 375,
    imagen: "./assets/img/a35.png",
    category: "Samsung",
  },
  {
    id: 7,
    nombre: "Samsung A35 5G 8GB 256GB",
    precio: 392,
    imagen: "./assets/img/a35.png",
    category: "Samsung",
  },
  {
    id: 8,
    nombre: "Samsung A55 5G 8GB 128GB",
    precio: 450,
    imagen: "./assets/img/a55.png",
    category: "Samsung",
  },
  {
    id: 9,
    nombre: "Samsung A55 5GB 8GB 256GB",
    precio: 475,
    imagen: "./assets/img/a55.png",
    category: "Samsung",
  },
  {
    id: 10,
    nombre: "Samsung S23 Ultra 12GB 256GB",
    precio: 1060,
    imagen: "./assets/img/s23Ultra.png",
    category: "Samsung",
  },
  {
    id: 11,
    nombre: "Samsung S23 Ultra 12GB 512GB",
    precio: 1100,
    imagen: "./assets/img/s23Ultra.png",
    category: "Samsung",
  },
  {
    id: 12,
    nombre: "Samsung S23 FE 8GB 256GB",
    precio: 590,
    imagen: "./assets/img/s23FE.png",
    category: "Samsung",
  },
  {
    id: 13,
    nombre: "Samsung S24 FE 8GB 256GB",
    precio: 800,
    imagen: "./assets/img/s24Fe.png",
    category: "Samsung",
  },
  {
    id: 14,
    nombre: "Samsung S24 8GB 128GB",
    precio: 850,
    imagen: "./assets/img/s24.png",
    category: "Samsung",
  },
  {
    id: 15,
    nombre: "Samsung S24 8GB 256GB",
    precio: 900,
    imagen: "./assets/img/s24.png",
    category: "Samsung",
  },
  {
    id: 16,
    nombre: "Xiaomi 13C 4GB 128GB",
    precio: 200,
    imagen: "./assets/img/xiaomi13c.png",
    category: "Xiaomi",
  },
  {
    id: 17,
    nombre: "Xiaomi 14C 4GB 128GB",
    precio: 215,
    imagen: "./assets/img/xiaomi14c.png",
    category: "Xiaomi",
  },

  {
    id: 18,
    nombre: "Xiaomi Redmi Note 13 4G 6GB 128GB",
    precio: 240,
    imagen: "./assets/img/xiaomiNote134g.png",
    category: "Xiaomi",
  },

  {
    id: 19,
    nombre: "Xiaomi Redmi Note 13 4G 8GB 128GB",
    precio: 250,
    imagen: "./assets/img/xiaomiNote134g.png",
    category: "Xiaomi",
  },

  {
    id: 20,
    nombre: "Xiaomi Redmi Note 13 4G 8GB 256GB",
    precio: 270,
    imagen: "./assets/img/xiaomiNote134g.png",
    category: "Xiaomi",
  },

  {
    id: 21,
    nombre: "Xiaomi Redmi Note 13 PRO 4G 8GB 256GB",
    precio: 290,
    imagen: "./assets/img/xiaomi13pro4g.png",

    category: "Xiaomi",
  },

  {
    id: 22,
    nombre: "Xiaomi Redmi Note 13 PRO 4G 12GB 256GB",
    precio: 310,
    imagen: "./assets/img/xiaomi13pro4g.png",

    category: "Xiaomi",
  },

  {
    id: 23,
    nombre: "Xiaomi Redmi Note 13 PRO 4G 12GB 512GB",
    precio: 350,
    imagen: "./assets/img/xiaomi13pro4g.png",
    category: "Xiaomi",
  },

  {
    id: 24,
    nombre: "Xiaomi Redmi Note 13 5G 6GB 128GB",
    precio: 285,
    imagen: "./assets/img/xiaominote135g.png",
    category: "Xiaomi",
  },
  {
    id: 25,
    nombre: "Xiaomi Redmi Note 13 5G 8GB 256GB",
    precio: 320,
    imagen: "./assets/img/xiaominote135g.png",
    category: "Xiaomi",
  },

  {
    id: 26,
    nombre: "Xiaomi Redmi Note 13 PRO 5G 8GB 256GB",
    precio: 380,
    imagen: "./assets/img/xiaomi13pro5g.png",
    category: "Xiaomi",
  },

  {
    id: 27,
    nombre: "Xiaomi Redmi Note 13 PRO 5G 8GB 512GB",
    precio: 440,
    imagen: "./assets/img/xiaomi13pro5g.png",
    category: "Xiaomi",
  },

  {
    id: 28,
    nombre: "Xiaomi Redmi Note 13 PRO + 5G 8GB 256GB",
    precio: 440,
    imagen: "./assets/img/xiaomi13pro+5g.png",
    category: "Xiaomi",
  },

  {
    id: 29,
    nombre: "Xiaomi Redmi Note 13 PRO + 5G 8GB 512GB",
    precio: 490,
    imagen: "./assets/img/xiaomi13pro+5g.png",
    category: "Xiaomi",
  },

  {
    id: 30,
    nombre: "Motorola Moto G24 8GB 128GB",
    precio: 210,
    imagen: "./assets/img/motog24.png",
    category: "Motorola",
  },

  {
    id: 31,
    nombre: "Motorola Moto G24 Power 8GB 256GB",
    precio: 230,
    imagen: "./assets/img/motog24power.png",
    category: "Motorola",
  },

  {
    id: 32,
    nombre: "Motorola Moto G54 5G 8GB 256GB",
    precio: 280,
    imagen: "./assets/img/motog54.png",
    category: "Motorola",
  },

  {
    id: 33,
    nombre: "Motorola Moto G73 8GB 256GB",
    precio: 280,
    imagen: "./assets/img/motog73.png",
    category: "Motorola",
  },

  {
    id: 34,
    nombre: "Motorola Moto G84 5G 8GB 256GB",
    precio: 350,
    imagen: "./assets/img/motog84.png",
    category: "Motorola",
  },

  {
    id: 35,
    nombre: "Motorola Moto G84 5G 12GB 256GB",
    precio: 370,
    imagen: "./assets/img/motog84.png",
    category: "Motorola",
  },

  {
    id: 36,
    nombre: "Motorola Moto G85 5G 8GB 256GB",
    precio: 390,
    imagen: "./assets/img/motog85.png",
    category: "Motorola",
  },

  {
    id: 37,
    nombre: "Motorola Moto Edge 50 Fusion 5G 8GB 256GB",
    precio: 500,
    imagen: "./assets/img/motoedge50.png",
    category: "Motorola",
  },

  {
    id: 38,
    nombre: "Xbox Series X 1TB",
    precio: 750,
    imagen: "./assets/img/xboxseriesx.png",
    category: "Consolas",
  },

  {
    id: 39,
    nombre: "Xbox Series S 512GB",
    precio: 550,
    imagen: "./assets/img/xboxseriess.png",
    category: "Consolas",
  },

  {
    id: 40,
    nombre: "Xbox Series X 1TB Digital Blanca ",
    precio: 750,
    imagen: "./assets/img/xboxseriesxwhite.png",
    category: "Consolas",
  },

  {
    id: 41,
    nombre: "Xbox Series S 1TB",
    precio: 650,
    imagen: "./assets/img/xboxseriessblack.png",
    category: "Consolas",
  },

  {
    id: 42,
    nombre: "Play Station 5 Slim 1TB",
    precio: 840,
    imagen: "./assets/img/ps5.png",
    category: "Consolas",
  },

  {
    id: 43,
    nombre: "Play Station 5 Slim 1TB Digital",
    precio: 790,
    imagen: "./assets/img/ps5digital.png",
    category: "Consolas",
  },

  {
    id: 44,
    nombre: "Nintendo Switch OLED 64GB",
    precio: 470,
    imagen: "./assets/img/switch.png",
    category: "Consolas",
  },

  {
    id: 45,
    nombre: "Nintendo Switch Lite",
    precio: 290,
    imagen: "./assets/img/switchlite.png",
    category: "Consolas",
  },
];

const sortedProducts = productsData.sort((a, b) => b.precio - a.precio);
