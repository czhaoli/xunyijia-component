// import print from 'utils/print';
// onClick() {
//   const ele = document.getElementById('content');
//   print(ele);
// }
export default function print(eles) {
  if (!eles) {
    console.error('请输入dom元素');
    return;
  }
  const modes = { iframe: "iframe", popup: "popup" };
  const standards = { strict: "strict", loose: "loose", html5: "html5" };
  const defaults = { mode: modes.iframe, standard: standards.html5, popHt: 500, popWd: 400, popX: 200, popY: 200,
     popTitle: '', popClose: false, extraCss: '', extraHead: '', retainAttr: ["id", "class", "style"] };
  const settings = defaults;
  const idPrefix = "printArea_1";
  // const settings = {};//global settings
  // Object.assign(settings, defaults, options );
  // counter++;
  const PrintArea = {
    print: function( PAWindow ) {
      const paWindow = PAWindow.win;
      paWindow.focus();
      paWindow.print();
      if ( settings.mode === modes.popup && settings.popClose ) {
        setTimeout(function() { paWindow.close(); }, 2000);
      }
    },
    write: function( PADocument, ele ) {
      PADocument.open();
      PADocument.write( PrintArea.docType() + "<html>" + PrintArea.getHead() + PrintArea.getBody( ele ) + "</html>" );
      PADocument.close();
    },
    docType: function() {
      if ( settings.mode === modes.iframe ) return "";

      if ( settings.standard === standards.html5 ) return "<!DOCTYPE html>";

      const transitional = settings.standard === standards.loose ? " Transitional" : "";
      const dtd = settings.standard === standards.loose ? "loose" : "strict";

      return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + transitional + '//EN" "http://www.w3.org/TR/html4/' + dtd + '.dtd">';
    },
    getHead: function() {
      let extraHead = "";
      let links = "";

      if ( settings.extraHead ) {
        settings.extraHead.replace( /([^,]+)/g, function(exm) {
          extraHead += exm;
        });
      }
      Array.from(document.getElementsByTagName('link')).forEach(item => {
        const relAttr = item.getAttribute('rel');
        if (typeof relAttr === 'string' && relAttr.toLowerCase() === 'stylesheet') {
          // links += '<link type="text/css" rel="stylesheet" href="' + item.getAttribute('href') + '" >';
          links += '<link type="text/css" rel="stylesheet" href="' + item.href + '" >';
        }
      });
      if (settings.extraCss) {
        settings.extraCss.replace( /([^,\s]+)/g, function(exm) {
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
    getBody: function(elements) {
      let htm = "";
      const attrs = settings.retainAttr;
      if (!elements.length) {
        elements = Array.of(elements);
      }
      Array.from(elements).forEach((item) => {
        const ele = PrintArea.getFormData( item );
        let attributes = "";
        for ( let index = 0; index < attrs.length; index++ ) {
          const eleAttr = ele.getAttribute( attrs[index] );
          if ( eleAttr ) {
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
    getFormData: function( ele ) {
      const copy = ele.cloneNode(true);
      const copiedInputs = Array.from(copy.childNodes).filter(item => (
        item.tagName === 'INPUT' || item.tagName === 'SELECT' || item.tagName === 'TEXTAREA'
      ));
      const eleInputs = Array.from(ele.childNodes).filter(item=>(
        item.tagName === 'INPUT' || item.tagName === 'SELECT' || item.tagName === 'TEXTAREA'
      ));
      eleInputs.forEach((item, index) => {
        let typeInput = item.getAttribute('type');
        if (typeof typeInput === 'undefined') {
          typeInput = item.tagName === 'SELECT' ? "select" : item.tagName === 'TEXTAREA' ? "textarea" : "";
        }
        const copiedInput = copiedInputs[index];
        if (typeInput === "radio" || typeInput === "checkbox") {
          const isChecked = document.querySelectorAll(":checked").find(item1 => item1 === item);
          copiedInput.setAttribute( "checked", !!isChecked );
        } else if (typeInput === "text" || typeInput === "") {
          copiedInput.value = item.value;
        } else if (typeInput === "select") {
          Array.from(item.childNodes).map((item1) => {
            const isSelected = document.querySelectorAll(":selected").find(item2 => item2 === item1);
            if (isSelected) {
              Array.from(copiedInput.childNodes).find(item3 => item3 === isSelected).setAttribute( "selected", true );
            }
          });
        } else if (typeInput === "textarea") {
          copiedInput.value = item.value;
        }
      });
      return copy;
    },
    getPrintWindow: function() {
      switch (settings.mode) {
      case modes.iframe :
        const ifr = new PrintArea.Iframe();
        return { win: ifr.contentWindow || ifr, doc: ifr.doc, iframe: ifr };
      case modes.popup :
        const pop = new PrintArea.Popup();
        return { win: pop, doc: pop.doc };
      default:
      }
    },
    Iframe: function() {
      const frameId = settings.id;
      const iframeStyle = 'border:0;position:absolute;width:0px;height:0px;right:0px;top:0px;';
      let iframe;
      try {
        iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        iframe.setAttribute( 'style', iframeStyle );
        iframe.setAttribute( 'id', frameId );
        iframe.setAttribute( 'src', "#" + new Date().getTime() );
        iframe.doc = null;
        iframe.doc = iframe.contentDocument ? iframe.contentDocument : ( iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
      } catch (err) {
        const errInfo = err + ". iframes may not be supported in this browser.";
        throw errInfo;
      }

      if ( iframe.doc === null ) {
        const info = "Cannot find document.";
        throw info;
      }
      return iframe;
    },
    Popup: function() {
      let windowAttr = "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
      windowAttr += ",width=" + settings.popWd + ",height=" + settings.popHt;
      windowAttr += ",resizable=yes,screenX=" + settings.popX + ",screenY=" + settings.popY + ",personalbar=no,scrollbars=yes";

      const newWin = window.open( "", "_blank", windowAttr );

      newWin.doc = newWin.document;

      return newWin;
    }
  };
  const beforeEle = document.getElementById(idPrefix);
  beforeEle && beforeEle.parentNode.removeChild( beforeEle );

  settings.id = idPrefix;

  const PrintAreaWindow = PrintArea.getPrintWindow();

  const iframe1 = PrintAreaWindow.iframe;
  if (iframe1.attachEvent) {
    iframe1.attachEvent("onload", function() {
      PrintArea.print( PrintAreaWindow );
    });
  } else {
    iframe1.onload = function() {
      PrintArea.print( PrintAreaWindow );
    };
  }
  PrintArea.write( PrintAreaWindow.doc, eles );
}