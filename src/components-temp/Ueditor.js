'use strict';

var _css = require('antd/lib/icon/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _OSSUploader = require('./OSSUploader');

var _OSSUploader2 = _interopRequireDefault(_OSSUploader);

var _urls = require('../constants/urls');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  UEditor: {
    displayName: 'UEditor'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src-code/components-temp/Ueditor.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

require('../../static/ueditor/ueditor.config');
require('../../static/ueditor/ueditor.all.min');
require('../../static/ueditor/lang/zh-cn/zh-cn');
require('../../static/ueditor/themes/default/css/ueditor.css');
/*
  checkAndSubmit() {
    console.log(this.ue.getContent());
  }
  <Ueditor ref={(ref)=>{this.ue = ref;}}/>
  <button style={{'zIndex': 1000, color: 'red'}} onClick={this.checkAndSubmit.bind(this)}>Submit</button>

 */
var UEditor = _wrapComponent('UEditor')(_react3.default.createClass({
  displayName: 'UEditor',
  // 设置默认的属性值
  getDefaultProps: function getDefaultProps() {
    return { disabled: false, height: 200, content: '', id: 'editor' };
  },
  insertImg: function insertImg(url) {
    this.insertHtml('<img src=\'' + url + '\' />');
  },
  render: function render() {
    return _react3.default.createElement(
      'div',
      null,
      _react3.default.createElement('script', { id: this.props.id, name: 'content', type: 'text/plain' }),
      _react3.default.createElement(
        'div',
        { style: { 'marginTop': '2px' } },
        _react3.default.createElement(_OSSUploader2.default, {
          policyUrl: _urls.SCHOOL_LICENCE_POLICY,
          onChange: this.insertImg,
          showImg: false,
          jsx: _react3.default.createElement(
            'span',
            { style: { color: '#4169E1' } },
            _react3.default.createElement(_icon2.default, { type: 'picture' }),
            '  \u63D2\u5165\u56FE\u7247'
          )
        })
      )
    );
  },
  // 调用初始化方法
  componentDidMount: function componentDidMount() {
    this.initEditor();
  },
  // 编辑器配置项初始化
  initEditor: function initEditor() {
    var id = this.props.id;
    var ue = window.UE.getEditor(id, {
      // 工具栏，不配置有默认项目
      toolbars: [['fullscreen', 'source', '|', 'undo', 'redo', '|', 'bold', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'formatmatch', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', '|', 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|', 'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|', 'indent', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|', 'horizontal', 'date', 'time', '|', 'selectall', 'cleardoc', 'removeformat']],
      lang: 'zh-cn',
      insertorderedlist: {
        'decimal': '', // '1,2,3...'
        'lower-alpha': '', // 'a,b,c...'
        'lower-roman': '', // 'i,ii,iii...'
        'upper-alpha': '', // 'A,B,C'
        'upper-roman': '' // 'I,II,III...'
      },
      insertunorderedlist: {
        'circle': '', // '○ 小圆圈'
        'disc': '', // '● 小圆点'
        'square': '' // '■ 小方块'
      },
      // 字体
      'fontfamily': [{ label: '', name: 'songti', val: '宋体,SimSun' }, { label: '', name: 'kaiti', val: '楷体,楷体_GB2312, SimKai' }, { label: '', name: 'yahei', val: '微软雅黑,Microsoft YaHei' }, { label: '', name: 'heiti', val: '黑体, SimHei' }, { label: '', name: 'lishu', val: '隶书, SimLi' }, { label: '', name: 'andaleMono', val: 'andale mono' }, { label: '', name: 'arial', val: 'arial, helvetica,sans-serif' }, { label: '', name: 'arialBlack', val: 'arial black,avant garde' }, { label: '', name: 'comicSansMs', val: 'comic sans ms' }, { label: '', name: 'impact', val: 'impact,chicago' }, { label: '', name: 'timesNewRoman', val: 'times new roman' }],
      // 字号
      'fontsize': [10, 11, 12, 14, 16, 18, 20, 24, 36],
      // 为编辑器实例添加一个路径，必需项
      'UEDITOR_HOME_URL': 'ueditor/',
      enableAutoSave: false,
      autoSyncData: false,
      autoHeightEnabled: false,
      initialFrameHeight: this.props.height,
      initialFrameWidth: '100%',
      // 是否允许编辑
      readonly: this.props.disabled
    });
    this.editor = ue;
    var self = this;

    this.editor.ready(function (ueditor) {
      if (!ueditor) {
        // 如果初始化后ueditor不存在删除后重新调用
        window.UE.delEditor(self.props.id);
        self.initEditor();
      }
    });
  },
  ready: function ready(fn) {
    if (this.editor) {
      this.editor.ready(fn);
    }
    return '';
  },
  // 获取编辑器的内容
  getContent: function getContent() {
    if (this.editor) {
      return this.editor.getContent();
    }
    return '';
  },
  /**
   * 写入内容｜追加内容
   * @param {Boolean} isAppendTo    [是否是追加]
   * @param {String}  appendContent [内容]
   */
  setContent: function setContent(appendContent, isAppendTo) {
    if (this.editor) {
      this.editor.setContent(appendContent, isAppendTo);
    }
  },
  // 获取纯文本
  getContentTxt: function getContentTxt() {
    if (this.editor) {
      return this.editor.getContentTxt();
    }
    return '';
  },
  // 获得带格式的纯文本
  getPlainTxt: function getPlainTxt() {
    if (this.editor) {
      return this.editor.getPlainTxt();
    }
    return '';
  },
  // 判断是否有内容
  hasContent: function hasContent() {
    if (this.editor) {
      return this.editor.hasContents();
    }
    return false;
  },
  // 插入给定的html
  insertHtml: function insertHtml(content) {
    if (this.editor) {
      this.editor.execCommand('insertHtml', content);
    }
  },
  // 使编辑器获得焦点
  setFocus: function setFocus() {
    if (this.editor) {
      this.editor.focus();
    }
  },
  // 设置高度
  setHeight: function setHeight(height) {
    if (this.editor) {
      this.editor.setHeight(height);
    }
  }
}));
module.exports = UEditor;