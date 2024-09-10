
import React, { useEffect, useState } from "react";
import axios from "axios";
const Pokemon = () => {
    const [num, setNum] = useState(1);
    
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {

        async function getPokemonData() {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(result.data.name);
            setMoves(result.data.moves.length);
            
        }
        getPokemonData();
    });

    return (
        <>
            <h1>You Choose <span style={{color:'red'}}>{num}</span> Value </h1>
            <h1>My Name is <span style={{color:'red'}}>{name}</span> </h1>
            <h1>I have Moves <span style={{color:'red'}}>{moves}</span> </h1>

            <select value={num} onChange={
                (event) => {
                    let value = event.target.value;
                    setNum(value);
                }
            }>
                <option value={1}>1</option>
                <option value={25}>25</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </>
    )
}

export default Pokemon;