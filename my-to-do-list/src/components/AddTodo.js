import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            title: "",
            des: "",
            completed: false,
        }
    }
    // when click the button trigger add. 
    add = (e) => {
        e.preventDefault();
        if(this.state.title === "") {
            alert("Must enter a title");
            return
        }
        // addToDoHandler() is passed as a prop of this class. this.state will pass a list of ToDo objects to the addToDoHandler()
        this.props.addToDoHandler(this.state)
        // refresh the state of the class
        this.setState({title: "", des:""})
    }
  
    render() {
        return (
            <div className = "ui main">
                <form className = "ui form" onSubmit = {this.add}>
                    <div className = "field" style={{ marginBottom: '10px' }}>
                        <label  style={{ display: 'block' }}> Title </label>
                        <input
                        maxLength={20}
                        style={{ width: '80%' }}
                        type = "text"
                        name = "title"
                        placeholder = "Enter your title"
                        value = {this.state.title}
                        onChange = {(e) => this.setState({title: e.target.value})}>
                        </input>
                    </div>
                    <div className = "field" style={{ marginBottom: '15px' }}>
                        <label  style={{ display: 'block' }}> Description </label>
                        <input
                        maxLength={1000}
                        style={{ width: '80%' , height: '50'}}
                        type = "text"
                        name = "description"
                        placeholder = "Enter your description"
                        value = {this.state.des}
                        onChange = {(e) => this.setState({des: e.target.value})}>
                        </input>
                    </div>
                <div className = "button" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <button className = "ui button" style = {{width: 180, backgroundColor:'#e9c3c3', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Add Todo
                    </button>
                </div>
                </form>
            </div>
        )
    }  
}

export default AddTodo