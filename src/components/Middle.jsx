import React, { useState, useRef } from 'react';
import './Middle.css';

function Middle() {
    const [image, setImage] = useState('src/assets/upload_img.png');
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            //setImage(URL.createObjectURL(file)); // Set the selected image URL
            setImage('src/assets/uploaded.png');
        }
    };

    const handleClick = () => {
        console.log("Circle clicked");
        fileInputRef.current.click();
    };

    return (
        <div className="circle" onClick={handleClick} style={{ cursor: 'pointer', position: 'relative' }}>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageUpload}
            />
            <img
                src={image}
                alt="Upload"
                style={{
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 1
                }}
            />
        </div>
    );
}

export default Middle;
