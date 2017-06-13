'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _css = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _css2 = require('antd/lib/select/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BtnArr = require('./BtnArr');

var _BtnArr2 = _interopRequireDefault(_BtnArr);

var _FormItemsArr = require('./FormItemsArr');

var _FormItemsArr2 = _interopRequireDefault(_FormItemsArr);

var _StatusSelect = require('../StatusSelect');

var _StatusSelect2 = _interopRequireDefault(_StatusSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

/*
  例子：smartsport-school-frontend/src/containers/SchoolAccount/AcountEditForm.js
 */
exports.default = function (_ref) {
  var _ref$submit = _ref.submit;
  _ref$submit = _ref$submit === undefined ? {} : _ref$submit;
  var submitFunc = _ref$submit.onClick,
      submitText = _ref$submit.text,
      cancel = _ref.cancel,
      _ref$items = _ref.items,
      items = _ref$items === undefined ? [] : _ref$items,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === undefined ? {} : _ref$defaultValue,
      _ref$form = _ref.form,
      form = _ref$form === undefined ? {} : _ref$form,
      _ref$status = _ref.status,
      status = _ref$status === undefined ? false : _ref$status,
      props = (0, _objectWithoutProperties3.default)(_ref, ['submit', 'cancel', 'items', 'defaultValue', 'form', 'status']);
  var getFieldValue = form.getFieldValue,
      getFieldDecorator = form.getFieldDecorator;

  return _react2.default.createElement(
    _form2.default,
    (0, _extends3.default)({}, props, { onSubmit: submitFunc }),
    (0, _FormItemsArr2.default)({
      items: items,
      defaultValue: defaultValue,
      getFieldDecorator: getFieldDecorator
    }),
    status && _react2.default.createElement(_StatusSelect2.default, {
      getFieldValue: getFieldValue,
      getFieldDecorator: getFieldDecorator,
      initialValue: defaultValue.status
    }),
    _react2.default.createElement(_BtnArr2.default, {
      btnArr: [cancel, { type: 'submit', text: submitText }]
    })
  );
};

module.exports = exports['default'];