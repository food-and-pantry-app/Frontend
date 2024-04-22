import React from 'react';
import './Navbar.css';

export const Navbar = ({ onSearch, onShowRecipes, onShowPantry }) => {
  const [filter, setFilter] = React.useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(filter);
    }
  };

  return (
    <div className="navbar">
      <div className="logoContainer">
        <div className="logo"></div>
        <h1>Dinein</h1>
      </div>
      <div className="navLinks">
        <button className="navButton-recipes" onClick={onShowRecipes} />
        <button className="navButton-pantry" onClick={onShowPantry} />
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={(evt) => setFilter(evt.target.value)}
          />
          <button className="searchButton" onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
