import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [tags, setTags] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      Name: name,
      Quantity: parseInt(quantity, 10),
      Unit: unit,
      Tags: tags,
      ImageURL: imageURL,
      ExpirationDate: expirationDate,
    });
    // Clear form after saving
    setName('');
    setQuantity('');
    setUnit('');
    setTags('');
    setImageURL('');
    setExpirationDate('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Add New Pantry Item</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemName">Name:</label>
          <input
            id="itemName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="itemQuantity">Quantity:</label>
          <input
            id="itemQuantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <label htmlFor="itemUnit">Unit:</label>
          <select
            id="itemUnit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
          >
            <option value="">Select Unit</option>
            <optgroup label="Weight and Mass">
              <option value="g">Grams (g)</option>
              <option value="kg">Kilograms (kg)</option>
              <option value="lbs">Pounds (lbs)</option>
              <option value="oz">Ounces (oz)</option>
            </optgroup>
            <optgroup label="Volume">
              <option value="L">Liters (L)</option>
              <option value="mL">Milliliters (mL)</option>
              <option value="c">Cups (c)</option>
              <option value="fl oz">Fluid Ounces (fl oz)</option>
              <option value="tbsp">Tablespoons (tbsp)</option>
              <option value="tsp">Teaspoons (tsp)</option>
              <option value="gal">Gallons (gal)</option>
              <option value="qt">Quarts (qt)</option>
              <option value="pt">Pints (pt)</option>
            </optgroup>
            <optgroup label="Count">
              <option value="pcs">Piece (pcs)</option>
              <option value="pack">Pack (pack)</option>
              <option value="doz">Dozen (doz)</option>
            </optgroup>
            <optgroup label="Miscellaneous">
              <option value="Jar">Jar</option>
              <option value="Can">Can</option>
              <option value="Bottle">Bottle</option>
              <option value="Box">Box</option>
              <option value="Bag">Bag</option>
            </optgroup>
          </select>

          <label htmlFor="itemTags">Tags:</label>
          <select
            id="itemTags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          >
            <option value="">Select Tag</option>
            <option value="Produce">Produce</option>
            <option value="Dairy & Eggs">Dairy & Eggs</option>
            <option value="Meat & Seafood">Meat & Seafood</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Baking Supplies">Baking Supplies</option>
            <option value="Spices & Herbs">Spices & Herbs</option>
            <option value="Snacks">Snacks</option>
            <option value="Condiments">Condiments</option>
            <option value="Beverages">Beverages</option>
            <option value="Frozen Foods">Frozen Foods</option>
          </select>

          <label htmlFor="itemImageURL">Image URL:</label>
          <input
            id="itemImageURL"
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <label htmlFor="itemExpirationDate">Expiration Date:</label>
          <input
            id="itemExpirationDate"
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
          <button type="submit">Save Item</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
