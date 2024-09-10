import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Views/Home.jsx";
import Service from "../Views/Service";
import About from "../Views/About";
import ContactUs from "../Views/ContactUs.jsx";
const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" Component={()=><Home/>}/>
                <Route path="/service" Component={()=><Service/>}/>
                <Route path="/about" Component={()=><About/>}/>
                <Route path="/contact" Component={()=><ContactUs/>}/>
            </Routes>
        </>
    )
}

export default MyRoutes;