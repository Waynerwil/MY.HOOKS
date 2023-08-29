import Reac, {useState, useEffect} from "react";

function RickAndMortyV1() {
    const [character, setCharacter] = useState (null);
    const [isloading, setIsLoading] = useState (true);
    useEffect (() => {
        const fetchResult = async () => {
            try {
                // aca donde vamos hacer la llamada al api
                const response = await fetch (`https://rickandmortyapi.com/api/character`)
                const data = await response.json();
                const randomIndex = Math.floor(Math.random() * data.results.length);
                setCharacter (data.results[randomIndex])
                setIsLoading (false)
            } catch (error) {
                console.error('Error fetching the data')
                setIsLoading(false);
                
            }
        }
        fetchResult();
    }, [])





    return (
        <div>
            <h1>Personaje de Rick and Morty</h1>
            { isloading ? ( 
                <p> Cargando un personaje ...</p>
            ): (
                <div>
                <h2> { character.name}</h2>
                <img src ={character.image} alt= {character.name}></img>
            </div>
            )
            }
        </div>
      );
}

export default RickAndMortyV1;