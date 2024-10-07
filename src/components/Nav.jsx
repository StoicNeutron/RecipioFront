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
                {/* Home with Dropdown */}
                <li className="dropdown">
                    <a href="#home">MENU</a>
                    <div className="dropdown-content">
                        <a href="#sub-link1">Taco</a>
                        <a href="#sub-link2">Pasta</a>
                        <a href="#sub-link3">Pizza</a>
                    </div>
                </li>
                <li>
                    <a href="">
                        <img src="src/assets/logo.svg" alt="Logo Image"/>
                        <span>Recipio</span>
                    </a>
                </li>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
            </ul >

            {/* Pop-up message for About */}
            {
                isPopupVisible && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close-popup" onClick={togglePopup}>&times;</span>
                            <h2>About Us</h2>
                            <p>This is a pop-up message when clicking the About link!</p>
                        </div>
                    </div>
                )
            }
        </nav >
    );
}

export default Nav;