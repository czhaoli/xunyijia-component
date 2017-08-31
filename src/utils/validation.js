'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHONE_TIP = exports.PHONE = exports.EMAIL_TIP = exports.EMAIL = exports.MOBILE_TIP = exports.MOBILE = exports.PASSWORD_TIP = exports.PASSWORD = exports.ACCOUNT_TIP = exports.ACCOUNT = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

exports.email = email;
exports.required = required;
exports.minLength = minLength;
exports.maxLength = maxLength;
exports.integer = integer;
exports.oneOf = oneOf;
exports.match = match;
exports.createValidator = createValidator;
exports.notIdCard = notIdCard;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0 /* first error */];
  };
};

function email(value) {
  // Let'str not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

function minLength(min) {
  return function (value) {
    if (!isEmpty(value) && value.length < min) {
      return 'Must be at least ' + min + ' characters';
    }
  };
}

function maxLength(max) {
  return function (value) {
    if (!isEmpty(value) && value.length > max) {
      return 'Must be no more than ' + max + ' characters';
    }
  };
}

function integer(value) {
  if (!(0, _isInteger2.default)(Number(value))) {
    return 'Must be an integer';
  }
}

function oneOf(enumeration) {
  return function (value) {
    if (!~enumeration.indexOf(value)) {
      return 'Must be one of: ' + enumeration.join(', ');
    }
  };
}

function match(field) {
  return function (value, data) {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    (0, _keys2.default)(rules).forEach(function (key) {
      var rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}

function isDate(dateString, format) {
  var DATE_FORMAT_SHOW = 'yyyy-mm-dd';
  var REGEXP_DATE = new RegExp(/(yyyy|mm|dd|hh|mi|ss|ms)/gi);
  var year = void 0;
  var month = void 0;
  var day = void 0;
  format = format || DATE_FORMAT_SHOW;

  if (dateString.length !== format.length) {
    console.log("日期和日期对应的格式不对或者长度不对！");
    return false;
  }

  var matchArray = format.match(REGEXP_DATE);
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
}
// 检验身份证
// param1: 身份证字符串
// 输出：正确的身份证号返回false，错误的身份证号返回 '请输入有效身份证'
function notIdCard() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var AREA_CODE = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
  var REGEXP_INTEGER = new RegExp(/^[0-9]+$/);
  var DATE_FORMAT = "yyyymmdd";
  var tips = '请输入有效身份证';
  // 检查长度是否合法
  switch (str.length) {
    case 15:
    case 18:
      {
        break;
      }
    default:
      {
        return tips;
      }
  }
  // 检查是否为数字
  var testInt = str.length === 15 ? str : str.substr(0, 17);
  if (!REGEXP_INTEGER.test(testInt)) {
    return tips;
  }
  // 检查区域代码是否合法
  var areaCode = parseInt(str.substr(0, 2));
  if (!AREA_CODE[areaCode]) {
    return tips;
  }
  // 检查出生日期是否合法
  var birthDay = str.length === 15 ? "19" + str.substr(6, 6) : str.substr(6, 8);
  if (!isDate(birthDay, DATE_FORMAT)) {
    return tips;
  }
  // 检查校验位是否合法
  if (str.length === 18) {
    var testNumber = (parseInt(str.charAt(0)) + parseInt(str.charAt(10))) * 7 + (parseInt(str.charAt(1)) + parseInt(str.charAt(11))) * 9 + (parseInt(str.charAt(2)) + parseInt(str.charAt(12))) * 10 + (parseInt(str.charAt(3)) + parseInt(str.charAt(13))) * 5 + (parseInt(str.charAt(4)) + parseInt(str.charAt(14))) * 8 + (parseInt(str.charAt(5)) + parseInt(str.charAt(15))) * 4 + (parseInt(str.charAt(6)) + parseInt(str.charAt(16))) * 2 + parseInt(str.charAt(7)) * 1 + parseInt(str.charAt(8)) * 6 + parseInt(str.charAt(9)) * 3;
    if (str.charAt(17) !== "10X98765432".charAt(testNumber % 11)) {
      return tips;
    }
  }
  return false;
}
var ACCOUNT = exports.ACCOUNT = /^[A-Za-z0-9]{4,16}$/;
var ACCOUNT_TIP = exports.ACCOUNT_TIP = '字母、数字组合，4-16位';
var PASSWORD = exports.PASSWORD = /^(?!^\d+$)(?!^[a-zA-Z]+$)(?!^[~!@#$%^&*()]+$)[A-Za-z0-9~!@#$%^&*()]{6,16}$/;
var PASSWORD_TIP = exports.PASSWORD_TIP = '字母、英文、特殊字符任意两种或以上组合, 6-16位';
var MOBILE = exports.MOBILE = /^((1705|1709|1700)\d{7})|(13\d|15[0-35-9]|14[57]|17[6-8]|18\d)\d{8}$/;
var MOBILE_TIP = exports.MOBILE_TIP = '非法号码';
var EMAIL = exports.EMAIL = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
var EMAIL_TIP = exports.EMAIL_TIP = '非法电子邮件';
var PHONE = exports.PHONE = new RegExp(/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/);
var PHONE_TIP = exports.PHONE_TIP = '非法号码';