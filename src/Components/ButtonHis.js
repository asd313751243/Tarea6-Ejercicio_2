import React from 'react'
import './ButtonHis.css'
//import { Link } from 'react-router-dom'

const ButtonHis = (props) =>(
    <a href="/history">
        <div className="buttonhis-wrapper">{props.children}</div>
    </a>
)

export default ButtonHis;