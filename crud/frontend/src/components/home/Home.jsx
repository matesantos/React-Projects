import React from 'react'
import Main from '../templates/Main/Main'

const Home = props => {
    return(
        <Main icon='home' title='Início' subtitle='Projeto de CRUD do REACT'>
            <div className="display-4">
                Bem Vindo
            </div>
            <hr/>
            <p className="mb-0">Sistema de cadastro usando React</p>
        </Main>
    )
}

export default Home