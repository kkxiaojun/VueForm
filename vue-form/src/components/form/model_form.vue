<template>
  <div class="main-wrap clearfix">
    <div class="header">
      <div class="logo">
        <img src="../../common/images/logo.png" alt="logo">
      </div>
      <nav class="nav">
        <router-link to="">135，欢迎你！</router-link>
        <router-link to="">
          <i class="el-icon-question"></i> 帮助</router-link>
        <router-link to="/home">注销</router-link>
      </nav>
    </div>
    <el-container class="container">
      <el-aside width="200px" class="aside">
        <el-col>
          <div class="menu-title" @click="goBack()">
            <i class="el-icon-back"></i>返回</div>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>行业分类</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="openModel()">
                  <span>选项1</span>
                </el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>功能/用途</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>热点/专题</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <div class="col1">
        <ul class="col1-menu">
          <li class="col1-item">餐饮</li>
          <li class="col1-item">体育</li>
          <li class="col1-item">餐饮</li>
          <li class="col1-item">体育</li>
          <li class="col1-item">餐饮</li>
          <li class="col1-item">体育</li>
          <li class="col1-item">餐饮</li>
          <li class="col1-item">体育</li>
          <li class="col1-item">餐饮</li>
          <li class="col1-item">体育</li>
          <li class="col1-item">餐饮</li>
          <li class="col1-item">体育</li>
          <li class="col1-item">餐饮</li>
          <li class="col1-item">体育</li>
          <li class="col1-item">餐饮</li>
        </ul>
      </div>
      <div class="col2">
        <div class="model-box">
          <div class="btn-wrap">
            <el-button type="primary" class="el-icon-plus">使用模板</el-button>
          </div>
          <div class="content-wrap">
            <div class="logo"></div>
            <form action="" id="form" class="content-form">
              <div class="form-title">
                <h1>经营情况报表</h1>
                <div class="side">请各位店长每天22:00前登记此表，年底将作为考核依据。</div>
              </div>
              <div class="form-content"></div>
            </form>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    openModel() {
      console.log("pen");
    }
  }
};
</script>
<style lang="less" scoped>
@import "~common/less/variable";

.main-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  .header {
    height: 55px;
    line-height: 55px;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    color: @color-a;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #c1c1c1;
    .logo {
      float: left;
      width: 100px;
      height: 100%;
      img {
        height: 55px;
      }
    }
    .nav {
      float: right;
      margin-right: 20px;
      a {
        margin: 0 20px;
        color: @color-a;
        text-decoration: none;
        &:hover {
          color: rgb(64, 153, 226);
        }
      }
    }
  }
  .container {
    position: relative;
    height: 100%;
    border: 1px solid #eee;
    .aside {
      border-right: 1px solid #e1e1e1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      .menu-title {
        padding: 10px 0 10px 24px;
        font-size: 18px;
        cursor: pointer;
        .el-icon-back {
          margin-right: 15px;
        }
        &:hover {
          color: #409eff;
        }
      }
    }
    .col1 {
      position: absolute;
      width: 150px;
      left: 200px;
      top: 0;
      bottom: 0;
      right: 0;
      overflow: auto;
      // border-right: 1px solid #e1e1e1;
      border-left: 10px solid #409eff;
      border-top: 10px solid #409eff;
      // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      .col1-menu {
        text-align: center;
        font-size: 14px;
        color: #9a9898;
        .col1-item {
          padding: 5px 0;
          .active {
            background: #409eff;
            color: #fff;
          }
          &:hover {
            background: #409eff;
            color: #fff;
          }
        }
      }
    }
    .col2 {
      position: absolute;
      width: auto;
      left: 360px;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 40px 50px;
      overflow: auto;
      background: url("../../common/images/form_model/model_1.jpg") no-repeat;
      .model-box {
        .btn-wrap {
          margin-bottom: 20px;
          text-align: right;
        }
        .content-wrap {
          .logo {
            height: 360px;
            background-image: url("../../common/images/form_model/model_1_title.png");
            background-size: cover;
          }
          .content-form {
            background: #fff;
            padding: 30px 20px;
            font-size: 14px;
            h1{
              font-size: 24px;
              padding: 3px 0;
            }
          }
        }
      }
    }
  }
}
</style>


