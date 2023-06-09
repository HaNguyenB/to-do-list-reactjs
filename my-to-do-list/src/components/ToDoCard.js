import React, { useState} from 'react';
import ToDoPopUp from './ToDoPopUp';

//functional component
const ToDoCard = (props) => {
    const {id, title, completed, des} = props.card;
    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
      setPopup(!popup)
      // return(
      //   <ToDoPopUp title = {title} des = {des}/>
      // )
    }
    
    console.log(props)
    return ( 
      <div className = "container">
      <div className={`item ${completed ? 'completed' : ''}`}>
          <h3 
          className = "header" 
          style={{ fontSize: "18px", color: "gray", marginLeft: "15px", marginTop: "15px", marginBottom: "15px" }}
          onClick = {togglePopup}
          >
          {title}</h3>
          <span>
              <i
              className="x icon"
              style = {{ color: "red" }}
              onClick={() => props.clickDelHandler(id)}
              ></i>
              <i 
              className = "check icon"
              style = {{ color: "green"}}
              onClick={() => props.clickDoneHandler(id)}
              >
              </i>
              <i
              className = "write icon"
              style = {{ color: "orange"}}></i>
          </span>
    </div>
    {popup && (
      <ToDoPopUp title = {title} des = {des} togglePopup = {togglePopup}/>
    )
    }
  </div>
  
    );
  };
  
  export default ToDoCard;