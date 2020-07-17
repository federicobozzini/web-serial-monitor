(this["webpackJsonpweb-serial-monitor"]=this["webpackJsonpweb-serial-monitor"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=(n(16),n(1)),s=n.n(o),u=n(2),l=n(10),d=n(4);n(18);var h=function(e){var t=e.serialMonitor,n=Object(a.useState)([]),i=Object(d.a)(n,2),c=i[0],o=i[1],h=Object(a.useState)(""),b=Object(d.a)(h,2),f=b[0],p=b[1],v=Object(a.useState)(!1),m=Object(d.a)(v,2),k=m[0],E=m[1],x=Object(a.useState)(""),w=Object(d.a)(x,2),g=w[0],j=w[1];Object(a.useEffect)((function(){t.onRead((function(e){p((function(t){return t+e}))}))}),[t]),Object(a.useEffect)((function(){t.onConnectionEvent((function(e){e||(o((function(e){return[].concat(Object(l.a)(e),[f])})),p("")),E(e),j("")}))}),[t,f]);var y=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k){e.next=6;break}return e.next=4,t.disconnect();case 4:e.next=8;break;case 6:return e.next=8,t.connect();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),j('An error happened: "'.concat(e.t0,'"'));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"settings"},r.a.createElement("label",null,"Baud Rate:",r.a.createElement("select",{disabled:k,onChange:function(e){return t.setBaudRate(+e.target.value)},defaultValue:t.baudRate},[9600,14400,19200,28800,38400,56e3,57600,115200].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))),r.a.createElement("div",{id:"connect"},r.a.createElement("button",{onClick:function(){return y()}},k?"Disconnect":"Connect")),r.a.createElement("div",{id:"serial-output"},c.length>0&&r.a.createElement("div",{id:"history"},c.map((function(e,t){return r.a.createElement("div",{key:t},e)}))),r.a.createElement("div",{id:"active"},f),r.a.createElement("div",{id:"error"},g)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(8),f=n(9);if("serial"in navigator){var p=new(function(){function e(t){Object(b.a)(this,e),this.baudRate=9600,this.serial=t}return Object(f.a)(e,[{key:"connect",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.serial){e.next=2;break}throw Error("Connection: missing Serial object");case 2:return e.next=4,this.serial.requestPort();case 4:return this.port=e.sent,e.next=7,this.port.open({baudrate:this.baudRate});case 7:this.connectionCallback(!0),t=new TextDecoderStream,this.inputDone=this.port.readable.pipeTo(t.writable),n=t.readable,this.reader=n.getReader();case 12:return e.next=15,this.reader.read();case 15:if(a=e.sent,r=a.value,i=a.done,r&&this.readCallback(r),!i){e.next=22;break}return this.reader.releaseLock(),e.abrupt("break",24);case 22:e.next=12;break;case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.serial){e.next=2;break}throw Error("Disconnection: missing Serial object");case 2:if(!this.reader){e.next=9;break}return e.next=5,this.reader.cancel();case 5:return e.next=7,this.inputDone.catch((function(){}));case 7:this.reader=void 0,this.inputDone=void 0;case 9:if(!this.outputStream){e.next=13;break}return e.next=12,this.outputStream.getWriter().close();case 12:this.outputStream=void 0;case 13:return e.next=15,this.port.close();case 15:this.port=void 0,this.connectionCallback(!1);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setBaudRate",value:function(e){this.baudRate=e}},{key:"onConnectionEvent",value:function(e){this.connectionCallback=e}},{key:"onRead",value:function(e){this.readCallback=e}}]),e}())(navigator.serial);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,{serialMonitor:p})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}else c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{id:"compatibility-error"},r.a.createElement("div",null,"Web Serial is not supported by your browser."),r.a.createElement("div",null,"Make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags"))),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.eb6e9f4c.chunk.js.map