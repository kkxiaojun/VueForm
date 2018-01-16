<template>
  <div class="login" style="position:absolute;">
    <div class="top-bar">
      <div class="logo">
        <img src="../../common/images/logo_transparent.png" alt="logo">
      </div>
    </div>
    <section class="container">
      <div class="login-wrap">
        <div class="login-bar">
          <div class="title">
            <h1>用户登陆</h1>
          </div>
          <div class="inner">
            <div class="form">
              <div class="form-row">
                <label for="username" class="ui-label">账号：</label>
                <input type="text" class="ui-input" name="username" placeholder="6～18位，包含数字／字母">
              </div>
              <div class="form-row">
                <label for="password" class="ui-label">密码：</label>
                <input type="password" class="ui-input" name="password" placeholder="6～18位，包含数字／字母">
              </div>
              <div class="login-auto">
                <div class="auto-left">
                  <input type="radio" name="auto">
                  <label for="auto">自动登陆</label>
                </div>
                <div class="auto-right">
                  <span class="forget">忘记密码</span>
                  <span class="reg">注册</span>
                </div>
              </div>
              <div class="login-w">
                <span class="btn b-blue f-white" @click="go">登陆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <m-footer></m-footer>
  </div>
</template>
<script>
import MFooter from "@/components/m-footer/footer";
export default {
  data: function() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/form");
    }
  },
  components: {
    MFooter
  }
};
</script>
<style lang="less" scoped>
.login {
  position: relative;
  height: 100%;
  width: 100%;
  background: url("~common/images/login_bg.jpg") no-repeat;
  background-size: cover;
  background-position: center center;
  .top-bar {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    // border-top: 2px solid #2b4870;
    border-bottom: 1px solid #c1c1c1;
    z-index: 1000;
    .logo {
      float: left;
      img {
        height: 75px;
      }
    }
  }
  .container {
    margin-top: 75px;
    .login-wrap {
      width: 600px;
      margin: 0 auto;
      padding-top: 50px;
      .login-bar {
        width: 100%;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        .title {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #f1f1f1;
          h1 {
            font-size: 24px;
            color: #666;
          }
        }
        .inner {
          padding: 40px 50px;
          .form {
            text-align: center;
            .form-row {
              padding-bottom: 20px;
              .ui-label {
                width: 50px;
                color: #4c4c4c;
                font-size: 14px;
              }
              .ui-input {
                width: 300px;
                height: 18px;
                line-height: 18px;
                padding: 11px 10px;
                vertical-align: middle;
                color: #4d4d4d;
                border: none;
                font-size: 14px;
                outline: none;
                border-bottom: 1px solid #7fbcee;
                transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
                &:focus{
                  border-bottom: 1px solid #7fbcee;;
                  // outline: none;
                }
              }
            }
            .login-auto {
              color: #161e21;
              font-size: 0.75em;
              .auto-left {
                display: inline-block;
                margin-right: 127px;
              }
              .auto-right {
                display: inline-block;
              }
            }
            .login-w {
              .btn {
                padding: 5px 20px;
                &:hover {
                  background-color: #43b3e6;
                }
              }
            }
          }
        }
      }
    }
  }
  footer {
    background-color: none;
    border-top: none;
    color: #fff;
  }
}
</style>


