import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
export const SideBar = ({routes}) => {
    return (
        <div className="sidebar">
        <ul className="sidebar__nav">
    
        {
            routes.map((prop, key) => {
               
                if(!prop.redirect){

                    return (
                     <li 
                         key={key}
                         className="sidebar__nav-item">
                         <NavLink 
                             to={prop.layout + prop.path}
                             className="sidebar__nav-link" 
                             >
                             <div>
                                 <FontAwesomeIcon icon={prop.icon} />
                             </div>
                             <span>
                                 {prop.name}
                             </span>
                         </NavLink>
                     </li>
     
                    )
                } 
                
                return null;
                
            })
        }
            
           
        </ul>
    </div>
    )
}




SideBar.propTypes = {
    routes:PropTypes.array.isRequired
};

