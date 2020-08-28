<template>
  <header>
    <p class="head-row">
      <img src="../assets/images/headlogo.jpg" class="head-logo" />
      <span>聊天</span>
    </p>
  </header>
  <div class="container container-1">
    <ul class="chat-list">
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix active">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">星期一</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">2020-8-24</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">20:24:52</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix active">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">星期一</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">2020-8-24</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">20:24:52</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix active">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">星期一</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">2020-8-24</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">20:24:52</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix active">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">星期一</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">2020-8-24</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">20:24:52</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix active">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">星期一</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">2020-8-24</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">20:24:52</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix active">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">星期一</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">2020-8-24</span>
            </div>
          </div>
        </div>
      </li>
      <li class="chat-list-li" @click="this.gotoChat()">
        <div class="chat-list-item clearfix">
          <div class="list-item-left">
            <img class="user-head-logo" src="../assets/images/headlogo.jpg" />
          </div>
          <div class="list-item-right">
            <div class="item-right-01">
              <span class="user-name">EzawaGin</span>
            </div>
            <div class="item-right-02">
              <span class="last-message">你发送了贴图发送了贴图发送了贴图发送了贴图发送了贴图</span>
              <span class="last-message-time">20:24:52</span>
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
  methods: {
    gotoChat: function() {
      this.$router.push("/Chat");
    }
  }
};
</script>