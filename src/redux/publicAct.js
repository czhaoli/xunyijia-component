'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.fetchList = fetchList;
exports.edit = edit;
exports.get = get;
exports.getById = getById;
exports.post = post;
exports.postById = postById;
exports.put = put;
exports.putById = putById;
exports.del = del;
exports.delById = delById;

var _tool = require('../utils/tool');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchList(_ref) {
  var path = _ref.path,
      queryObj = _ref.queryObj,
      _ref$succ = _ref.succ,
      succ = _ref$succ === undefined ? function () {} : _ref$succ,
      _ref$fail = _ref.fail,
      fail = _ref$fail === undefined ? function () {} : _ref$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['path', 'queryObj', 'succ', 'fail']);

  var beginType = path + '_GET_BEGIN';
  var succType = path + '_GET_SUCC';
  var failType = path + '_GET_FAIL';
  var query = (0, _tool.obj2query)(queryObj);
  path = '' + path + (query ? '?' : '') + query;
  return sendReq(path, 'get', null, rest, succ, fail, beginType, succType, failType);
}
function edit(_ref2) {
  var _ref2$method = _ref2.method,
      method = _ref2$method === undefined ? 'put' : _ref2$method,
      path = _ref2.path,
      id = _ref2.id,
      body = _ref2.body,
      _ref2$succ = _ref2.succ,
      succ = _ref2$succ === undefined ? function () {} : _ref2$succ,
      _ref2$fail = _ref2.fail,
      fail = _ref2$fail === undefined ? function () {} : _ref2$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref2, ['method', 'path', 'id', 'body', 'succ', 'fail']);

  var beginType = path + '_PUT_BEGIN';
  var succType = path + '_PUT_SUCC';
  var failType = path + '_PUT_FAIL';
  path = path.replace(':id', id);
  return sendReq(path, method, body, rest, succ, fail, beginType, succType, failType);
}

function get(_ref3) {
  var path = _ref3.path,
      _ref3$succ = _ref3.succ,
      succ = _ref3$succ === undefined ? function () {} : _ref3$succ,
      _ref3$fail = _ref3.fail,
      fail = _ref3$fail === undefined ? function () {} : _ref3$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref3, ['path', 'succ', 'fail']);

  var beginType = path + '_GET_BEGIN';
  var succType = path + '_GET_SUCC';
  var failType = path + '_GET_FAIL';
  return sendReq(path, 'get', null, rest, succ, fail, beginType, succType, failType);
}
function getById(_ref4) {
  var path = _ref4.path,
      id = _ref4.id,
      _ref4$succ = _ref4.succ,
      succ = _ref4$succ === undefined ? function () {} : _ref4$succ,
      _ref4$fail = _ref4.fail,
      fail = _ref4$fail === undefined ? function () {} : _ref4$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref4, ['path', 'id', 'succ', 'fail']);

  var beginType = path + '_GET_BEGIN';
  var succType = path + '_GET_SUCC';
  var failType = path + '_GET_FAIL';
  path = path.replace(':id', id);
  return sendReq(path, 'get', null, rest, succ, fail, beginType, succType, failType);
}

