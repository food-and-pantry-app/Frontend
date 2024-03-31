import React from 'react';

const Pantry = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
        // Add more products as needed
    ];

    return (
        <div className="grid-container">
            {products.map((product) => (
                <div key={product.id} className="grid-item">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Pantry;