import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import CartContext from '../context/CartContext';

function CartPage() {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart🛒</h1>
      {cart.length === 0 ? (
        <p><b>Your cart is empty</b></p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
    </div>
  );
}

export default CartPage;
