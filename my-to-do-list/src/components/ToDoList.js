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
      <div className = "ui filter-block"
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
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "all"}
            onChange={() => setFilter("all")}
          />
          &nbsp;&nbsp;&nbsp;Show all tasks
        </label>
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "uncompleted"}
            onChange={() => setFilter("uncompleted")}
          />
          &nbsp;&nbsp;&nbsp;Show uncompleted tasks
        </label>
        <label>
          <input
            type="radio"
            name="filterOption"
            checked={filterOption === "completed"}
            onChange={() => setFilter("completed")}
          />
          &nbsp;&nbsp;&nbsp;Show completed tasks 
        </label>
      </div>
      {renderToDoList}
    </div>
  );
};

export default ToDoList;
