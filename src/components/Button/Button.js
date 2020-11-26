import React from 'react'
import './button.scss'

const Button = ({value, number, setScreenText}) => {
    return (
        <div 
            className={number ? "button" : "button symbol"} value={value} 
            onClick={(e) => setScreenText(e.target)
        }>
            <p>{value}</p>
        </div>
    )
}

export default Button