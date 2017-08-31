'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;

exports.default = function (_ref) {
  var items = _ref.items,
      _ref$isAdd = _ref.isAdd,
      isAdd = _ref$isAdd === undefined ? false : _ref$isAdd,
      getFieldDecorator = _ref.getFieldDecorator,
      _ref$initialValueObj = _ref.initialValueObj,
      initialValueObj = _ref$initialValueObj === undefined ? {} : _ref$initialValueObj;

  var arr = [];
  items.map(function (item, index) {
    if (item.add) {
      item = item.add;
      if (isAdd) {
        arr.push(getFormItem({ item: item, index: index, getFieldDecorator: getFieldDecorator, initialValueObj: initialValueObj }));
      }
    } else {
      arr.push(getFormItem({ item: item, index: index, getFieldDecorator: getFieldDecorator, initialValueObj: initialValueObj }));
    }
  });
  return arr;
};

function getFormItem(_ref2) {
  var item = _ref2.item,
      index = _ref2.index,
      getFieldDecorator = _ref2.getFieldDecorator,
      initialValueObj = _ref2.initialValueObj;

  if (!item.key && item.jsx) {
    return _react2.default.createElement(
      FormItem,
      { key: index, label: item.label },
      item.jsx
    );
  } else if (item.key) {
    return _react2.default.createElement(
      FormItem,
      { key: index, label: item.label },
      getFieldDecorator(item.key, {
        rules: item.rules,
        initialValue: initialValueObj[item.key]
      })(item.jsx)
    );
  } else {
    return null;
  }
}
module.exports = exports['default'];