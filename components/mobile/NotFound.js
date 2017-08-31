'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TitleBar = require('./TitleBar');

var _TitleBar2 = _interopRequireDefault(_TitleBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', width: '100%', backgroundColor: 'white' } },
    _react2.default.createElement(_TitleBar2.default, { title: '\u627E\u4E0D\u5230\u9875\u9762', borderBottom: true }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: {
            fontSize: '0.5rem', color: 'red', top: '40%', position: 'absolute',
            width: '100%', textAlign: 'center'
          } },
        _react2.default.createElement(
          'div',
          null,
          '\u6682\u65E0\u9875\u9762\u4FE1\u606F'
        ),
        _react2.default.createElement(
          'div',
          null,
          '\u656C\u8BF7\u671F\u5F85\uFF01'
        )
      )
    )
  );
};

module.exports = exports['default'];