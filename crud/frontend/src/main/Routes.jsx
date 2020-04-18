import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={UserCrud}/>
            <Redirect from='*' to='/' />
        </Switch>
    )
}