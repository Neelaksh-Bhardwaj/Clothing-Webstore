import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart
import '../styles.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart(); // Access addToCart from context

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button onClick={handleAddToCart} className="btn">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
