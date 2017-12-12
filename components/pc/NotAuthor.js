'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

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

require('antd/lib/button/style/css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  NotFound: {
    displayName: 'NotFound'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'pc-code/NotAuthor.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var NotFound = _wrapComponent('NotFound')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(NotFound, _Component);

  function NotFound() {
    (0, _classCallCheck3.default)(this, NotFound);
    return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotFound, [{
    key: 'goBack',
    value: function goBack() {
      this.context.router.goBack();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { style: { display: 'table', width: '100%', height: '100%' } },
        _react3.default.createElement(
          'div',
          { style: { padding: '40px', display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' } },
          _react3.default.createElement(
            'div',
            { style: { display: 'inline-block', textAlign: 'left', width: 400 } },
            _react3.default.createElement(
              'h1',
              null,
              '\u65E0\u6743\u9650\u8BBF\u95EE\uFF01'
            ),
            _react3.default.createElement(
              'p',
              { style: { margin: 10 } },
              '\u8BF7\u8BBF\u95EE\u6709\u6743\u9650\u7684\u9875\u9762\uFF01'
            ),
            _react3.default.createElement(
              _button2.default,
              { type: 'primary', onClick: this.goBack.bind(this), style: { float: 'right', marginTop: 50 } },
              '\u8FD4\u56DE'
            )
          )
        )
      );
    }
  }]);
  return NotFound;
}(_react2.Component), _class.contextTypes = {
  router: _propTypes2.default.object.isRequired
}, _temp));

exports.default = NotFound;
module.exports = exports['default'];