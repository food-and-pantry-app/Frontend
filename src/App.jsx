import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pantry from './components/Pantry/Pantry';
import Recipes from './components/Recipes/Recipes';

function App() {
  const [visibleComponent, setVisibleComponent] = useState('recipes'); // Default to showing recipes

  const showRecipes = () => {
    setVisibleComponent('recipes');
  };

  const showPantry = () => {
    setVisibleComponent('pantry');
  };

  return (
    <div id="root">
      <Navbar onShowRecipes={showRecipes} onShowPantry={showPantry} />
      {visibleComponent === 'recipes' && <Recipes />}
      {visibleComponent === 'pantry' && <Pantry />}
    </div>
  );
}

export default App;
