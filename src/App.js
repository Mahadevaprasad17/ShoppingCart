import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Product from './components/Product';
import Footer from './components/Footer';

const sampleProducts = [
  { id: 1, name: 'White Sneakers', price: 75, img: 'https://5.imimg.com/data5/ANDROID/Default/2022/8/CB/TQ/CW/63738590/product-jpeg-500x500.jpg' },
  { id: 2, name: 'Classic Watch', price: 120, img: 'https://images-cdn.ubuy.co.in/668928dd7da0fa01111588e7-new-vintage-watch-for-men-classic.jpg' },
  { id: 3, name: 'Leather Backpack', price: 95, img: 'https://scaramangashop.co.uk/cdn/shop/files/sarahmantelin_leather_backpack-01.jpg?v=1750415069' },
  { id: 4, name: 'Sunglasses', price: 60, img: 'https://www.dervin.in/cdn/shop/files/dervin-uv-protection-square-flat-lens-matte-frame-sunglasses-for-men-and-women-dervin-1.jpg?v=1720947730&width=1920' },
  { id: 5, name: 'Baseball Cap', price: 25, img: 'https://www.urbanmonkey.com/cdn/shop/files/no-logo-um23bc072-blk-780081.jpg?v=1734935566&width=1024' },
  { id: 6, name: 'Denim Jacket', price: 130, img: 'https://image.made-in-china.com/202f0j00sZelVUHPagrR/High-Quality-Blue-Oversized-Long-Denim-Jackets-Distressed-Womens-Jean-Jacket-Wholesale-Denim-Jackets.webp' },
  { id: 7, name: 'mens denim jacket', price: 25, img: 'https://m.media-amazon.com/images/I/61mlMn2tn-L._UF894,1000_QL80_.jpg' },
  { id: 8, name: 'Apple 13', price: 700, img: 'https://sathya.in/media/95785/catalog/1%20(45).jpg' },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => setCartItems([...cartItems, product]);
  const removeFromCart = (id) => setCartItems(cartItems.filter(i => i.id !== id));

  return (
    <div>
      <Navigation count={cartItems.length} />
      <Hero />
      <main className="container products-grid">
        {sampleProducts.map(p => (
          <Product key={p.id} product={p} onAdd={addToCart} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
