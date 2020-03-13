import React from 'react'
import './ButtonCl.css'

const ButtonCl = (props) => (
    <div className = "buttoncl-wrapper" onClick={props.handleClear}>
        {props.children}
    </div>
)

export default ButtonCl;