import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/templates/Logo/Logo'
import Nav from '../components/templates/Nav/Nav'
import Footer from '../components/templates/Footer/Footer'

const App = props =>{

    return(
        <BrowserRouter>
            <div className='app'>
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>   
    )
}

export default App
