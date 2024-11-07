import React from 'react';
import './Input.css';

function Input() {
    return (
        <div className="dropdown-container">
            <label className="dropdown-label">Dietary Restriction</label>
            <select className="input_dropdown">
                <option value=""></option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="halal">Halal</option>
            </select>
        </div>
    );
}

export default Input;