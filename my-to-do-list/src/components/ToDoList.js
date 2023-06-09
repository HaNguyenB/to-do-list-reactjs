import React from "react";
import ToDoCard from "./ToDoCard";

//functional component
const ToDoList = (props) => {
    
    const deleteTodoHandler = (id) => {
        props.getCardId(id);
    } 
    const renderToDoList = props.cards.map((card) => {
        return (
            <ToDoCard key = {card.id} card = {card} clickHandler = {deleteTodoHandler} ></ToDoCard>
        )
    })
    //return a map function that for each card object you have a ToDoCard element
    return <div className = "ui todo list">
        {renderToDoList}
    </div>
}

export default ToDoList