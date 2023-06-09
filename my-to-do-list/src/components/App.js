import React, {useState, useEffect} from "react";
import './App.css';
import {v4 as uuid} from "uuid";
import Header from './Header';
import AddTodo from './AddTodo';
import ToDoList from './ToDoList';

function App() {
  const LOCAL_STORAGE_KEY = "cards"
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??
    []);
  
  const addToDoHandler = (card) => {
   
    setCards([...cards, {id: uuid(),... card}])
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

  return (
    <div className="App">
        <Header/>
        <AddTodo addToDoHandler = {addToDoHandler}/>
        <ToDoList cards = {cards} getCardId = {removeToDoHandler}/>
    </div>
  );
}

export default App;
