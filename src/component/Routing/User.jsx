import React from "react";
import { useParams, useLocation } from "react-router-dom";
const User = ()=>{
    const {fname,lname} = useParams();
    const location = useLocation();
    console.log('location');
    console.log(location.pathname);
    return (
           <>
                <h1>User Name is {fname} {lname}</h1>
                <p>My current Location is {location.pathname}</p>

                {
                    location.pathname==="/user/akshay/pawar"?
                        (
                            <button onClick={()=>alert(`Hello ${fname} ${lname}`)}>Click me</button>
                        )
                    :null
                }
                
           </>
    )
}

export default User;