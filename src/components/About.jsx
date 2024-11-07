import React from 'react';
import './About.css';

function About({ className }) {
    return (
        <div className={className}>
            <h3>About</h3>
            <p>Recip.IO (also known as Recipio) was created during HoyaHacks 2024 at Georgetown University by a passionate team from George Mason University: Arman, Annekke, Sasha, and Bela. Recipio was designed with one mission in mind: to help reduce food waste. We know how frustrating it can be when you have random ingredients at home, and you're not sure what to do with them. That’s where Recipio comes in!</p>
            <h3>How it works</h3>
            <p>Just enter the ingredients you have on hand or upload the images of the ingredients, along with any allergies or dietary restrictions. Recipio will generate a list of recipes tailored to your needs, making it easy to whip up a delicious meal with what you've got. No more wasted groceries!</p>
            <h3>Team</h3>
            <p>Our project was made possible through the collaboration of a dedicated group of backend and frontend developers, each bringing their unique skills to the table:</p>
            <ul>
                <li style={{ fontWeight: "bold" }}>Backend</li>
                <ol>
                    <li>Bela Palankar (Project Manager)</li>
                    <li>Sasha Cherian</li>
                    <li>Josabeth Hailu</li>
                    <li>Annekke van Gelder</li>
                    <li>Arman Mahjoor</li>
                    <li>David Zhou</li>
                    <li>Ahnaf Talukder</li>
                </ol>
                <li style={{ fontWeight: "bold" }}>Frontend</li>
                <ol>
                    <li>Samnang Thorn</li>
                    <li>Sriya Med</li>
                    <li>Ahnaf Talukder</li>
                    <li>Arman Mahjoor</li>
                </ol>
            </ul>
            <h3>Source Codes:
                <ul>
                    <li>Frontend: <a href="https://github.com/StoicNeutron/RecipioFront/tree/main">https://github.com/StoicNeutron/RecipioFront/tree/main</a></li>
                    <li>Backend: <a href="https://github.com/bpalanka/Recipio">https://github.com/bpalanka/Recipio</a></li>
                </ul>
            </h3>
        </div>
    );
}

export default About;