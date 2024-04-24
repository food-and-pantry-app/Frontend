import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Recipes.css';
import RecipesModal from './RecipesModal/RecipesModal'; // Adjust the import path as necessary
import GptModal from './RecipesModal/GenerateModal';

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGptModalVisible, setIsGptModalVisible] = useState(false);

  const [gptPrompt, setGptPrompt] = useState(''); // State to store user input for GPT

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/recipes');
      const normalizedRecipes = response.data.data.map((recipe) => ({
        ...recipe,
        Ingredients: Array.isArray(recipe.Ingredients)
          ? recipe.Ingredients
          : [],
        Instructions: Array.isArray(recipe.Instructions)
          ? recipe.Instructions
          : [],
      }));
      setRecipes(normalizedRecipes); // Update state with normalized fetched recipes
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes(); // Call on component mount
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/recipes');
        setRecipes(response.data.data); // Assuming response.data.data is the array of recipes
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/recipes/${id}`);
      const updatedRecipes = recipes.filter((recipe) => recipe.RecipeID !== id);
      setRecipes(updatedRecipes);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const toggleDeleteButtons = () => {
    setShowDelete(!showDelete);
  };

  const handleAddRecipe = async (newRecipe) => {
    setIsModalVisible(false); // Close modal on save
    try {
      const response = await axios.post(
        'http://localhost:3000/api/recipes/',
        newRecipe
      );
      if (response.status === 201) {
        // Assuming 201 is the status for a successful creation
        fetchRecipes(); // Re-fetch all recipes to update the UI
        console.log('Recipe added successfully:', response.data);
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error adding new recipe:', error);
      alert('Failed to add recipe'); // Or handle the error in a more user-friendly way
    }
    fetchRecipes();
  };

  const handleGenerateRecipe = async (prompt) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/recipes/generate',
        { prompt }
      );
      if (response.status === 201) {
        fetchRecipes(); // Refresh the recipe list
        console.log('Recipe generated successfully:', response.data);
      } else {
        console.error('Unexpected response while generating recipe:', response);
      }
    } catch (error) {
      console.error('Error generating recipe:', error);
      alert('Failed to generate recipe');
    }
  };

  return (
    <div className="recipes-container">
      <div className="controller">
        <h2>Recipes</h2>
        <div className="buttons">
          <button
            className="button-add"
            onClick={() => setIsModalVisible(true)} // Toggle modal visibility
          />
          <button
            className="button-gpt"
            onClick={() => setIsGptModalVisible(true)} // Open GPT modal
          />
          <button
            className="button-delete"
            onClick={toggleDeleteButtons} // Toggle delete button visibility
          />
        </div>
      </div>
      <div className="buffer" />
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <div className="recipe-header">
            <h2 className="title">{recipe.Title}</h2>
            {showDelete && (
              <button
                className="button-select-delete"
                onClick={() => deleteRecipe(recipe.RecipeID)}
              />
            )}
          </div>
          <div className="img-container">
            <img src={recipe.Images} alt={`Image of ${recipe.Title}`} />
          </div>
          <p>{recipe.Description}</p>
          <div className="details">
            <h3>Ingredients:</h3>
            <ul>
              {Array.isArray(recipe.Ingredients) ? (
                recipe.Ingredients.map((ingredient, idx) => (
                  <li
                    key={idx}
                  >{`${ingredient.Quantity} ${ingredient.Unit} ${ingredient.Name}`}</li>
                ))
              ) : (
                <li>No Ingredients Listed</li>
              )}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {Array.isArray(recipe.Instructions) ? (
                recipe.Instructions.map((instruction, idx) => (
                  <li key={idx}>{instruction}</li>
                ))
              ) : (
                <li>No Instructions Provided</li>
              )}
            </ol>
            <p>
              <strong>Prep Time:</strong> {recipe.PrepTime} minutes
            </p>
            <p>
              <strong>Cook Time:</strong> {recipe.CookTime} minutes
            </p>
            <p>
              <strong>Total Time:</strong> {recipe.TotalTime} minutes
            </p>
            <p>
              <strong>Servings:</strong> {recipe.Servings}
            </p>
          </div>
        </div>
      ))}
      {isModalVisible && (
        <RecipesModal
          onClose={() => setIsModalVisible(false)}
          onSave={handleAddRecipe}
        />
      )}
      {isGptModalVisible && (
        <GptModal
          onClose={() => setIsGptModalVisible(false)}
          onGenerate={handleGenerateRecipe}
        />
      )}
    </div>
  );
};

export default Recipes;
