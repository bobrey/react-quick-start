import axios from 'axios';
import React, { Component } from 'react';
import { List, Input, Button } from 'antd';

import './style.css';

class TodoList extends Component {

  state = {
    todoItems: [],
    inputValue: ''
  };

  render() {
    return (
      <div className='todo-wrapper'>
        <Input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          className='todo-input'
        />
        <Button onClick={this.handleAddTodoItem}>提交</Button>
        <List
          bordered
          className='todo-list'
          dataSource={this.state.todoItems}
          renderItem={(item, index) => (
            <TodoItem
              key={item}
              item={item}
              index={index}
              delTodoItemFunc={this.handleDelTodoItem}
            />
          )}
        />
      </div>
    );
  }

  componentDidMount() {
    const url = '/api/index.json';

    axios.get(url)
      .then((res) => {
        this.setState({ todoItems: res.data.todoItems })
      })
      .catch((error) => {
        error && console.log(`ApiError, url: ${url}, status_code: ${error.response.status}`)
      })
  }


  handleAddTodoItem = () => {
    this.setState((curState) => {
      return { todoItems: [...curState.todoItems, curState.inputValue] };
    });
  };

  handleDelTodoItem = (index) => {
    this.setState((curState) => {
      const items = [...curState.todoItems];
      items.splice(index, 1);
      return { todoItems: items };
    });
  };

  handleInputChange = (e) => this.setState({ inputValue: e.target.value });
}

class TodoItem extends Component {

  render() {
    return (
      <List.Item onClick={this.handleDelTodoItem}>
        {this.props.item}
      </List.Item>
    );
  }

  handleDelTodoItem = () => {
    const { index, delTodoItemFunc } = this.props;
    delTodoItemFunc(index);
  }

}

export default TodoList;
