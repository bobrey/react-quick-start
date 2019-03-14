import React from 'react';
import { Card } from 'antd';

const Detail = (props) => {
  return (
    <Card style={{width: '300px', marginTop: '20px', marginLeft: '20px'}}>
      <p>I am detail.</p>
      <p>My id is {props.match.params.id}</p>
    </Card>
  );
};

export default Detail;
