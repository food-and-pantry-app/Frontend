import React, { useState } from 'react';
import './RecipesModal.css'; // Make sure the CSS path is correct

const RecipesModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      Title: title,
      Images: images,
      Cuisine: cuisine,
      Description: description,
      Ingredients: ingredients,
      Instructions: instructions,
      PrepTime: parseInt(prepTime, 10),
      CookTime: parseInt(cookTime, 10),
      TotalTime: parseInt(totalTime, 10),
      Servings: parseInt(servings, 10),
    });
    // Clear form after saving
    setTitle('');
    setImages('');
    setCuisine('');
    setDescription('');
    setIngredients('');
    setInstructions('');
    setPrepTime('');
    setCookTime('');
    setTotalTime('');
    setServings('');
    onClose(); // Close modal after form submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2 className="title">Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="recipeTitle">Title:</label>
          <input
            id="recipeTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="recipeImages">Images URL:</label>
          <input
            id="recipeImages"
            type="text"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
          <label htmlFor="recipeCuisine">Cuisine:</label>
          <input
            id="recipeCuisine"
            type="text"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
          <label htmlFor="recipeDescription">Description:</label>
          <textarea
            id="recipeDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="recipeIngredients">Ingredients:</label>
          <textarea
            id="recipeIngredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <label htmlFor="recipeInstructions">Instructions:</label>
          <textarea
            id="recipeInstructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <label htmlFor="recipePrepTime">Prep Time (minutes):</label>
          <input
            id="recipePrepTime"
            type="number"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
          />
          <label htmlFor="recipeCookTime">Cook Time (minutes):</label>
          <input
            id="recipeCookTime"
            type="number"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
          />
          <label htmlFor="recipeTotalTime">Total Time (minutes):</label>
          <input
            id="recipeTotalTime"
            type="number"
            value={totalTime}
            onChange={(e) => setTotalTime(e.target.value)}
          />
          <label htmlFor="recipeServings">Servings:</label>
          <input
            id="recipeServings"
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
          <button type="submit">Save Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default RecipesModal;
