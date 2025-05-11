const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 249.99,
    rating: 4.7,
    reviews: 1283,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format"
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.95,
    rating: 4.5,
    reviews: 952,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format"
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    price: 329.00,
    rating: 4.8,
    reviews: 745,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&auto=format"
  },
  {
    id: 4,
    title: "Stainless Steel Water Bottle",
    price: 34.95,
    rating: 4.6,
    reviews: 2105,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format"
  },
  {
    id: 5,
    title: "Portable Bluetooth Speaker",
    price: 89.99,
    rating: 4.4,
    reviews: 1678,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format"
  },
  {
    id: 6,
    title: "Ceramic Pour-Over Coffee Set",
    price: 64.50,
    rating: 4.9,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=500&auto=format"
  },
  {
    id: 7,
    title: "Ultra-light Hiking Backpack",
    price: 129.00,
    rating: 4.7,
    reviews: 836,
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format"
  },
  {
    id: 8,
    title: "Mechanical Keyboard",
    price: 159.99,
    rating: 4.8,
    reviews: 1432,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format"
  },
  {
    id: 9,
    title: "Plant-Based Protein Powder",
    price: 39.95,
    rating: 4.3,
    reviews: 2571,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&auto=format"
  },
  {
    id: 10,
    title: "Smart Home Security Camera",
    price: 179.00,
    rating: 4.6,
    reviews: 1089,
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=500&auto=format"
  }
];

export default products;

// Example of how to use this data:
// console.log(products);
// 
// To access an individual product:
// console.log(products[0]); // Gets the first product
//
// To loop through all products:
// products.forEach(product => {
//   console.log(`${product.title} - $${product.price} - Rating: ${product.rating}/5 (${product.reviews} reviews)`);
// });