<template>
<div class="header-wrap clearfix">
  <div class="header">
    <div class="logo">
      <img src="" alt="">
      <span>hope</span>
    </div>
    <div class="login-wrap">
      <router-link class="login btn b-blue f-white" to="/login">登陆</router-link>
      <router-link class="register btn b-transparent" to="/register">注册</router-link>
    </div>
    <nav class="nav">
      <a href="">产品</a>
      <a href="">移动</a>
      <a href="">案例</a>
      <a href="">产品</a>
    </nav>
  </div>
</div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "~common/less/variable";
.header-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;
  .header {
    height: 50px;
    line-height: 50px;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    color: @color-a;
    background: rgba(255, 255, 255, 0.6);
    .logo {
      float: left;
      width: 100px;
      height: 100%;
    }
    .nav {
      float: right;
      margin-right: 20px;
      a {
        margin: 0 20px;
        color: @color-a;
        text-decoration: none;
        &:hover {
          color: #b85959;
        }
      }
    }
    .login-wrap {
      float: right;
      .login{
        margin-top: -4px;
        text-decoration: none;
        border: 1px solid #43b3e6;
        &:hover {
          background-color: #43b3e6;
        }
      }
      .register{
        margin-top: -3px;
        text-decoration: none;
        color: #B3B3B3;
        border: 1px solid #B3B3B3;
        &:hover{
          color: #00a0e9;
          border-color: #00a0e9;
        }
      }
    }
  }
}
</style>


