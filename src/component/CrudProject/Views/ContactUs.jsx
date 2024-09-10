import React, { useState } from "react";

const ContactUs = () => {

    const [contactInput, setContactInput] = useState({
            name:"",
            email:"",
            password:"",
            phone:"",
            message:""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setContactInput((oldVals) => {
            return {
                ...oldVals,
                [name]:value
            }
        });
        
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(`Your name is ${contactInput.name}. Email : ${contactInput.email} Phone is : ${contactInput.phone}`);
        alert(`Your name is ${contactInput.name}. Email : ${contactInput.email} Phone is : ${contactInput.phone}`);
    }

    return (
        <>

            <div className="container-fluid" style={{ backgroundColor: '#ffff !important' }}>
                <div className="row my-3">
                    <div className="col-4">

                    </div>
                    <div className="col-4 ">

                        <div className="" style={{}}>
                        
                        <form onSubmit={formSubmit}>
                            <div className="form-group my-2">
                                <label for="" className="my-1">Name</label>
                                <input required value={contactInput.name} name="name" onChange={inputEvent} type="text" className="form-control" id="" placeholder="Enter Name"/>
                            </div>
                            
                            <div className="form-group my-2">
                                <label for="" className="my-1">Email</label>
                                <input required value={contactInput.email} name="email" onChange={inputEvent} type="email" className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Email"/>
                                    
                            </div>
                            
                            <div className="form-group my-2">
                                <label for="" className="my-1">Password</label>
                                <input required value={contactInput.password} name="password" onChange={inputEvent} type="password" className="form-control" id="" placeholder="Password"/>
                            </div>
                            
                            <div className="form-group my-2">
                                <label for="" className="my-1">Phone</label>
                                <input required value={contactInput.phone} name="phone" onChange={inputEvent} type="number" className="form-control" id="" placeholder="Phone"/>
                            </div>
                            
                            <div className="form-group my-2">
                                <label for="" className="my-1">Message</label>
                                <textarea value={contactInput.message} name="message" onChange={inputEvent} className="form-control"  placeholder="Enter some Message"></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                        </div>

                    </div>

                    <div className="col-4">

                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs;