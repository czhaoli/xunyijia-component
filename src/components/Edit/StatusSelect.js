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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

exports.default = function (_ref) {
  var getFieldValue = _ref.getFieldValue,
      getFieldDecorator = _ref.getFieldDecorator,
      initialValue = _ref.initialValue;

  return _react2.default.createElement(
    FormItem,
    { colon: false, label: Number(getFieldValue('status')) === 0 ? _react2.default.createElement(
        'span',
        null,
        '\u72B6\u6001:',
        _react2.default.createElement(
          'span',
          { className: 'stopUse', style: {
              color: 'red'
            } },
          Number(getFieldValue('status')) === 0 && '（停用状态下，部分功能将无法正常使用）'
        )
      ) : '状态:' },
    getFieldDecorator('status', {
      rules: [{
        required: true,
        message: '状态为必选项，请选择状态！'
      }],
      initialValue: initialValue
    })(_react2.default.createElement(
      _select2.default,
      { notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9' },
      _react2.default.createElement(
        Option,
        { value: '1' },
        '\u542F\u7528'
      ),
      _react2.default.createElement(
        Option,
        { value: '0' },
        '\u505C\u7528'
      )
    ))
  );
};

module.exports = exports['default'];