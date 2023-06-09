import React, {useState, useEffect} from "react";
import './App.css';
import {v4 as uuid} from "uuid";
import Header from './Header';
import AddTodo from './AddTodo';
import ToDoList from './ToDoList';
import ToDoPopUp from "./ToDoPopUp";

function App() {
  const LOCAL_STORAGE_KEY = "cards"
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??
    []);
  
  const addToDoHandler = (card) => {
    setCards([...cards, {id: uuid(),...card}])
  }
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  const removeToDoHandler = (id) => {
    const newToDoList = cards.filter((card) => {
      return card.id !== id;
    })
    setCards(newToDoList)
  }
  // return the updatedCards list
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

  

  return (
    <div className="App">
        <Header/>
        <AddTodo addToDoHandler = {addToDoHandler}/>
        <ToDoList cards = {cards} getCardId = {removeToDoHandler} updateCompleted = {checkToDoHandler}/>

    </div>
  );
}

export default App;
