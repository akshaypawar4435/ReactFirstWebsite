import React from "react";
import rock from  '../../Images/new1.jpg';
import CommonHomeAbout from "./CommonHomeAbout";
const Home = () => {
    return (
        <>
            <CommonHomeAbout 
                imgsrc={rock} 
                title="Grow your business with"
                description="We are the team of Demo developer making websites and applications"
                btnName="Get Started"
                visit="/service"
            />
        </>
    )
}

export default Home;