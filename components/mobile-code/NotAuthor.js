import React, {Component, PropTypes} from 'react';
import TitleBar from './TitleBar';

export default () => {
  return (
    <div style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <TitleBar title='无权限' borderBottom/>
      <div>
        <div style={{
          fontSize: '0.5rem', color: 'red', top: '40%', position: 'absolute', left: '50%', marginLeft: '-1.25rem'
        }}>
        无权限访问!
      </div>
      </div>
    </div>
  );
};