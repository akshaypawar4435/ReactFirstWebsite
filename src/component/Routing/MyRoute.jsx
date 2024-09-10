import React from "react";
import { Route, Routes,Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import Search from './Search';
import Error from "./Error";
const MyRoute = () => {
   
    return (
        <>
            <Routes>
                <Route path="/" Component={() => <Home name="akshay" />} />
                <Route path="/about" render={() => <About name="Hello" />} />
                {/* <Route path="/search" Component={()=> <Search/>}/> */}
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/user/:fname/:lname" element={<User/>} /> */}
                <Route path="*" element={<Error/>} />
                
to: object

            </Routes>
        </>
    )
}

export default MyRoute;