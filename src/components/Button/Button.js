import React from 'react'
import './button.scss'

const Button = ({value}) => {
    return (
        <div className="button">
            <p>{value}</p>
        </div>
    )
}

export default Button
