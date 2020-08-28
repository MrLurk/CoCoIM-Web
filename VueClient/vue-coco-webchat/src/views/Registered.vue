<template>
  <header>
    <p>
      <img class="logo" src="../assets/images/logo.png" />
    </p>
  </header>
  <div class="container container-1">
    <div class="description">
      <h1>时刻相连</h1>
      <h4>轻松发送文字、</h4>
      <h4>视频聊天和计划活动的一站式互动平台。</h4>
    </div>
    <div class="login-content">
      <div class="login-row login-row-1">
        <input type="text" id="username" name="username" placeholder="用户名" />
      </div>
      <div class="login-row login-row-2">
        <input type="text" id="passwrod" name="passwrod" placeholder="密码" />
      </div>
      <div class="login-row login-row-3">
        <button class="login-button" onclick="alert('注册成功')">注册</button>
      </div>
      <div class="login-row login-row-4">
          <router-link to="/" class="nav-link">我有账号</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/normalize.css";
@import "../assets/css/common.css";
@import "../assets/css/registered.css";
</style>
<script>
export default {
  name: "Registered"
};
</script>