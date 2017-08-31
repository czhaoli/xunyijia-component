'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _css = require('antd/lib/button/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _css2 = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _css3 = require('antd/lib/select/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _css4 = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'pc-code/SearchHead.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
} /**
   * 参数：
   * fetchList：表单提交调用
   * rest： 表单提交的额外参数
   * items： 数组，用于显示表单条目，里面是数据继续包含对象，也可以直接包含对象
      对象:
        label = ''： 表单条目的label,
        key = ''： 表单条目的key,
        type = 'input' | 'submit' | 'reset' | 'select' | 'extra' 默认是input， submit是查询，reset是重置，extra是右浮动
        options = [{}]： 下拉框数据,
        jsx： 如果有，用这个jsx，如果有options，用select，也没有jsx，则用input,
        style = {}： 表单条目的style,
   className： 表单条目的class,
   *     const items = [
         [
           {key: 'name', label: '联系人', type: 'select', options: [{key: 'a1', value: 'a2'}]},
           {key: 'tel', label: '联系人电话'},
           {type: 'submit'},
           {type: 'reset', style: {width: 'auto'}},
         ],
         [
           {key: 'name', label: '联系人'},
           {key: 'tel', label: '联系人电话'},
           {type: 'submit'},
           {type: 'reset'},
           {type: 'extra', jsx: <Button>13</Button>},
         ],
         [
           {key: 'name', label: '联系人'},
           {key: 'tel', label: '联系人电话'},
           {type: 'submit'},
           {type: 'reset'},
           {type: 'extra', jsx: <Button>13</Button>},
         ],
       ];
       const items1 = [
         {key: 'name', label: '联系人', type: 'select', options: [{key: 'a1', value: 'a2'}]},
         {key: 'tel', label: '联系人电话'},
         {type: 'submit'},
         {type: 'reset'},
         {type: 'extra', jsx: <Button>13</Button>, style: {textAlign: 'right'}},
       ];
       <SearchHead
         items={items}
         fetchList={fetchSystemAccountList}
         rest={{
           perPage,
         }}
       />
   *
   * const items = [
       {label: '类型', options: typeList.map(item=>({...item, value: item.name})), key: 'type', width: 200},
       { extra: true, jsx: extra, style: {textAlign: 'right'} },
      ];
     <SearchHead
         items={items}
       />
   */


