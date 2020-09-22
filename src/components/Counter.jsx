import React, { useState } from 'react';
import './Counter.scss'

const Counter = ({ color }) => {
    const [count, setCount] = useState(0)

    return (
        <div className="counter_container">
            <p className="count_number">{count}</p>
            <div className="button_container">
                <button
                    onClick={() => setCount(count + 1)}
                    className="counter_button"
                    style={{ backgroundColor: color }}
                >
                    +
        </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="counter_button"
                    style={{ backgroundColor: color }}
                >
                    -
        </button>
                <button
                    onClick={() => setCount(0)}
                    className="counter_button"
                    style={{ backgroundColor: color }}
                >
                    reset
        </button>

            </div>

        </div>
    )
}

export default Counter