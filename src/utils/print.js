"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _of = require("babel-runtime/core-js/array/of");

var _of2 = _interopRequireDefault(_of);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

exports.default = print;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import print from 'utils/print';
// onClick() {
//   const ele = document.getElementById('content');
//   print(ele);
// }
function print(eles) {
  if (!eles) {
    console.error('请输入dom元素');
    return;
  }
  var modes = { iframe: "iframe", popup: "popup" };
  var standards = { strict: "strict", loose: "loose", html5: "html5" };
  var defaults = { mode: modes.iframe, standard: standards.html5, popHt: 500, popWd: 400, popX: 200, popY: 200,
    popTitle: '', popClose: false, extraCss: '', extraHead: '', retainAttr: ["id", "class", "style"] };
  var settings = defaults;
  var idPrefix = "printArea_1";
  // const settings = {};//global settings
  // Object.assign(settings, defaults, options );
  // counter++;
  var PrintArea = {
    print: function print(PAWindow) {
      var paWindow = PAWindow.win;
      paWindow.focus();
      paWindow.print();
      if (settings.mode === modes.popup && settings.popClose) {
        setTimeout(function () {
          paWindow.close();
        }, 2000);
      }
    },
    write: function write(PADocument, ele) {
      PADocument.open();
      PADocument.write(PrintArea.docType() + "<html>" + PrintArea.getHead() + PrintArea.getBody(ele) + "</html>");
      PADocument.close();
    },
    docType: function docType() {
      if (settings.mode === modes.iframe) return "";

      if (settings.standard === standards.html5) return "<!DOCTYPE html>";

      var transitional = settings.standard === standards.loose ? " Transitional" : "";
      var dtd = settings.standard === standards.loose ? "loose" : "strict";

      return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + transitional + '//EN" "http://www.w3.org/TR/html4/' + dtd + '.dtd">';
    },
    getHead: function getHead() {
      var extraHead = "";
      var links = "";

      if (settings.extraHead) {
        settings.extraHead.replace(/([^,]+)/g, function (exm) {
          extraHead += exm;
        });
      }
      (0, _from2.default)(document.getElementsByTagName('link')).forEach(function (item) {
        var relAttr = item.getAttribute('rel');
        if (typeof relAttr === 'string' && relAttr.toLowerCase() === 'stylesheet') {
          // links += '<link type="text/css" rel="stylesheet" href="' + item.getAttribute('href') + '" >';
          links += '<link type="text/css" rel="stylesheet" href="' + item.href + '" >';
        }
      });
      if (settings.extraCss) {
        settings.extraCss.replace(/([^,\s]+)/g, function (exm) {
          links += '<link type="text/css" rel="stylesheet" href="' + exm + '">';
        });
      }
      // TODO
      // Array.from(document.getElementsByTagName('style')).forEach(item => {
      //   links += `<style type='text/css'>
      //     ${item.innerHTML}
      //   </style>`;
      // })

      return "<head><title>" + settings.popTitle + "</title>" + extraHead + links + "</head>";
    },
    getBody: function getBody(elements) {
      var htm = "";
      var attrs = settings.retainAttr;
      if (!elements.length) {
        elements = (0, _of2.default)(elements);
      }
      (0, _from2.default)(elements).forEach(function (item) {
        var ele = PrintArea.getFormData(item);
        var attributes = "";
        for (var index = 0; index < attrs.length; index++) {
          var eleAttr = ele.getAttribute(attrs[index]);
          if (eleAttr) {
            attributes += (attributes.length > 0 ? " " : "") + attrs[index] + "='" + eleAttr + "'";
          }
        }
        htm += '<div ' + attributes + '>' + ele.innerHTML + '</div>';
      });
      // TODO
      // Array.from(document.body.childNodes).map(item=> {
      // 	if(item.tagName === 'SCRIPT' && item.getAttribute('src')) {
      //     htm += `<script src='${item.getAttribute('src')}' ></style>`;
      // 	}
      // })
      return "<body>" + htm + "</body>";
    },
    getFormData: function getFormData(ele) {
      var copy = ele.cloneNode(true);
      var copiedInputs = (0, _from2.default)(copy.childNodes).filter(function (item) {
        return item.tagName === 'INPUT' || item.tagName === 'SELECT' || item.tagName === 'TEXTAREA';
      });
      var eleInputs = (0, _from2.default)(ele.childNodes).filter(function (item) {
        return item.tagName === 'INPUT' || item.tagName === 'SELECT' || item.tagName === 'TEXTAREA';
      });
      eleInputs.forEach(function (item, index) {
        var typeInput = item.getAttribute('type');
        if (typeof typeInput === 'undefined') {
          typeInput = item.tagName === 'SELECT' ? "select" : item.tagName === 'TEXTAREA' ? "textarea" : "";
        }
        var copiedInput = copiedInputs[index];
        if (typeInput === "radio" || typeInput === "checkbox") {
          var isChecked = document.querySelectorAll(":checked").find(function (item1) {
            return item1 === item;
          });
          copiedInput.setAttribute("checked", !!isChecked);
        } else if (typeInput === "text" || typeInput === "") {
          copiedInput.value = item.value;
        } else if (typeInput === "select") {
          (0, _from2.default)(item.childNodes).map(function (item1) {
            var isSelected = document.querySelectorAll(":selected").find(function (item2) {
              return item2 === item1;
            });
            if (isSelected) {
              (0, _from2.default)(copiedInput.childNodes).find(function (item3) {
                return item3 === isSelected;
              }).setAttribute("selected", true);
            }
          });
        } else if (typeInput === "textarea") {
          copiedInput.value = item.value;
        }
      });
      return copy;
    },
    getPrintWindow: function getPrintWindow() {
      switch (settings.mode) {
        case modes.iframe:
          var ifr = new PrintArea.Iframe();
          return { win: ifr.contentWindow || ifr, doc: ifr.doc, iframe: ifr };
        case modes.popup:
          var pop = new PrintArea.Popup();
          return { win: pop, doc: pop.doc };
        default:
      }
    },
    Iframe: function Iframe() {
      var frameId = settings.id;
      var iframeStyle = 'border:0;position:absolute;width:0px;height:0px;right:0px;top:0px;';
      var iframe = void 0;
      try {
        iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        iframe.setAttribute('style', iframeStyle);
        iframe.setAttribute('id', frameId);
        iframe.setAttribute('src', "#" + new Date().getTime());
        iframe.doc = null;
        iframe.doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow ? iframe.contentWindow.document : iframe.document;
      } catch (err) {
        var errInfo = err + ". iframes may not be supported in this browser.";
        throw errInfo;
      }

      if (iframe.doc === null) {
        var info = "Cannot find document.";
        throw info;
      }
      return iframe;
    },
    Popup: function Popup() {
      var windowAttr = "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
      windowAttr += ",width=" + settings.popWd + ",height=" + settings.popHt;
      windowAttr += ",resizable=yes,screenX=" + settings.popX + ",screenY=" + settings.popY + ",personalbar=no,scrollbars=yes";

      var newWin = window.open("", "_blank", windowAttr);

      newWin.doc = newWin.document;

      return newWin;
    }
  };
  var beforeEle = document.getElementById(idPrefix);
  beforeEle && beforeEle.parentNode.removeChild(beforeEle);

  settings.id = idPrefix;

  var PrintAreaWindow = PrintArea.getPrintWindow();

  var iframe1 = PrintAreaWindow.iframe;
  if (iframe1.attachEvent) {
    iframe1.attachEvent("onload", function () {
      PrintArea.print(PrintAreaWindow);
    });
  } else {
    iframe1.onload = function () {
      PrintArea.print(PrintAreaWindow);
    };
  }
  PrintArea.write(PrintAreaWindow.doc, eles);
}
module.exports = exports['default'];