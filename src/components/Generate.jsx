import './Generate.css';

function Generate({ onClick }) {
    return (
        <button className="generate-button" onClick={onClick}>
            Generate
        </button>
    );
}

export default Generate;
