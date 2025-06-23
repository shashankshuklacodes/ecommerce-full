// src/App.jsx
import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ No BrowserRouter here
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Header from './components/Header';
import Footer from './components/Footer'; 
import About from './pages/About';
import Contact from './pages/Contact';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.title} added to cart!`);
  };
  const removeFromCart = (index) => {
    const newCart = [...cart];
    const removedItem = newCart[index]; // ✅ Fix
    newCart.splice(index, 1);
    setCart(newCart);
    toast.info(`${removedItem.title} removed from cart.`);
  };

  return (
    <>
      <Header />
       <ToastContainer position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
