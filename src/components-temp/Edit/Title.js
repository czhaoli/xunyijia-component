'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var title = _ref.title,
      props = (0, _objectWithoutProperties3.default)(_ref, ['title']);

  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
      'span',
      { style: {
          fontSize: 18,
          borderWidth: 2,
          fontWeight: 'bold'
        } },
      title
    )
  );
};

module.exports = exports['default'];