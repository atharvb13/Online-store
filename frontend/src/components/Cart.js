import React from 'react';

function Cart({ cart, removeFromCart }) {
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map(product => (
              <li key={product._id}>
                <div className="cart-item">
                <img src={product.image} alt={product.name} />
                  <div className="cart-item-info">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(product._id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default Cart;
