import React from 'react'
import './Nav.css'
import NavItens from './NavItens'

const Nav = props =>{
    return(
        <aside className="menu-area">
            <nav className='menu'>
               <NavItens link='' classes='home' label='Início'/>
               <NavItens link='users' classes='users' label='Usuários'/>
            </nav>
        </aside>
    )
}

export default Nav