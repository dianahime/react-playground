import React from 'react';
import Color from 'color'

const RgbColorPicker = ({ color, setColor }) => {

    const [r, g, b] = Color(color).array()

    const handleRedChange = event => {
        setColor(Color({ r: event.target.value, g, b }).hex())
    }
    const handleGreenChange = event => {
        setColor(Color({ r, g: event.target.value, b }).hex())
    }
    const handleBlueChange = event => {
        setColor(Color({ r, g, b: event.target.value }).hex())
    }

    return (
        <>
            <label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    value={r}
                    onChange={handleRedChange}
                />
                Red: {r}
            </label>

            <label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    value={g}
                    onChange={handleGreenChange}
                />
                Green: {g}
            </label>

            <label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    value={b}
                    onChange={handleBlueChange}
                />
                Blue: {b}
            </label>
        </>
    )
}

export default RgbColorPicker