import React, {useState, useEffect} from 'react';
import { fetchFavorites, addFavorite, updateFavorite, deleteFavorite } from './poke-api';

function FavoritePokemon() {
 const [favorites, setFavorites] = useState ([]); // Estado para almacenar la lista de favoritos
 const [newFavorite , setNewFavorite] = useState (''); // Estado para el nuevo favorito

 //Obtener los favoritos
  useEffect(()=>{
    // funcion asincrona que llama al api
    async function getFavorites() {
        const data = await fetchFavorites (); //Obtengo los favoritos de la api
        setFavorites (data); //Actualizamos el estado de los favoritos
    }
    getFavorites();
  },[])

 //Insertar el favorito : Agregando el valor que tiene newFavorite
 const handleAddFavorite = async () =>{
     if (newFavorite.trim() !== ''){
        const addedFavorite = await addFavorite({name : newFavorite});
        if (addedFavorite){
            //actualizo la lista
            setFavorites([...favorites, addedFavorite])
            //limpio el campo de texto
            setNewFavorite('');
        }

     }
 }

 //Actualizar un favorito :Recibir un id un nuevo valor
 const handleUpdateFavorite = async (id, newName) => {

  if (newName.trim() !== ''){
      //llamar al api
      const updatedFavorite = await updateFavorite(id, {name: newName});
      // actualizar el ui
      if (updatedFavorite){
        const newFavorites = favorites.map(fav => fav.id === id ? updatedFavorite : fav); // una nueva lista con el favorito actualizado
        setFavorites(newFavorites);
      }
  }
 }

 //Borrar un favorito :Recibir un id a borrar
 const handleDeleteFavorite = async (id) => {
    // LLamar al api para que lo borre
    await deleteFavorite(id);
    // Actualizar la interfaz despues de que borramos el pokemon
    //[ a , b, c, d] -> [b,c,d]
    const newFavorites = favorites.filter(fav => fav.id !== id);// filtramos para descartar el que se elimino
    setFavorites(newFavorites); //actualizar el estado
 }

    return (<div>
        <h2>Mis Pokémon Favoritos</h2>
        <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <input
              type="text"
              value={favorite.name}
              onChange={(e) => handleUpdateFavorite(favorite.id, e.target.value)}
            />
            <button onClick={() => handleDeleteFavorite(favorite.id)}>Eliminar</button>
            <button onClick={()=> handleUpdateFavorite(favorite.id, favorite.name )}>Actualizar</button>
          </li>
        ))}

        </ul>
        <input
        type = "text"
        placeholder='Nuevo Pokémon Favorito'
        value = {newFavorite}
        onChange={(e) => setNewFavorite (e.target.value)}
        />
        <button onClick={handleAddFavorite}> Agregar Favorito</button>

    </div>  );
}

export default FavoritePokemon;