"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (num) {
  var MONEY_NUMS = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九");
  var MONEY_DIGITS = new Array("", "十", "百", "千");
  var MONEY_BIGUNITS = new Array("", "万", "亿", "万亿", "千兆");
  if (Number(num) === NaN) {
    console.error('参数格式不对');
    return;
  }
  num = Number(num) + '';
  if (num === "0") {
    return MONEY_NUMS[0];
  }
  var S = ""; //返回值
  var p = 0; //字符位置指针
  var m = num.length % 4; //取模

  // 四位一组得到组数
  var k = m > 0 ? Math.floor(num.length / 4) + 1 : Math.floor(num.length / 4);
  // 外层循环在所有组中循环
  // 从左到右 高位到低位 四位一组 逐组处理
  // 每组最后加上一个单位: "[万亿]","[亿]","[万]"
  for (var i = k; i > 0; i--) {
    var L = 4;
    if (i == k && m != 0) {
      L = m;
    }
    // 得到一组四位数 最高位组有可能不足四位
    var s = num.substring(p, p + L);
    var l = s.length;

    // 内层循环在该组中的每一位数上循环 从左到右 高位到低位
    for (var j = 0; j < l; j++) {
      var n = parseInt(s.substring(j, j + 1));
      if (n == 0) {
        if (j < l - 1 && parseInt(s.substring(j + 1, j + 1 + 1)) > 0 //后一位(右低)
        && S.substring(S.length - 1, S.length) != MONEY_NUMS[n]) {
          S += MONEY_NUMS[n];
        }
      } else {
        //处理 1013 一千零"十三", 1113 一千一百"一十三"
        if (!(n == 1 && S.substring(S.length - 1, S.length) == MONEY_NUMS[0] | S.length == 0 && j == l - 2)) {
          S += MONEY_NUMS[n];
        }
        S += MONEY_DIGITS[l - j - 1];
      }
    }
    p += L;
    // 每组最后加上一个单位: [万],[亿] 等
    if (i < k) {
      //不是最高位的一组
      if (parseInt(s) != 0) {
        //如果所有 4 位不全是 0 则加上单位 [万],[亿] 等
        S += MONEY_BIGUNITS[i - 1];
      }
    } else {
      //处理最高位的一组,最后必须加上单位
      S += MONEY_BIGUNITS[i - 1];
    }
  }
  return S;
};

;
module.exports = exports['default'];