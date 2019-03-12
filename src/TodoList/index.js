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
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodoItem}>提交</button>
        <ul>
          {
            this.state.todoItems.map((item, index) => {
              return (
                <li key={item} onClick={() => this.handlerDelTodoItem(index)}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  handleAddTodoItem = () => {
    this.setState((curState) => {
      return {todoItems: [...curState.todoItems, curState.inputValue]};
    })
  };

  handlerDelTodoItem = (index) => {
    this.setState((curState) => {
      const items = [...curState.todoItems];
      items.splice(index, 1);
      return { todoItems: items };
    })
  };

  handleInputChange = (e) => this.setState({ inputValue: e.target.value });
}

export default TodoList