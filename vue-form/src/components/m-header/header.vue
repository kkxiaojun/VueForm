<template>
<div class="header-wrap clearfix">
  <div class="header">
    <div class="logo">
      <img src="" alt="">
      <span>hope</span>
    </div>
    <div class="login-wrap">
      <button>login</button>
      <button>register</button>
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
        color: @color-a;
        text-decoration: none;
        &:hover {
          color: #b85959;
        }
      }
    }
    .login-wrap {
      float: right;
    }
  }
}
</style>


