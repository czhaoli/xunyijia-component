'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _css2 = require('antd/lib/select/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Btn = require('./Btn');

var _Btn2 = _interopRequireDefault(_Btn);

var _StatusSelect = require('./StatusSelect');

var _StatusSelect2 = _interopRequireDefault(_StatusSelect);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _FormItems = require('./FormItems');

var _FormItems2 = _interopRequireDefault(_FormItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      submit = _ref.submit,
      cancel = _ref.cancel,
      items = _ref.items,
      initialValueObj = _ref.initialValueObj,
      isAdd = _ref.isAdd,
      getFieldDecorator = _ref.getFieldDecorator,
      getFieldValue = _ref.getFieldValue,
      tips = _ref.tips,
      title = _ref.title,
      btnContent = _ref.btnContent,
      _ref$status = _ref.status,
      status = _ref$status === undefined ? true : _ref$status;

  title || (title = !isAdd ? '编辑账号' : '新增账号');
  btnContent || (btnContent = !isAdd ? '保存' : '确认');
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Title2.default, { title: title }),
    _react2.default.createElement(
      _form2.default,
      { onSubmit: submit, style: {
          marginTop: 15
        } },
      (0, _FormItems2.default)({
        items: items,
        isAdd: isAdd,
        getFieldDecorator: getFieldDecorator,
        initialValueObj: initialValueObj
      }),
      status && _react2.default.createElement(_StatusSelect2.default, {
        getFieldValue: getFieldValue,
        getFieldDecorator: getFieldDecorator,
        initialValue: initialValueObj.status
      }),
      (0, _Btn2.default)({
        tips: tips,
        btnContent: btnContent,
        cancelAdd: cancel
      })
    )
  );
};

module.exports = exports['default'];