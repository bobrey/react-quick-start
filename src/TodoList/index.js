import React, { Component } from 'react';
import { List, Input, Button } from 'antd';

class TodoList extends Component {

  state = {
    todoItems: ['1', '2'],
    inputValue: '3'
  };

  render() {
    return (
      <div style={{marginTop: '20px', marginLeft: '20px'}}>
        <Input
          style={{width: '300px', marginRight: '10px'}}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleAddTodoItem}>提交</Button>
        <List
          style={{width: '300px', marginTop: '10px'}}
          bordered
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
