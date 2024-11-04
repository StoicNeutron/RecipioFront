import React, { useState } from 'react';
import './Input2.css';

function DietaryRestrictionAutocomplete() {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const ingredients = [
        'Tomato',
        'Carrot',
        'Ham',
        'Chicken',
        'Pork',
        'Basil',
        'Garlic',
        'American Cheese',
        'Mozzarella',
        'Parmesan',
        'Cheddar Cheese',
        'Beef',
        'Bacon',
        'Turkey',
        'Lettuce',
        'Spinach',
        'Kale',
        'Onion',
        'Red Onion',
        'Green Onion',
        'Bell Pepper',
        'Green Bell Pepper',
        'Red Bell Pepper',
        'Yellow Bell Pepper',
        'Jalapeno',
        'Avocado',
        'Olive Oil',
        'Butter',
        'Salt',
        'Pepper',
        'Cilantro',
        'Parsley',
        'Rosemary',
        'Thyme',
        'Oregano',
        'Dill',
        'Paprika',
        'Chili Powder',
        'Cumin',
        'Cinnamon',
        'Nutmeg',
        'Ginger',
        'Soy Sauce',
        'Hoisin Sauce',
        'Sesame Oil',
        'Honey',
        'Maple Syrup',
        'Lemon',
        'Lime',
        'Orange',
        'Cucumber',
        'Zucchini',
        'Eggplant',
        'Mushrooms',
        'Broccoli',
        'Cauliflower',
        'Green Beans',
        'Peas',
        'Corn',
        'Potato',
        'Sweet Potato',
        'Rice',
        'Pasta',
        'Noodles',
        'Quinoa',
        'Lentils',
        'Chickpeas',
        'Black Beans',
        'Kidney Beans',
        'Coconut Milk',
        'Heavy Cream',
        'Milk',
        'Yogurt',
        'Greek Yogurt',
        'Sour Cream',
        'Mayonnaise',
        'Mustard',
        'Ketchup',
        'BBQ Sauce',
        'Sriracha',
        'Hot Sauce',
        'Vinegar',
        'Red Wine Vinegar',
        'Balsamic Vinegar',
        'White Wine Vinegar',
        'Apple Cider Vinegar',
        'Flour',
        'Sugar',
        'Brown Sugar',
        'Powdered Sugar',
        'Baking Powder',
        'Baking Soda',
        'Yeast',
        'Vanilla Extract',
        'Almond Extract',
        'Chocolate Chips',
        'Cocoa Powder',
        'Breadcrumbs',
        'Panko',
        'Eggs',
        'Tofu',
        'Shrimp',
        'Salmon',
        'Tuna',
        'Tilapia',
        'Scallops',
        'Clams',
        'Oysters',
        'Lobster',
        'Crab',
        'Pineapple',
        'Mango',
        'Strawberries',
        'Blueberries',
        'Raspberries',
        'Blackberries',
        'Apples',
        'Bananas',
        'Grapes',
        'Watermelon',
        'Cantaloupe',
        'Honeydew',
        'Peach',
        'Plum',
        'Pomegranate',
        'Almonds',
        'Walnuts',
        'Cashews',
        'Peanuts',
        'Pecans',
        'Sunflower Seeds',
        'Chia Seeds',
        'Flaxseeds',
        'Sesame Seeds'
    ];    

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        
        // Filter options based on input
        const filtered = ingredients.filter(ingredients =>
            ingredients.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
        setIsOptionsVisible(true);
    };

    const handleOptionClick = (ingredients) => {
        setInputValue(ingredients);
        setIsOptionsVisible(false);
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
                onBlur={() => setTimeout(() => setIsOptionsVisible(false), 200)} // Delay to allow click on option
                placeholder=""
            />
            {isOptionsVisible && filteredOptions.length > 0 && (
                <ul className="autocomplete-options">
                    {filteredOptions.map((ingredients, index) => (
                        <li
                            key={index}
                            className="autocomplete-option"
                            onClick={() => handleOptionClick(ingredients)}
                        >
                            {ingredients}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DietaryRestrictionAutocomplete;