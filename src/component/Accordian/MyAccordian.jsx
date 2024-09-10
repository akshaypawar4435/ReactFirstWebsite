import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
const MyAccordian = ({question, answer})=>{
    const [show,setShow] = useState(true);
    return (
        <>
               <div className="main_heading" onClick={()=>{setShow(!show)}}>
                <p><AddIcon/></p>
                <h3>{question}</h3>
               </div>
               {show && <p className="answer_para">{answer}</p> }
        </>
    );
}

export default MyAccordian;