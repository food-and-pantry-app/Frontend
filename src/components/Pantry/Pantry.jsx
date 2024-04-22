import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pantry.css';
import { getTagStyle } from './tagStyles.js';

const Pantry = () => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/pantry/');
      setPantryItems(response.data);
    } catch (error) {
      console.error('Error fetching pantry items:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/pantry/${id}`);
      const newItems = pantryItems.filter((item) => item.ID !== id);
      setPantryItems(newItems);
    } catch (error) {
      console.error('Error deleting pantry item:', error);
    }
  };

  return (
    <section className="pantry">
      <div className="pantry-grid">
        {pantryItems.map((item, index) => {
          const tagsArray = Array.isArray(item.Tags)
            ? item.Tags
            : item.Tags.split(', ');
          return (
            <div key={index} className="pantry-item">
              <div className="pantry-item-header">
                <h3 className="title">{item.Name}</h3>
                <button
                  className="button-delete"
                  onClick={() => deleteItem(item.ID)}
                />
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
