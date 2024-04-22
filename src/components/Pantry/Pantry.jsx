import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pantry.css';
import { getTagStyle } from './tagStyles.js';
import Modal from './Modal/Modal.jsx'; // Assuming the Modal is correctly implemented for creating items

const Pantry = () => {
  const [pantryItems, setPantryItems] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

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

  const toggleDeleteButtons = () => {
    setShowDelete(!showDelete);
  };

  const handleAddItem = (newItem) => {
    // Function to handle adding new items after Modal form submission
    setIsModalVisible(false); // Close modal on save
    // Here, ideally you would send a request to the server to save the new item
    setPantryItems([...pantryItems, newItem]); // For demonstration, we add directly
  };

  return (
    <section className="pantry">
      <div className="pantry-header">
        <h2>Pantry</h2>
        <div className="pantry-header-buttons">
          <button
            className="button-add"
            onClick={() => setIsModalVisible(true)}
          />
          <button className="button-delete" onClick={toggleDeleteButtons} />
        </div>
      </div>
      <div className="pantry-grid">
        {pantryItems.map((item, index) => {
          const tagsArray = Array.isArray(item.Tags)
            ? item.Tags
            : item.Tags.split(', ');
          return (
            <div key={index} className="pantry-item">
              <div className="pantry-item-name">
                <h3 className="title">{item.Name}</h3>
                {showDelete && (
                  <button
                    className="button-select-delete"
                    onClick={() => deleteItem(item.ID)}
                  />
                )}
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
      {isModalVisible && (
        <Modal
          onClose={() => setIsModalVisible(false)}
          onSave={handleAddItem}
        />
      )}
    </section>
  );
};

export default Pantry;