function post(_ref5) {
  var path = _ref5.path,
      body = _ref5.body,
      _ref5$succ = _ref5.succ,
      succ = _ref5$succ === undefined ? function () {} : _ref5$succ,
      _ref5$fail = _ref5.fail,
      fail = _ref5$fail === undefined ? function () {} : _ref5$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref5, ['path', 'body', 'succ', 'fail']);

  var beginType = path + '_POST_BEGIN';
  var succType = path + '_POST_SUCC';
  var failType = path + '_POST_FAIL';
  return sendReq(path, 'post', body, rest, succ, fail, beginType, succType, failType);
}
function postById(_ref6) {
  var path = _ref6.path,
      id = _ref6.id,
      body = _ref6.body,
      _ref6$succ = _ref6.succ,
      succ = _ref6$succ === undefined ? function () {} : _ref6$succ,
      _ref6$fail = _ref6.fail,
      fail = _ref6$fail === undefined ? function () {} : _ref6$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref6, ['path', 'id', 'body', 'succ', 'fail']);

  var beginType = path + '_POST_BEGIN';
  var succType = path + '_POST_SUCC';
  var failType = path + '_POST_FAIL';
  path = path.replace(':id', id);
  return sendReq(path, 'post', body, rest, succ, fail, beginType, succType, failType);
}
function put(_ref7) {
  var path = _ref7.path,
      body = _ref7.body,
      _ref7$succ = _ref7.succ,
      succ = _ref7$succ === undefined ? function () {} : _ref7$succ,
      _ref7$fail = _ref7.fail,
      fail = _ref7$fail === undefined ? function () {} : _ref7$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref7, ['path', 'body', 'succ', 'fail']);

  var beginType = path + '_PUT_BEGIN';
  var succType = path + '_PUT_SUCC';
  var failType = path + '_PUT_FAIL';
  return sendReq(path, 'put', body, rest, succ, fail, beginType, succType, failType);
}
function putById(_ref8) {
  var path = _ref8.path,
      id = _ref8.id,
      body = _ref8.body,
      _ref8$succ = _ref8.succ,
      succ = _ref8$succ === undefined ? function () {} : _ref8$succ,
      _ref8$fail = _ref8.fail,
      fail = _ref8$fail === undefined ? function () {} : _ref8$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref8, ['path', 'id', 'body', 'succ', 'fail']);

  var beginType = path + '_PUT_BEGIN';
  var succType = path + '_PUT_SUCC';
  var failType = path + '_PUT_FAIL';
  path = path.replace(':id', id);
  return sendReq(path, 'put', body, rest, succ, fail, beginType, succType, failType);
}

function del(_ref9) {
  var path = _ref9.path,
      id = _ref9.id,
      body = _ref9.body,
      _ref9$succ = _ref9.succ,
      succ = _ref9$succ === undefined ? function () {} : _ref9$succ,
      _ref9$fail = _ref9.fail,
      fail = _ref9$fail === undefined ? function () {} : _ref9$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref9, ['path', 'id', 'body', 'succ', 'fail']);

  var beginType = path + '_DELETE_BEGIN';
  var succType = path + '_DELETE_SUCC';
  var failType = path + '_DELETE_FAIL';
  return sendReq(path, 'delete', body, rest, succ, fail, beginType, succType, failType);
}
function delById(_ref10) {
  var path = _ref10.path,
      id = _ref10.id,
      body = _ref10.body,
      _ref10$succ = _ref10.succ,
      succ = _ref10$succ === undefined ? function () {} : _ref10$succ,
      _ref10$fail = _ref10.fail,
      fail = _ref10$fail === undefined ? function () {} : _ref10$fail,
      rest = (0, _objectWithoutProperties3.default)(_ref10, ['path', 'id', 'body', 'succ', 'fail']);

  var beginType = path + '_DELETE_BEGIN';
  var succType = path + '_DELETE_SUCC';
  var failType = path + '_DELETE_FAIL';
  path = path.replace(':id', id);
  return sendReq(path, 'delete', body, rest, succ, fail, beginType, succType, failType);
}

function sendReq(path, method, body, rest, succ, fail, beginType, succType, failType) {
  if (rest && rest.typeEnd) {
    beginType = beginType + '_' + rest.typeEnd;
    succType = succType + '_' + rest.typeEnd;
    failType = failType + '_' + rest.typeEnd;
  }
  if (rest && rest.clear) {
    var _rest$clear = rest.clear;
    _rest$clear = _rest$clear === undefined ? {} : _rest$clear;
    var _rest$clear$data = _rest$clear.data,
        defaultData = _rest$clear$data === undefined ? [] : _rest$clear$data;

    succ(defaultData);
    return {
      type: succType,
      data: defaultData
    };
  }
  return function (dispatch, req) {
    dispatch((0, _extends3.default)({
      type: beginType
    }, rest));
    var reqParams = {
      url: path,
      method: method,
      body: body
    };
    if (method === 'get') {
      delete reqParams.body;
    }
    return req.request(reqParams).then(function (data) {
      dispatch((0, _extends3.default)({
        type: succType,
        data: data
      }, rest));
      succ(data);
    }).catch(function (err) {
      dispatch((0, _extends3.default)({
        type: failType,
        err: err
      }, rest));
      fail(err);
    });
  };
}