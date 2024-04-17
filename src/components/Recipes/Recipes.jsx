import React, { useEffect, useState } from 'react';
import recipesData from './recipes.json';
import './Recipes.css';

export const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(recipesData);
  }, []);

  return (
    <div className="recipes-container">
      <div className="buffer" />
      {data.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h2 className="title">{recipe.Title}</h2>
          <div className="img-container">
            <img src={recipe.Images[0]} alt={`Image of ${recipe.Title}`} />
          </div>
          <p>{recipe.Description}</p>
          <div className="details">
            <h3>Ingredients:</h3>
            <ul>
              {recipe.Ingredients.map((ingredient, idx) => (
                <li
                  key={idx}
                >{`${ingredient.Quantity} ${ingredient.Unit} ${ingredient.Name}`}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {recipe.Instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
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

export default Recipes; // Ensure the default export is correctly set
