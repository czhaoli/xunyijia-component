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

var _css3 = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _css4 = require('antd/lib/form/style/css');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _css5 = require('antd/lib/collapse/style/css');

var _collapse = require('antd/lib/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _css6 = require('antd/lib/checkbox/style/css');

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _reactRedux = require('react-redux');

var _reduxConnect = require('redux-connect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  AddRole: {
    displayName: 'AddRole'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components/RoleEdit.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var CheckboxGroup = _checkbox2.default.Group;
var Panel = _collapse2.default.Panel;
var FormItem = _form2.default.Item;

var AddRole = _wrapComponent('AddRole')(function (_Component) {
  (0, _inherits3.default)(AddRole, _Component);

  function AddRole(props) {
    (0, _classCallCheck3.default)(this, AddRole);

    // 用于做非空校验提示
    var _this = (0, _possibleConstructorReturn3.default)(this, (AddRole.__proto__ || (0, _getPrototypeOf2.default)(AddRole)).call(this, props));

    _this.state = {
      inputState: '',
      inputTips: '',
      checkboxState: '',
      checkboxTips: ''
    };
    return _this;
  }

  (0, _createClass3.default)(AddRole, [{
    key: 'saveBtn',
    value: function saveBtn(checkList, id, saveSucc, saveExpertRole) {
      var name = this.inputBox.refs.input.value;
      // 非空判断
      if (!name) {
        this.setState({
          inputState: 'error',
          inputTips: '必输项'
        });
      } else {
        this.setState({
          inputState: '',
          inputTips: ''
        });
      }
      if (!checkList || !checkList.length) {
        this.setState({
          checkboxState: 'error',
          checkboxTips: '必须勾选权限'
        });
      } else {
        this.setState({
          checkboxState: '',
          checkboxTips: ''
        });
      }
      // 发起保存请求
      if (name && checkList && checkList.length) {
        saveExpertRole({
          params: {
            name: name,
            id: id
          },
          succ: saveSucc
        });
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      var name = event.target.value;
      // 校验必输

      if (!name) {
        this.setState({
          inputState: 'error',
          inputTips: '必输项'
        });
      } else {
        this.setState({
          inputState: '',
          inputTips: ''
        });
      }
    }
  }, {
    key: 'onCheckChange',
    value: function onCheckChange(selectValues) {
      // 校验必须勾选
      if (!selectValues || !selectValues.length) {
        this.setState({
          checkboxState: 'error',
          checkboxTips: '必须勾选权限'
        });
      } else {
        this.setState({
          checkboxState: '',
          checkboxTips: ''
        });
      }
      this.props.changeCheck(selectValues);
    }
  }, {
    key: 'onChangeCheckAll',
    value: function onChangeCheckAll(event, checkAllValue, checkList) {
      var checked = event.target.checked;
      var arrAll = void 0;
      if (checked) {
        // 全选情况
        arrAll = checkList.concat(checkAllValue);
        arrAll = (0, _from2.default)(new _set2.default(arrAll));
      } else {
        // 取消全选情况
        arrAll = checkList.filter(function (item) {
          return !checkAllValue.includes(item);
        });
      }
      this.onCheckChange(arrAll);
    }
  }, {
    key: 'checkContain',
    value: function checkContain(options, checkList) {
      // console.log(allValue, defaultValue); // allvalue全部在defaultvalue里面，则表示全选，一部分在里面表现半选中，没有则表示没有选中
      // console.log(allValue, defaultValue); // allvalue全部在defaultvalue里面，则表示全选，一部分在里面表现半选中，没有则表示没有选中
      var checked = options.every(function (item) {
        return checkList.includes(item._id);
      });
      var indeterminate = options.some(function (item) {
        return checkList.includes(item._id);
      });
      return { checked: checked, indeterminate: indeterminate };
    }
    // 每一个勾选组

  }, {
    key: 'getRoleBlock',
    value: function getRoleBlock(item, index, checkList) {
      var _this2 = this;

      // 标题
      var title = item.name;
      var options = item.permissions;
      options = options.map(function (option) {
        // 先清楚之前存在的再添加，用于作为勾选项的value和label
        delete option.value;
        delete option.label;
        option.value = option._id;
        option.label = option.name;
        return option;
      });
      // 当前折叠块的所有条目
      // 检查全选勾选框的情况
      var checkAllState = this.checkContain(options, checkList);
      var checkAllValue = options.map(function (option) {
        return option._id;
      });
      return _react3.default.createElement(
        Panel,
        { header: title, key: String(index) },
        _react3.default.createElement(
          'div',
          { style: { borderBottom: '1px solid #E9E9E9' } },
          _react3.default.createElement(
            _checkbox2.default,
            {
              checked: checkAllState['checked'],
              indeterminate: checkAllState['indeterminate'],
              onChange: function onChange(event) {
                _this2.onChangeCheckAll.call(_this2, event, checkAllValue, checkList);
              }
            },
            '\u5168\u9009'
          )
        ),
        _react3.default.createElement('br', null),
        _react3.default.createElement(CheckboxGroup, { options: options, value: checkList, onChange: function onChange(selectValues) {
            _this2.onCheckChange(selectValues);
          } })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          permissionList = _props.permissionList,
          name = _props.name,
          isEdit = _props.isEdit,
          saveState = _props.saveState,
          cancelBtn = _props.cancelBtn,
          checkList = _props.checkList,
          id = _props.id,
          saveSucc = _props.saveSucc,
          saveRole = _props.saveRole;
      // changeCheck
      // 默认角色名

      var title = isEdit ? '编辑角色' : '新增角色';
      var btnContent = isEdit ? '保存' : '确认';
      return _react3.default.createElement(
        'div',
        { style: {
            textAlign: 'left',
            'margin': '0px'
          } },
        _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(
            'span',
            { style: { fontSize: 18, borderWidth: 2, fontWeight: 'bold' } },
            title
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'roleTable' },
          _react3.default.createElement(
            'div',
            { style: { marginTop: 20 } },
            _react3.default.createElement(
              'span',
              { style: {
                  float: 'left',
                  color: 'black',
                  fontSize: 14,
                  display: 'block',
                  marginBottom: 2
                } },
              '\u89D2\u8272:'
            )
          ),
          _react3.default.createElement(
            FormItem,
            {
              wrapperCol: { span: 24 },
              hasFeedback: true,
              validateStatus: this.state.inputState,
              help: this.state.inputTips
            },
            _react3.default.createElement(_input2.default, { defaultValue: name, ref: function ref(_ref) {
                return _this3.inputBox = _ref;
              }, type: 'text', placeholder: '\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0...',
              maxLength: '16',
              onChange: this.onInputChange.bind(this)
            })
          ),
          _react3.default.createElement(
            'div',
            { style: { marginTop: 20 } },
            _react3.default.createElement(
              'span',
              { style: { color: 'black', fontSize: 14 } },
              '\u6743\u9650:'
            ),
            _react3.default.createElement('br', null),
            _react3.default.createElement(
              _collapse2.default,
              { bordered: false, defaultActiveKey: ['0'] },
              permissionList.map(function (item, index) {
                return _this3.getRoleBlock(item, index, checkList);
              })
            ),
            _react3.default.createElement(_alert2.default, { style: { height: 30, marginTop: 3, marginBottom: 3 }, message: this.state.checkboxTips, type: this.state.checkboxState, showIcon: true })
          ),

          // 保存操作的提示
          saveState && _react3.default.createElement(_alert2.default, { style: { height: 30, marginTop: 3, marginBottom: 3 }, message: saveState, type: 'info', showIcon: true }),
          _react3.default.createElement(
            'div',
            { className: styles.buttonArea, style: {
                textAlign: 'center',
                margin: '20px'
              } },
            _react3.default.createElement(
              _button2.default,
              { type: 'default', style: {
                  marginRight: 40
                },
                onClick: cancelBtn
              },
              '\u53D6\u6D88'
            ),
            _react3.default.createElement(
              _button2.default,
              { type: 'primary',
                onClick: this.saveBtn.bind(this, checkList, id, saveSucc, saveRole)
              },
              btnContent
            )
          )
        )
      );
    }
  }]);
  return AddRole;
}(_react2.Component));

exports.default = AddRole;
module.exports = exports['default'];