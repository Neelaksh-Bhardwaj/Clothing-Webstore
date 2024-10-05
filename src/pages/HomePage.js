// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import '../styles.css';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductList />
        </>
    );
};

export default HomePage;
