import React, { useState, useEffect } from "react";
import './App.css';
import { v4 as uuid } from "uuid";
import Header from './Header';
import AddTodo from './AddTodo';
import ToDoList from './ToDoList';

function App() {
  // Set an unique identifier for data stored in localStorage
  const LOCAL_STORAGE_KEY = "cards";
  
  // Initialize the 'cards' state using the 'localStorage' or an empty array if it's not available
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // Add a new todo task to the 'cards' state
  const addToDoHandler = (card) => {
    setCards([{ id: uuid(), ...card }, ...cards]);
  }

  // Update the 'localStorage' whenever the 'cards' state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  // Remove a todo task from the 'cards' state based on its 'id'
  const removeToDoHandler = (id) => {
    const newToDoList = cards.filter((card) => {
      return card.id !== id;
    });
    setCards(newToDoList);
  }

  // Update the 'completed' property of a todo task to mark it as completed
  const checkToDoHandler = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          completed: true,
        };
      }
      return card;
    });
    setCards(updatedCards);
  }

  /** Update the title, description with the title and description of the value, and 
   undo the completed status of a todo task based on its 'id' */ 
  const updateToDoHandler = (value, id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          title: value.title,
          des: value.des,
          completed: false,
        };
      }
      return card;
    });
    setCards(updatedCards);
  }

  return (
    <div className="App">
      <Header />
      <AddTodo addToDoHandler={addToDoHandler} />
      <ToDoList
        cards={cards}
        updateDeleted={removeToDoHandler}
        updateCompleted={checkToDoHandler}
        updateEdit={updateToDoHandler}
      />
    </div>
  );
}

export default App;
