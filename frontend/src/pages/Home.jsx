// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCart';
import API from '../api';
import "../styles/Home.css";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products', err));
  }, []);

  const latest = products.filter(p => p.category === 'latest');
  const bestSeller = products.filter(p => p.category === 'bestseller');

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-left">
          <h1>Discover the New Styles</h1>
          <p>Shop our latest trendy collections for all seasons.</p>
          <h3 className="shop-now-btn">Shop Now</h3>
        </div>
        <div className="hero-right">
          <img
            src="https://chlothzy.shop/assets/hero_img-uMuzwHEB.png"
            alt="Hero"
          />
        </div>
      </div>

      {/* Latest Collection */}
      <h2 className="home-heading">Latest Collection</h2>
      <div className="grid-container">
        {latest.map((p, i) => (
          <ProductCard key={p._id} product={p} addToCart={addToCart} style={{ '--i': i }} />
        ))}
      </div>

      {/* Best Sellers */}
      <h2 className="home-heading">Best Sellers</h2>
      <div className="grid-container">
        {bestSeller.map((p, i) => (
          <ProductCard key={p._id} product={p} addToCart={addToCart} style={{ '--i': i }} />
        ))}
      </div>
      {/* Benefits Section */}
<div className="home-benefits">
  {/* <h2>Why Shop With Us?</h2> */}
  <div className="benefits-list">
    <div className="benefit-item">
      <span role="img" aria-label="exchange" className="benefit-icon">🔁</span>
      <h4>Easy Exchange</h4>
      <p>Exchange your items hassle-free within a few clicks.</p>
    </div>
    <div className="benefit-item">
      <span role="img" aria-label="return" className="benefit-icon">📦</span>
      <h4>7-Day Return</h4>
      <p>Not satisfied? Return within 7 days, no questions asked.</p>
    </div>
    <div className="benefit-item">
      <span role="img" aria-label="support" className="benefit-icon">💬</span>
      <h4>Best Support</h4>
      <p>Our support team is available 24/7 to help you.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
