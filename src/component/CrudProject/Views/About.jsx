import React from "react";
import CommonHomeAbout from "./CommonHomeAbout";
import big_rock from  '../../Images/big_rock.jpg';
const About = () => {
    return (
        <>
            <CommonHomeAbout 
                imgsrc={big_rock} 
                title="Welcome to About page"
                description="We are the team of Demo developer making websites and applications"
                btnName="Contact Now"
                visit="/contact"
            />
        </>
    )
}

export default About;