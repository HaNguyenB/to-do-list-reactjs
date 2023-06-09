import React from 'react'

function ToDoPopUp(props) {
    return (  
    <div className = "popup">
    <div className = "overlay" onClick = {props.togglePopup}>
    <div className = "popup-content">
        <h2>{props.title}</h2>
        <p>{props.des}</p>
        </div>  
    </div>
</div>)
  
}

export default ToDoPopUp