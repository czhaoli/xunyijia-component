'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/icon/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _css2 = require('antd/lib/upload/style/css');

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _css3 = require('antd/lib/button/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _css4 = require('antd/lib/message/style/css');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp2;

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _config = require('../constants/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Avatar: {
    displayName: 'Avatar'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components-temp/OSSUploader.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

/*
  参考： components/choolaccount/schoolaccount.js
  value： 默认的文件url
  policyUrl： 获取policy的url
  onChange： 上传文件改变时候调用，传回目前文件的url
  例如
    jsx：
      <FormItem
        {... this.state.licenseValidate === 'error' ? {licenseValidate: 'error', help: '请上传收费许可证'} : {} }
        label={'收费许可证'}
      >
        <OSSUploader
          value={chargingLicense}
          policyUrl={SCHOOL_LICENCE_POLICY}
          onChange={this.onUpload.bind(this)}
        />
      </FormItem>
    onchange和保存验证：
      onUpload(url) {
        this.chargingLicense = url;
        const licenseValidate = url ? '' : 'error';
        this.setState({
          licenseValidate
        });
      }
    数据保存：
      state = {
        licenseValidate: '',
      }
      chargingLicense = ''
    提交时候获得url和进行检验
      const { licenseValidate } = this.state;
      if (regionValidate === 'error') {
      let chargingLicense = this.chargingLicense;
      if (licenseValidate === 'error') {
        return;
      }
 */
var Avatar = _wrapComponent('Avatar')((_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      host: '',
      fileList: []
    }, _this.policy = {
      key: '',
      policy: '',
      signature: '',
      success_action_status: 200,
      OSSAccessKeyId: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.props.value;

      if (!value) {
        return;
      }
      var defaultFileList = [{
        uid: (0, _v2.default)(),
        name: value.substr(value.lastIndexOf('/') + 1),
        url: value
      }];
      this.state.fileList = defaultFileList;
    }
  }, {
    key: 'fetchPolicy',
    value: function fetchPolicy(url) {
      var _this2 = this;

      var xmlhttp = void 0;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        // code for IE5 and IE6
        xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
      }
      if (xmlhttp !== null) {
        xmlhttp.onreadystatechange = function () {
          // 4 = "loaded"
          if (xmlhttp.readyState === 4) {
            // 200 = OK
            if (xmlhttp.status === 200) {
              var response = xmlhttp.response;
              var data = JSON.parse(response).data;
              _this2.policy.key = data.dir;
              _this2.policy.policy = data.policy;
              _this2.policy.signature = data.signature;
              _this2.policy.success_action_status = 200;
              _this2.policy.OSSAccessKeyId = data.accessid;
              _this2.setState({
                host: data.host
              });
            } else {
              _message2.default.error('获取验证失败');
            }
          }
        };
        var token = localStorage.getItem(_config2.default.tokenKey);
        xmlhttp.open("GET", url, false);
        xmlhttp.setRequestHeader("authorization", token);
        xmlhttp.send(null);
      }
    }
  }, {
    key: 'beforeUpload',
    value: function beforeUpload(file) {
      this.policy.key += (0, _v2.default)() + '/' + file.name;
      file.url = this.state.host + '/' + this.policy.key;
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref2) {
      var file = _ref2.file,
          fileList = _ref2.fileList,
          event = _ref2.event;

      if (file.status === 'error') {
        _message2.default.error('上传失败，请重新上传！');
        return;
      }
      var _props = this.props,
          onChange = _props.onChange,
          accept = _props.accept;

      fileList = fileList.slice(-1);
      this.setState({ fileList: fileList });
      var nowFile = fileList[0] || {};
      if (nowFile.originFileObj) {
        nowFile = nowFile.originFileObj;
      }
      if (fileList.length === 0) {
        onChange();
      }
      if (!event || event.percent !== 100) {
        return;
      }
      onChange(nowFile.url, accept);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          policyUrl = _props2.policyUrl,
          onChange = _props2.onChange,
          showImg = _props2.showImg,
          jsx = _props2.jsx,
          accept = _props2.accept;
      var fileList = this.state.fileList;


      return _react3.default.createElement(
        _upload2.default,
        {
          accept: accept,
          fileList: fileList,
          data: this.policy,
          action: this.state.host,
          listType: 'picture',
          showUploadList: showImg,
          onChange: this.onChange.bind(this),
          beforeUpload: this.beforeUpload.bind(this)
        },
        _react3.default.createElement(
          _button2.default,
          { style: { 'zIndex': 1000 }, onClick: function onClick() {
              _this3.fetchPolicy(policyUrl);
            } },
          jsx
        )
      );
    }
  }]);
  return Avatar;
}(_react2.Component), _class.PropTypes = {
  accept: _react2.PropTypes.string,
  value: _react2.PropTypes.string,
  policyUrl: _react2.PropTypes.string.isRequired,
  onChange: _react2.PropTypes.func,
  showImg: _react2.PropTypes.bool,
  jsx: _react2.PropTypes.element
}, _class.defaultProps = {
  accept: 'image/*',
  policyUrl: '',
  onChange: function onChange() {},
  showImg: true,
  jsx: _react3.default.createElement(
    'div',
    null,
    _react3.default.createElement(_icon2.default, { type: 'upload' }),
    ' Click to upload'
  )
}, _temp2));

exports.default = Avatar;
module.exports = exports['default'];