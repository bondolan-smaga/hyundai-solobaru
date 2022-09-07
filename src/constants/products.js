import hyundai01 from 'https://hyundai-official.com/wp-content/uploads/2022/01/slide4a.jpg';
import hyundai02 from "https://wall.alphacoders.com/by_collection.php?id=299";

export const products = [
  {
    id: 1,
    name: "BRSFC",
    description: "",
    price: "",
    tags: ["Unisex", "T-shirt"],
    detail: [],
    mainImage: {
      url: "",
      color: "red",
    },
    images: [
      {
        url: "",
        color: "red",
      },
    ],
    sizes: ["S", "M", "L"],
  },
];

export const modelProducts = [
  {
    id: 1,
    tags: ["Hyundai", "Stargazer"],
    image: hyundai01,
    product: "HYUNDAI",
    name: "HYUNDAI 01",
    price: 50000,
    colorImages: [],
    colors: ["red", "black"],
    description: 'A classic Hyundai model from aestethic designers.',
    detail: 'Comfy, Acceelerate'
  },
  {
    id: 2,
    tags: ["Hyundai", "New"],
    image: hyundai02,
    product: "Hyundai 02",
    name: "Hyundai 02",
    price: 50000,
    colors: ["yellow", "black"],
    colorImages: [],
    sizes: [],
    type: '',
    description: '',
    detail: ''
  },
];

