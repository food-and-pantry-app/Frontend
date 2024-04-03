import React, { useState, useEffect } from 'react';
import './Pantry.css';
import pantryData from './pantryData.json';
import { getTagStyle } from './tagStyles.js'; // Import the function from the external JS file

const Pantry = () => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
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
            <div className="pantry-item-tags" style={getTagStyle(item.Tags)}>
              <h4>~{item.Tags.join(', ')}~</h4>
            </div>
            <div className="pantry-image-container">
              <img
                src={item.ImageURL}
                alt={item.Name}
                className="pantry-image"
              />
            </div>
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
