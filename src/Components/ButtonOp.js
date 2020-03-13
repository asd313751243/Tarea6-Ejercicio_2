import React from 'react';
import './ButtonOp.css'

const ButtonOp = (props) => (
    <div className="buttonop-wrapper" id="operation" onClick = {() => props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default ButtonOp;