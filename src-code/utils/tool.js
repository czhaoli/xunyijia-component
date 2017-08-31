export function obj2query(obj) {
  if (typeof obj !== "object") {
    return '';
  }
  let query = '';
  Object.keys(obj).forEach((item) => {
    const value = obj[item];
    if (value && typeof value !== 'object') {
      query += `${item}=${value}&`;
    } else if (value && typeof value === 'object') {
      query += `${item}=${JSON.stringify(value)}&`;
    }
  });
  return query.slice(0, -1);
}

// 组件中定义state = {saveState: ''}，再调用对于方法 changeState2Begin.call(this, '登陆中');
export function changeState(event, msg) {
  let status = '';
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
export function changeState2Fail(err) {
  changeState.call(this, 'fail', err);
}
export function changeState2Begin(msg) {
  changeState.call(this, 'begin', msg);
}
export function changeState2Succ() {
  changeState.call(this, 'succ');
}
export function getQuery(location) {
  if (!location && (!this || !this.props || !this.props.location)) {
    console.error('必须传入参数才能调用');
    return undefined;
  } else if (!location) {
    location = this.props.location;
  }
  const query = location.state ? location.state : {};
  return query;
}
// 格式化日期
const utils = {};
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
        return utils.leftPadZero.call((this.getDate()).toString(), 2);
      case 'hh':
        return utils.leftPadZero.call((this.getHours()).toString(), 2);
      case 'mi':
        return utils.leftPadZero.call((this.getMinutes()).toString(), 2);
      case 'ss':
        return utils.leftPadZero.call((this.getSeconds()).toString(), 2);
      case 'ms':
        return utils.leftPadZero.call((this.getMilliseconds()).toString(), 2);
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
  const pad = width - this.length;
  if (pad > 0) {
    return (utils.times.call("0", pad) + this);
  } else {
    return this;
  }
};
utils.times = function (times) {
  if (times < 1) {
    times = 1;
  }
  let ret = "";
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
  const parsedDate = utils.parseDate(data, inFormat || utils.DATE_FORMAT);
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

utils.parseDate = function(dateString, format) {
  let year = 2000;
  let month = 0;
  let day = 1;
  let hour = 0;
  let minute = 0;
  let second = 0;
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
  const matchArray = format.match(utils.REGEXP_DATE);
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
      case "hh": {
        hour = parseInt(dateString.substr(postion, 2), 10);
        break;
      }
      case "mi": {
        minute = parseInt(dateString.substr(postion, 2), 10);
        break;
      }
      case "ss": {
        second = parseInt(dateString.substr(postion, 2), 10);
        break;
      }
      default:
    }
  }

  const result = new Date(year, month, day, hour, minute, second);

  // 加上result为空的判断,为了解决传入的字符串格式不正确的问题
  // IE下用isNaN来判断，其它浏览器通过Invalid Date来判断
  // Updated by zhuding@yuchengtech on 2011-2-28
  if (result === "Invalid Date" || isNaN(result)) {
    return null;
  }

  return result;
};

utils.isDate = function(dateString, format) {
  let year;
  let month;
  let day;
  format = format || utils.DATE_FORMAT_SHOW;

  if (dateString.length !== format.length) {
    console.log( "日期和日期对应的格式不对或者长度不对！");
    return false;
  }

  const matchArray = format.match(utils.REGEXP_DATE);
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
};
// 年|月|天|时|分|秒|毫秒：yyyy|mm|dd|hh|mi|ss|ms
// params1: 日期字符串， params2: 输入的日期格式，params3: 期待输出的日期格式。
// 输出特定格式的日期字符串
// formatDateString('20110111', 'yyyymmdd', 'yyyy-mm-dd')
export const formatDateString = utils.formatDate;
// params1: Date对象， params2: 期待输出的日期格式
// 输出特定格式的日期字符串
// formatDate(new Date(), 'yyyy=mm=dd')
export const formatDate = utils.formatDateObject;
// params1: 日期字符串， params2: 输入的日期格式。
// 输出一个Date时间对象
// parseDate('20110101', 'yyyymmdd')
export const parseDate = utils.parseDate;
// params1: 日期字符串，params2:输入的日期字符串格式
// 输出一个boolean
// isDate('20110101', 'yyyymmdd')
export const isDate = utils.isDate;

export function getYearList(long = 6) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const nowYear = date.getFullYear();
  let firstYear;
  let afterYear;
  let defaultTerm;
  if (month >=2 && month < 8) {
    firstYear = Number(nowYear) - 1;
    afterYear = nowYear;
    defaultTerm = 2;
  } else {
    firstYear = nowYear;
    afterYear = Number(nowYear) + 1;
    defaultTerm = 1;
  }
  const defaultYear = `${firstYear}-${afterYear}`;
  const arr = [];
  for (let index = 0 - long; index < long; index++ ) {
    let arrTemp = [firstYear + index, afterYear + index];
    arr.push(`${arrTemp[0]}-${arrTemp[1]}`);
  }
  return {
    defaultTerm,
    defaultYear,
    yearList: arr
  };
}

export function ones(arr) {
  var temp = arr.filter(item => item);
  return temp.length === 1
}

export function getOffset(ele) {
  let top = ele.offsetTop;
  let left = ele.offsetLeft;
  if (ele.offsetParent) {
    const parentOffset = getOffset(ele.offsetParent);
    top += parentOffset.top;
    left += parentOffset.left;
  }
  return {top, left};
}


// 限制input输入长度
// onInput={maxLengthHandler.bind(this, 10)}
export function maxLengthHandler(len, event) {
  if (event.target.value.length > len) {
    event.target.value = event.target.value.slice(0, len);
  }
}

export function passwordInputFocus(event) {
  event.target.type = 'password';
}