var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var SearchHead = _form2.default.create({})(_wrapComponent('_component')(_react3.default.createClass({
  displayName: 'SearchHead',

  PropTypes: {
    fetchList: _react2.PropTypes.func,
    rest: _react2.PropTypes.object,
    items: _react2.PropTypes.array
  },
  defaultProps: {
    fetchList: function fetchList() {},
    rest: {},
    items: []
  },
  handleSubmit: function handleSubmit(event) {
    event.preventDefault();
    var getFieldsValue = this.props.form.getFieldsValue;
    var _props$rest = this.props.rest,
        rest = _props$rest === undefined ? {} : _props$rest;

    var data = (0, _assign2.default)({}, getFieldsValue(), rest);
    this.props.fetchList(data);
  },
  handleReset: function handleReset() {
    this.props.form.resetFields();
    var _props = this.props,
        fetchList = _props.fetchList,
        _props$rest2 = _props.rest,
        rest = _props$rest2 === undefined ? {} : _props$rest2;

    fetchList(rest);
  },
  inputRender: function inputRender(_ref) {
    var key = _ref.key,
        label = _ref.label,
        jsx = _ref.jsx,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style,
        className = _ref.className;
    var getFieldDecorator = this.props.form.getFieldDecorator;

    return _react3.default.createElement(
      'div',
      {
        key: key,
        style: (0, _assign2.default)({ verticalAlign: 'middle', display: 'table-cell', width: 230 }, style),
        className: className
      },
      _react3.default.createElement(
        FormItem,
        {
          label: label
        },
        getFieldDecorator(key)(jsx || _react3.default.createElement(_input2.default, {
          size: 'default',
          placeholder: '\u8BF7\u8F93\u5165',
          onPressEnter: this.handleSubmit
        }))
      )
    );
  },
  selectRender: function selectRender(_ref2) {
    var key = _ref2.key,
        label = _ref2.label,
        jsx = _ref2.jsx,
        _ref2$style = _ref2.style,
        style = _ref2$style === undefined ? {} : _ref2$style,
        className = _ref2.className,
        _ref2$options = _ref2.options,
        options = _ref2$options === undefined ? [] : _ref2$options;
    var getFieldDecorator = this.props.form.getFieldDecorator;

    return _react3.default.createElement(
      'div',
      {
        key: key,
        style: (0, _assign2.default)({ verticalAlign: 'middle', display: 'table-cell', width: 230 }, style),
        className: className
      },
      _react3.default.createElement(
        FormItem,
        {
          label: label
        },
        getFieldDecorator(key)(jsx || _react3.default.createElement(
          _select2.default,
          {
            placeholder: '\u8BF7\u9009\u62E9',
            notFoundContent: '\u6682\u65E0\u6570\u636E',
            size: 'default',
            style: { width: 150 }
          },
          options.map(function (item, index) {
            return _react3.default.createElement(
              Option,
              { key: item.value || item._id || index, value: item.value || item._id },
              ' ',
              item.key || item.name,
              ' '
            );
          })
        ))
      )
    );
  },
  submitRender: function submitRender(_ref3) {
    var _ref3$key = _ref3.key,
        key = _ref3$key === undefined ? 'submit' : _ref3$key,
        label = _ref3.label,
        jsx = _ref3.jsx,
        _ref3$style = _ref3.style,
        style = _ref3$style === undefined ? {} : _ref3$style,
        className = _ref3.className;

    return _react3.default.createElement(
      'div',
      {
        key: key,
        style: (0, _assign2.default)({ verticalAlign: 'middle', display: 'table-cell', width: 80, paddingTop: 2.5 }, style),
        className: className
      },
      jsx || _react3.default.createElement(
        _button2.default,
        {
          type: 'primary',
          className: 'search-submit',
          onClick: this.handleSubmit
        },
        label || '查询'
      )
    );
  },
  resetRender: function resetRender(_ref4) {
    var _ref4$key = _ref4.key,
        key = _ref4$key === undefined ? 'reset' : _ref4$key,
        label = _ref4.label,
        jsx = _ref4.jsx,
        _ref4$style = _ref4.style,
        style = _ref4$style === undefined ? {} : _ref4$style,
        className = _ref4.className;

    return _react3.default.createElement(
      'div',
      {
        key: key,
        style: (0, _assign2.default)({ verticalAlign: 'middle', display: 'table-cell', width: 80, paddingTop: 3 }, style),
        className: className
      },
      jsx || _react3.default.createElement(
        _button2.default,
        {
          className: 'antd-btn',
          onClick: this.handleReset
        },
        label || '重置'
      )
    );
  },
  extraRender: function extraRender(_ref5) {
    var _ref5$key = _ref5.key,
        key = _ref5$key === undefined ? 'extra' : _ref5$key,
        jsx = _ref5.jsx,
        _ref5$style = _ref5.style,
        style = _ref5$style === undefined ? {} : _ref5$style,
        className = _ref5.className;

    return _react3.default.createElement(
      'div',
      {
        key: key,
        style: (0, _assign2.default)({ verticalAlign: 'middle', display: 'table-cell', paddingTop: 3 }, style),
        className: className
      },
      jsx
    );
  },
  formItemRender: function formItemRender(_ref6) {
    var _ref6$type = _ref6.type,
        type = _ref6$type === undefined ? 'input' : _ref6$type,
        rest = (0, _objectWithoutProperties3.default)(_ref6, ['type']);

    var item = void 0;
    switch (type) {
      case 'input':
        item = this.inputRender(rest);
        break;
      case 'select':
        item = this.selectRender(rest);
        break;
      case 'submit':
        item = this.submitRender(rest);
        break;
      case 'reset':
        item = this.resetRender(rest);
        break;
      case 'extra':
        item = this.extraRender(rest);
        break;
      default:

    }
    return item;
  },
  checkExtra: function checkExtra(items) {
    var isGroup = false;
    var hasExtra = items.find(function (item) {
      if (item instanceof Array) {
        isGroup = true;
        var hasChildrenExtra = item.find(function (obj) {
          return obj.type === 'extra';
        });
        if (!hasChildrenExtra) {
          var _item$style = item[item.length - 1].style,
              style = _item$style === undefined ? {} : _item$style;

          style.width = 'auto';
          item[item.length - 1].style = style;
        }
      }
      return item.type === 'extra';
    });
    if (!isGroup && !hasExtra) {
      var _items$style = items[items.length - 1].style,
          style = _items$style === undefined ? {} : _items$style;

      style.width = 'auto';
      items[items.length - 1].style = style;
    }
  },
  render: function render() {
    var _this = this;

    var _props2 = this.props,
        form = _props2.form,
        items = _props2.items;
    var getFieldDecorator = form.getFieldDecorator;

    this.checkExtra(items);
    return _react3.default.createElement(
      _form2.default,
      {
        style: { borderWidth: 0 },
        hideRequiredMark: true,
        layout: 'inline',
        onSubmit: this.handleSubmit
      },
      _react3.default.createElement(
        'div',
        { style: { display: 'table', width: '100%' } },
        items.map(function (item, index) {
          if (item instanceof Array) {
            return _react3.default.createElement(
              'div',
              { style: { display: 'table', width: '100%' }, key: index },
              item.map(function (obj) {
                return _this.formItemRender(obj);
              })
            );
          } else {
            return _this.formItemRender(item);
          }
        })
      )
    );
  }
})));

exports.default = SearchHead;
module.exports = exports['default'];