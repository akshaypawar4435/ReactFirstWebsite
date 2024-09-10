import React from "react";
import { firstName,lastName, middleName } from "./App";

const CompC = ()=>{
    return (
        <>
            <firstName.Consumer>
                {(fname)=>{
                    return (
                        <middleName.Consumer>
                            {(mname)=>{
                                return(
                                    <lastName.Consumer>
                                        {(lname)=>{
                                            return <h1>Hello {fname}, Your Full name is {fname} {mname} {lname}. right? </h1>;
                                        }}
                                    </lastName.Consumer>
                                )
                            }}
                        </middleName.Consumer>
                    )
                }}
            </firstName.Consumer>
        </>
    )
}
export default CompC;