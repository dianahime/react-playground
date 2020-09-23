import React from 'react'
import style from './ColorPicker.module.scss'
import Color from 'color'

const ColorPicker = ({ color, setColor }) => {
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
        <div className={style.module}>
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
        </div>
    )
}

export default ColorPicker