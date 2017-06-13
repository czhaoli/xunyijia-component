'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = exports.parseDate = exports.formatDate = exports.formatDateString = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.obj2query = obj2query;
exports.changeState = changeState;
exports.changeState2Fail = changeState2Fail;
exports.changeState2Begin = changeState2Begin;
exports.changeState2Succ = changeState2Succ;
exports.getQuery = getQuery;
exports.getYearList = getYearList;
exports.deptCopy = deptCopy;
exports.ones = ones;
exports.getOffset = getOffset;
exports.maxLengthHandler = maxLengthHandler;
exports.passwordInputFocus = passwordInputFocus;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function obj2query(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== "object") {
    return '';
  }
  var query = '';
  (0, _keys2.default)(obj).forEach(function (item) {
    var value = obj[item];
    if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) !== 'object') {
      query += item + '=' + value + '&';
    } else if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
      query += item + '=' + (0, _stringify2.default)(value) + '&';
    }
  });
  return query.slice(0, -1);
}

// 组件中定义state = {saveState: ''}，再调用对于方法 changeState2Begin.call(this, '登陆中');
function changeState(event, msg) {
  var status = '';
  switch (event) {
    case 'begin':
      status = msg || '保存中';
      break;
    case 'fail':
      status = msg;
      break;
    default:
  }
  this.setState({
    saveState: status
  });
}
function changeState2Fail(err) {
  changeState.call(this, 'fail', err);
}
function changeState2Begin(msg) {
  changeState.call(this, 'begin', msg);
}
function changeState2Succ() {
  changeState.call(this, 'succ');
}
function getQuery(location) {
  if (!location && (!this || !this.props || !this.props.location)) {
    console.error('必须传入参数才能调用');
    return undefined;
  } else if (!location) {
    location = this.props.location;
  }
  var query = location.state ? location.state : {};
  return query;
}
// 格式化日期
var utils = {};
utils.DATE_FORMAT_SHOW = "yyyy-mm-dd";
utils.REGEXP_DATE = new RegExp(/(yyyy|mm|dd|hh|mi|ss|ms)/gi);

utils.format = function (format) {
  if (!format) {
    format = utils.DATE_FORMAT;
  }
  return format.replace(utils.REGEXP_DATE, function (str) {
    switch (str.toLowerCase()) {
      case 'yyyy':
        return this.getFullYear();
      case 'mm':
        return utils.leftPadZero.call((this.getMonth() + 1).toString(), 2);
      case 'dd':
        return utils.leftPadZero.call(this.getDate().toString(), 2);
      case 'hh':
        return utils.leftPadZero.call(this.getHours().toString(), 2);
      case 'mi':
        return utils.leftPadZero.call(this.getMinutes().toString(), 2);
      case 'ss':
        return utils.leftPadZero.call(this.getSeconds().toString(), 2);
      case 'ms':
        return utils.leftPadZero.call(this.getMilliseconds().toString(), 2);
      default:
        return null;
    }
  }.bind(this));
};
utils.formatDateObject = function (date, format) {
  if (date.constructor.name !== 'Date') {
    console.error('日期必须为date对象');
    return undefined;
  }
  return utils.format.call(date, format);
};
utils.leftPadZero = function (width) {
  var pad = width - this.length;
  if (pad > 0) {
    return utils.times.call("0", pad) + this;
  } else {
    return this;
  }
};
utils.times = function (times) {
  if (times < 1) {
    times = 1;
  }
  var ret = "";
  while (times) {
    ret += this;
    times--;
  }
  return ret;
};
utils.formatDate = function (data, inFormat, outFormat) {
  // 如果data为空,则返回空字符串
  // Added by zhuding@yuchengtech.com o 2011-03-15
  if (!data) {
    return "";
  }
  var parsedDate = utils.parseDate(data, inFormat || utils.DATE_FORMAT);
  // 如果输入的data不合法,则返回空字符串
  // Added by zhuding@yuchengtech.com o 2011-03-15
  if (parsedDate === null) {
    return "";
  }
  if (outFormat && typeof outFormat === "string") {
    return utils.format.call(parsedDate, outFormat);
  } else {
    return utils.format.call(parsedDate, utils.DATE_FORMAT_SHOW);
  }
};

utils.parseDate = function (dateString, format) {
  var year = 2000;
  var month = 0;
  var day = 1;
  var hour = 0;
  var minute = 0;
  var second = 0;
  format = format || utils.DATE_FORMAT_SHOW;

  if (dateString.length !== format.length) {
    console.log("日期和日期对应格式的长度不一致！");
    return null;
  } else {
    if (!utils.isDate(dateString, format)) {
      console.log("日期或格式不合法！");
      return null;
    }
  }
  var matchArray = format.match(utils.REGEXP_DATE);
  for (var index = 0; index < matchArray.length; index++) {
    var postion = format.indexOf(matchArray[index]);
    switch (matchArray[index]) {
      case "yyyy":
        {
          year = parseInt(dateString.substr(postion, 4), 10);
          break;
        }
      case "mm":
        {
          month = parseInt(dateString.substr(postion, 2), 10) - 1;
          break;
        }
      case "dd":
        {
          day = parseInt(dateString.substr(postion, 2), 10);
          break;
        }
      case "hh":
        {
          hour = parseInt(dateString.substr(postion, 2), 10);
          break;
        }
      case "mi":
        {
          minute = parseInt(dateString.substr(postion, 2), 10);
          break;
        }
      case "ss":
        {
          second = parseInt(dateString.substr(postion, 2), 10);
          break;
        }
      default:
    }
  }

  var result = new Date(year, month, day, hour, minute, second);

  // 加上result为空的判断,为了解决传入的字符串格式不正确的问题
  // IE下用isNaN来判断，其它浏览器通过Invalid Date来判断
  // Updated by zhuding@yuchengtech on 2011-2-28
  if (result === "Invalid Date" || isNaN(result)) {
    return null;
  }

  return result;
};

