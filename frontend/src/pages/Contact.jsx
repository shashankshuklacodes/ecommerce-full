// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynfsabVl_2MlV9VgkvOylDtZbr8_XFdxIdg&s" alt="Contact Us" />
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
