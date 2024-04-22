import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Recipes.css';

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div className="recipes-container">
      <div className="buffer" />
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <div className="recipe-header">
            <h2 className="title">{recipe.Title}</h2>
            <button
              className="button-select-delete"
              onClick={() => deleteRecipe(recipe.RecipeID)} // Use RecipeID for deletion
            />
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
    </div>
  );
};

export default Recipes;
