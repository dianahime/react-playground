import React from 'react';

const RandomColor = ({ color, setColor, randomColor }) => {

    return (
        <button
            className="button"
            onClick={() => setColor(randomColor())}
            style={{ backgroundColor: color }}
        >
            {color}
        </button>
    )
}

export default RandomColor