utils.isDate = function (dateString, format) {
  var year = void 0;
  var month = void 0;
  var day = void 0;
  format = format || utils.DATE_FORMAT_SHOW;

  if (dateString.length !== format.length) {
    console.log("日期和日期对应的格式不对或者长度不对！");
    return false;
  }

  var matchArray = format.match(utils.REGEXP_DATE);
  for (var index = 0; index < matchArray.length; index++) {
    var postion = format.indexOf(matchArray[index]);
    switch (matchArray[index]) {
      case "yyyy":
        {
          year = parseInt(dateString.substr(postion, 4), 10);
          break;
        }
      case "mm":
        {
          month = parseInt(dateString.substr(postion, 2), 10) - 1;
          break;
        }
      case "dd":
        {
          day = parseInt(dateString.substr(postion, 2), 10);
          break;
        }
      default:
    }
  }
  var dateTest = new Date(year, month, day);
  var testYear = dateTest.getFullYear();
  var testMonth = dateTest.getMonth();
  var testDay = dateTest.getDate();
  return year === testYear && month === testMonth && day === testDay;
};
// 年|月|天|时|分|秒|毫秒：yyyy|mm|dd|hh|mi|ss|ms
// params1: 日期字符串， params2: 输入的日期格式，params3: 期待输出的日期格式。
// 输出特定格式的日期字符串
// formatDateString('20110111', 'yyyymmdd', 'yyyy-mm-dd')
var formatDateString = exports.formatDateString = utils.formatDate;
// params1: Date对象， params2: 期待输出的日期格式
// 输出特定格式的日期字符串
// formatDate(new Date(), 'yyyy=mm=dd')
var formatDate = exports.formatDate = utils.formatDateObject;
// params1: 日期字符串， params2: 输入的日期格式。
// 输出一个Date时间对象
// parseDate('20110101', 'yyyymmdd')
var parseDate = exports.parseDate = utils.parseDate;
// params1: 日期字符串，params2:输入的日期字符串格式
// 输出一个boolean
// isDate('20110101', 'yyyymmdd')
var isDate = exports.isDate = utils.isDate;

function getYearList() {
  var long = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

  var date = new Date();
  var month = date.getMonth() + 1;
  var nowYear = date.getFullYear();
  var firstYear = void 0;
  var afterYear = void 0;
  var defaultTerm = void 0;
  if (month >= 2 && month < 8) {
    firstYear = Number(nowYear) - 1;
    afterYear = nowYear;
    defaultTerm = 2;
  } else {
    firstYear = nowYear;
    afterYear = Number(nowYear) + 1;
    defaultTerm = 1;
  }
  var defaultYear = firstYear + '-' + afterYear;
  var arr = [];
  for (var index = 0 - long; index < long; index++) {
    var arrTemp = [firstYear + index, afterYear + index];
    arr.push(arrTemp[0] + '-' + arrTemp[1]);
  }
  return {
    defaultTerm: defaultTerm,
    defaultYear: defaultYear,
    yearList: arr
  };
}
/*
  由于object是按照引用传递，一般的赋值复制只是复制了引用，
  会出现修改修改后者的时候也影响到前者的值，例如
  var a = {b: {c: 1}}
  var b = deptCopy(a);
  b.b.c =2;
  这时候 a和b都为{b: {c: 2}}
  这个深复制方法使用如下：
  var a = {b: {c: 1}}
  var b = deptCopy(a);
  b.b.c =2;
  这时候a不变，b为{b: {c: 2}}
  这样b的修改不会改动到a里面的值
 */
function deptCopy(data) {
  var rd = void 0;
  var cn = void 0;
  data && data.constructor && (cn = data.constructor.name);
  if (cn === 'Array') {
    rd = data.map(function (item) {
      return deptCopy(item);
    });
  } else if (cn === 'Object') {
    var temp = {};
    (0, _keys2.default)(data).forEach(function (key) {
      temp[key] = deptCopy(data[key]);
    });
    rd = temp;
  } else {
    rd = data;
  }
  return rd;
}

function ones(arr) {
  var temp = arr.filter(function (item) {
    return item;
  });
  return temp.length === 1;
}

function getOffset(ele) {
  var top = ele.offsetTop;
  var left = ele.offsetLeft;
  if (ele.offsetParent) {
    var parentOffset = getOffset(ele.offsetParent);
    top += parentOffset.top;
    left += parentOffset.left;
  }
  return { top: top, left: left };
}

// 限制input输入长度
// onInput={maxLengthHandler.bind(this, 10)}
function maxLengthHandler(len, event) {
  if (event.target.value.length > len) {
    event.target.value = event.target.value.slice(0, len);
  }
}

function passwordInputFocus(event) {
  event.target.type = 'password';
}