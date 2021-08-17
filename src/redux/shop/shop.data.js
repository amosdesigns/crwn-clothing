const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "../images/shop-img/hats/brown-brim.png",
        price: 25.95,
        stockLevel: 200,
        salePrice: 23.95,
        description: "MG Ladies Fashion Wide Brim Hat - Brown",
        lgDescription: "MG Ladies Fashion Wide Brim Hat - Brown. An elegant broad-brim sun hat is woven from airy, lightweight straw for a look that's both graceful and chic.",
        model: "BBHMG",
        brand: "mg",
        size: ["s", "m", "l", "xl", "xxl"],
        color:["borwn"]
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "../images/shop-img/hats/blue-beanie.png",
        price: 189.99,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "../images/shop-img/hats/brown-cowboy.png",
        price: 35.95,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "../images/shop-img/hats/grey-brim.png",
        price: 25.98,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "../images/shop-img/hats/green-beanie.png",
        price: 18.98,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "../images/shop-img/hats/palm-tree-cap.png",
        price: 14.98,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "../images/shop-img/hats/red-beanie.png",
        price: 18.98,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "../images/shop-img/hats/wolf-cap.png",
        price: 14.98,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "../images/shop-img/hats/blue-snapback.png",
        price: 16.98,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "../images/shop-img/sneakers/adidas-nmd.png",
        price: 220.98,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "../images/shop-img/sneakers/yeezy.png",
        price: 280.98,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "../images/shop-img/sneakers/black-converse.png",
        price: 110.98,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "../images/shop-img/sneakers/white-nike-high-tops.png",
        price: 160.98,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "../images/shop-img/sneakers/nikes-red.png",
        price: 160.98,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "../images/shop-img/sneakers/nike-brown.png",
        price: 160.98,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "../images/shop-img/sneakers/nike-funky.png",
        price: 190.99,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "../images/shop-img/sneakers/timberlands.png",
        price: 200.98,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "../images/shop-img/jackets/black-shearling.png",
        price: 125.98,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "../images/shop-img/jackets/blue-jean-jacket.png",
        price: 90.45,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "../images/shop-img/jackets/grey-jean-jacket.png",
        price: 90.98,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "../images/shop-img/jackets/brown-shearling.png",
        price: 165.98,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "../images/shop-img/jackets/brown-trench.png",
        price: 185.98,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "../images/shop-img/womens/blue-tank.png",
        price: 25.98,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "../images/shop-img/womens/floral-blouse.png",
        price: 20.98,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "../images/shop-img/womens/floral-skirt.png",
        price: 80.98,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "../images/shop-img/womens/red-polka-dot-dress.png",
        price: 80.78,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "../images/shop-img/womens/striped-sweater.png",
        price: 45.98,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "../images/shop-img/womens/yellow-track-suit.png",
        price: 135.67,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "../images/shop-img/womens/white-vest.png",
        price: 20.29,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "../images/shop-img/mens/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "../images/shop-img/mens/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "../images/shop-img/mens/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "../images/shop-img/mens/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "../images/shop-img/mens/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "../images/shop-img/mens/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;