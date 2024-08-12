import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import './Cart.css';  // Import the CSS file for styling

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems } = state;

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h1>Your Cart🛒</h1>
      {cartItems.length === 0 ? (
        <p><b>Your cart is empty.</b></p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
        <button onClick={handleClearCart}>Clear Cart</button>
        <button onClick={() => alert('Proceed to Checkout')}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
