import axios from "axios"
import { useState, useEffect } from "react"

export default function Pokemon() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => {
                console.log(res.data.results)
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    
    return (
        <>
            <h1 className="text-center mt-5">Pokemon Api</h1>
            <div className="form">
            {characters.map((character, idx) => (
                <div className="text-center" key={idx}>
                    <p>{character.name}</p>
                </div>
            ))}
            </div>
            
        </>
    )
}
