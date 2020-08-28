"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Login = _interopRequireDefault(require("../views/Login.vue"));

var _Registered = _interopRequireDefault(require("../views/Registered.vue"));

var _ChatList = _interopRequireDefault(require("../views/ChatList.vue"));

var _Chat = _interopRequireDefault(require("../views/Chat.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: "/Chat",
  name: "Chat",
  component: _Chat["default"]
}, {
  path: "/ChatList",
  name: "ChatList",
  component: _ChatList["default"]
}, {
  path: "/Registered",
  name: "Registered",
  component: _Registered["default"]
}, {
  path: "/",
  name: "Login",
  component: _Login["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;