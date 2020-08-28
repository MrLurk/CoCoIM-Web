import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Login from "../views/Login.vue";
import Registered from "../views/Registered.vue";
import ChatList from "../views/ChatList.vue";
import Chat from "../views/Chat.vue";

const routes = [{
    path: "/Chat",
    name: "Chat",
    component: Chat
  }, {
    path: "/ChatList",
    name: "ChatList",
    component: ChatList
  },
  {
    path: "/Registered",
    name: "Registered",
    component: Registered
  }, {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;