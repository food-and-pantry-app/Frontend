import React, { useState, useEffect } from 'react';
import './Pantry.css';
import pantryData from './pantryData.json'; // Assuming the JSON file is named pantryData.json and is in the same directory

const Pantry = () => {
    const [pantryItems, setPantryItems] = useState([]);

    useEffect(() => {
        // Mock fetching data from JSON file
        setPantryItems(pantryData.Pantry);
    }, []);

    return (
        <div className="pantry-grid">
            {pantryItems.map((item, index) => (
                <div key={index} className="pantry-item">
                    <div className="pantry-image-container">
                        <img src={item.ImageURL} alt={item.Name} className="pantry-image" />
                    </div>
                    <h3>{item.Name}</h3>
                    <p>{`${item.Quantity} ${item.Unit}`}</p>
                    <p>Exp: {item.ExpirationDate}</p>
                </div>
            ))}
        </div>
    );
};

export default Pantry;
