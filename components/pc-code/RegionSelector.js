import React, {Component, PropTypes} from 'react';
import {Select, Input} from 'antd';
import lodash from 'lodash';
const Option = Select.Option;

/*
  参考：
  onChange: 选择框改变时候调用，传回地址信息的对象
  value：对象，选中的地址信息，如果是formitem表单自己默认会传value
  region： 所有地址信息
  disabled: [1, 2, 3]，传入1代表省可见不可选， 2是市，3是区，传[1, 2]表示省、市不可选。
  size: 默认3，多少级地址联动，3|2|1，表示显示出来的省市区联动有几级联动
    jsx：
    <FormItem label={'学校名称1'}>
      {getFieldDecorator('name1', {
        rules: [
          {
            validator: (rule, {province, city, area} = {}, callback)=>{
              if (province && city && area) {
                callback();
              }
              callback('err');
            }
          }
        ],
        initialValue: this.props.school.region
      })(
        <RegionSelector
          region={this.props.region}
        />
      )}
    </FormItem>
 */
export default class RegionSelector extends Component {
  static PropTypes = {
    onChange: PropTypes.func,
    region: PropTypes.object.isRequired,
    value: PropTypes.object,
    size: PropTypes.number,
    disabled: PropTypes.array,
  };
  static defaultProps = {
    size: 3,
    disabled: [],
  }
  constructor() {
    super();
    this.state = {
      province: undefined,
      city: undefined,
      area: undefined,
    };
  }
  // 设置默认值
  componentWillMount() {
    // 没有初始化的情况
    const {value} = this.props;
    if (!value) {
      return;
    }
    const province = value.province || undefined;
    const city = value.city || undefined;
    const area = value.area || undefined;
    this.state = {province, city, area};
  }
  componentWillReceiveProps(nextProps) {
    const {value = {}} = nextProps;
    if (lodash.isEqual(this.props.value, value)) {
      return;
    }
    const province = value.province || undefined;
    const city = value.city || undefined;
    const area = value.area || undefined;
    this.setState({province, city, area});
  }
  // 选择条目变化触发
  onChange(province, city, area) {
    const state = { province, city, area };
    this.setState(state);
    this.props.onChange(state);
  }
  changeProvince(value) {
    this.onChange(value, undefined, undefined);
  }
  changeCity(value) {
    const {province} = this.state;
    this.onChange(province, value, undefined);
  }
  changeArea(value) {
    const {province, city} = this.state;
    this.onChange(province, city, value);
  }
  renderProvince(province, provinceArr) {
    const arr = this.props.disabled;
    return [
      <div
        key='0'
        style={{width: '33%', 'minWidth': 150, display: 'inline-block', 'padding': '0 50px 0 0', position: 'relative'}}
      >
        <Select
          value={province}
          disabled={arr.includes(1)}
          notFoundContent='没数据' placeholder="请选择"
          onChange={this.changeProvince.bind(this)}
        >
          {provinceArr.map((item) =><Option key={item} value = { item } > { item } </Option>)}
        </Select>
        <span key='1' style={{'position': 'absolute', right: 30}}>省</span>
      </div>
    ];
  }
  renderCity(city, cityArr) {
    const arr = this.props.disabled;
    return [
      <div
        key='2'
        style={{width: '33%', 'minWidth': 150, display: 'inline-block', 'padding': '0 50px 0 10px', position: 'relative'}}
      >
        <Select
          value={city}
          disabled={arr.includes(2)}
          notFoundContent='没数据' placeholder="请选择"
          onChange={this.changeCity.bind(this)}
        >
          {cityArr.map((item) =><Option key={item} value = { item } > { item } </Option>)}
        </Select>
        <span style={{'position': 'absolute', right: 30}}>市</span>
      </div>
    ];
  }
  renderArea(area, areaArr) {
    const arr = this.props.disabled;
    return (
      [<div
        key='4'
        style={{width: '33%', 'minWidth': 150, display: 'inline-block', 'padding': '0 50px 0 10px', position: 'relative'}}
      >
        <Select
          value={area}
          disabled={arr.includes(3)}
          notFoundContent='没数据' placeholder="请选择"
          onChange={this.changeArea.bind(this)}
        >
          {areaArr.map((item) =><Option key={item} value = { item }> { item } </Option>)}
        </Select>
        <span style={{'position': 'absolute', right: 5}}>区／县</span>
      </div>]
    );
    return [
      <Select key='4' value={area}
        disabled={arr.includes(3)}
        notFoundContent='没数据' placeholder="请选择"
        style={{width: '20%', 'minWidth': 80, display: 'inline-block', 'marginLeft': 10}}
        onChange={this.changeArea.bind(this)}
      >
        {areaArr.map((item) =>< Option key={item} value = {
          item
        } > {
          item
        } < /Option>)}
      </Select>,
      <span key='5' style={{'padding': 5}}>区／县</span>
    ];
  }
  render() {
    const {region, size, style, className} = this.props;
    const {province, city, area} = this.state;
    const provinceArr = Object.keys(region);
    const cityArr = (Object.keys(region).length && province) ? Object.keys(region[province]) : [];
    const areaArr = (Object.keys(region).length && province && city) ? region[province][city] : [];
    return (
      <div style={style} className={className}>
        {
          (()=>{
            switch (size) {
              case 3:
                return [
                  ...this.renderProvince.call(this, province, provinceArr),
                  ...this.renderCity.call(this, city, cityArr),
                  ...this.renderArea.call(this, area, areaArr),
                ];
              case 2:
                return [
                  ...this.renderProvince.call(this, province, provinceArr),
                  ...this.renderCity.call(this, city, cityArr)
                ];
              case 1:
                return this.renderProvince.call(this, province, provinceArr);
              default:
                return null;
            }
          })()
        }
      </div>
    );
  }
}
