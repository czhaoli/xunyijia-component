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
export function isHongKongID(id) {
  // const _id = id.trim();
  const _id = id;
  let sum = 0;
  let verify = '';
  // 香港身份证号码由三部分组成：一个英文字母；6个数字；括号及0-9中的任一个数字，
  // 或者字母A。括号中的数字或字母A，是校验码，用于检验括号前面的号码的逻辑正确性。
  const regex = /^[a-zA-Z]\d{6}[（(][0-9aA][)）]$/;
  if (!regex.test(_id)) {
    return false;
  }
  // 先把身份证号码首位字母改为数字，即A为1，B为2，C为3...Z为26，
  // 再乘以8；然后把字母后面的6个数字依次乘以7、6、5、4、3、2；
  // 再将以上所有乘积相加的和，除以11，得到余数；
  sum += getCharNumber(_id[0]) * 8;
  sum += parseInt(_id[1]) * 7;
  sum += parseInt(_id[2]) * 6;
  sum += parseInt(_id[3]) * 5;
  sum += parseInt(_id[4]) * 4;
  sum += parseInt(_id[5]) * 3;
  sum += parseInt(_id[6]) * 2;
  const remainder = sum % 11;
  // 如果整除，则括号中的校验码为0，
  // 如果余数为1，则校验码为A，
  // 如果余数为2～10，则用11减去这个余数的差作校验码
  if (remainder === 0) {
    verify = '0';
  } else if (remainder === 1) {
    verify = 'A';
  }else {
    verify = (11 - remainder) + '';
  }
  return checkVerifyNum(verify, _id[8]);
  /**
   * 香港身份证号码P103265（1），P，在字母表中排行16，则以16代表，则计算校验码：
   * 16×8＋1×7＋0×6＋3×5＋2×4＋6×3＋5×2＝186
   * 186÷11＝16......余10
   * 11,10＝1，即校验码为1
   */

  // 先把身份证号码首位字母改为数字，即A为1，B为2，C为3...Z为26
  function getCharNumber(char) {
    if (char.length !== 1) return 0;
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    return ALPHABET.indexOf(char.toLowerCase()) + 1;
  }

  // 对比校验值
  function checkVerifyNum(num, code) {
    return num.toLowerCase() === code.toLowerCase();
  }
}

export function isMacauID(id) {
  // const _id = id.trim();
  const _id = id;
  const regex = /^[157]\d{6}[（(][0-9][)）]$/;
  return regex.test(_id);
}

