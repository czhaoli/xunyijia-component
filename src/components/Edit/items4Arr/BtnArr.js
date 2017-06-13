'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/button/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
   btnArr = [{type: 'submit', text: ''}]
   唯一特殊值特殊type：submit
   多加一个text文本内容属性,
   其他参考antd Button的属性， 有：
   type， htmlType， icon， shape， size， loading， onClick， ghost
 */

exports.default = function (_ref) {
  var _ref$btnArr = _ref.btnArr,
      btnArr = _ref$btnArr === undefined ? [] : _ref$btnArr;

  return _react2.default.createElement(
    'div',
    { style: { 'textAlign': 'center' } },
    btnArr.map(function (item, index) {
      //  为null，不为object，为空object，返回空
      if (!item || (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) !== 'object' || (0, _keys2.default)(item).length === 0) {
        return null;
      }
      if (index !== 0) {
        item.style = {
          marginLeft: 40
        };
      }
      if (item.type === 'submit') {
        item.type = 'primary';
        item.htmlType = 'submit';
      }
      return getButton(item, index);
    })
  );
};

function getButton() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var index = arguments[1];
  var _obj$text = obj.text,
      text = _obj$text === undefined ? '' : _obj$text;

  delete obj.text;
  return _react2.default.createElement(
    _button2.default,
    (0, _extends3.default)({ key: index }, obj),
    text
  );
}
module.exports = exports['default'];