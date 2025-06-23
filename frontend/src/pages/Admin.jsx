// src/pages/Admin.jsx
import React, { useEffect, useState } from 'react';
import API from '../api';
import '../styles/Admin.css';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    desc: '',
    img: '',
    price: '',
    category: ''
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    API.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/products', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts([...products, res.data]);
      setForm({ title: '', desc: '', img: '', price: '', category: '' });
    } catch (err) {
      alert('Failed to add product');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;

    try {
      await API.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      <form className="admin-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.img}
          onChange={(e) => setForm({ ...form, img: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      <div className="admin-product-list">
        {products.map((p) => (
          <div key={p._id} className="admin-product-card">
            <img src={p.img} alt={p.title} />
            <div>
              <h4>{p.title}</h4>
              <p>₹{p.price}</p>
              <p><strong>{p.category}</strong></p>
              <button onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
