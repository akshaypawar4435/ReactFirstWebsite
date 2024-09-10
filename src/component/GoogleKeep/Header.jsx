import React from "react";
import './style.css';
import logo from './AP.jpg';
const Header = ()=>{
    return (
        <>
            <div class="header">
            <a href="#" style={{color:'white'}} class="logo"><img width={30} height={30} src={logo} alt="logo"/>&nbsp;&nbsp;Pawar Keep</a>
            {/* <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div> */}
            </div>

        </>
    )
}

export default Header;