(this["webpackJsonpweb-serial-monitor"]=this["webpackJsonpweb-serial-monitor"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=(a(13),a(1)),s=a.n(c),u=a(2),l=a(3);a(15);var h=function(e){var t=e.serialMonitor,a=Object(n.useState)({history:[],active:""}),i=Object(l.a)(a,2),o=i[0],c=i[1],h=Object(n.useState)(!1),d=Object(l.a)(h,2),p=d[0],v=d[1],b=Object(n.useState)(""),f=Object(l.a)(b,2),m=f[0],k=f[1];Object(n.useEffect)((function(){t.onRead(c),t.onConnectionEvent(v)}),[t]);var y=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p){e.next=6;break}return e.next=4,t.disconnect();case 4:e.next=8;break;case 6:return e.next=8,t.connect();case 8:k(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),k('An error happened: "'.concat(e.t0,'"'));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"app"},r.a.createElement("div",{id:"settings"},r.a.createElement("label",null,"Baud Rate:",r.a.createElement("select",{disabled:p,onChange:function(e){return t.setBaudRate(+e.target.value)},defaultValue:t.baudRate},[9600,14400,19200,28800,38400,56e3,57600,115200].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))),r.a.createElement("div",{id:"connect"},r.a.createElement("button",{onClick:function(){return y()}},p?"Disconnect":"Connect")),r.a.createElement("div",{id:"serial-output"},o.history.length>0&&r.a.createElement("div",{id:"history"},o.history.map((function(e,t){return r.a.createElement("div",{key:t},e)}))),r.a.createElement("div",{id:"active"},o.active),r.a.createElement("div",{id:"error"},m)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(6),p=a(7);if("serial"in navigator){var v=new(function(){function e(t){Object(d.a)(this,e),this.baudRate=9600,this.activeOutput="",this.outputHistory=[],this.serial=t}return Object(p.a)(e,[{key:"connect",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.serial){e.next=2;break}throw Error("Connection: missing Serial object");case 2:return e.next=4,this.serial.requestPort();case 4:return this.port=e.sent,e.next=7,this.port.open({baudrate:this.baudRate});case 7:this.connectionCallback(!0),t=new TextDecoderStream,this.inputDone=this.port.readable.pipeTo(t.writable),a=t.readable,this.reader=a.getReader();case 12:return e.next=15,this.reader.read();case 15:if(n=e.sent,r=n.value,i=n.done,r&&(this.activeOutput+=r,this.readCallback({history:this.outputHistory,active:this.activeOutput})),!i){e.next=25;break}return this.outputHistory.push(this.activeOutput),this.activeOutput="",this.readCallback({history:this.outputHistory,active:this.activeOutput}),this.reader.releaseLock(),e.abrupt("break",27);case 25:e.next=12;break;case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.serial){e.next=2;break}throw Error("Disconnection: missing Serial object");case 2:if(!this.reader){e.next=9;break}return e.next=5,this.reader.cancel();case 5:return e.next=7,this.inputDone.catch((function(){}));case 7:this.reader=void 0,this.inputDone=void 0;case 9:if(!this.outputStream){e.next=13;break}return e.next=12,this.outputStream.getWriter().close();case 12:this.outputStream=void 0;case 13:return e.next=15,this.port.close();case 15:this.port=void 0,this.connectionCallback(!1);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setBaudRate",value:function(e){this.baudRate=e}},{key:"onConnectionEvent",value:function(e){this.connectionCallback=e}},{key:"onRead",value:function(e){this.readCallback=e}}]),e}())(navigator.serial);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,{serialMonitor:v})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}else o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{id:"compatibility-error"},r.a.createElement("div",null,"Web Serial is not supported by your browser."),r.a.createElement("div",null,"Make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags"))),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.52da123d.chunk.js.map