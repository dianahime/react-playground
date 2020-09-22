import React, { useState } from 'react';
import './CharacterCount.css'

const CharacterCount = ({ color }) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <>
            <input
                type="text"
                className="input"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                style={{ backgroundColor: color }}
            />
            <p>Character count: {inputValue.length}</p>
        </>
    )
}

export default CharacterCount