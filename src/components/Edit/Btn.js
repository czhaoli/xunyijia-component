'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/button/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _css2 = require('antd/lib/alert/style/css');

var _alert = require('antd/lib/alert');

var _alert2 = _interopRequireDefault(_alert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var btnContent = _ref.btnContent,
      cancelAdd = _ref.cancelAdd,
      tips = _ref.tips;

  var arr = [];
  if (tips) {
    arr.push(_react2.default.createElement(_alert2.default, { key: '0', message: tips, type: 'info', showIcon: true }));
  }
  arr.push(_react2.default.createElement(
    'div',
    { key: '1', style: { 'textAlign': 'center' } },
    _react2.default.createElement(
      _button2.default,
      { type: 'default', style: {
          marginRight: 40
        }, onClick: cancelAdd },
      '\u53D6\u6D88'
    ),
    _react2.default.createElement(
      _button2.default,
      { type: 'primary', htmlType: 'submit' },
      btnContent
    )
  ));
  return arr;
};

module.exports = exports['default'];