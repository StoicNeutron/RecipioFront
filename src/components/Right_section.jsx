import React, { useState } from 'react';
import Generate from './Generate';
import GeneratedContent from './GeneratedContent';
import './Right_section.css';

function Right_section() {
    const [isGenerated, setIsGenerated] = useState(false);

    const handleGenerateClick = () => {
        setIsGenerated(true); // Change state to show GeneratedContent
    };

    return (
        <div className="curved_edge_right">
            {isGenerated ? (
                <GeneratedContent />
            ) : (
                <Generate onClick={handleGenerateClick} />
            )}
        </div>
    );
}

export default Right_section;