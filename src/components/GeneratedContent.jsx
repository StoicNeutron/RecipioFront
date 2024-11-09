import React from 'react';

function GeneratedContent() {
    
    const generateRandomRecipe = () => {
        const ingredientsList = [
            "Flour", "Sugar", "Salt", "Eggs", "Butter", "Milk", "Baking Powder",
            "Vanilla Extract", "Chocolate Chips", "Olive Oil", "Garlic", "Chicken Breast",
            "Tomato", "Onion", "Bell Pepper", "Carrot", "Broccoli", "Cheese", "Rice", "Pasta"
        ];
        
        const randomTitle = [
            "Delicious Pancakes", "Hearty Omelette", "Cheesy Pasta Bake",
            "Garlic Chicken Stir-Fry", "Chocolate Chip Cookies", "Tomato Basil Soup"
        ];

        const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
        
        const recipeTitle = getRandomItem(randomTitle);
        const servings = Math.floor(Math.random() * 4) + 1;

        // Generate a random number of ingredients (between 3 and 6)
        const ingredientCount = Math.floor(Math.random() * 4) + 3;
        const ingredients = [];

        for (let i = 0; i < ingredientCount; i++) {
            const ingredient = getRandomItem(ingredientsList);
            const quantity = (Math.random() * 2 + 0.5).toFixed(2); // Random quantity between 0.5 and 2.5
            const unit = ["cups", "tbsp", "tsp", "grams", "ml"][Math.floor(Math.random() * 5)];

            ingredients.push({ name: ingredient, quantity, unit });
        }

        const instructions = [
            "Preheat the oven to 350°F.",
            "Mix all dry ingredients in a bowl.",
            "Add wet ingredients and stir until smooth.",
            "Pour mixture into a baking pan.",
            "Bake for 25-30 minutes or until golden brown.",
            "Let cool before serving."
        ];

        return { title: recipeTitle, servings, ingredients, instructions };
    };

    const { title, servings, ingredients, instructions } = generateRandomRecipe();

    return (
        <div>
            <h2>{title}</h2>
            <p>Servings: {servings}</p>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        {item.quantity} {item.unit} of {item.name}
                    </li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default GeneratedContent;
