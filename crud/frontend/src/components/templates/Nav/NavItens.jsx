import React from 'react'
import { Link } from 'react-router-dom'

const NavItens = props =>{
    return(
        <Link to={`/${props.link}`}>
            <i className={`fa fa-${props.classes}`}></i> {props.label}
        </Link>
    )
}

export default NavItens