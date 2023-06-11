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
  
  // add a new todo task
  const addToDoHandler = (card) => {
    setCards([ {id: uuid(),...card}, ...cards])
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

  const updateToDoHandler = (value, id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id){
        return{
          ...card,
          title: value.title,
          des: value.des,
          completed: false,
        }
      }
      return card
    })
    setCards(updatedCards)
  }
  

  return (
    <div className="App">
        <Header/>
        <AddTodo addToDoHandler = {addToDoHandler}/>
        <ToDoList cards = {cards} updateDeleted = {removeToDoHandler} updateCompleted = {checkToDoHandler} updateEdit = {updateToDoHandler}/>

    </div>
  );
}

export default App;
