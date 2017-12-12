'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.getData = getData;
exports.postData = postData;
exports.listenData = listenData;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  import {getData, postData, listenData} from 'xunyijia-components/src/utils/rnBridge';
  getData({type: 'getAppVersion'}).then(data=>{});
  postData({type: 'updateApp', data: appVersion.address});
  const listen = listenData({type: 'downProgress'});
  listen.begin((data)=>{
    if (data === 100) {
      listen.end();
    }
  });

  rn部分:
   <WebView
    ref={(ref) => { this.webview = ref; }}
    onMessage={this.onMessage.bind(this)}
   />
  onMessage(event) {
     const rtData = event.nativeEvent.data;
     const rtObj = JSON.parse(rtData);
     const type = rtObj.type;
     const data = rtObj.data;
     switch (type) {
       case 'getAppVersion':
         this.getAppVersion(type);
         break;
       case 'updateApp':
         this.updateApp(data);
         break;
       default:
     }
   }
   getAppVersion(type) {
   const nowVersion = DeviceInfo.getVersion();
   console.log('nowVersion', nowVersion);
   this.postMessage({
     type: 'getAppVersion',
     data: nowVersion
   });
 }
 */

function getData(data) {
  var type = data.type;
  var postData = (0, _stringify2.default)(data);
  return new _promise2.default(function (resolve, reject) {
    var timeout = void 0;
    var fn = function fn(event) {
      var rtData = event.data;
      var rtObj = JSON.parse(rtData);
      var rtType = rtObj.type;
      if (type === rtType) {
        document && document.removeEventListener('message', fn);
        timeout && clearTimeout(timeout);
        resolve(rtObj.data);
      }
    };
    timeout = setTimeout(function () {
      // document && document.removeEventListener('message', fn);
      // reject('超时！');
    }, 15000);
    document && document.addEventListener('message', fn);
    window && window.postMessage && window.postMessage(postData);
  });
}
function postData(data) {
  var postData = (0, _stringify2.default)(data);
  window && window.postMessage && window.postMessage(postData);
}
function listenData(data) {
  var obj = {};
  var sendType = data.type;
  data = (0, _stringify2.default)(data);
  obj.begin = function (cb) {
    obj.fn = function (event) {
      var eventData = event.data;
      var rtObj = JSON.parse(eventData);
      var rtType = rtObj.type;
      var rtData = rtObj.data;
      if (rtType === sendType) {
        cb(rtData);
      }
    };
    document && document.addEventListener('message', obj.fn);
    window && window.postMessage && window.postMessage(data);
  };
  obj.end = function () {
    document && document.removeEventListener('message', obj.fn);
  };
  return obj;
}