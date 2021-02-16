import React  from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
  
    
  } from "react-router-dom";

import { AdminLayout } from '../layout/AdminLayout';


export const AppRouter = () => {


    // localStorage.setItem("theme")
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                    <Redirect from="/" to="/admin/jobs" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
