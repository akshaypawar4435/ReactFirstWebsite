import React, { useEffect, useState } from "react";

const State = () => {

    const [covidData, setCovidData] = useState([]);
    const getAllCovidData = async () => {
        const url = await fetch('https://dummyjson.com/users');
        let actualData = await url.json();
        setCovidData(actualData.users);
    }

    useEffect(() => {
        getAllCovidData();
    }, []);
    
    console.log('actual data');
    console.log(covidData.length);
    return (
        <>
            <h1 className="text-center">Covid 19 Data</h1>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        covidData.length ?
                            covidData.map((item, index) => {
                                return(
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstName} {item.middleName} {item.lastName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                                )
                            })
                            : null
                    }


                </tbody>
            </table>
        </>
    )
}

export default State;