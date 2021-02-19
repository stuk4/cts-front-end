import React  from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
  
    
  } from "react-router-dom";

import { AdminLayout } from '../layout/AdminLayout';
import { SearchLayout } from '../layout/SearchLayout';


export const AppRouter = () => {


 
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                    <Route  path="/search_jobs" render={(props) => <SearchLayout {...props} /> }  />
                    <Redirect from="/" to="/admin/jobs" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
