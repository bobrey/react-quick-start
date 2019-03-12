import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoItems: ['1', '2'],
      inputValue: '3'
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} />
        <button>提交</button>
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

}

export default TodoList