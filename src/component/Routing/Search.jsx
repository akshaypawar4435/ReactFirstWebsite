import React, { useState } from "react";

const Search = () => {
    const [text, setText] = useState();

    const inputEvent = (event) => {
        setText("https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20100w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20200w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20300w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20400w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20500w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20600w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20700w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20800w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%20900w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%201000w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%201200w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%201400w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%201600w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%201800w,%20https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D%202000w");
    }
    return (
        <>
            <div style={{textAlign:'center'}}>
                <input type="text" name="search" onChange={inputEvent} placeholder="Search..."/>
                <br/>
                <br/>
                {
                    text!="" ?
                        <SearchResult img={text}/>
                    :null
                }
                

            </div>
            
            
        </>
    )
}

const SearchResult = (props) => {
    
    return (
        <>
            <img src={props.img}/>
        </> 
    )
}


export default Search;