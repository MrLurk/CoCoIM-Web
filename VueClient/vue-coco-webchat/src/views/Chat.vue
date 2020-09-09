<template>
  <div>
    <header class="clearfix">
      <div>
        <img src="../assets/images/fanhui.png" class="head-back" @click="this.backtoChatList()" />
      </div>
      <div>
        <img style="position: static;" src="../assets/images/headlogo.jpg" class="head-logo" />
      </div>
      <div>
        <span>Ezawa Gin</span>
      </div>
    </header>
    <div class="container">
      <ul class="message-list">
        <li class="time-li">
          <p class="message-time">周一 14:32:57</p>
        </li>
        <li class="form-li clearfix">
          <img class="message-form-logo" src="../assets/images/headlogo.jpg" />
          <span
            class="form-message"
          >Sorry.I went offiline and went to bed early last night and only saw your message</span>
        </li>
        <li class="form-li clearfix">
          <img class="message-form-logo" src="../assets/images/headlogo.jpg" />
          <span class="form-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span class="to-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span
            class="to-message"
          >Sorry.I went offiline and went to bed early last night and only saw your message</span>
        </li>
        <li class="to-li clearfix">
          <span class="to-message">It's Ok.</span>
        </li>
        <li class="time-li">
          <p class="message-time">周一 14:32:57</p>
        </li>
        <li class="form-li clearfix">
          <img class="message-form-logo" src="../assets/images/headlogo.jpg" />
          <span class="form-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span
            class="to-message"
          >Sorry.I went offiline and went to bed early last night and only saw your message</span>
        </li>

        <li class="form-li clearfix">
          <img class="message-form-logo" src="../assets/images/headlogo.jpg" />
          <span class="form-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span class="to-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span
            class="to-message"
          >Sorry.I went offiline and went to bed early last night and only saw your message</span>
        </li>
        <li class="to-li clearfix">
          <span class="to-message">It's Ok.</span>
        </li>
        <li class="time-li">
          <p class="message-time">周一 14:32:57</p>
        </li>
        <li class="form-li clearfix">
          <img class="message-form-logo" src="../assets/images/headlogo.jpg" />
          <span class="form-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span
            class="to-message"
          >Sorry.I went offiline and went to bed early last night and only saw your message</span>
        </li>

        <li class="form-li clearfix">
          <img class="message-form-logo" src="../assets/images/headlogo.jpg" />
          <span class="form-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span class="to-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span
            class="to-message"
          >Sorry.I went offiline and went to bed early last night and only saw your message</span>
        </li>
        <li class="to-li clearfix">
          <span class="to-message">It's Ok.</span>
        </li>
        <li class="form-li clearfix">
          <img class="message-form-logo" src="../assets/images/headlogo.jpg" />
          <span class="form-message">It's Ok.</span>
        </li>
        <li class="to-li clearfix">
          <span
            class="to-message"
          >Sorry.I went offiline and went to bed early last night and only saw your message</span>
        </li>
      </ul>
    </div>
    <footer>
      <input type="text" class="message-input" placeholder="Aa" />
      <button class="message-send">发 送</button>
    </footer>
  </div>
</template>

<style scoped>
@import "../assets/css/normalize.css";
@import "../assets/css/common.css";
@import "../assets/css/chat.css";
</style>
<script>
export default {
  name: "Chat",
  methods: {
    backtoChatList: function() {
      this.$router.push("/ChatList");
    }
  }
};
</script>