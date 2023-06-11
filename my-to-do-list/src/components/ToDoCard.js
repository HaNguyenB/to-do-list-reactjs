import React, { useState } from 'react';
import ToDoPopUp from './ToDoPopUp';
import EditToDoForm from './EditToDoForm';

// Functional component representing an individual todo card
const ToDoCard = (props) => {
  const { id, title, completed, des } = props.card;
  
  // State hooks to manage the visibility of the popup and edit forms
  const [popup, setPopup] = useState(false);
  const [edit, setPopupEdit] = useState(false);
  
  // Function to toggle the visibility of the popup form
  const togglePopup = () => {
    setPopup(!popup);
  };
  
  // Function to toggle the visibility of the edit form
  const editTogglePopup = () => {
    setPopupEdit(!edit);
  };
  
  // Function to handle updating a todo task and toggling the edit form
  const updateTogglePopup = (value, id) => {
    props.clickUpdateHandler(value, id);
  };
  
  console.log(props);
  
  return (
    <div className="container">
      <div className={`item ${completed ? 'completed' : ''}`}>
        {/* Todo card title */}
        <h3
          className="header"
          style={{
            fontSize: '18px',
            color: 'gray',
            marginLeft: '15px',
            marginTop: '15px',
            marginBottom: '15px',
            maxWidth: '200px',
            wordWrap: 'break-word',
          }}
          onClick={togglePopup}
        >
          {title}
        </h3>
        
        <span>
          {/* Delete button */}
          <i
            className="x icon"
            style={{ color: '#f09a80' }}
            onClick={() => props.clickDelHandler(id)}
          ></i>
          
          {/* Check button */}
          <i
            className="check icon"
            style={{ color: '#81c570' }}
            onClick={() => props.clickDoneHandler(id)}
          ></i>
          
          {/* Edit button */}
          <i
            className="write icon"
            style={{ color: 'orange' }}
            onClick={editTogglePopup}
          ></i>
        </span>
      </div>
      
      {/* Render the popup form if popup state is true */}
      {popup && (
        <ToDoPopUp title={title} des={des} togglePopup={togglePopup} />
      )}
      
      {/* Render the edit form if edit state is true */}
      {edit && (
        <EditToDoForm
          id={id}
          title={title}
          des={des}
          editTogglePopup={editTogglePopup}
          updateTogglePopup={updateTogglePopup}
        />
      )}
    </div>
  );
};

export default ToDoCard;
