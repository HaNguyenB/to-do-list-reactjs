import React, { useState } from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = (props) => {
  // State hook to manage the filter option
  const [filterOption, setFilterOption] = useState("all");

  // Function to handle deleting a todo card
  const deleteCard = (id) => {
    props.updateDeleted(id);
  };

  // Function to handle marking a todo card as completed
  const checkCard = (id) => {
    props.updateCompleted(id);
  };

  // Function to handle editing a todo card
  const editCard = (value, id) => {
    props.updateEdit(value, id);
  };

  // Function to set the filter option
  const setFilter = (option) => {
    setFilterOption(option);
  };

  // Function to apply the selected filter option to a todo card
  const applyFilter = (card) => {
    if (filterOption === "completed") {
      return card.completed;
    } else if (filterOption === "incompleted") {
      return !card.completed;
    }
    return true;
  };

  // Filter the cards based on the selected filter option
  const filteredCards = props.cards.filter(applyFilter);

  // Render the todo list with the filtered cards
  const renderToDoList = filteredCards.map((card) => {
    return (
      <ToDoCard
        key={card.id}
        card={card}
        clickDelHandler={deleteCard}
        clickDoneHandler={checkCard}
        clickUpdateHandler={editCard}
      ></ToDoCard>
    );
  });

  return (
    <div className="ui todo list">
      <div 
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "8vh",
          width: "80%",
          backgroundColor: "rgb(137, 156, 213)",
          margin: "0 auto 10px",
        }}
      >
        {/* Filter options */}
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "all"}
            onChange={() => setFilter("all")}
          />
          &nbsp;&nbsp;&nbsp;Display all tasks
        </label>
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "incompleted"}
            onChange={() => setFilter("incompleted")}
          />
          &nbsp;&nbsp;&nbsp;Display incompleted tasks
        </label>
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "completed"}
            onChange={() => setFilter("completed")}
          />
          &nbsp;&nbsp;&nbsp;Display completed tasks
        </label>
      </div>
      
      {/* Render the todo cards */}
      {renderToDoList}
    </div>
  );
};

export default ToDoList;
