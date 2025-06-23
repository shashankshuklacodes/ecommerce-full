import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import API from '../api';
import "../styles/Login.css";

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // ✅ initialize navigator

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/'); // ✅ redirect to home page
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </form>
  );
};

export default Login;
