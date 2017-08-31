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

var _css = require('antd/lib/select/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  CategorySelector: {
    displayName: 'CategorySelector'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components/CategorySelector.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Option = _select2.default.Option;

var CategorySelector = _wrapComponent('CategorySelector')((_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(CategorySelector, _Component);

  function CategorySelector() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CategorySelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CategorySelector.__proto__ || (0, _getPrototypeOf2.default)(CategorySelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      first: undefined,
      second: undefined,
      third: undefined,
      fourth: undefined
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CategorySelector, [{
    key: 'componentWillMount',

    // 设置默认值
    value: function componentWillMount() {
      // 没有初始化的情况
      var initialObj = this.props.initialObj;

      if (!initialObj) {
        return;
      }
      var first = initialObj[0] || undefined;
      var second = initialObj[1] || undefined;
      var third = initialObj[2] || undefined;
      var fourth = initialObj[3] || undefined;
      this.state = { first: first, second: second, third: third, fourth: fourth };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var initialObj = nextProps.initialObj;

      if (!initialObj) {
        return;
      }
      if (this.props.initialObj !== nextProps.initialObj) {
        var first = initialObj[0] || undefined;
        var second = initialObj[1] || undefined;
        var third = initialObj[2] || undefined;
        var fourth = initialObj[3] || undefined;
        this.state = { first: first, second: second, third: third, fourth: fourth };
      }
    }
    // 选择条目变化触发

  }, {
    key: 'onChange',
    value: function onChange(first, second, third, fourth) {
      var state = { first: first, second: second, third: third, fourth: fourth };
      this.setState(state);
      var id = void 0;
      var level = void 0;
      if (fourth) {
        id = fourth;
        level = 4;
      } else if (third) {
        id = third;
        level = 3;
      } else if (second) {
        id = second;
        level = 2;
      } else {
        id = first;
        level = 1;
      }
      this.props.onChange(id, level);
    }
  }, {
    key: 'changeFirst',
    value: function changeFirst(value, option) {
      this.onChange(value);
    }
  }, {
    key: 'changeSecond',
    value: function changeSecond(value, option) {
      var first = this.state.first;

      this.onChange(first, value);
    }
  }, {
    key: 'changeThird',
    value: function changeThird(value, option) {
      var _state = this.state,
          first = _state.first,
          second = _state.second;

      this.onChange(first, second, value);
    }
  }, {
    key: 'changeFourth',
    value: function changeFourth(value, option) {
      var _state2 = this.state,
          first = _state2.first,
          second = _state2.second,
          third = _state2.third;

      this.onChange(first, second, third, value);
    }
  }, {
    key: 'renderFirst',
    value: function renderFirst(first, firstArr) {
      return _react3.default.createElement(
        _select2.default,
        { key: '0', value: first,
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { 'width': '20%', display: 'inline-block' },
          onSelect: this.changeFirst.bind(this)
        },
        firstArr.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item._id, value: item._id },
            ' ',
            item.name,
            ' '
          );
        })
      );
    }
  }, {
    key: 'renderSecond',
    value: function renderSecond(second, SecondArr) {
      return _react3.default.createElement(
        _select2.default,
        { key: '2', value: second,
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { 'width': '20%', display: 'inline-block', 'marginLeft': '5%' },
          onSelect: this.changeSecond.bind(this)
        },
        SecondArr.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item._id, value: item._id },
            ' ',
            item.name,
            ' '
          );
        })
      );
    }
  }, {
    key: 'renderThird',
    value: function renderThird(third, thirdArr) {
      return _react3.default.createElement(
        _select2.default,
        { key: '4', value: third,
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { 'width': '20%', display: 'inline-block', 'marginLeft': '5%' },
          onSelect: this.changeThird.bind(this)
        },
        thirdArr.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item._id, value: item._id },
            ' ',
            item.name,
            ' '
          );
        })
      );
    }
  }, {
    key: 'renderFourth',
    value: function renderFourth(fourth, fourthArr) {
      return _react3.default.createElement(
        _select2.default,
        { key: '5', value: fourth,
          notFoundContent: '\u6CA1\u6570\u636E', placeholder: '\u8BF7\u9009\u62E9',
          style: { 'width': '20%', display: 'inline-block', 'marginLeft': '5%' },
          onSelect: this.changeFourth.bind(this)
        },
        fourthArr.map(function (item) {
          return _react3.default.createElement(
            Option,
            { key: item._id, value: item._id },
            ' ',
            item.name,
            ' '
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var _state3 = this.state,
          first = _state3.first,
          second = _state3.second,
          third = _state3.third,
          fourth = _state3.fourth;

      var secondArr = [];
      data.forEach(function (item) {
        if (first && item._id === first) {
          secondArr = item.children;
        }
      });
      var thirdArr = [];
      secondArr.forEach(function (item) {
        if (second && item._id === second) {
          thirdArr = item.children;
        }
      });
      var fourthArr = [];
      thirdArr.forEach(function (item) {
        if (third && item._id === third) {
          fourthArr = item.children;
        }
      });
      return _react3.default.createElement(
        'div',
        null,
        [this.renderFirst.call(this, first, data), this.renderSecond.call(this, second, secondArr), this.renderThird.call(this, third, thirdArr), this.renderFourth.call(this, fourth, fourthArr)]
      );
    }
  }]);
  return CategorySelector;
}(_react2.Component), _class.PropTypes = {
  onChange: _react2.PropTypes.func,
  data: _react2.PropTypes.object.isRequired,
  initialObj: _react2.PropTypes.object
}, _class.defaultProps = {
  data: []
}, _temp2));

exports.default = CategorySelector;
module.exports = exports['default'];