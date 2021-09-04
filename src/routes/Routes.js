import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes =()=>{
   return <Switch>
        <PublicRoute path='/' component={Home} exact/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
    </Switch>
}

export default Routes