export function isTaiWanID(id) {
  // const _id = id.trim();
  const _id = id;
  let sum = 0;
  // 第1码是英文字母，不同的县巿用不同的字母
  // 每个字母代表两个数字
  // 第2码代表性别(1是男生; 2是女生)
  // 第3码~第9码是顺序码(基本上是越早出生的号码越前面)
  // 第10码是判别码(判别是否为合法的身份证号码)
  // 把前9码所代表的数字列出来，再乘以他的加权数(我记得是10~1)
  // 接下来全部加起来，然后总和以10去除，取余数之后
  // 以10来减那个余数之后得到的那个数字再以10去除取余数之后那个数字就是最后一个判别码
  // 身份证字号检查规则
  const regex = /^[a-zA-Z][12]\d{8}$/;
  if (!regex.test(_id)) {
    return false;
  }

  /**
   * 1.台湾身分证字号共有十码,我们就将它表示成... N1 N2 N3 N4 N5 N6 N7 N8 N9 N10
   * 2.N1 : 一定是一个大写英文字母,代表户籍地
   * 3.N2 : 性别栏位:1为男性 2为女性
   * 4.N3~N9 : 流水号
   * 5.N10 : 检测位元,首先要将第一个英文字转换成数值
   * 6.然后用下列算式计算,若余数为 0 则为正确的身分证字号(N1的十位数+N1的个位数x9+N2x8+N3x7+N4x6+N5x5+N6x4+N7x3+N8x2+N9+N10)÷10
   * 范例:
   * 1. F212345674 换算为 15212345674
   * 2. (1*1)+(5*9)+(2*8)+(1*7)+(2*6)+(3*5)+(4*4)+(5*3)+(6*2)+(7*1)+(4*1)=150
   * 3. 150 mod 10 = 0 => 正确
   */
  const headNum = getCharNumber(_id[0]);
  sum += parseInt(headNum / 10);
  sum += (headNum % 10) * 9;
  sum += parseInt(_id[1]) * 8;
  sum += parseInt(_id[2]) * 7;
  sum += parseInt(_id[3]) * 6;
  sum += parseInt(_id[4]) * 5;
  sum += parseInt(_id[5]) * 4;
  sum += parseInt(_id[6]) * 3;
  sum += parseInt(_id[7]) * 2;
  sum += parseInt(_id[8]);
  sum += parseInt(_id[9]);
  return sum % 10 === 0;

  function getCharNumber(char) {
    // A=10 台北市  J=18 新竹县  S=26 高雄县
    // B=11 台中市  K=19 苗栗县  T=27 屏东县
    // C=12 基隆市  L=20 台中县  U=28 花莲县
    // D=13 台南市  M=21 南投县  V=29 台东县
    // E=14 高雄市  N=22 彰化县  W=32 金门县
    // F=15 台北县  O=35 新竹市  X=30 澎湖县
    // G=16 宜兰县  P=23 云林县  Y=31 阳明山
    // H=17 桃园县  Q=24 嘉义县  Z=33 连江县
    // I=34 嘉义市  R=25 台南县
    const ALPHABET = {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
      g: 16,
      h: 17,
      i: 34,
      j: 18,
      k: 19,
      l: 20,
      m: 21,
      n: 22,
      o: 35,
      p: 23,
      q: 24,
      r: 25,
      s: 26,
      t: 27,
      u: 28,
      v: 29,
      w: 32,
      x: 30,
      y: 31,
      z: 33,
    };
    return ALPHABET[char.toLowerCase()];
  }
}

export const onlyInt = {
  onInput: (event) => {
    event.target.value = event.target.value.replace(/\D/g, '');
  },
  // 处理不支持onInput方法浏览器
  onKeyUp: (event) => {
    event.target.value = event.target.value.replace(/\D/g, '');
  }
};
export const ACCOUNT = /^[A-Za-z0-9]{4,16}$/;
export const ACCOUNT_TIP = '字母、数字组合，4-16位';
export const PASSWORD = /^(?!^\d+$)(?!^[a-zA-Z]+$)(?!^[~!@#$%^&*()]+$)[A-Za-z0-9~!@#$%^&*()]{6,16}$/;
export const PASSWORD_TIP = '字母、英文、特殊字符任意两种或以上组合, 6-16位';
export const MOBILE = /^((13|15|18|19|92|98)\d{9}|(14[5-9]|16[1-24-7]|17[0-8])\d{8})$/;
export const MOBILE_TIP = '请输入11位正确的电话号码';
export const EMAIL = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
export const EMAIL_TIP = '请输入包含.和@的正确的电子邮件';
export const PHONE = new RegExp(/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/);
export const PHONE_TIP = '请输入正确的格式，如：020-12345678';
export const VERSION = new RegExp(/^\d+\.\d+\.\d+$/);
export const VERSION_TIP = '非法版本号';
export const TIME_MIN = new RegExp(/^[1-9]\d*$/);
export const TIME_MIN_TIP = '请输入整数';
export const SPORT_TIME = new RegExp(/(^\d{1,2}′\d{2}′′$)|(^\d{1,2}′\d{2}$)|(^\d{1,2}'\d{1,2}"$)|(^\d{1,2}'\d{1,2}$)|(^\d{1,2}＇\d{1,2}〃$)|(^\d{1,2}＇\d{1,2}$)/);
export const SPORT_TIME_TIP = '0′00或者0′00′′';
export const POSITIVE = /^(\-|\+)?\d+(\.\d+)?$/;
