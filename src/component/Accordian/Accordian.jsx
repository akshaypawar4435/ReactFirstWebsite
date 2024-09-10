import React,{useState} from "react";
import ApiData from  './api';
import './Accordian.css';
import MyAccordian from './MyAccordian';
const Accordian = ()=>{
    const [questionList, setQuestionList] = useState(ApiData);
    return (
        <>
            <section className="main_div">
                <h1>React Questions List</h1>
                
                {
                    questionList.map((arrEle,index)=>{
                        return <MyAccordian key={arrEle.id} {...arrEle}/>;
                    })
                }


            </section>
        </>
 
 );
}

export default Accordian;