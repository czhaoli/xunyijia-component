'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Home: {
    displayName: 'Home'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components/Echarts/Echart-map.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var option = {
  tooltip: {
    formatter: '点击进入{b}<br/>{a}: {c}',
    backgroundColor: 'rgb(0, 200, 150)'
  },
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 100,
    color: ['rgb(0, 120, 15)', 'rgb(180, 243, 241)'],
    text: ['高', '低'], // 文本，默认为数值文本
    calculable: true,
    orient: 'horizontal',
    inverse: true
  },
  series: [{
    name: '分数',
    type: 'map',
    mapType: 'china',
    selectedMode: 'single',
    roam: true,
    itemStyle: {
      normal: { label: { show: true }, areaColor: '#666', borderColor: 'white' },
      emphasis: { label: { show: true }, areaColor: '#00BFFF' }
    },
    data: [{ name: '重庆', value: 33 }, { name: '北京', value: Math.round(Math.random() * 100) }, { name: '天津', value: Math.round(Math.random() * 100) }, { name: '上市', value: Math.round(Math.random() * 100) }, { name: '香港', value: Math.round(Math.random() * 100) }, { name: '澳门', value: Math.round(Math.random() * 100) }, { name: '巴音郭楞蒙古自治州', value: Math.round(Math.random() * 100) }, { name: '和田地区', value: Math.round(Math.random() * 100) }, { name: '哈密地区', value: Math.round(Math.random() * 100) }, { name: '阿克苏地区', value: Math.round(Math.random() * 100) }, { name: '阿勒泰地区', value: Math.round(Math.random() * 100) }, { name: '喀什地区', value: Math.round(Math.random() * 100) }, { name: '塔城地区', value: Math.round(Math.random() * 100) }, { name: '昌吉回族自治州', value: Math.round(Math.random() * 100) }, { name: '克孜勒苏柯尔克孜自治州', value: Math.round(Math.random() * 100) }, { name: '吐鲁番地区', value: Math.round(Math.random() * 100) }, { name: '伊犁哈萨克自治州', value: Math.round(Math.random() * 100) }, { name: '博尔塔拉蒙古自治州', value: Math.round(Math.random() * 100) }, { name: '乌鲁木齐市', value: Math.round(Math.random() * 100) }, { name: '克拉玛依市', value: Math.round(Math.random() * 100) }, { name: '阿拉尔市', value: Math.round(Math.random() * 100) }, { name: '图木舒克市', value: Math.round(Math.random() * 100) }, { name: '五家渠市', value: Math.round(Math.random() * 100) }, { name: '石河子市', value: Math.round(Math.random() * 100) }, { name: '那曲地区', value: Math.round(Math.random() * 100) }, { name: '阿里地区', value: Math.round(Math.random() * 100) }, { name: '日喀则地区', value: Math.round(Math.random() * 100) }, { name: '林芝地区', value: Math.round(Math.random() * 100) }, { name: '昌都地区', value: Math.round(Math.random() * 100) }, { name: '山南地区', value: Math.round(Math.random() * 100) }, { name: '拉萨市', value: Math.round(Math.random() * 100) }, { name: '呼伦贝尔市', value: Math.round(Math.random() * 100) }, { name: '阿拉善盟', value: Math.round(Math.random() * 100) }, { name: '锡林郭勒盟', value: Math.round(Math.random() * 100) }, { name: '鄂尔多斯市', value: Math.round(Math.random() * 100) }, { name: '赤峰市', value: Math.round(Math.random() * 100) }, { name: '巴彦淖尔市', value: Math.round(Math.random() * 100) }, { name: '通辽市', value: Math.round(Math.random() * 100) }, { name: '乌兰察布市', value: Math.round(Math.random() * 100) }, { name: '兴安盟', value: Math.round(Math.random() * 100) }, { name: '包头市', value: Math.round(Math.random() * 100) }, { name: '呼和浩特市', value: Math.round(Math.random() * 100) }, { name: '乌海市', value: Math.round(Math.random() * 100) }, { name: '海西蒙古族藏族自治州', value: Math.round(Math.random() * 100) }, { name: '玉树藏族自治州', value: Math.round(Math.random() * 100) }, { name: '果洛藏族自治州', value: Math.round(Math.random() * 100) }, { name: '海南藏族自治州', value: Math.round(Math.random() * 100) }, { name: '海北藏族自治州', value: Math.round(Math.random() * 100) }, { name: '黄南藏族自治州', value: Math.round(Math.random() * 100) }, { name: '海东地区', value: Math.round(Math.random() * 100) }, { name: '西宁市', value: Math.round(Math.random() * 100) }, { name: '甘孜藏族自治州', value: Math.round(Math.random() * 100) }, { name: '阿坝藏族羌族自治州', value: Math.round(Math.random() * 100) }, { name: '凉山彝族自治州', value: Math.round(Math.random() * 100) }, { name: '绵阳市', value: Math.round(Math.random() * 100) }, { name: '达州市', value: Math.round(Math.random() * 100) }, { name: '广元市', value: Math.round(Math.random() * 100) }, { name: '雅安市', value: Math.round(Math.random() * 100) }, { name: '宜宾市', value: Math.round(Math.random() * 100) }, { name: '乐山市', value: Math.round(Math.random() * 100) }, { name: '南充市', value: Math.round(Math.random() * 100) }, { name: '巴中市', value: Math.round(Math.random() * 100) }, { name: '泸州市', value: Math.round(Math.random() * 100) }, { name: '成都市', value: Math.round(Math.random() * 100) }, { name: '资阳市', value: Math.round(Math.random() * 100) }, { name: '攀枝花市', value: Math.round(Math.random() * 100) }, { name: '眉山市', value: Math.round(Math.random() * 100) }, { name: '广安市', value: Math.round(Math.random() * 100) }, { name: '德阳市', value: Math.round(Math.random() * 100) }, { name: '内江市', value: Math.round(Math.random() * 100) }, { name: '遂宁市', value: Math.round(Math.random() * 100) }, { name: '自贡市', value: Math.round(Math.random() * 100) }, { name: '黑河市', value: Math.round(Math.random() * 100) }, { name: '大兴安岭地区', value: Math.round(Math.random() * 100) }, { name: '哈尔滨市', value: Math.round(Math.random() * 100) }, { name: '齐齐哈尔市', value: Math.round(Math.random() * 100) }, { name: '牡丹江市', value: Math.round(Math.random() * 100) }, { name: '绥化市', value: Math.round(Math.random() * 100) }, { name: '伊春市', value: Math.round(Math.random() * 100) }, { name: '佳木斯市', value: Math.round(Math.random() * 100) }, { name: '鸡西市', value: Math.round(Math.random() * 100) }, { name: '双鸭山市', value: Math.round(Math.random() * 100) }, { name: '大庆市', value: Math.round(Math.random() * 100) }, { name: '鹤岗市', value: Math.round(Math.random() * 100) }, { name: '七台河市', value: Math.round(Math.random() * 100) }, { name: '酒泉市', value: Math.round(Math.random() * 100) }, { name: '张掖市', value: Math.round(Math.random() * 100) }, { name: '甘南藏族自治州', value: Math.round(Math.random() * 100) }, { name: '武威市', value: Math.round(Math.random() * 100) }, { name: '陇南市', value: Math.round(Math.random() * 100) }, { name: '庆阳市', value: Math.round(Math.random() * 100) }, { name: '白银市', value: Math.round(Math.random() * 100) }, { name: '定西市', value: Math.round(Math.random() * 100) }, { name: '天水市', value: Math.round(Math.random() * 100) }, { name: '兰州市', value: Math.round(Math.random() * 100) }, { name: '平凉市', value: Math.round(Math.random() * 100) }, { name: '临夏回族自治州', value: Math.round(Math.random() * 100) }, { name: '金昌市', value: Math.round(Math.random() * 100) }, { name: '嘉峪关市', value: Math.round(Math.random() * 100) }, { name: '普洱市', value: Math.round(Math.random() * 100) }, { name: '红河哈尼族彝族自治州', value: Math.round(Math.random() * 100) }, { name: '文山壮族苗族自治州', value: Math.round(Math.random() * 100) }, { name: '曲靖市', value: Math.round(Math.random() * 100) }, { name: '楚雄彝族自治州', value: Math.round(Math.random() * 100) }, { name: '大理白族自治州', value: Math.round(Math.random() * 100) }, { name: '临沧市', value: Math.round(Math.random() * 100) }, { name: '迪庆藏族自治州', value: Math.round(Math.random() * 100) }, { name: '昭通市', value: Math.round(Math.random() * 100) }, { name: '昆明市', value: Math.round(Math.random() * 100) }, { name: '丽江市', value: Math.round(Math.random() * 100) }, { name: '西双版纳傣族自治州', value: Math.round(Math.random() * 100) }, { name: '保山市', value: Math.round(Math.random() * 100) }, { name: '玉溪市', value: Math.round(Math.random() * 100) }, { name: '怒江傈僳族自治州', value: Math.round(Math.random() * 100) }, { name: '德宏傣族景颇族自治州', value: Math.round(Math.random() * 100) }, { name: '百色市', value: Math.round(Math.random() * 100) }, { name: '河池市', value: Math.round(Math.random() * 100) }, { name: '桂林市', value: Math.round(Math.random() * 100) }, { name: '南宁市', value: Math.round(Math.random() * 100) }, { name: '柳州市', value: Math.round(Math.random() * 100) }, { name: '崇左市', value: Math.round(Math.random() * 100) }, { name: '来宾市', value: Math.round(Math.random() * 100) }, { name: '玉林市', value: Math.round(Math.random() * 100) }, { name: '梧州市', value: Math.round(Math.random() * 100) }, { name: '贺州市', value: Math.round(Math.random() * 100) }, { name: '钦州市', value: Math.round(Math.random() * 100) }, { name: '贵港市', value: Math.round(Math.random() * 100) }, { name: '防城港市', value: Math.round(Math.random() * 100) }, { name: '北海市', value: Math.round(Math.random() * 100) }, { name: '怀化市', value: Math.round(Math.random() * 100) }, { name: '永州市', value: Math.round(Math.random() * 100) }, { name: '邵阳市', value: Math.round(Math.random() * 100) }, { name: '郴州市', value: Math.round(Math.random() * 100) }, { name: '常德市', value: Math.round(Math.random() * 100) }, { name: '湘西土家族苗族自治州', value: Math.round(Math.random() * 100) }, { name: '衡阳市', value: Math.round(Math.random() * 100) }, { name: '岳阳市', value: Math.round(Math.random() * 100) }, { name: '益阳市', value: Math.round(Math.random() * 100) }, { name: '长沙市', value: Math.round(Math.random() * 100) }, { name: '株洲市', value: Math.round(Math.random() * 100) }, { name: '张家界市', value: Math.round(Math.random() * 100) }, { name: '娄底市', value: Math.round(Math.random() * 100) }, { name: '湘潭市', value: Math.round(Math.random() * 100) }, { name: '榆林市', value: Math.round(Math.random() * 100) }, { name: '延安市', value: Math.round(Math.random() * 100) }, { name: '汉中市', value: Math.round(Math.random() * 100) }, { name: '安康市', value: Math.round(Math.random() * 100) }, { name: '商洛市', value: Math.round(Math.random() * 100) }, { name: '宝鸡市', value: Math.round(Math.random() * 100) }, { name: '渭南市', value: Math.round(Math.random() * 100) }, { name: '咸阳市', value: Math.round(Math.random() * 100) }, { name: '西安市', value: Math.round(Math.random() * 100) }, { name: '铜川市', value: Math.round(Math.random() * 100) }, { name: '清远市', value: Math.round(Math.random() * 100) }, { name: '韶关市', value: Math.round(Math.random() * 100) }, { name: '湛江市', value: Math.round(Math.random() * 100) }, { name: '梅州市', value: Math.round(Math.random() * 100) }, { name: '河源市', value: Math.round(Math.random() * 100) }, { name: '肇庆市', value: Math.round(Math.random() * 100) }, { name: '惠州市', value: Math.round(Math.random() * 100) }, { name: '茂名市', value: Math.round(Math.random() * 100) }, { name: '江门市', value: Math.round(Math.random() * 100) }, { name: '阳江市', value: Math.round(Math.random() * 100) }, { name: '云浮市', value: Math.round(Math.random() * 100) }, { name: '广州市', value: 33 }, { name: '汕尾市', value: Math.round(Math.random() * 100) }, { name: '揭阳市', value: Math.round(Math.random() * 100) }, { name: '珠海市', value: Math.round(Math.random() * 100) }, { name: '佛山市', value: Math.round(Math.random() * 100) }, { name: '潮州市', value: Math.round(Math.random() * 100) }, { name: '汕头市', value: Math.round(Math.random() * 100) }, { name: '深圳市', value: Math.round(Math.random() * 100) }, { name: '东莞市', value: Math.round(Math.random() * 100) }, { name: '中山市', value: Math.round(Math.random() * 100) }, { name: '延边朝鲜族自治州', value: Math.round(Math.random() * 100) }, { name: '吉林市', value: Math.round(Math.random() * 100) }, { name: '白城市', value: Math.round(Math.random() * 100) }, { name: '松原市', value: Math.round(Math.random() * 100) }, { name: '长春市', value: Math.round(Math.random() * 100) }, { name: '白山市', value: Math.round(Math.random() * 100) }, { name: '通化市', value: Math.round(Math.random() * 100) }, { name: '四平市', value: Math.round(Math.random() * 100) }, { name: '辽源市', value: Math.round(Math.random() * 100) }, { name: '承德市', value: Math.round(Math.random() * 100) }, { name: '张家口市', value: Math.round(Math.random() * 100) }, { name: '保定市', value: Math.round(Math.random() * 100) }, { name: '唐山市', value: Math.round(Math.random() * 100) }, { name: '沧州市', value: Math.round(Math.random() * 100) }, { name: '石家庄市', value: Math.round(Math.random() * 100) }, { name: '邢台市', value: Math.round(Math.random() * 100) }, { name: '邯郸市', value: Math.round(Math.random() * 100) }, { name: '秦皇岛市', value: Math.round(Math.random() * 100) }, { name: '衡水市', value: Math.round(Math.random() * 100) }, { name: '廊坊市', value: Math.round(Math.random() * 100) }, { name: '恩施土家族苗族自治州', value: Math.round(Math.random() * 100) }, { name: '十堰市', value: Math.round(Math.random() * 100) }, { name: '宜昌市', value: Math.round(Math.random() * 100) }, { name: '襄樊市', value: Math.round(Math.random() * 100) }, { name: '黄冈市', value: Math.round(Math.random() * 100) }, { name: '荆州市', value: Math.round(Math.random() * 100) }, { name: '荆门市', value: Math.round(Math.random() * 100) }, { name: '咸宁市', value: Math.round(Math.random() * 100) }, { name: '随州市', value: Math.round(Math.random() * 100) }, { name: '孝感市', value: Math.round(Math.random() * 100) }, { name: '武汉市', value: Math.round(Math.random() * 100) }, { name: '黄石市', value: Math.round(Math.random() * 100) }, { name: '神农架林区', value: Math.round(Math.random() * 100) }, { name: '天门市', value: Math.round(Math.random() * 100) }, { name: '仙桃市', value: Math.round(Math.random() * 100) }, { name: '潜江市', value: Math.round(Math.random() * 100) }, { name: '鄂州市', value: Math.round(Math.random() * 100) }, { name: '遵义市', value: Math.round(Math.random() * 100) }, { name: '黔东南苗族侗族自治州', value: Math.round(Math.random() * 100) }, { name: '毕节地区', value: Math.round(Math.random() * 100) }, { name: '黔南布依族苗族自治州', value: Math.round(Math.random() * 100) }, { name: '铜仁地区', value: Math.round(Math.random() * 100) }, { name: '黔西南布依族苗族自治州', value: Math.round(Math.random() * 100) }, { name: '六盘水市', value: Math.round(Math.random() * 100) }, { name: '安顺市', value: Math.round(Math.random() * 100) }, { name: '贵阳市', value: Math.round(Math.random() * 100) }, { name: '烟台市', value: Math.round(Math.random() * 100) }, { name: '临沂市', value: Math.round(Math.random() * 100) }, { name: '潍坊市', value: Math.round(Math.random() * 100) }, { name: '青岛市', value: Math.round(Math.random() * 100) }, { name: '菏泽市', value: Math.round(Math.random() * 100) }, { name: '济宁市', value: Math.round(Math.random() * 100) }, { name: '德州市', value: Math.round(Math.random() * 100) }, { name: '滨州市', value: Math.round(Math.random() * 100) }, { name: '聊城市', value: Math.round(Math.random() * 100) }, { name: '东营市', value: Math.round(Math.random() * 100) }, { name: '济南市', value: Math.round(Math.random() * 100) }, { name: '泰安市', value: Math.round(Math.random() * 100) }, { name: '威海市', value: Math.round(Math.random() * 100) }, { name: '日照市', value: Math.round(Math.random() * 100) }, { name: '淄博市', value: Math.round(Math.random() * 100) }, { name: '枣庄市', value: Math.round(Math.random() * 100) }, { name: '莱芜市', value: Math.round(Math.random() * 100) }, { name: '赣州市', value: Math.round(Math.random() * 100) }, { name: '吉安市', value: Math.round(Math.random() * 100) }, { name: '上饶市', value: Math.round(Math.random() * 100) }, { name: '九江市', value: Math.round(Math.random() * 100) }, { name: '抚州市', value: Math.round(Math.random() * 100) }, { name: '宜春市', value: Math.round(Math.random() * 100) }, { name: '南昌市', value: Math.round(Math.random() * 100) }, { name: '景德镇市', value: Math.round(Math.random() * 100) }, { name: '萍乡市', value: Math.round(Math.random() * 100) }, { name: '鹰潭市', value: Math.round(Math.random() * 100) }, { name: '新余市', value: Math.round(Math.random() * 100) }, { name: '南阳市', value: Math.round(Math.random() * 100) }, { name: '信阳市', value: Math.round(Math.random() * 100) }, { name: '洛阳市', value: Math.round(Math.random() * 100) }, { name: '驻马店市', value: Math.round(Math.random() * 100) }, { name: '周口市', value: Math.round(Math.random() * 100) }, { name: '商丘市', value: Math.round(Math.random() * 100) }, { name: '三门峡市', value: Math.round(Math.random() * 100) }, { name: '新乡市', value: Math.round(Math.random() * 100) }, { name: '平顶山市', value: Math.round(Math.random() * 100) }, { name: '郑州市', value: Math.round(Math.random() * 100) }, { name: '安阳市', value: Math.round(Math.random() * 100) }, { name: '开封市', value: Math.round(Math.random() * 100) }, { name: '焦作市', value: Math.round(Math.random() * 100) }, { name: '许昌市', value: Math.round(Math.random() * 100) }, { name: '濮阳市', value: Math.round(Math.random() * 100) }, { name: '漯河市', value: Math.round(Math.random() * 100) }, { name: '鹤壁市', value: Math.round(Math.random() * 100) }, { name: '大连市', value: Math.round(Math.random() * 100) }, { name: '朝阳市', value: Math.round(Math.random() * 100) }, { name: '丹东市', value: Math.round(Math.random() * 100) }, { name: '铁岭市', value: Math.round(Math.random() * 100) }, { name: '沈阳市', value: Math.round(Math.random() * 100) }, { name: '抚顺市', value: Math.round(Math.random() * 100) }, { name: '葫芦岛市', value: Math.round(Math.random() * 100) }, { name: '阜新市', value: Math.round(Math.random() * 100) }, { name: '锦州市', value: Math.round(Math.random() * 100) }, { name: '鞍山市', value: Math.round(Math.random() * 100) }, { name: '本溪市', value: Math.round(Math.random() * 100) }, { name: '营口市', value: Math.round(Math.random() * 100) }, { name: '辽阳市', value: Math.round(Math.random() * 100) }, { name: '盘锦市', value: Math.round(Math.random() * 100) }, { name: '忻州市', value: Math.round(Math.random() * 100) }, { name: '吕梁市', value: Math.round(Math.random() * 100) }, { name: '临汾市', value: Math.round(Math.random() * 100) }, { name: '晋中市', value: Math.round(Math.random() * 100) }, { name: '运城市', value: Math.round(Math.random() * 100) }, { name: '大同市', value: Math.round(Math.random() * 100) }, { name: '长治市', value: Math.round(Math.random() * 100) }, { name: '朔州市', value: Math.round(Math.random() * 100) }, { name: '晋城市', value: Math.round(Math.random() * 100) }, { name: '太原市', value: Math.round(Math.random() * 100) }, { name: '阳泉市', value: Math.round(Math.random() * 100) }, { name: '六安市', value: Math.round(Math.random() * 100) }, { name: '安庆市', value: Math.round(Math.random() * 100) }, { name: '滁州市', value: Math.round(Math.random() * 100) }, { name: '宣城市', value: Math.round(Math.random() * 100) }, { name: '阜阳市', value: Math.round(Math.random() * 100) }, { name: '宿州市', value: Math.round(Math.random() * 100) }, { name: '黄山市', value: Math.round(Math.random() * 100) }, { name: '巢湖市', value: Math.round(Math.random() * 100) }, { name: '亳州市', value: Math.round(Math.random() * 100) }, { name: '池州市', value: Math.round(Math.random() * 100) }, { name: '合肥市', value: Math.round(Math.random() * 100) }, { name: '蚌埠市', value: Math.round(Math.random() * 100) }, { name: '芜湖市', value: Math.round(Math.random() * 100) }, { name: '淮北市', value: Math.round(Math.random() * 100) }, { name: '淮南市', value: Math.round(Math.random() * 100) }, { name: '马鞍山市', value: Math.round(Math.random() * 100) }, { name: '铜陵市', value: Math.round(Math.random() * 100) }, { name: '南平市', value: Math.round(Math.random() * 100) }, { name: '三明市', value: Math.round(Math.random() * 100) }, { name: '龙岩市', value: Math.round(Math.random() * 100) }, { name: '宁德市', value: Math.round(Math.random() * 100) }, { name: '福州市', value: Math.round(Math.random() * 100) }, { name: '漳州市', value: Math.round(Math.random() * 100) }, { name: '泉州市', value: Math.round(Math.random() * 100) }, { name: '莆田市', value: Math.round(Math.random() * 100) }, { name: '厦门市', value: Math.round(Math.random() * 100) }, { name: '丽水市', value: Math.round(Math.random() * 100) }, { name: '杭州市', value: Math.round(Math.random() * 100) }, { name: '温州市', value: Math.round(Math.random() * 100) }, { name: '宁波市', value: Math.round(Math.random() * 100) }, { name: '舟山市', value: Math.round(Math.random() * 100) }, { name: '台州市', value: Math.round(Math.random() * 100) }, { name: '金华市', value: Math.round(Math.random() * 100) }, { name: '衢州市', value: Math.round(Math.random() * 100) }, { name: '绍兴市', value: Math.round(Math.random() * 100) }, { name: '嘉兴市', value: Math.round(Math.random() * 100) }, { name: '湖州市', value: Math.round(Math.random() * 100) }, { name: '盐城市', value: Math.round(Math.random() * 100) }, { name: '徐州市', value: Math.round(Math.random() * 100) }, { name: '南通市', value: Math.round(Math.random() * 100) }, { name: '淮安市', value: Math.round(Math.random() * 100) }, { name: '苏州市', value: Math.round(Math.random() * 100) }, { name: '宿迁市', value: Math.round(Math.random() * 100) }, { name: '连云港市', value: Math.round(Math.random() * 100) }, { name: '扬州市', value: Math.round(Math.random() * 100) }, { name: '南京市', value: Math.round(Math.random() * 100) }, { name: '泰州市', value: Math.round(Math.random() * 100) }, { name: '无锡市', value: Math.round(Math.random() * 100) }, { name: '常州市', value: Math.round(Math.random() * 100) }, { name: '镇江市', value: Math.round(Math.random() * 100) }, { name: '吴忠市', value: Math.round(Math.random() * 100) }, { name: '中卫市', value: Math.round(Math.random() * 100) }, { name: '固原市', value: Math.round(Math.random() * 100) }, { name: '银川市', value: Math.round(Math.random() * 100) }, { name: '石嘴山市', value: Math.round(Math.random() * 100) }, { name: '儋州市', value: Math.round(Math.random() * 100) }, { name: '文昌市', value: Math.round(Math.random() * 100) }, { name: '乐东黎族自治县', value: Math.round(Math.random() * 100) }, { name: '三亚市', value: Math.round(Math.random() * 100) }, { name: '琼中黎族苗族自治县', value: Math.round(Math.random() * 100) }, { name: '东方市', value: Math.round(Math.random() * 100) }, { name: '海口市', value: Math.round(Math.random() * 100) }, { name: '万宁市', value: Math.round(Math.random() * 100) }, { name: '澄迈县', value: Math.round(Math.random() * 100) }, { name: '白沙黎族自治县', value: Math.round(Math.random() * 100) }, { name: '琼海市', value: Math.round(Math.random() * 100) }, { name: '昌江黎族自治县', value: Math.round(Math.random() * 100) }, { name: '临高县', value: Math.round(Math.random() * 100) }, { name: '陵水黎族自治县', value: Math.round(Math.random() * 100) }, { name: '屯昌县', value: Math.round(Math.random() * 100) }, { name: '定安县', value: Math.round(Math.random() * 100) }, { name: '保亭黎族苗族自治县', value: Math.round(Math.random() * 100) }, { name: '五指山市', value: Math.round(Math.random() * 100) }]
  }]
};
var mapType = ['china',
// 23个省
'广东', '青海', '四川', '海南', '陕西', '甘肃', '云南', '湖南', '湖北', '黑龙江', '贵州', '山东', '江西', '河南', '河北', '山西', '安徽', '福建', '浙江', '江苏', '吉林', '辽宁', '台湾',
// 5个自治区
'新疆', '广西', '宁夏', '内蒙古', '西藏',
// 4个直辖市
'北京', '天津', '上海', '重庆',
// 2个特别行政区
'香港', '澳门'];
// 绑定redux，包括方法和数据

