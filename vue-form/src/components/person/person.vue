<template>
  <div class="person">
    <div class="header">
      <div class="logo">
        <img src="../../common/images/logo.png" alt="logo">
      </div>
      <nav class="nav">
        <router-link to="">欢迎你！</router-link>
        <router-link to="/help">
          <i class="el-icon-question"></i> 帮助</router-link>
        <router-link to="/home">注销</router-link>
      </nav>
    </div>
    <div class="person-content">
    <div class="subNav-wrap">
        <ul class="item-wrap">
            <li class="item" :class="{'active':isActive == 1}" @click="changeActive(1)">
              <router-link :to="{'name': 'desc'}">个人资料</router-link> 
            </li>
            <li class="item" :class="{'active':isActive == 2}" @click="changeActive(2)">
              <router-link :to="{'name': 'review'}">修改密码</router-link>
            </li>
        </ul>
    </div>
    <div class="sub-content">
      <div class="content-wrap">
      <router-view></router-view>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 1
    };
  },
  methods: {
    changeActive(data) {
      if (data == 1) {
        this.isActive = 1;
      }
      if (data == 2) {
        this.isActive = 2;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~common/less/variable";
.person {
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
  .person-content {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    .subNav-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 240px;
      height: 100%;
      border-right: 1px solid #e1e1e1;
      background: #fff;
      overflow-x: hidden;
      overflow-y: auto;
      .item-wrap {
        .item {
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          &.active {
            background-color: #649efd;
            a {
              color: #fff;
            }
          }
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: #676767;
          }
        }
      }
    }
    .sub-content {
      position: absolute;
      left: 240px;
      right: 0;
      top: 0;
      bottom: 0;
      min-height: 600px;
      overflow: auto;
      .content-wrap {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
        background: #f7f7f7;
      }
    }
  }
}
</style>