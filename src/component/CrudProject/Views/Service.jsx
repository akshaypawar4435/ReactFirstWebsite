
import React, { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {

    const [productList, setProductList] = useState([]);

    const getAllProductData = async () => {
        const fetchData = await fetch('https://dummyjson.com/products');
        let result = await fetchData.json();
        setProductList(result.products);
    }

    useEffect(() => {
        getAllProductData();
    }, []);

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#ffff !important' }}>
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row my-4">


                            {
                                productList.length ?
                                    productList.map((productItem, productIndex) => {
                                        console.log('productItem');
                                        console.log(productItem);
                                        return (
                                            <div className="col-md-4 col-10 my-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={productItem.images[0]} style={{ height: 300 }} alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{productItem.title}</h5>
                                                        <p className="card-text">{productItem.description}</p>
                                                        <a href="#" className="btn btn-primary">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    : null
                            }

                           
















                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;