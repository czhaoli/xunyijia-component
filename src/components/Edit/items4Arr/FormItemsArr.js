'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _css = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _css2 = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
/*
  items=[[label, jsx, key, rules, obj]]
 */

exports.default = function (_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === undefined ? [] : _ref$items,
      getFieldDecorator = _ref.getFieldDecorator,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === undefined ? {} : _ref$defaultValue;

  var arr = [];
  items.map(function (item, index) {
    //  为空值，0，不为Array，为空Array，返回空
    if (!item || item.constructor.name !== 'Array' || item.length === 0) {
      return null;
    }
    arr.push(getFormItem({ item: item, index: index, getFieldDecorator: getFieldDecorator, defaultValue: defaultValue }));
  });
  return arr;
};

function getFormItem(_ref2) {
  var item = _ref2.item,
      index = _ref2.index,
      getFieldDecorator = _ref2.getFieldDecorator,
      defaultValue = _ref2.defaultValue;

  var defaultJsx = _react2.default.createElement(_input2.default, { placeholder: '\u8BF7\u586B\u5199' + (item[0] || '') });

  var _item = (0, _slicedToArray3.default)(item, 5),
      label = _item[0],
      key = _item[2],
      rules = _item[3],
      obj = _item[4];

  var jsx = item[1] || defaultJsx;
  if (!key) {
    return _react2.default.createElement(
      FormItem,
      (0, _extends3.default)({ key: index, label: label }, obj),
      jsx
    );
  } else {
    var rulesValue = void 0;
    if (typeof rules === 'function') {
      rulesValue = [{
        validator: rules
      }];
    } else {
      rulesValue = [rules];
    }

    return _react2.default.createElement(
      FormItem,
      (0, _extends3.default)({ key: index, label: label }, obj),
      getFieldDecorator(key, {
        rules: rulesValue,
        initialValue: defaultValue[key]
      })(jsx)
    );
  }
}
module.exports = exports['default'];