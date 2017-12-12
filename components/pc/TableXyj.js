'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

require('antd/lib/table/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('constants/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <TableXyj
     columns={columns}
     total={count}
     dataSource={data}
     fetchList={fetchSystemAccountList}
     rest={{
       name,
       accountId,
     }}
   />
 * pagination： 分页，传false不显示分页
 * columns：表格列表信息
 * total: 总数
 * dataSource： 表格数据源
 * fetchList：分页变化时候发的请求
 * rest：发请求带过去的额外数据（除了page，perPage外的数据）
 *
 */
exports.default = function (_ref) {
  var _ref$pagination = _ref.pagination,
      pagination = _ref$pagination === undefined ? true : _ref$pagination,
      _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? [] : _ref$columns,
      _ref$total = _ref.total,
      total = _ref$total === undefined ? 0 : _ref$total,
      _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === undefined ? [] : _ref$dataSource,
      _ref$fetchList = _ref.fetchList,
      fetchList = _ref$fetchList === undefined ? function () {} : _ref$fetchList,
      _ref$rest = _ref.rest,
      rest = _ref$rest === undefined ? {} : _ref$rest;

  var filters = {};
  pagination && (pagination = {
    pageSizeOptions: ['2', '5', '10'],
    // current: page,
    total: total,
    showTotal: function showTotal(num) {
      return '\u5171 ' + num + ' \u6761';
    },
    // 是否可以快速跳转至某页
    showQuickJumper: true,
    // 是否可以改变 pageSize
    showSizeChanger: true,
    // 页码改变的回调
    onChange: function onChange(page, perPage) {
      var obj = { perPage: perPage, page: page };
      var data = (0, _assign2.default)({}, obj, rest);
      fetchList(data);
    },
    // pageSize 变化的回调
    onShowSizeChange: function onShowSizeChange(page, perPage) {
      var obj = { perPage: perPage, page: page };
      var data = (0, _assign2.default)({}, obj, rest);
      fetchList(data);
    }
  });
  return _react2.default.createElement(_table2.default, {
    columns: columns,
    dataSource: dataSource,
    pagination: pagination,
    rowKey: function rowKey(item, index) {
      return item['_id'] || index;
    }
  });
};

module.exports = exports['default'];