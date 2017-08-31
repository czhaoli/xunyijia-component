import React, {Component, PropTypes} from 'react';
import { NavBar } from 'antd-mobile';
const LeftImg = require('../img/return@2x.png');

export default class TitleBar extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  leftClick() {
    this.context.router.goBack();
  }
  render() {
    const defaultLeft = (
      <div onClick={this.leftClick.bind(this)}>
        <img
          style={{width: '0.42rem', marginTop: '-0.1rem'}}
          src={LeftImg}
        />
      </div>
    );
    const {title = '', leftContent = defaultLeft, rightContent = '', borderBottom = false} = this.props;
    const style = {backgroundColor: 'white', color: 'black'};
    borderBottom && (style.borderBottom = '1px solid #ddd');
    return (
      <div style={{height: '0.88rem'}}>
        <div style={{position: 'fixed', width: '100%', zIndex: 99999}}>
          <NavBar
            style={style}
            leftContent={leftContent}
            rightContent={rightContent}
            mode="light"
            iconName=''
          >
              {title}
          </NavBar>
        </div>
      </div>
    );
  }
}
