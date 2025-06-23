import React, { useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';
import "../styles/Login.css"; // You can reuse the same CSS

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Register</button>
      <p className="register-link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
};

export default Register;
