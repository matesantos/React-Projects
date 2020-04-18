import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import img from '../../../assets/imgs/vegeta.jpg'

const Logo = props =>{
    return(
        <aside className='logo'>
            <Link to="/" className="logo">
                <img src={img} alt="logo" className='img-thumbnail'/>
            </Link>
        </aside>
    )
}

export default Logo


