import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-text">
          <h1>About ClothZy</h1>
          <p>
            Welcome to ClothZy – where fashion meets simplicity. We provide high-quality, stylish,
            and affordable clothing for every season and occasion.
          </p>
        </div>
        <div className="hero-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYVbERsKHc2mP_cpAj60rvJ5gm2hN2c5bRw&s" alt="Fashion Hero" />
        </div>
      </section>

      <section className="about-values">
        <h2>What We Value</h2>
        <div className="value-cards">
          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Quality" />
            <h3>Premium Quality</h3>
            <p>Only the finest materials to keep you comfortable and stylish.</p>
          </div>
          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/744/744465.png" alt="Trendy" />
            <h3>Modern Designs</h3>
            <p>Trendy, seasonal styles inspired by global fashion trends.</p>
          </div>
          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="Support" />
            <h3>Customer Support</h3>
            <p>Friendly and fast support to assist you 24/7 with your queries.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" />
            <h4>Shalini Gupta</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
            <h4>Rohit Kumar</h4>
            <p>Head of Design</p>
          </div>
          <div className="member">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member" />
            <h4>Ayesha Khan</h4>
            <p>Marketing Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
