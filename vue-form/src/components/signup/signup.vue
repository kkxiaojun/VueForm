<template>
  <div class="signup">
    <div class="top-bar">
      <div class="logo">
        <img src="../../common/images/logo.png" alt="logo">
      </div>
    </div>
    <section class="container">
      <div class="login-wrap">
        <div class="login-bar">
          <div class="title">
            <h1>用户注册</h1>
          </div>
          <div class="inner">
            <div class="form">
              <div class="form-row">
                <label for="userno" class="ui-label">账号：</label>
                <input type="text" class="ui-input" name="userno" placeholder="">
              </div>
              <div class="form-row">
                <label for="username" class="ui-label">姓名：</label>
                <input type="text" class="ui-input" name="username" placeholder="">
              </div>              
              <div class="form-row">
                <label for="password" class="ui-label">密码：</label>
                <input type="password" class="ui-input" name="password" placeholder="">
              </div>
              <div class="form-row">
                <label for="password" class="ui-label">密码确认：</label>
                <input type="password" class="ui-input" name="password" placeholder="">
              </div>              
              <div class="login-w">
                <span class="login btn b-blue f-white" to="/login">注册</span>
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
  components: {
    MFooter
  }
};
</script>
<style lang="less" scoped>
.signup {
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 75px;
    line-height: 75px;
    width: 100%;
    padding: 0 40px;
    background: #fff;
    font-size: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-top: 2px solid #2b4870;
    border-bottom: 1px solid #c1c1c1;
    z-index: 1000;
    .logo {
      float: left;
      img{
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
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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
                display: inline-block;
                width: 100px;
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
                border: 1px solid #dddddd;
                font-size: 14px;
                // outline: 0;
                transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
              }
              .ui-input:focus {
                outline: none;
                border: 1px solid #7fbcee;
                box-shadow: 0 1px 3px rgba(41, 44, 211, 0.2);
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
}
</style>


