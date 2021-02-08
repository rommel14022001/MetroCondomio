import React, { useContext, useLayoutEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { NavBar } from './Navbar';

export const Navegation = () => {


  const screenSize = () => {
    let sidebarOpen = ( window.innerWidth > 768  );
    return sidebarOpen
  }

  const [sidebar, setSidebar] = useState(screenSize());
  const [sizeStatus, setSizeStatus] = useState(window.innerWidth);

  const showSidebar = () => {
    return setSidebar (!sidebar);
  };

  useLayoutEffect(() => {
   
 function updateSizeStatus() {
      setSizeStatus(window.innerWidth);
    }

    window.addEventListener('resize', updateSizeStatus);
    
    updateSizeStatus();

    if(sizeStatus > 764 ){
      setSidebar(true);
    }else{
      setSidebar(false);
    }

    return () => window.removeEventListener('resize', updateSizeStatus);
    

  }, [sizeStatus])


  
  return (
    <>
      { /* Navbar */}
      <NavBar  showSidebar = { showSidebar }/>
      {/* Sidebar */}
      <div className="navegation__container">
        <nav className={ sidebar ? 'menu active' : 'menu ' }>
          <ul className="menu-items">

            { (!isAdmin) ? (            
              SidebarUserOptions.map( (item, index) => {
              return (
                <li key = { index } className = { item.class } >
                
                <NavLink to={ item.path } className={ item.class } >
                    
                    {item.icon}
                    <span>{item.title}</span>
                  
                  </NavLink>
                </li>
              )
              })) 
              :
              (sidebarAdminOptions.map( (item, index) => {
                return (
                <li key = { index } className = { item.class } >
                
                <NavLink to={ item.path } className={ item.class } >
                    
                    {item.icon}
                    <span>{item.title}</span>
                  
                  </NavLink>
                </li>
              )
              }))           
            }
              
              
              
              <li className="menu-option" onClick={ useUsers().Logout } >
                <NavLink to='/login'>
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Cerrar sesión</span>
                </NavLink>
              </li>

          </ul>
        </nav>
      </div>
    </>
  )
}