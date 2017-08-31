import React, {Component, PropTypes} from 'react';
import {Select, Input} from 'antd';
const Option = Select.Option;

export default class CategorySelector extends Component {
  static PropTypes = {
    onChange: PropTypes.func,
    data: PropTypes.object.isRequired,
    initialObj: PropTypes.object,
  }
  static defaultProps = {
    data: []
  }
  state = {
    first: undefined,
    second: undefined,
    third: undefined,
    fourth: undefined,
  }
  // 设置默认值
  componentWillMount() {
    // 没有初始化的情况
    const {initialObj} = this.props;
    if (!initialObj) {
      return;
    }
    const first = initialObj[0] || undefined;
    const second = initialObj[1] || undefined;
    const third = initialObj[2] || undefined;
    const fourth = initialObj[3] || undefined;
    this.state = {first, second, third, fourth};
  }
  componentWillReceiveProps(nextProps) {
    const {initialObj} = nextProps;
    if (!initialObj) {
      return;
    }
    if (this.props.initialObj !== nextProps.initialObj) {
      const first = initialObj[0] || undefined;
      const second = initialObj[1] || undefined;
      const third = initialObj[2] || undefined;
      const fourth = initialObj[3] || undefined;
      this.state = {first, second, third, fourth};
    }
  }
  // 选择条目变化触发
  onChange(first, second, third, fourth) {
    const state = { first, second, third, fourth };
    this.setState(state);
    let id;
    let level;
    if (fourth) {
      id = fourth;
      level = 4;
    } else if (third) {
      id = third;
      level = 3;
    } else if (second) {
      id = second;
      level = 2;
    } else {
      id = first;
      level = 1;
    }
    this.props.onChange(id, level);
  }
  changeFirst(value, option) {
    this.onChange(value);
  }
  changeSecond(value, option) {
    const {first} = this.state;
    this.onChange(first, value);
  }
  changeThird(value, option) {
    const {first, second} = this.state;
    this.onChange(first, second, value);
  }
  changeFourth(value, option) {
    const {first, second, third} = this.state;
    this.onChange(first, second, third, value);
  }
  renderFirst(first, firstArr) {
    return (
      <Select key='0' value={first}
        notFoundContent='没数据' placeholder="请选择"
        style={{'width': '20%', display: 'inline-block'}}
        onSelect={this.changeFirst.bind(this)}
      >
        {firstArr.map((item) =>< Option key={item._id} value = {
          item._id
        } > {
          item.name
        } < /Option>)}
      </Select>
    );
  }
  renderSecond(second, SecondArr) {
    return (
      <Select key='2' value={second}
        notFoundContent='没数据' placeholder="请选择"
        style={{'width': '20%', display: 'inline-block', 'marginLeft': '5%'}}
        onSelect={this.changeSecond.bind(this)}
      >
        {SecondArr.map((item) =>< Option key={item._id} value = {
          item._id
        } > {
          item.name
        } < /Option>)}
      </Select>
    );
  }
  renderThird(third, thirdArr) {
    return (
      <Select key='4' value={third}
        notFoundContent='没数据' placeholder="请选择"
        style={{'width': '20%', display: 'inline-block', 'marginLeft': '5%'}}
        onSelect={this.changeThird.bind(this)}
      >
        {thirdArr.map((item) =>< Option key={item._id} value = {
          item._id
        } > {
          item.name
        } < /Option>)}
      </Select>
    );
  }
  renderFourth(fourth, fourthArr) {
    return (
      <Select key='5' value={fourth}
        notFoundContent='没数据' placeholder="请选择"
        style={{'width': '20%', display: 'inline-block', 'marginLeft': '5%'}}
        onSelect={this.changeFourth.bind(this)}
      >
        {fourthArr.map((item) =>< Option key={item._id} value = {
          item._id
        } > {
          item.name
        } < /Option>)}
      </Select>
    );
  }
  render() {
    const {data} = this.props;
    const {first, second, third, fourth} = this.state;
    let secondArr = [];
    data.forEach(item => {
      if (first && item._id === first) {
        secondArr = item.children;
      }
    });
    let thirdArr = [];
    secondArr.forEach(item => {
      if (second && item._id === second) {
        thirdArr = item.children;
      }
    });
    let fourthArr = [];
    thirdArr.forEach(item => {
      if (third && item._id === third) {
        fourthArr = item.children;
      }
    });
    return (
      <div>
        {
          [
            this.renderFirst.call(this, first, data),
            this.renderSecond.call(this, second, secondArr),
            this.renderThird.call(this, third, thirdArr),
            this.renderFourth.call(this, fourth, fourthArr),
          ]
        }
      </div>
    );
  }
}