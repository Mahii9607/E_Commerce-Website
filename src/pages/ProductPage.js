import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';

const products = [
  { id: 1, name: 'Classic Vanilla', price: '₹199', image: '/images/Classic vanilla.jpg' },
  { id: 2, name: 'Chocolate Delight', price: '₹230', image: '/images/chocolate Delight.jpg' },
  { id: 3, name: 'Strawberry Swirl', price: '₹450', image: '/images/strawberry.jpg' },
  { id: 4, name: 'Minty Fresh', price: '₹520', image: '/images/mint.jpg' },
  { id: 5, name: 'Cookie & Cream', price: '₹610', image: '/images/cookie_cream.jpg' },
];



function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <button onClick={addToCart}>Add to Cart🛒</button>
    </div>
  );
}

export default ProductPage;
