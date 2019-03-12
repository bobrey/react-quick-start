import React, { Component } from 'react';

class TodoList extends Component {

  state = {
    todoItems: ['1', '2'],
    inputValue: '3'
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleAddTodoItem.bind(this)}>提交</button>
        <ul>
          {
            this.state.todoItems.map((item) => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  handleAddTodoItem() {
    this.setState((curState) => {
      return {todoItems: [...curState.todoItems, curState.inputValue]}
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

}

export default TodoList