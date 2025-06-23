import React from 'react';
import '../styles/Cart.css';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        <strong>₹{item.price}</strong>
        <button onClick={() => onRemove(item._id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
