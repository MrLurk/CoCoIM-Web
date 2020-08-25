"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingletonWebsocket = function SingletonWebsocket() {
  _classCallCheck(this, SingletonWebsocket);

  this.randomNum = Math.random();
  this.websocket = new WebSocket("ws://127.0.0.1");
};