import React, { useState} from 'react';
import ToDoPopUp from './ToDoPopUp';
import EditToDoForm from './EditToDoForm';

//functional component
const ToDoCard = (props) => {
    const {id, title, completed, des} = props.card;
    const [popup, setPopup] = useState(false)
    const [edit, setPopupEdit] = useState(false)

    const togglePopup = () => {
      setPopup(!popup)
    }
    
    const editTogglePopup = () => {
      setPopupEdit(!edit)
    }

    const updateTogglePopup = (value, id) => {
      props.clickUpdateHandler(value, id)
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
              style = {{ color: "#f09a80" }}
              onClick={() => props.clickDelHandler(id)}
              ></i>
              <i 
              className = "check icon"
              style = {{ color: "#81c570"}}
              onClick={() => props.clickDoneHandler(id)}
              ></i>
              <i
              className = "write icon"
              style = {{ color: "orange"}}
              onClick = {editTogglePopup}
              ></i>
          </span>
    </div>
    {popup && (
      <ToDoPopUp title = {title} des = {des} togglePopup = {togglePopup}/>
    )
    }
    {edit && (
      <EditToDoForm id = {id} title = {title} des = {des} editTogglePopup = {editTogglePopup} updateTogglePopup = {updateTogglePopup}/>
    )}
  </div>
  
    );
  };
  
  export default ToDoCard;