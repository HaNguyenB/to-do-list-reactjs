import React, { useState } from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = (props) => {
  const [filterOption, setFilterOption] = useState("all");

  const deleteCard = (id) => {
    props.updateDeleted(id);
  };

  const checkCard = (id) => {
    props.updateCompleted(id);
  };

  const editCard = (value, id) => {
    props.updateEdit(value, id);
  };

  const setFilter = (option) => {
    setFilterOption(option);
  };

  const applyFilter = (card) => {
    if (filterOption === "completed") {
      return card.completed;
    } else if (filterOption === "uncompleted") {
      return !card.completed;
    }
    return true;
  };

  const filteredCards = props.cards.filter(applyFilter);

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
      <div style = {{display: "flex", alignItems: "center", justifyContent: "space-evenly", padding: "10px"}}>
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "all"}
            onChange={() => setFilter("all")}
          />
          Show all tasks
        </label>
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "completed"}
            onChange={() => setFilter("completed")}
          />
          Show completed tasks
        </label>
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "uncompleted"}
            onChange={() => setFilter("uncompleted")}
          />
          Show uncompleted tasks
        </label>
      </div>
      {renderToDoList}
    </div>
  );
};

export default ToDoList;