var Home = _wrapComponent('Home')(function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showMap: false, trigger: true }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/json/china.json').then(function (res) {
        return res.json();
      }).then(function (json) {
        _echarts2.default.registerMap('china', json);
        _this2.setState({ showMap: true });
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(params) {
      var _this3 = this;

      if (!mapType.includes(params.name)) {
        option.tooltip.formatter = '点击进入{b}<br/>{a}: {c}';
        option.series[0].mapType = 'china';
        fetch('/json/china.json').then(function (res) {
          return res.json();
        }).then(function (json) {
          _echarts2.default.registerMap('china', json);
          var trigger = _this3.state.trigger;

          _this3.setState({ trigger: !trigger });
        });
        return;
      }
      option.tooltip.formatter = '点击返回全国<br/>{b}-{a}:{c}';
      option.series[0].mapType = params.name;
      fetch('/json/province/' + params.name + '.json').then(function (res) {
        return res.json();
      }).then(function (json) {
        _echarts2.default.registerMap(params.name, json);
        var trigger = _this3.state.trigger;

        _this3.setState({ trigger: !trigger });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        this.state.showMap && _react3.default.createElement(_echartsForReact2.default, {
          option: option,
          notMerge: true, lazyUpdate: true,
          theme: "theme_name",
          onEvents: { mapselectchanged: this.onClick.bind(this) }
        })
      );
    }
  }]);
  return Home;
}(_react2.Component));

exports.default = Home;
module.exports = exports['default'];