import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pantry.css';
import { getTagStyle } from './tagStyles.js';

const Pantry = () => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/pantry/');
        setPantryItems(response.data);
      } catch (error) {
        console.error('Error fetching pantry items:', error);
      }
    };
    fetchItems();
  }, []);

  return (
    <section className="pantry">
      <div className="pantry-grid">
        {pantryItems.map((item, index) => {
          // Ensure Tags is an array
          const tagsArray = Array.isArray(item.Tags)
            ? item.Tags
            : item.Tags.split(', ');
          return (
            <div key={index} className="pantry-item">
              <div className="pantry-item-names">
                <h3>{item.Name}</h3>
              </div>
              <div className="pantry-item-tags" style={getTagStyle(tagsArray)}>
                <h4>~{tagsArray.join(', ')}~</h4>
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
          );
        })}
      </div>
    </section>
  );
};

export default Pantry;
