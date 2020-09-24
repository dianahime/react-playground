import React from 'react'
import Color from 'color'

const HslColorPicker = ({ color, setColor }) => {
    const [h, s, l] = Color(color).hsl().round().array()

    const handleHueChange = event => {
        setColor(Color({ h: event.target.value, s, l }).hex())
    }
    const handleSaturationChange = event => {
        setColor(Color({ h, s: event.target.value, l }).hex())
    }
    const handleLightnessChange = event => {
        setColor(Color({ h, s, l: event.target.value }).hex())
    }

    return (
        <>
            <label>
                <input
                    type="range"
                    min="0"
                    max="359"
                    value={h}
                    onChange={handleHueChange}
                />
                Hue: {h}
            </label>

            <label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={s}
                    onChange={handleSaturationChange}
                />
                Saturation: {s}
            </label>

            <label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={l}
                    onChange={handleLightnessChange}
                />
                Lightness: {l}
            </label>
        </>
    )
}

export default HslColorPicker