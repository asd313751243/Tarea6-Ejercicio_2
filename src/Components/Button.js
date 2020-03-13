import React from 'react';
import './Button.css';

const Button = (props) => (
    <div className="button-wrapper" onClick = {()=>props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Button;