import React, { useState } from "react";
import './style.css';
const Note = (props)=>{

    const delFunction = (e) => {
        props.deleteNote(props.id);
    }
    return (
        <>
            <div class="col-sm-3">
        <div class="card" style={{width:'18rem',margin:5}}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <button className="btn btn-primary" onClick={()=>delFunction(props.index)}>Del</button>
            </div>
</div>
</div>
        </> 
    )
}

export default Note;