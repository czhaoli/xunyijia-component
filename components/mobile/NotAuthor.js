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
    _react2.default.createElement(_TitleBar2.default, { title: '\u65E0\u6743\u9650', borderBottom: true }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: {
            fontSize: '0.5rem', color: 'red', top: '40%', position: 'absolute', left: '50%', marginLeft: '-1.25rem'
          } },
        '\u65E0\u6743\u9650\u8BBF\u95EE!'
      )
    )
  );
};

module.exports = exports['default'];