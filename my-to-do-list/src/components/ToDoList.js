import React from "react";
import ToDoCard from "./ToDoCard";

//functional component
const ToDoList = (props) => {
    
    const deleteCard = (id) => {
        props.getCardId(id);
    } 

    const checkCard = (id) => {
        props.updateCompleted(id)
    }

    const renderToDoList = props.cards.map((card) => {
        return (
            <ToDoCard key = {card.id} card = {card} clickDelHandler = {deleteCard} clickDoneHandler = {checkCard}></ToDoCard>
        )
    })
    //return a map function that for each card object you have a ToDoCard element
    return <div className = "ui todo list">
        {renderToDoList}
    </div>
}

export default ToDoList