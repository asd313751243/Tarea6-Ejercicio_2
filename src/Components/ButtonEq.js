import React from 'react';
import './ButtonEq.css';

const ButtonEq = (props) => (
    <div className="buttoneq-wrapper" onClick={props.handleEqual}>
        {props.children}
    </div>
)

export default ButtonEq;