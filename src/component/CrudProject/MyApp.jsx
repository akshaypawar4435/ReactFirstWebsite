import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import '../../index.css';
import Header from "./Views/Layouts/Header.jsx";
import MyRoutes from "./Routes/MyRoutes.jsx";
import Footer from "./Views/Layouts/Footer.jsx";
const MyApp = () => {
    return (
        <>
            <Header/>
            <MyRoutes/>
            <Footer/>
            
        </>
    )
}

export default MyApp;