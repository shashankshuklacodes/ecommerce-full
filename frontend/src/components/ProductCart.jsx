import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product,addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.desc}</p>
      <strong>₹{product.price}</strong>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;