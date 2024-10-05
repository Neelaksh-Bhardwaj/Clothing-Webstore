import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactForm from './pages/ContactForm';
import Shop from './pages/Shop'; 
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; 
import { CartProvider } from './context/CartContext';
import About from './pages/About';
import './styles.css';

const App = () => (
    <CartProvider> {/* Wrap your routes with CartProvider */}
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    </CartProvider>
);

export default App;
