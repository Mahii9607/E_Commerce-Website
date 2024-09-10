import React from 'react';

function CheckoutPage() {
  const handleSubmit = event => {
    event.preventDefault();
    
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
