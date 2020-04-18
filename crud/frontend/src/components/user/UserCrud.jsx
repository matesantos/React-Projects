import React from 'react'
import Main from '../templates/Main/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuário'
}

const UserCrud = props =>{
    return(
        <Main {...headerProps}>
            Cadastro de Usuário
        </Main>
    )
}

export default UserCrud