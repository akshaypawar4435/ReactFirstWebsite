import React, { useState } from "react";
import CreateNote from './CreateNote';
import Note from './Note';

import Header from './Header';
import Footer from './Footer';
const GoogleKeep = () => {

    const [noteArray, setNoteArray] = useState([]);

    const newNote = (event) => {
        setNoteArray((preVal) => {
            return [
                ...preVal,
                event
            ];
        });
    }

    const deleteSingleNote = (id) => {
        setNoteArray((oldData)=>
            oldData.filter((currData,indx)=>{
                return id!=indx;
            })
        );
    }

    console.log('array');
    console.log(noteArray);
    return (
        <>
            <Header />
            <CreateNote passNote={newNote} />
            <div class="row" style={{ marginTop: 15 }}>

                {
                    noteArray.length ?
                        noteArray.map((item, index) => {
                            return <Note key={index}
                                title={item.title}
                                description={item.description}
                                id={index} 
                                deleteNote={deleteSingleNote}   
                                />;
                        })
                        : null
                }

            </div>




            <Footer />
        </>
    )
}

export default GoogleKeep;