import React from "react";

import { Link, NavLink } from "react-router-dom";



const Menu = ()=>{
    
    return (
           <>
                <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                <br/>
                <NavLink to={'/about'}>About US</NavLink>
                <br/>
                <NavLink to={'/contact'}>Contact US</NavLink>  
                <br/>    
                {/* <NavLink to={'/user'}>User</NavLink>     */}
                <br/>
                {/* <NavLink to={'/search'}>Search</NavLink> */}

            
           </>
    )
}
export default Menu;