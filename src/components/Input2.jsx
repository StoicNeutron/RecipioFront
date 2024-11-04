import React, { useState } from 'react';
import Ingredient from './Ingredient'; // Import the Ingredient component
import './Input2.css';

function DietaryRestrictionAutocomplete() {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState([]); // State to store selected ingredients

    const ingredients = [
        'Tomato', 'Carrot', 'Ham', 'Chicken', 'Pork', 'Basil', 'Garlic', 'American Cheese',
        // (other ingredients here)
    ];

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        
        // Filter options based on input
        const filtered = ingredients.filter(ingredient =>
            ingredient.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
        setIsOptionsVisible(true);
    };

    const handleOptionClick = (ingredient) => {
        setInputValue('');
        setIsOptionsVisible(false);

        // Add the selected ingredient to the list if it's not already included
        setSelectedIngredients((prevIngredients) => {
            if (!prevIngredients.includes(ingredient)) {
                return [...prevIngredients, ingredient];
            }
            return prevIngredients;
        });
    };

    return (
        <div className="autocomplete-container">
            <label className="autocomplete-label">Select Ingredients</label>
            <input
                type="text"
                className="autocomplete-input"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsOptionsVisible(true)}
                onBlur={() => setTimeout(() => setIsOptionsVisible(false), 200)}
                placeholder=""
            />
            {isOptionsVisible && filteredOptions.length > 0 && (
                <ul className="autocomplete-options">
                    {filteredOptions.map((ingredient, index) => (
                        <li
                            key={index}
                            className="autocomplete-option"
                            onClick={() => handleOptionClick(ingredient)}
                        >
                            {ingredient}
                        </li>
                    ))}
                </ul>
            )}

            {/* Render Ingredient components for each selected ingredient */}
            <div className="selected-ingredients">
                {selectedIngredients.map((ingredient, index) => (
                    <Ingredient key={index} ingredient_name={ingredient} />
                ))}
            </div>
        </div>
    );
}

export default DietaryRestrictionAutocomplete;