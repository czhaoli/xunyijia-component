'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _css = require('antd/lib/select/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  RegionSelector: {
    displayName: 'RegionSelector'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components-temp/RegionSelector.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Option = _select2.default.Option;

/*
  参考： components/choolaccount/schoolaccount.js
  onChange: 选择框改变时候调用，传回地址信息的对象
  region： 所有地址信息
  size: 多少级地址联动
  validate： 检验函数，当前地址联动全部选择时返回true，没全部选择的时候返回false
  initialObj： 初始化选中的地址信息{province, city, area}
    jsx：
      <FormItem
        {... this.state.regionValidate === 'error' ? {regionValidate: 'error', help: '地区必选'} : {} }
        label={'地区'}
      >
        <RegionSelector
          onChange={this.changeRegion.bind(this)}
          region={this.props.region}
          initialObj={initialRegion}
          validate={this.validateRegion.bind(this)}
        />
      </FormItem>
    保存数据返回：
      state = {
        regionValidate: '',
      }
      region = {}
    onchange和保存验证：
      changeRegion(region = {}) {
        this.region = region;
      }
      validateRegion(bool) {
        const regionValidate = bool ? '' : 'error';
        this.setState({
          regionValidate
        });
      }
    提交时候获取数值和进行校验
      const { regionValidate } = this.state;
      const {province, city, area} = this.region;
      if (regionValidate === 'error') {
        return;
      }
  
 */

var RegionSelector = _wrapComponent('RegionSelector')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(RegionSelector, _Component);

  function RegionSelector() {
    (0, _classCallCheck3.default)(this, RegionSelector);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegionSelector.__proto__ || (0, _getPrototypeOf2.default)(RegionSelector)).call(this));

    _this.state = {
      province: undefined,
      city: undefined,
      area: undefined
    };
    return _this;
  }
  // 设置默认值


  (0, _createClass3.default)(RegionSelector, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // 没有初始化的情况
      var value = this.props.value;

      if (!value) {
        return;
      }
      var province = value.province || undefined;
      var city = value.city || undefined;
      var area = value.area || undefined;
      this.state = { province: province, city: city, area: area };
    }
    // 选择条目变化触发

  }, {
    key: 'onChange',
    value: function onChange(province, city, area) {
      var state = { province: province, city: city, area: area };
      this.setState(state);
      var _props = this.props,
          size = _props.size,
          isRequired = _props.isRequired;

      var bool = void 0;
      switch (size) {
        case 3:
          if (!province || !city || !area) {
            bool = false;
          } else {
            bool = true;
          }
          break;
        case 2:
          if (!province || !city) {
            bool = false;
          } else {
            bool = true;
          }
          break;
        case 1:
          if (!province) {
            bool = false;
          } else {
            bool = true;
          }
          break;
        default:
          bool = true;
      }
      if (!bool && isRequired) {
        this.props.onChange();
      } else {
        this.props.onChange(state);
      }
    }
  }, {
    key: 'changeProvince',
    value: function changeProvince(value) {
      this.onChange(value, undefined, undefined);
    }
  }, {
    key: 'changeCity',
    value: function changeCity(value) {
      var province = this.state.province;

      this.onChange(province, value, undefined);
    }
  }, {
    key: 'changeArea',
    value: function changeArea(value) {
      var _state = this.state,
          province = _state.province,
          city = _state.city;

      this.onChange(province, city, value);
    }
  }, {
    key: 'renderProvince',
    value: function renderProvince(province, provinceArr) {
      return [_react3.default.createElement(
        _select2.default,
        { key: '0', value: province,
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { 'width': '20%', display: 'inline-block' },
          onChange: this.changeProvince.bind(this)
        },
        provinceArr.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item, value: item },
            ' ',
            item,
            ' '
          );
        })
      ), _react3.default.createElement(
        'span',
        { key: '1', style: { 'padding': '10px' } },
        '\u7701'
      )];
    }
  }, {
    key: 'renderCity',
    value: function renderCity(city, cityArr) {
      return [_react3.default.createElement(
        _select2.default,
        { key: '2', value: city,
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { 'width': '20%', display: 'inline-block', 'marginLeft': '5%' },
          onChange: this.changeCity.bind(this)
        },
        cityArr.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item, value: item },
            ' ',
            item,
            ' '
          );
        })
      ), _react3.default.createElement(
        'span',
        { key: '3', style: { 'padding': '10px' } },
        '\u5E02'
      )];
    }
  }, {
    key: 'renderArea',
    value: function renderArea(area, areaArr) {
      return [_react3.default.createElement(
        _select2.default,
        { key: '4', value: area,
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { 'width': '20%', display: 'inline-block', 'marginLeft': '5%' },
          onChange: this.changeArea.bind(this)
        },
        areaArr.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item, value: item },
            ' ',
            item,
            ' '
          );
        })
      ), _react3.default.createElement(
        'span',
        { key: '5', style: { 'padding': '10px' } },
        '\u533A\uFF0F\u53BF'
      )];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          region = _props2.region,
          size = _props2.size;
      var _state2 = this.state,
          province = _state2.province,
          city = _state2.city,
          area = _state2.area;

      var provinceArr = (0, _keys2.default)(region);
      var cityArr = (0, _keys2.default)(region).length && province ? (0, _keys2.default)(region[province]) : [];
      var areaArr = (0, _keys2.default)(region).length && province && city ? region[province][city] : [];
      return _react3.default.createElement(
        'div',
        null,
        function () {
          switch (size) {
            case 3:
              return [].concat((0, _toConsumableArray3.default)(_this2.renderProvince.call(_this2, province, provinceArr)), (0, _toConsumableArray3.default)(_this2.renderCity.call(_this2, city, cityArr)), (0, _toConsumableArray3.default)(_this2.renderArea.call(_this2, area, areaArr)));
            case 2:
              return [].concat((0, _toConsumableArray3.default)(_this2.renderProvince.call(_this2, province, provinceArr)), (0, _toConsumableArray3.default)(_this2.renderCity.call(_this2, city, cityArr)));
            case 1:
              return _this2.renderProvince.call(_this2, province, provinceArr);
            default:
              return null;
          }
        }()
      );
    }
  }]);
  return RegionSelector;
}(_react2.Component), _class.PropTypes = {
  onChange: _react2.PropTypes.func,
  region: _react2.PropTypes.object.isRequired,
  value: _react2.PropTypes.object,
  size: _react2.PropTypes.number,
  isRequired: _react2.PropTypes.bool
}, _class.defaultProps = {
  validate: function validate() {},
  size: 3,
  isRequired: false
}, _temp));

exports.default = RegionSelector;
module.exports = exports['default'];