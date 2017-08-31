'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd-mobile/lib/nav-bar/style/css');

var _navBar = require('antd-mobile/lib/nav-bar');

var _navBar2 = _interopRequireDefault(_navBar);

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

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  TitleBar: {
    displayName: 'TitleBar'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'mobile-code/TitleBar.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var LeftImg = require('../img/return@2x.png');

var TitleBar = _wrapComponent('TitleBar')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(TitleBar, _Component);

  function TitleBar() {
    (0, _classCallCheck3.default)(this, TitleBar);
    return (0, _possibleConstructorReturn3.default)(this, (TitleBar.__proto__ || (0, _getPrototypeOf2.default)(TitleBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(TitleBar, [{
    key: 'leftClick',
    value: function leftClick() {
      this.context.router.goBack();
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultLeft = _react3.default.createElement(
        'div',
        { onClick: this.leftClick.bind(this) },
        _react3.default.createElement('img', {
          style: { width: '0.42rem', marginTop: '-0.1rem' },
          src: LeftImg
        })
      );
      var _props = this.props,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$leftContent = _props.leftContent,
          leftContent = _props$leftContent === undefined ? defaultLeft : _props$leftContent,
          _props$rightContent = _props.rightContent,
          rightContent = _props$rightContent === undefined ? '' : _props$rightContent,
          _props$borderBottom = _props.borderBottom,
          borderBottom = _props$borderBottom === undefined ? false : _props$borderBottom;

      var style = { backgroundColor: 'white', color: 'black' };
      borderBottom && (style.borderBottom = '1px solid #ddd');
      return _react3.default.createElement(
        'div',
        { style: { height: '0.88rem' } },
        _react3.default.createElement(
          'div',
          { style: { position: 'fixed', width: '100%', zIndex: 99999 } },
          _react3.default.createElement(
            _navBar2.default,
            {
              style: style,
              leftContent: leftContent,
              rightContent: rightContent,
              mode: 'light',
              iconName: ''
            },
            title
          )
        )
      );
    }
  }]);
  return TitleBar;
}(_react2.Component), _class.contextTypes = {
  router: _react2.PropTypes.object.isRequired
}, _temp));

exports.default = TitleBar;
module.exports = exports['default'];