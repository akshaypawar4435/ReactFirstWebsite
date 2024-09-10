import React from "react";
import rock from  '../../Images/new1.jpg';
import { NavLink } from "react-router-dom";
const CommonHomeAbout = (props) => {
    return (
        <>

<section id="header" className="d-flex align-items-center">
            <div className="container-fluid" style={{backgroundColor:'#ffff !important'}}>
                <div className="row ">
                    <div className="col-10 mx-auto">

                    <div className="row">

                        <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.title}<strong className="brand-name"> Demo</strong>  </h1>
                            <h2 className="my-3">
                                {props.description}
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-get-started">
                                    {props.btnName}
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2" style={{}}>
                            <img src={props.imgsrc} className="img-fluid animated" style={{borderRadius: '30px',}} alt="imges"/>
                        </div>

                    </div>

                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default CommonHomeAbout;
