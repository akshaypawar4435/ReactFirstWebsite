import React, { createContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CompA from "./CompA";

const firstName = createContext();
const middleName = createContext();
const lastName = createContext();
const App = ()=>{
    
    return (
        <>
            <firstName.Provider value={"Akshay"}>
                <middleName.Provider value={'Purushottam'}>
                    <lastName.Provider value={"Pawar"}>
                        <CompA/>
                    </lastName.Provider>
                </middleName.Provider>
            </firstName.Provider>
        </>
    )
}

export default App;
export {firstName,middleName, lastName} 