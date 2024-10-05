// src/components/Hero.js
import React from 'react';
import '../styles.css';

const Hero = () => {
    return (
        <div className="hero">
            <h1>New Arrivals</h1>
            <p>Discover the latest trends in fashion.</p>
            <a href="/shop" className="btn">Shop Now</a>
        </div>
    );
};

export default Hero;
