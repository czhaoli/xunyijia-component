import React, {Component, PropTypes} from 'react';
import TitleBar from './TitleBar';

export default () => {
  return (
    <div style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <TitleBar title='找不到页面' borderBottom/>
      <div>
        <div style={{
          fontSize: '0.5rem', color: 'red', top: '40%', position: 'absolute',
          width: '100%', textAlign: 'center',
        }}>
          <div>暂无页面信息</div>
          <div>敬请期待！</div>
        </div>
      </div>
    </div>
  );
};