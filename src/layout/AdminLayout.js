import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from '../components/admin/NavBar';
import { SideBar } from '../components/admin/SideBar';
import { JobModal } from '../components/jobs/JobModal';
import routes from '../routers/routes'
export const AdminLayout = () => {
    const {active:job} = useSelector( state => state.jobs );
    const {visibilitySideBar} = useSelector( state => state.ui );
    const themeLocal = localStorage.getItem("theme") || "light"

    const getRoutesView = (routes) => {
        
      
        return routes.map((
            {component:Component,layout,path}
            ,key
            )=>{
            if(layout === "/admin"){
                return (
                    <Route 
                        path={layout + path}
                        render={(props) => <Component {...props} />}
                        key={key}
                    />
                )
            }else{
                return null;
            }
        })
    }




    return (
        <div className={`base__overlay-scrollbar ${themeLocal} ${ visibilitySideBar ? 'sidebar__expand':'' } `}>

        <NavBar />
        <SideBar routes={routes} />
        {/* Wrapper */}
        
        
        <div id="wrap" className="wrapper">
            <div className="row">

              <Switch>
                  {getRoutesView(routes)}
              </Switch>
          
                
            </div>
        </div>
        {job && <JobModal job={job} />}
        {/* End Wrapper */}


        {/* End Main Contnet */}
        </div>
    )
}
