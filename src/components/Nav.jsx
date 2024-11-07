import React from 'react';
import './Nav.css';

function Nav({ onAboutClick }) {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="dropdown">
                    <a className="nav_item" href="#home">MENU</a>
                    <div className="dropdown-content">
                        <a href="#sub-link1">Taco</a>
                        <a href="#sub-link2">Pasta</a>
                        <a href="#sub-link3">Pizza</a>
                    </div>
                </li>
                <li>
                    <a href="">
                        <img className="logo_img" src="src/assets/recipio_full_logo.png" alt="Logo Image"/>
                    </a>
                </li>
                <li>
                    <a className="nav_item" href="#about" onClick={(e) => {
                        e.preventDefault();
                        onAboutClick();
                    }}>ABOUT</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
