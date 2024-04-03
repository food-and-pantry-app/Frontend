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
    <section className="pantry">
      <div className="pantry-grid">
        {pantryItems.map((item, index) => (
          <div key={index} className="pantry-item">
            <div className="pantry-item-names">
              <h3>{item.Name}</h3>
            </div>
            <div className="pantry-item-tags">
              <h4>~{item.Tags.join(', ')}~</h4>
            </div>
            <div className="pantry-image-container">
              <img
                src={item.ImageURL}
                alt={item.Name}
                className="pantry-image"
              />
            </div>
            {/* Wrap the quantity/unit and expiration date in a new div with class name */}
            <div className="pantry-item-details">
              <p className="pantry-item-quantity">
                Qty: {`${item.Quantity} ${item.Unit}`}
              </p>
              <p className="pantry-item-expiration">
                Exp: {item.ExpirationDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pantry;
