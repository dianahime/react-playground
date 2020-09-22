import React from 'react';
import './RandomColor.scss'

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