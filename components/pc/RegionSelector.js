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

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

require('antd/lib/select/style/css');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  RegionSelector: {
    displayName: 'RegionSelector'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'pc-code/RegionSelector.js',
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
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$value = nextProps.value,
          value = _nextProps$value === undefined ? {} : _nextProps$value;

      if (_lodash2.default.isEqual(this.props.value, value)) {
        return;
      }
      var province = value.province || undefined;
      var city = value.city || undefined;
      var area = value.area || undefined;
      this.setState({ province: province, city: city, area: area });
    }
    // 选择条目变化触发

  }, {
    key: 'onChange',
    value: function onChange(province, city, area) {
      var state = { province: province, city: city, area: area };
      this.setState(state);
      this.props.onChange(state);
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
      var arr = this.props.disabled;
      return [_react3.default.createElement(
        'div',
        {
          key: '0',
          style: { width: '33%', 'minWidth': 150, display: 'inline-block', 'padding': '0 50px 0 0', position: 'relative' }
        },
        _react3.default.createElement(
          _select2.default,
          {
            value: province,
            disabled: arr.includes(1),
            notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
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
        ),
        _react3.default.createElement(
          'span',
          { key: '1', style: { 'position': 'absolute', right: 30 } },
          '\u7701'
        )
      )];
    }
  }, {
    key: 'renderCity',
    value: function renderCity(city, cityArr) {
      var arr = this.props.disabled;
      return [_react3.default.createElement(
        'div',
        {
          key: '2',
          style: { width: '33%', 'minWidth': 150, display: 'inline-block', 'padding': '0 50px 0 10px', position: 'relative' }
        },
        _react3.default.createElement(
          _select2.default,
          {
            value: city,
            disabled: arr.includes(2),
            notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
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
        ),
        _react3.default.createElement(
          'span',
          { style: { 'position': 'absolute', right: 30 } },
          '\u5E02'
        )
      )];
    }
  }, {
    key: 'renderArea',
    value: function renderArea(area, areaArr) {
      var arr = this.props.disabled;
      return [_react3.default.createElement(
        'div',
        {
          key: '4',
          style: { width: '33%', 'minWidth': 150, display: 'inline-block', 'padding': '0 50px 0 10px', position: 'relative' }
        },
        _react3.default.createElement(
          _select2.default,
          {
            value: area,
            disabled: arr.includes(3),
            notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
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
        ),
        _react3.default.createElement(
          'span',
          { style: { 'position': 'absolute', right: 5 } },
          '\u533A\uFF0F\u53BF'
        )
      )];
      return [_react3.default.createElement(
        _select2.default,
        { key: '4', value: area,
          disabled: arr.includes(3),
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { width: '20%', 'minWidth': 80, display: 'inline-block', 'marginLeft': 10 },
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
        { key: '5', style: { 'padding': 5 } },
        '\u533A\uFF0F\u53BF'
      )];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          region = _props.region,
          size = _props.size,
          style = _props.style,
          className = _props.className;
      var _state2 = this.state,
          province = _state2.province,
          city = _state2.city,
          area = _state2.area;

      var provinceArr = (0, _keys2.default)(region);
      var cityArr = (0, _keys2.default)(region).length && province ? (0, _keys2.default)(region[province]) : [];
      var areaArr = (0, _keys2.default)(region).length && province && city ? region[province][city] : [];
      return _react3.default.createElement(
        'div',
        { style: style, className: className },
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
  disabled: _react2.PropTypes.array
}, _class.defaultProps = {
  size: 3,
  disabled: []
}, _temp));

exports.default = RegionSelector;
module.exports = exports['default'];