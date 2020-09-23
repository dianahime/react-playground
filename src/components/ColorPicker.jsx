import React, { useState } from 'react';
import style from './ColorPicker.module.scss'
import RgbColorPicker from './RgbColorPicker';
import HslColorPicker from './HslColorPicker';

const ColorPicker = ({ color, setColor }) => {
    const [isRgbOpen, setIsRgbOpen] = useState(false)
    const [isHslOpen, setIsHslOpen] = useState(false)

    return (
        < div className={style.module} >
            <button onClick={() => setIsRgbOpen(!isRgbOpen)}>RGB</button>
            {isRgbOpen &&
                <RgbColorPicker color={color} setColor={setColor} />
            }
            <button onClick={() => setIsHslOpen(!isHslOpen)}>HSL</button>
            {
                isHslOpen &&
                <HslColorPicker color={color} setColor={setColor} />
            }
        </div>
    )
}

export default ColorPicker