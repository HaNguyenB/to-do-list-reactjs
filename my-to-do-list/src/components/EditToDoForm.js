import React, { Component } from 'react'

class EditToDoForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            title: this.props.title,
            des: this.props.des,
            completed: false,
            editing: false,
        }
    }
    // when click the button trigger add. 
    update = (e) => {
        e.preventDefault();
        // if(this.state.title === "") {
        //     alert("Must enter a title");
        //     return
        // }
        
        this.props.updateToDoHandler(this.state, this.props.id)
        // refresh the state of the class
        this.setState({title: "", des:"",editing: true})
    }
  
    render() {
        return (
            <div className = "popup">
                <form className = "ui form" onSubmit = {this.update}>
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
                    Update change
                    </button>
                </div>
                </form>
            </div>
        )
    }  
}

export default EditToDoForm