<template>
<div class="header-wrap clearfix">
  <div class="header">
    <div class="logo">
      <img src="" alt="">
      <span>hope</span>
    </div>
    <div class="login-wrap">
      <span class="login btn b-blue f-white">登陆</span>
      <span class="register btn b-transparent">注册</span>
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
      a {
        margin: 0 10px;
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
        border: 1px solid #43b3e6;
        &:hover {
          background-color: #43b3e6;
        }
      }
      .register{
        border: 1px solid #B3B3B3;
        &:hover{
          color: #00a0e9;
          border-color: #00a0e9;
        }
      }
      .btn {
        display: inline-block;
        padding: 2px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border-radius: 4px;
      }
      .b-blue {
        background-color: #00a0e9;
      }
      .b-white{
        background-color: #fff;
      }
      .b-transparent{
        background-color: transparent;
      }
      .f-white{
        color: #fff;
      }
    }
  }
}
</style>


