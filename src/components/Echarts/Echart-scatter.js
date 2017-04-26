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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Home: {
    displayName: 'Home'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components/Echarts/Echart-scatter.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var arr = [{ name: '王生安', sex: 'male', height: '121.1', weight: '34' }, { name: '李鑫灏', sex: 'male', height: '121.3', weight: '31' }, { name: '薛佛世', sex: 'male', height: '121.5', weight: '34' }, { name: '蔡壮保', sex: 'male', height: '121.7', weight: '32' }, { name: '潘恩依', sex: 'male', height: '121.9', weight: '34' }, { name: '陈国柏', sex: 'male', height: '122.1', weight: '31' }, { name: '周卓浩', sex: 'male', height: '122.3', weight: '34' }, { name: '汤辟邦', sex: 'male', height: '122.5', weight: '33' }, { name: '张顺谷', sex: 'male', height: '122.7', weight: '34' }, { name: '张悌斯', sex: 'male', height: '122.9', weight: '34' }, { name: '张灶冲', sex: 'male', height: '123.1', weight: '33' }, { name: '易江维', sex: 'male', height: '123.3', weight: '35' }, { name: '孙来笙', sex: 'male', height: '123.5', weight: '41' }, { name: '饶展林', sex: 'male', height: '123.7', weight: '44' }, { name: '岳列洋', sex: 'male', height: '124.1', weight: '43' }, { name: '时党舒', sex: 'male', height: '125.1', weight: '42' }, { name: '王生安1', sex: 'male', height: '126.1', weight: '41' }, { name: '王生安2', sex: 'male', height: '127.1', weight: '40' }, { name: '王生安3', sex: 'male', height: '128.1', weight: '39' }, { name: '周迟蒲1', sex: 'female', height: '121', weight: '32' }, { name: '周迟蒲2', sex: 'female', height: '122', weight: '31' }, { name: '周迟蒲3', sex: 'female', height: '123', weight: '35' }, { name: '周迟蒲4', sex: 'female', height: '124', weight: '32' }, { name: '周迟蒲5', sex: 'female', height: '125', weight: '32' }, { name: '周迟蒲6', sex: 'female', height: '126', weight: '35' }, { name: '周迟蒲7', sex: 'female', height: '127', weight: '31' }, { name: '周迟蒲8', sex: 'female', height: '128', weight: '34' }, { name: '周迟蒲9', sex: 'female', height: '129', weight: '35' }, { name: '周迟蒲10', sex: 'female', height: '120', weight: '32' }, { name: '周迟蒲11', sex: 'female', height: '121', weight: '36' }, { name: '周迟蒲12', sex: 'female', height: '122', weight: '34' }, { name: '周迟蒲13', sex: 'female', height: '123', weight: '32' }, { name: '周迟蒲14', sex: 'female', height: '124', weight: '33' }, { name: '周迟蒲15', sex: 'female', height: '125', weight: '32' }, { name: '周迟蒲16', sex: 'female', height: '126', weight: '31' }, { name: '周迟蒲17', sex: 'female', height: '121', weight: '32' }, { name: '周迟蒲18', sex: 'female', height: '122', weight: '30' }, { name: '周迟蒲19', sex: 'female', height: '122', weight: '34' }, { name: '周迟蒲20', sex: 'female', height: '123', weight: '35' }, { name: '周迟蒲21', sex: 'female', height: '124', weight: '37' }, { name: '周迟蒲22', sex: 'female', height: '126', weight: '32' }, { name: '周迟蒲23', sex: 'female', height: '127', weight: '31' }, { name: '周迟蒲24', sex: 'female', height: '128', weight: '34' }, { name: '周迟蒲25', sex: 'female', height: '129', weight: '32' }];
var arr1 = arr.filter(function (item) {
  return item.sex === 'male';
});
var arr2 = arr.filter(function (item) {
  return item.sex === 'female';
});
var arrMale = arr1.map(function (item) {
  return [item.height, item.weight];
});
var arrFemale = arr2.map(function (item) {
  return [item.height, item.weight];
});
var option = {
  title: {
    text: '男性女性身高体重分布',
    subtext: '抽样调查来自: Heinz  2003'
  },
  grid: { // 位置信息
    left: '0',
    right: '7%',
    bottom: '3%',
    containLabel: true // 显示坐标上的label
  },
  tooltip: {
    trigger: 'axis', // 表格里面xy
    showDelay: 0,
    formatter: function formatter(params) {
      if (params.value.length > 1) {
        return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
      } else {
        return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
      }
    },
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1
      }
    }
  },
  toolbox: {
    feature: {
      dataZoom: {},
      brush: {
        type: ['rect', 'polygon', 'clear']
      }
    }
  },
  brush: {},
  legend: {
    data: ['女性', '男性'],
    left: 'center'
  },
  xAxis: [{
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} cm'
    },
    splitLine: {
      show: false
    }
  }],
  yAxis: [{
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} kg'
    },
    splitLine: {
      show: false
    }
  }],
  series: [{
    name: '女性',
    type: 'scatter',
    data: arrFemale,
    markArea: {
      silent: true,
      itemStyle: {
        normal: {
          color: 'transparent',
          borderWidth: 1,
          borderType: 'dashed'
        }
      },
      data: [[{
        name: '女性分布区间',
        xAxis: 'min',
        yAxis: 'min'
      }, {
        xAxis: 'max',
        yAxis: 'max'
      }]]
    },
    markPoint: {
      data: [{
        type: 'max',
        name: '最大值'
      }, {
        type: 'min',
        name: '最小值'
      }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      data: [{
        type: 'average',
        name: '平均值'
      }]
    }
  }, {
    name: '男性',
    type: 'scatter',
    data: arrMale,
    markArea: {
      silent: true,
      itemStyle: {
        normal: {
          color: 'transparent',
          borderWidth: 1,
          borderType: 'dashed'
        }
      },
      data: [[{
        name: '男性分布区间',
        xAxis: 'min',
        yAxis: 'min'
      }, {
        xAxis: 'max',
        yAxis: 'max'
      }]]
    },
    markPoint: {
      data: [{
        type: 'max',
        name: '最大值'
      }, {
        type: 'min',
        name: '最小值'
      }]
    },
    markLine: {
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      data: [{
        type: 'average',
        name: '平均值'
      }]
    }
  }]
};
// 绑定redux，包括方法和数据

var Home = _wrapComponent('Home')(function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(_echartsForReact2.default, {
        option: option,
        notMerge: true, lazyUpdate: true,
        theme: "theme_name"
        // onChartReady={this.onChartReadyCallback} // onEvents={EventsDict
      });
    }
  }]);
  return Home;
}(_react2.Component));

exports.default = Home;
module.exports = exports['default'];