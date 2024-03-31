import React, { useRef } from 'react';

const Recipes = () => {
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        const container = containerRef.current;
        const scrollAmount = 200; // Adjust this value to control the scroll speed

        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
        } else if (direction === 'right') {
            container.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="recipes-container" ref={containerRef}>
            {/* Your recipe cards or items go here */}
            {/* Example: */}
            <div className="recipe-card">Recipe 1</div>
            <div className="recipe-card">Recipe 2</div>
            <div className="recipe-card">Recipe 3</div>
            <div className="recipe-card">Recipe 4</div>
            <div className="recipe-card">Recipe 5</div>

            {/* Scroll buttons */}
            <button onClick={() => handleScroll('left')}>Scroll Left</button>
            <button onClick={() => handleScroll('right')}>Scroll Right</button>
        </div>
    );
};

export default Recipes;