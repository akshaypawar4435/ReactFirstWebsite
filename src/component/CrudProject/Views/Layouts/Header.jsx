import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const styles = {

    }
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:'#ffff !important'}}>
                <div className="row">
                    <div className="col-10 mx-auto">



                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Demo Project</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" style={{flexGrow:0}} id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/service">Services</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;