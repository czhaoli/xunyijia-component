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

export function getData(data) {
    const type = data.type;
    const postData = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      let timeout;
      const fn = (event) => {
        const rtData = event.data;
        const rtObj = JSON.parse(rtData);
        const rtType = rtObj.type;
        if (type === rtType) {
          document && document.removeEventListener('message', fn);
          timeout && clearTimeout(timeout);
          resolve(rtObj.data);
        }
      };
      timeout = setTimeout(()=>{
        // document && document.removeEventListener('message', fn);
        // reject('超时！');
      }, 15000);
      document && document.addEventListener('message', fn);
      window && window.postMessage && window.postMessage(postData);
    });
  }
  export function postData(data) {
    const postData = JSON.stringify(data);
    window && window.postMessage && window.postMessage(postData);
  }
  export function listenData(data) {
    const obj = {};
    const sendType = data.type;
    data = JSON.stringify(data);
    obj.begin = function(cb) {
      obj.fn = (event) => {
        const eventData = event.data;
        const rtObj = JSON.parse(eventData);
        const rtType = rtObj.type;
        const rtData = rtObj.data;
        if (rtType === sendType) {
            cb(rtData);
        }
      };
      document && document.addEventListener('message', obj.fn);
      window && window.postMessage && window.postMessage(data);
    };
    obj.end = function() {
      document && document.removeEventListener('message', obj.fn);
    };
    return obj;
  }