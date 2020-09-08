<template>
  <header>
    <p class="head-row">
      <img src="../assets/images/headlogo.jpg" class="head-logo" />
      <span>聊天</span>
    </p>
  </header>
  <div class="container container-1">
    <ul class="chat-list">
      <li
        v-for="item in chatLists"
        :key="item.userName"
        class="chat-list-li"
        @click="this.gotoChat()"
      >
        <div class="chat-list-item clearfix" :class="item.isActive?'active':''">
          <div class="list-item-left">
            <img class="user-head-logo" :src="item.headLogo" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">{{item.userName}}</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">{{item.lastMessage}}</span>
              <span class="last-message-time">{{item.lastMessageTime}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <footer class="clearfix">
    <div class="nav-chat">
      <a href="javascript:;">
        <img src="../assets/images/chat-01.png" />
      </a>
      <p>聊天</p>
    </div>
    <div class="nav-users">
      <a href="javascript:;">
        <img src="../assets/images/users.png" />
      </a>
      <p>我的好友</p>
    </div>
  </footer>
</template>

<style scoped>
@import "../assets/css/normalize.css";
@import "../assets/css/common.css";
@import "../assets/css/chat-list.css";
</style>
<script>
export default {
  name: "ChatList",
  data() {
    return {
      chatLists: [
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "星期三",
          isActive: false
        },
        {
          headLogo: require("../assets/images/headlogo.jpg"),
          userName: "EzawaGin",
          lastMessage: "你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图",
          lastMessageTime: "2020-8-24",
          isActive: true
        }
      ]
    };
  },
  methods: {
    gotoChat: function() {
      this.$router.push("/Chat");
    }
  }
};
</script>