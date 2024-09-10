import React, { useContext } from "react";
import { firstName, lastName,middleName } from "./App";

const CompB = ()=>{
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    const mname = useContext(middleName);
    return (
        <>
            <h1>My full name is : {fname} {mname} {lname}.</h1>
        </>
    )
}

export default CompB;