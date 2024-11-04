import React, { useState } from 'react';
import './Ingredient.css';

function Ingredient({ ingredient_name }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleRemove = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null; // Return null to stop rendering the component when it's not visible
    }

    return (
        <div className="ingredient_main">
            <div className="txt_area">
                {ingredient_name}
            </div>
            <div className="remove_area">
                <button onClick={handleRemove}>X</button>
            </div>
        </div>
    );
}

export default Ingredient;