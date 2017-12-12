'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Account: {
    displayName: 'Account'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components-temp/InputTemp.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

/*
  测试自己写formitem组件
  {
    label: '专家账号',
    key: 'accountId',
    rules: [{
      required: true,
      message: '两个输入框都得输入',
    }],
    jsx: <InputTemp placeholder={'请填写账号名称'}/>
 */
var Account = _wrapComponent('Account')(function (_Component) {
  (0, _inherits3.default)(Account, _Component);

  function Account() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Account);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value1: '',
      value2: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Account, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.props.value;

      if (value) {
        this.state.value1 = value[0];
        this.state.value2 = value[1];
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event, key) {
      var _state = this.state,
          value1 = _state.value1,
          value2 = _state.value2;

      var value = event.target.value;
      switch (key) {
        case 1:
          this.setState({
            value1: value
          });
          this.propChange(value, value2);
          break;
        case 2:
          this.setState({
            value2: value
          });
          this.propChange(value1, value);
          break;
        default:
      }
    }
  }, {
    key: 'propChange',
    value: function propChange(value1, value2) {
      if (value1 && value2) {
        var value = value1 + value2;
        this.props.onChange(value);
      } else {
        this.props.onChange();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement('input', { className: 'ant-input ant-input-lg', style: { width: '49%' }, value: this.state.value1, onChange: function onChange(event) {
            _this2.onChange(event, 1);
          } }),
        _react3.default.createElement('input', { className: 'ant-input ant-input-lg', style: { marginLeft: '2%', width: '49%' }, value: this.state.value2, onChange: function onChange(event) {
            _this2.onChange(event, 2);
          } })
      );
    }
  }]);
  return Account;
}(_react2.Component));

exports.default = Account;
module.exports = exports['default'];