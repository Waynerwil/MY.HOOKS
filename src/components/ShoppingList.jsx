import React, { useState } from "react";

function ShoppingList() {
  // todos los items
  //newItem
  // Un contador de tareas terminadas
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [tasksDoneCount, setTasksDoneCount] = useState(0);

  const handleAddItem = () => {
    //Agregar items
    // { text:newItem, completed:false}
    // manzanas  -> [{text:manzanas, completed:false}]
    //validar espacios en blanco
    if (newItem.trim() !== "") {
      //agregar el articulo
      //newItem -> manzanas
      setItems([...items, { text: newItem, completed: false }]); // items [manzanas]
      setNewItem("");
    }
  };
  const handleCompleted = (index) => {
    //Completar items
    //Deje la lista como la tiene , pero en la posicion index cambie el valor completed
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed; // true -> false   false-> true
    setItems(updatedItems);
    //updatedItems[index].completed? setTasksDoneCount(setNewItem + 1): setTasksDoneCount(setNewItem - 1);
    const completedItems = updatedItems.filter(item => item.completed);
    setTasksDoneCount(completedItems.length);


  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleCompleted(index)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <p> Articulos Completados : {tasksDoneCount}</p>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Agregar artículio"
      />
      <button onClick={handleAddItem}> Agregar</button>
    </div>
  );
}

export default ShoppingList;
