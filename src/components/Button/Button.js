import React from 'react'
import './button.scss'

const Button = ({value, number}) => {
    return (
        <div className={number ? "button" : "button symbol"} value={value}>
            <p>{value}</p>
        </div>
    )
}

export default Button
