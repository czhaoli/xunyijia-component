'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/table/style/css');

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _css2 = require('antd/lib/button/style/css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _css3 = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

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

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Account: {
    displayName: 'Account'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components-temp/Table.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

// title, searchList=[{key,value,onchange}] onAdd
// columns, page, total, perPage, data, fetchList,
var Account = _wrapComponent('Account')(function (_Component) {
  (0, _inherits3.default)(Account, _Component);

  function Account() {
    (0, _classCallCheck3.default)(this, Account);
    return (0, _possibleConstructorReturn3.default)(this, (Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).apply(this, arguments));
  }

  (0, _createClass3.default)(Account, [{
    key: 'fetchList',
    value: function fetchList(obj) {
      var _props = this.props,
          searchList = _props.searchList,
          perPage = _props.perPage;

      var data = {};
      if (obj) {
        data = obj;
      } else {
        data = { perPage: perPage };
        searchList.forEach(function (item) {
          item.key && (data[item.key] = item.value);
        });
      }
      this.props.fetchList(data);
    }
  }, {
    key: 'renderSearch',
    value: function renderSearch(searchList) {
      var _this2 = this;

      var search = [];
      searchList.forEach(function (item, index) {
        search.push(_react3.default.createElement(
          'div',
          { key: String(index), className: 'search-account col-md-4 col-xs-6' },
          _react3.default.createElement(
            'label',
            null,
            item.label
          ),
          _react3.default.createElement(_input2.default, {
            className: 'search-input',
            value: item.value,
            onChange: item.onChange,
            onPressEnter: _this2.fetchList.bind(_this2, null) })
        ));
      });
      search.push(_react3.default.createElement(
        _button2.default,
        {
          key: String(searchList.length),
          type: 'primary',
          className: 'search-submit btn-margin-top',
          onClick: this.fetchList.bind(this, null)
        },
        '\u67E5\u8BE2'
      ));

      return search;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          title = _props2.title,
          searchList = _props2.searchList,
          columns = _props2.columns,
          page = _props2.page,
          total = _props2.total,
          perPage = _props2.perPage,
          onAdd = _props2.onAdd,
          data = _props2.data,
          rowSelection = _props2.rowSelection;

      var pagination = {
        current: page,
        total: total,
        // 是否可以快速跳转至某页
        showQuickJumper: true,
        // 是否可以改变 pageSize
        showSizeChanger: true,
        // 页码改变的回调
        onChange: function onChange(current) {
          var obj = { perPage: perPage, page: current };
          searchList && searchList.forEach(function (item) {
            item.key && (obj[item.key] = item.value);
          });
          _this3.fetchList.call(_this3, obj);
        },
        // pageSize 变化的回调
        onShowSizeChange: function onShowSizeChange(current, pageSize) {
          var obj = { perPage: pageSize, page: current };
          searchList && searchList.forEach(function (item) {
            item.key && (obj[item.key] = item.value);
          });
          _this3.fetchList.call(_this3, obj);
        }
      };
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_reactHelmet2.default, { title: title }),
        _react3.default.createElement(
          'div',
          { className: 'search-box clearfix' },
          searchList && this.renderSearch.call(this, searchList),
          onAdd && _react3.default.createElement(
            _button2.default,
            { type: 'primary', className: 'fr btn-margin-top', onClick: onAdd },
            '\u65B0\u589E\u8D26\u53F7'
          )
        ),
        _react3.default.createElement(_table2.default, { columns: columns, dataSource: data, pagination: pagination, rowKey: function rowKey(item) {
            return item['_id'];
          }, rowSelection: rowSelection })
      );
    }
  }]);
  return Account;
}(_react2.Component));

exports.default = Account;
module.exports = exports['default'];