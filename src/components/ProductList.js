// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import '../styles.css';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Jacket', price: '1290', image: 'product1.jpg' },
        { id: 2, name: 'T-Shirt', price: '449', image: 'product2.jpg' },
        { id: 3, name: 'Dress', price: '889', image: 'product3.jpg' },
    ];

    return (
        <div className="products">
            <h2>Featured Products</h2>
            <div className="product-cards">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
