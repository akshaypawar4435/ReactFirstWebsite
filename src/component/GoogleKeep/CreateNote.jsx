import React, { useState } from "react";
import './style.css';
const CreateNote = (props)=>{
    const [note,setNote] = useState({
            title : '',
            description : ''
    });

    const [expand, setExpand] = useState(false);

    const inputEvent = (event)=>{
       let {name,value} =  event.target

        setNote((preVal)=>{
            return {
                ...preVal,
                [name] : value
            }
        });

        

    }

    const addNote = () =>{
        props.passNote(note);
        setNote({
            title : '',
            description : ''
    });
    }

    const expandContent = () => {
            setExpand(true);
    }

    const condenseContent = ()=>{
            setExpand(false);
    }
    
    return (
        <>
            <div className="" style={{marginLeft:'40%'}} onDoubleClick={condenseContent}>

                <div className="card" style={{width:'18rem',marginTop:'10px',alignItems:'center'}}>
                <br></br>
                {/* <h4>Add Note</h4> */}
                    <div className="card-body">
                        {
                        expand ?
                            <h5 className="card-title"><input value={note.title} placeholder="title" name='title' onChange={inputEvent}/></h5>
                        :null
                        }
                            <textarea  placeholder="Write Note..." 
                                    name="description" 
                                    value={note.description} 
                                    style={{width:'100%'}} 
                                    onChange={inputEvent}
                                    onClick={expandContent}
                            >
                            </textarea>
                        {
                        expand ?
                            <button className="btn btn-primary" onClick={addNote}>+</button>
                        :null
                        }
                        
                        
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default CreateNote;