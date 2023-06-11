import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    // Define the initial state of the component
    this.state = {
      title: '',
      des: '',
      completed: false,
      isButtonClicked: false,
    };
  }

  add = (e) => {
    e.preventDefault();
    // Form validation to ensure that users must insert a title
    if (this.state.title === '') {
      alert('Must enter a title');
      return;
    }

    // Call the parent component's addToDoHandler function and pass the current state as an argument
    this.props.addToDoHandler(this.state);

    // Reset the input fields by clearing the title and des (description) in the component's state
    this.setState({ title: '', des: '' });
  };

  handleClick = () => {
    // Set isButtonClicked to true to apply a CSS class for the button's visual effect
    this.setState({ isButtonClicked: true }, () => {
      // After 200 milliseconds, set isButtonClicked back to false to remove the CSS class
      setTimeout(() => {
        this.setState({ isButtonClicked: false });
      }, 200);
    });
  };

  render() {
    const { isButtonClicked } = this.state;
    // Return the main form
    return (
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field" style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}> Title </label>
            <input
              maxLength={25}
              style={{ width: '80%' }}
              type="text"
              name="title"
              placeholder="Enter your title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block' }}> Description </label>
            <textarea
              maxLength={1000}
              style={{ width: '80%', height: '80px', resize: 'vertical' }}
              name="description"
              placeholder="Enter your description"
              value={this.state.des}
              onChange={(e) => this.setState({ des: e.target.value })}
            />
          </div>
          <div className="button">
            <button
              className={`ui button ${isButtonClicked ? 'clicked' : ''} color`}
              onClick={this.handleClick}>
              Add Todo
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
