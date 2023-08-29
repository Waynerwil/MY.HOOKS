import Reac, { useState, useEffect } from "react";
import { fetchRandonCharacter } from "./api";

function RickAndMortyV2() {
  const [character, setCharacter] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchResult = async () => {
      try {
        // llamar aqui al api
        const randomCharacter = await fetchRandonCharacter();
        setCharacter(randomCharacter);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchResult();
  }, []);

  return (
    <div>
      <h1>Personaje de Rick and Morty</h1>
      {isloading ? (
        <p> Cargando un personaje ...</p>
      ) : (
        <div>
          <h2> {character.name}</h2>
          <img src={character.image} alt={character.name}></img>
        </div>
      )}
    </div>
  );
}

export default RickAndMortyV2;
