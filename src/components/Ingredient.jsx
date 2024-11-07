import React from 'react';
import './Ingredient.css';

function Ingredient({ ingredient_name, onRemove }) {
    return (
        <div className="ingredient_main">
            <div className="txt_area">
                {ingredient_name}
            </div>
            <div className="remove_area">
                <button onClick={onRemove}>X</button>
            </div>
        </div>
    );
}

export default Ingredient;
