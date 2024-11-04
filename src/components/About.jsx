import React from 'react';
import './About.css';

function About({ className }) {
    return (
        <div className={className}>
            <h3>About</h3>
            <p>Recip.io was developed at HoyaHacks 2024 by a team of students from George Mason University, (Arman, Annekke, Sasha, and Bela), members of GMU Tech 4 Good (GMU T4G). Our mission was to create a solution that contributes to social good. Recip.io is a tool that users can use to mitigate food waste and learn new recipes.</p>
            <h3>Team</h3>
            <p>Our project was made possible through the collaboration of a dedicated group of backend and frontend developers, each bringing their unique skills to the table:</p>
            <ul>
                <li style={{ fontWeight: "bold" }}>Backend</li>
                <ol>
                    <li>Sasha Cherian</li>
                    <li>Annekke van Gelder</li>
                    <li>Arman Mahjoor</li>
                    <li>Bela Palankar</li>
                    <li>Josabeth</li>
                    <li>David</li>
                    <li>Ahnaf Talukder</li>
                </ol>
                <li style={{ fontWeight: "bold" }}>Frontend</li>
                <ol>
                    <li>Samnang Thorn</li>
                    <li>Ahnaf Talukder</li>
                    <li>Sriya Med</li>
                    <li>Arman Mahjoor</li>
                </ol>
            </ul>
        </div>
    );
}

export default About;