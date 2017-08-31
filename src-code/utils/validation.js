const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */ ];

export function email(value) {
  // Let'str not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  }
}

export function oneOf(enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export function match(field) {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}

function isDate(dateString, format) {
  const DATE_FORMAT_SHOW = 'yyyy-mm-dd';
  const REGEXP_DATE = new RegExp(/(yyyy|mm|dd|hh|mi|ss|ms)/gi);
  let year;
  let month;
  let day;
  format = format || DATE_FORMAT_SHOW;

  if (dateString.length !== format.length) {
    console.log( "日期和日期对应的格式不对或者长度不对！");
    return false;
  }

  const matchArray = format.match(REGEXP_DATE);
  for (let index = 0; index < matchArray.length; index++) {
    const postion = format.indexOf(matchArray[index]);
    switch (matchArray[index]) {
    case "yyyy": {
      year = parseInt(dateString.substr(postion, 4), 10);
      break;
    }
    case "mm": {
      month = parseInt(dateString.substr(postion, 2), 10) - 1;
      break;
    }
    case "dd": {
      day = parseInt(dateString.substr(postion, 2), 10);
      break;
    }
    default:
    }
  }
  const dateTest = new Date(year, month, day);
  const testYear = dateTest.getFullYear();
  const testMonth = dateTest.getMonth();
  const testDay = dateTest.getDate();
  return (year === testYear && month === testMonth && day === testDay);
}
// 检验身份证
// param1: 身份证字符串
// 输出：正确的身份证号返回false，错误的身份证号返回 '请输入有效身份证'
export function notIdCard(str = '') {
  const AREA_CODE = {11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"};
  const REGEXP_INTEGER = new RegExp(/^[0-9]+$/);
  const DATE_FORMAT = "yyyymmdd";
  const tips = '请输入有效身份证';
  // 检查长度是否合法
  switch (str.length) {
  case 15:
  case 18: {
    break;
  }
  default: {
    return tips;
  }
  }
  // 检查是否为数字
  const testInt = (str.length === 15) ? str : str.substr(0, 17);
  if (!REGEXP_INTEGER.test(testInt)) {
    return tips;
  }
  // 检查区域代码是否合法
  const areaCode = parseInt(str.substr(0, 2));
  if (!AREA_CODE[areaCode]) {
    return tips;
  }
  // 检查出生日期是否合法
  const birthDay = (str.length === 15) ? ("19" + str.substr(6, 6)) : str.substr(6, 8);
  if (!isDate(birthDay, DATE_FORMAT)) {
    return tips;
  }
  // 检查校验位是否合法
  if (str.length === 18) {
    const testNumber = (parseInt(str.charAt(0)) + parseInt(str.charAt(10))) * 7 + (parseInt(str.charAt(1)) + parseInt(str.charAt(11))) * 9 + (parseInt(str.charAt(2)) + parseInt(str.charAt(12))) * 10 + (parseInt(str.charAt(3)) + parseInt(str.charAt(13))) * 5 + (parseInt(str.charAt(4)) + parseInt(str.charAt(14))) * 8 + (parseInt(str.charAt(5)) + parseInt(str.charAt(15))) * 4 + (parseInt(str.charAt(6)) + parseInt(str.charAt(16))) * 2 + parseInt(str.charAt(7)) * 1 + parseInt(str.charAt(8)) * 6 + parseInt(str.charAt(9)) * 3;
    if (str.charAt(17) !== "10X98765432".charAt(testNumber % 11)) {
      return tips;
    }
  }
  return false;
}
export const ACCOUNT = /^[A-Za-z0-9]{4,16}$/;
export const ACCOUNT_TIP = '字母、数字组合，4-16位';
export const PASSWORD = /^(?!^\d+$)(?!^[a-zA-Z]+$)(?!^[~!@#$%^&*()]+$)[A-Za-z0-9~!@#$%^&*()]{6,16}$/;
export const PASSWORD_TIP = '字母、英文、特殊字符任意两种或以上组合, 6-16位';
export const MOBILE = /^((1705|1709|1700)\d{7})|(13\d|15[0-35-9]|14[57]|17[6-8]|18\d)\d{8}$/;
export const MOBILE_TIP = '非法号码';
export const EMAIL = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
export const EMAIL_TIP = '非法电子邮件';
export const PHONE = new RegExp(/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/);
export const PHONE_TIP = '非法号码';


