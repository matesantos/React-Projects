import React, { useState, useEffect } from 'react'
import Main from '../templates/Main/Main'
import api from '../../services/axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuário'
}

const initialState = {
    user: { nome: '', email: ''},
    list: []
}

const UserCrud = props =>{

    const [ state, setState ] = useState({ ...initialState })

    function clear(){
        console.log('clear')
        setState({...state, user: {...initialState.user} })
    }

    useEffect(()=>{
        try {
            api.get('users').then(resp=>{
                setState({...state, list:resp.data})
            })
        } catch (error) {
            console.log(error)
        }
        // eslint-disable-next-line
    },[])

    function save(){
        const user =  state.user
        const method = user.id ? 'put': 'post'
        const url = user.id ? `users/${user.id}`:'users'
        api[method](url, user).then(resp=>{
            const list = getUpdatedList(resp.data)
            console.log('list',list)
            setState( {...state,  user: {...initialState.user} , list:list })
        }).catch(err=>{
            alert('Não foi possível realizar essa operação.',err)
        })
    }

    function getUpdatedList(user, add = true){
        const list = state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    // só para nível acadêmico, pq isso pode ser feito diretamente no onChange do campo input
    function updateField(e){
        const user = { ...state.user }
        user[e.target.name] = e.target.value
        setState({ ...state,  user: {...user} })
    }

    function load(user){
        setState({...state, user:user})
    }

    function remove(user){
        try {
            api.delete(`users/${user.id}`).then(resp=>{
                const list = getUpdatedList(user, false)
                setState({...state, list:list})
            })
        } catch (error) {
            console.error('Error:', error)
        }
    }

    function renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }

    function renderRows(){
        return state.list.map(user=>{
            return (
                <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-warning" onClick={ () => load(user) }>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger ml-2" onClick={ () => remove(user) }>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                        
                </tr>
            )
        })
    }

    function renderForm(){

        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" 
                                   name='name' 
                                   className="form-control"
                                   value={state.user.name || ''}
                                   onChange={ e => updateField(e) }
                                   placeholder='Digite o nome...'/>                 
                        </div>
                    </div>
               </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input  type="email" 
                                    name='email' 
                                    className="form-control"
                                    value={state.user.email || ''}
                                    onChange={ e => updateField(e) }
                                    placeholder='Digite o email...'/>
                        </div>
                   </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={ () => save() }>Salvar</button>
                        <button className="btn btn-secondary ml-2" 
                                onClick={ () => clear() }>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <Main {...headerProps}>
            {renderForm()}
            {renderTable()}
        </Main>
    )
}

export default UserCrud