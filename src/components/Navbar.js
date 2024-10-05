// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-header">
                <h1 className="logo">Fashion Store</h1>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/cart">Check Cart</Link>
            </div>
        </div>
    );
};

export default Navbar;
