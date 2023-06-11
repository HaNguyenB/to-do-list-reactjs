import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      des: '',
      completed: false,
      isButtonClicked: false,
    };
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.title === '') {
      alert('Must enter a title');
      return;
    }
    this.props.addToDoHandler(this.state);
    this.setState({ title: '', des: '' });
  };

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
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field" style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}> Title </label>
            <input
              maxLength={20}
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
