// DietaryRestrictionAutocomplete.jsx (Input2)
import React, { useState } from 'react';
import './Input2.css';

function DietaryRestrictionAutocomplete({ onSelectIngredient }) {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

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

        // Call the prop function with the selected ingredient
        if (onSelectIngredient) {
            onSelectIngredient(ingredient);
        }
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
        </div>
    );
}

export default DietaryRestrictionAutocomplete;