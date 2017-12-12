import React, {Component} from 'react';
import {Button} from 'antd';

class NotFound extends Component {
  goBack() {
    const {router} = this.props;
    router.goBack();
  }
  render() {
    return (
      <div style={{display: 'table', width: '100%', height: '100%'}}>
        <div style={{padding: '40px', display: 'table-cell', verticalAlign: 'middle', textAlign: 'center'}}>
          <div style={{display: 'inline-block', textAlign: 'left', width: 400}}>
            <h1>无权限访问！</h1>
            <p style={{margin: 10}}>请访问有权限的页面！</p>
            <Button type="primary" onClick={::this.goBack} style={{float: 'right', marginTop: 50}}>返回</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default ({router}) => {
  return <NotFound router={router} />
}