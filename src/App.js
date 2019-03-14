import { Input, Button } from 'antd';
import React, { Fragment, Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

import Detail from './Detail'
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <RouteSwitch />
          <Route path='/' exact component={TodoList} />
          <Route path='/detail/:id' exact component={Detail} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

class RouteSwitch extends Component {

  state = {
    detailId: ''
  };

  render() {
    const { detailId } = this.state;

    return (
      <div style={{marginTop: '20px', marginLeft: '20px'}}>
        <Link to='/'>
          <Button style={{marginBottom: '10px', display: 'block'}}>
            返回首页
          </Button>
        </Link>
        <Input
          style={{width: '300px'}}
          value={detailId}
          onChange={this.handleInputChange}
          placeholder='输入 id'
        />
        <Link to={`/detail/${detailId}`}>
          <Button style={{marginLeft: '10px'}}>去详情页</Button>
        </Link>
      </div>
    );
  }

  handleInputChange = (e) => this.setState({ detailId: e.target.value });

}

export default App;
