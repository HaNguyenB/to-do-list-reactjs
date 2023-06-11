import React, { Component } from 'react'

class EditToDoForm extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            title: this.props.title,
            des: this.props.des,
            completed: false,
            isButtonClicked: false,
        }
    }

    
    
    // when click the button trigger update. 
    update = (e) => {
        e.preventDefault();
        if(this.state.title === "") {
            alert("Must enter a title");
            return
        }
        // to turn off the popup
        this.props.editTogglePopup();
        console.log(this.state.completed)
        // get the state and id of the new card
        console.log(this.state)
        console.log()
        this.props.updateTogglePopup(this.state, this.props.id)
        // refresh the state of the class
        this.setState({title: "", des:""})

    }
    
    handleClick = () => {
        this.setState({ isButtonClicked: true }, () => {
          setTimeout(() => {
            this.setState({ isButtonClicked: false });
          }, 200);
        });
      };

    render() {
        const { isButtonClicked } = this.state;
        return (
            <div className  = "popup" >
            <div className = "overlay">
            <div className = "edit-popup-content" >
                <form className = "ui form" onSubmit = {this.update}>
                    <div className = "field" style={{ marginBottom: '10px' }}>
                        <label  style={{ display: 'block', padding: '10px' }}> Update Title </label>
                        <input
                        maxLength={25}
                        style={{ width: '80%' }}
                        type = "text"
                        name = "title"
                        placeholder = "Enter your title"
                        value = {this.state.title}
                        onChange = {(e) => this.setState({title: e.target.value})}>
                        </input>
                    </div>
                    <div className = "field" style={{ marginBottom: '15px' }}>
                        <label  style={{ display: 'block', padding: '10px'}}> Update Description </label>
                        <textarea
                        maxLength={1000}
                        style={{ width: '80%' , height: '50px', resize: 'vertical'}}
                        type = "text"
                        name = "description"
                        placeholder = "Enter your description"
                        value = {this.state.des}
                        onChange = {(e) => this.setState({des: e.target.value})}>
                        </textarea>
                    </div>
                    <div className="button">
            <button
              className={`ui button ${isButtonClicked ? 'clicked' : ''} color`}
              onClick={this.handleClick}>
              Update Todo
            </button>
          </div>
                </form>
                </div>
            </div>
            </div>  
        )
    }  
}

export default EditToDoForm