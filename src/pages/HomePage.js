import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Classic Vanilla', price: '₹199', image: '/images/Classic vanilla.jpg' },
  { id: 2, name: 'Chocolate Delight', price: '₹230', image: '/images/chocolate Delight.jpg' },
  { id: 3, name: 'Strawberry Swirl', price: '₹450', image: '/images/strawberry.jpg' },
  { id: 4, name: 'Minty Fresh', price: '₹520', image: '/images/mint.jpg' },
  { id: 5, name: 'Cookie & Cream', price: '₹610', image: '/images/cookie_cream.jpg' },
];



function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Our Shop🏬</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
