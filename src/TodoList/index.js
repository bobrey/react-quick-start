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
            this.state.todoItems.map((item, index) => (
              <TodoItem
                key={item}
                item={item}
                index={index}
                delTodoItemFunc={this.handleDelTodoItem}
              />
            ))
          }
        </ul>
      </div>
    );
  }

  handleAddTodoItem = () => {
    this.setState((curState) => {
      return { todoItems: [...curState.todoItems, curState.inputValue] };
    })
  };

  handleDelTodoItem = (index) => {
    this.setState((curState) => {
      const items = [...curState.todoItems];
      items.splice(index, 1);
      return { todoItems: items };
    })
  };

  handleInputChange = (e) => this.setState({ inputValue: e.target.value });
}

class TodoItem extends Component {

  render() {
    return (
      <li onClick={this.handleDelTodoItem}>
        {this.props.item}
      </li>
    );
  }

  handleDelTodoItem = () => {
    const { index, delTodoItemFunc } = this.props;
    delTodoItemFunc(index);
  }

}

export default TodoList;
