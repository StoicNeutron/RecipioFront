import React from 'react';
import Ingredient from './Ingredient';
import './Basket.css';

function Basket({ selectedIngredients, onRemoveIngredient }) {
    return (
        <div className="main_basket">
            <div className="selected-ingredients">
                {selectedIngredients.map((ingredient, index) => (
                    <Ingredient 
                        key={index} 
                        ingredient_name={ingredient} 
                        onRemove={() => onRemoveIngredient(ingredient)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Basket;
