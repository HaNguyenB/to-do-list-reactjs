import React from 'react';

//functional component
const ToDoCard = (props) => {
    const {id, title, completed} = props.card;
    
    return (
     
      <div className = "container">
      <div className = "item">
          <h3 className = "header" style={{ fontSize: "18px", color: "gray", marginLeft: "15px", marginTop: "15px", marginBottom: "15px" }}>{title}</h3>
          <span>
              <i
              className="x icon"
              style = {{ color: "red" }}
              onClick={() => props.clickHandler(id)}
              ></i>
              <i 
              className = "check icon"
              style = {{ color: "green"}}
              >
              </i>
              <i
              className = "write icon"
              style = {{ color: "orange"}}></i>
          </span>
  </div>
  </div>
  
    );
  };
  
  export default ToDoCard;