import React, { useRef } from 'react'
import { faBars, faBell, faGift, faMoon, faSearch, faSignOutAlt, faSun, faTasks, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import apiuxLogoNegro from '../../assets/img/logo_Apiux.png';
import apiuxLogoBlanco from '../../assets/img/logo-Apiux-blanco.png';
import avatarImg from '../../assets/img/avatar.jpeg';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import { useDispatch, useSelector } from 'react-redux';
import {  changeTheme, showSidebar } from '../../actions/ui';
export const NavBar = () => {
    const dispatch = useDispatch();
    const { visibilitySideBar } = useSelector( state => state.ui );
    
    
    const avt = avatarImg;
    
    
    const dropdownRef = useRef(null);
    const [isVisibleNotify,setVisibilityNotify] = useDetectOutsideClick(dropdownRef,false);
    const [isVisibleAvatar,setVisibilityAvatar] = useDetectOutsideClick(dropdownRef,false);
    const handelShowSideBar = (e) =>{

        dispatch(showSidebar(visibilitySideBar))
    }

    const handleShowMenuNotifications = (e) => {
        e.preventDefault()
        setVisibilityAvatar(false);
        setVisibilityNotify(!isVisibleNotify);
    }
    const handleShowMenuAvatar = (e) => {
        e.preventDefault()
        setVisibilityNotify(false);
        setVisibilityAvatar(!isVisibleAvatar);
    }
    
    const themeLocal  = localStorage.getItem("theme")

    const handleChangeTheme = (e)=>{
        e.preventDefault();
      
        if(themeLocal === "light"){
            dispatch(changeTheme("dark"))
            localStorage.setItem("theme","dark")
            
        }else{
            dispatch(changeTheme("light"))
            localStorage.setItem("theme","light")
        }
    }
    const logo  = ( themeLocal==="light" ? apiuxLogoNegro :apiuxLogoBlanco );

    return (
        // Navbar
        <div className="navbar">
            <ul className="navbar__nav">
                <li className="navbar__nav-item" >
                    <span onClick={handelShowSideBar} className="navbar__nav-link">
                            <FontAwesomeIcon  icon={faBars} />           
                    </span>
                </li>
                <li className="navbar__nav-item" >
                    <Link  to="#">
                        <img src={logo} className="navbar__logo" alt="Logo Apiux"/>
                    </Link>
                </li>
            </ul>
            <form className="navbar__search">
                <input type="" />
                <FontAwesomeIcon  icon={faSearch}  />
            </form>
            {/* Navbar Right */}
            <ul className="navbar__nav navbar__nav-right">
                <div className="navbar__nav-item">
                    <div to="#" className="navbar__nav-link">
                        
                        <FontAwesomeIcon  
                            onClick={handleChangeTheme} 
                            icon={
                                ( themeLocal==="dark"?
                                    faSun
                                    :
                                    faMoon
                                )
                            }
                            />
                    </div>
                </div>
                {/* DropDown */}
                <li className="navbar__nav-item navbar__dropdown" >
                
                    <Link to="/" className="navbar__nav-link">
                            <FontAwesomeIcon onClick={handleShowMenuNotifications} className="navbar__dropdown-toggle"  icon={faBell} />
                            <span className="navbar__badge">15</span>
                    </Link>
                    <ul  ref={dropdownRef} className={`navbar__dropdown-menu navbar__notification-menu ${ isVisibleNotify  ? 'navbar__dropdown-expand':''}` }>
                        <div className="navbar__dropdown-menu-header">
                            <span>
                                Notificaicones
                            </span>
                        </div>
                        <div className="navbar__dropdown-menu-content base__overlay-scrollbar navbar__scrollbar-hover">
                            <li className="navbar__dropdown-menu-item">
                                <Link className="navbar__dropdown-menu-link" to="#">
                                    <div>
                                        <FontAwesomeIcon icon={faGift} />
                                    </div>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing eleit
                                        <br/>
                                        <span>
                                            10/02/2021
                                        </span>
                                    </span>
                             
                                </Link>
                            </li>
                            <li className="navbar__dropdown-menu-item">
                                <Link className="navbar__dropdown-menu-link" to="#">
                                    <div>
                                        <FontAwesomeIcon icon={faTasks} />
                                    </div>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing eleit
                                        <br/>
                                        <span>
                                            10/02/2021
                                        </span>
                                    </span>
                             
                                </Link>
                            </li>
                            
                                   
                        </div>
                        <div className="navbar__dropdown-menu-footer">
                            <span>
                                Todas las notificaciones
                            </span>
                        </div>
                    </ul>

                </li>
                {/* EndDropDown */}
                {/* Avatar */}
                <li className="navbar__nav-item navbar__avt-wrapper" >
                    <div className="navbar__avatar navbar__dropdown">

                        <img src={avt} className="navbar__dropdown-toggle" disabled={true} onClick={handleShowMenuAvatar}  alt="imagen de perfil"/>
                        <ul ref={dropdownRef} className={`navbar__dropdown-menu ${isVisibleAvatar  ? 'navbar__dropdown-expand':'' }` }>
                            <li className="navbar__dropdown-menu-item">
                                    <Link className="navbar__dropdown-menu-link" to="#">
                                        <div>
                                            <FontAwesomeIcon icon={faUserTie} />
                                        </div>
                                        <span> Perfil</span>
                                    </Link>
                            </li>
                            <li className="navbar__dropdown-menu-item">
                                    <Link className="navbar__dropdown-menu-link" to="#">
                                        <div>
                                            <FontAwesomeIcon icon={faSignOutAlt} />
                                        </div>
                                        <span> Salir</span>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                
                
                {/* End Avatar */}
            </ul>
            {/* End Navbar Right */}

  
        </div>
        // End navbar
    )
}
