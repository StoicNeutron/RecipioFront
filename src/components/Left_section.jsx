import React, { useState } from 'react';
import './Left_section.css';
import Input from './Input';
import Input2 from './Input2';
import Basket from './Basket';

function Left_section() {
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleSelectIngredient = (ingredient) => {
        setSelectedIngredients((prevIngredients) => {
            if (!prevIngredients.includes(ingredient)) {
                return [...prevIngredients, ingredient];
            }
            return prevIngredients;
        });
    };

    return (
        <div class="curved_edge_left">
            <Input />
            <Input2 onSelectIngredient={handleSelectIngredient} />
            <Basket selectedIngredients={selectedIngredients} />
        </div>
    );
}

export default Left_section;