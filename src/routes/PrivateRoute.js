import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { isLogin } from '../Services/TokenService'

const PrivateRoute = ({component:Component,restricted,...rest})=>{
    return <Route
       {...rest}
       render={props=>(
           isLogin()
           ?
           <Component {...props}/>
           :
            <Redirect to='/'/>

       )}
    />
}

export default PrivateRoute