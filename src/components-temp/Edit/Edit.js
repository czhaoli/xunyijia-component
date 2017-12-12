'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _css2 = require('antd/lib/message/style/css');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

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

var _validation = require('utils/validation');

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components-temp/Edit/Edit.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

// 封装的添加账号组件
var AccountAdd = _form2.default.create()(_wrapComponent('_component')(_react3.default.createClass({
  displayName: 'AccountAdd',
  succ: function succ() {
    this.props.succ();
  },
  cancelAdd: function cancelAdd() {
    this.props.cancelAdd();
  },
  handleSubmit: function handleSubmit(event) {
    var _this = this;

    event.preventDefault();
    this.props.form.validateFields(function (err, values) {
      if (!err) {
        var receivedValues = {
          accountId: values.accountId,
          name: values.name,
          password: values.password,
          role: values.role,
          status: parseInt(values.status)
        };
        var state = _this.props.location.state;
        if (state && state['_id']) {
          receivedValues.id = state['_id'];
        }
        var obj = {
          params: receivedValues,
          succ: _this.succ
        };
        _this.props.fetchCreateSaveAccount(obj);
      } else {
        _message2.default.error('请检查输入项！');
      }
    });
  },
  render: function render() {
    var _props$form = this.props.form,
        getFieldDecorator = _props$form.getFieldDecorator,
        setFieldsValue = _props$form.setFieldsValue,
        getFieldValue = _props$form.getFieldValue;
    var _props = this.props,
        roleList = _props.roleList,
        saveAccountState = _props.saveAccountState,
        editAccountState = _props.editAccountState;

    var locationState = this.props.location.state;
    var isAdd = !locationState;
    var tips = isAdd ? saveAccountState : editAccountState;
    var initialValueObj = {};
    if (locationState) {
      initialValueObj.accountId = locationState.accountId;
      initialValueObj.name = locationState.name;
      initialValueObj.role = locationState.role._id;
      initialValueObj.status = String(locationState.status);
    }
    var items = [{
      label: '管理员账号',
      key: 'accountId',
      rules: [{
        required: true,
        message: _validation.ACCOUNT_TIP,
        pattern: _validation.ACCOUNT
      }],
      jsx: _react3.default.createElement(_input2.default, { placeholder: '请填写账号名称...', disabled: isAdd ? false : true })
    }, {
      add: {
        label: '登录密码',
        key: 'password',
        rules: [{
          required: true,
          message: _validation.PASSWORD_TIP,
          pattern: _validation.PASSWORD
        }],
        jsx: _react3.default.createElement(_input2.default, { placeholder: '请填写登录密码...', type: 'password' })
      }
    }, {
      label: '姓名',
      key: 'name',
      rules: [{
        required: true,
        message: '此选项为必填项，请填写！'
      }],
      jsx: _react3.default.createElement(_input2.default, { placeholder: '\u8BF7\u586B\u5199\u59D3\u540D...' })
    }, {
      label: '角色',
      key: 'role',
      rules: [{
        required: true,
        message: '角色为必选项，请选择角色！'
      }],
      jsx: _react3.default.createElement(
        _select2.default,
        { placeholder: '\u8BF7\u9009\u62E9\u89D2\u8272...' },
        roleList.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item._id, value: item._id },
            ' ',
            item.name,
            ' '
          );
        })
      )
    }];
    return _react3.default.createElement(_Form2.default, {
      submit: this.handleSubmit,
      cancel: this.cancelAdd,
      items: items,
      initialValueObj: initialValueObj,
      isAdd: isAdd,
      getFieldDecorator: getFieldDecorator,
      getFieldValue: getFieldValue,
      tips: tips
    });
  }
})));
exports.default = AccountAdd;
module.exports = exports['default'];