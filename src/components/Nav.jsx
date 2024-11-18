import React, { useState } from 'react';
import './Nav.css';

function Nav() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="dropdown">
                    <a class="nav_item" href="#home">MENU</a>
                    <div className="dropdown-content">
                        <a href="#sub-link1">Taco</a>
                        <a href="#sub-link2">Pasta</a>
                        <a href="#sub-link3">Pizza</a>
                        <a href="#sub-link4">Pancakes</a>
                    </div>
                </li>
                <li>
                    <a href="">
                        <img class="logo_img" src="src/assets/logo_recipio.png" alt="Logo Image"/>
                    </a>
                </li>
                <li>
                    <a class="nav_item" href="#about">ABOUT</a>
                </li>
            </ul >
        </nav >
    );
}

export default Nav; 