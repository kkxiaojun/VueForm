<template>
  <div class="main-wrap clearfix">
    <div class="header">
      <div class="logo">
        <img src="../common/images/logo.png" alt="logo">
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
        <el-menu>
          <el-menu-item-group>
            <div v-for="(item,index) in menu" @mouseover="toggleShow(index)" @mouseout="toggleHide(index)">
              <el-menu-item class="menu-item" :index="index.toString()">
                <span @dblclick="toggle(item.value)">{{item.value}}</span>
                <el-input v-if="aside.toggle" @blur="blur()" v-model="aside.curInput" placeholder="审批人"></el-input>
                <i v-if="item.deleteShow" @click="deleteItem(index)" class="el-icon-remove-outline m-left"></i>
              </el-menu-item>
            </div>
            <el-button @click="addItem()" class="el-icon-plus add-item" type="primary" plain>添加分组</el-button>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          value: "选项一",
          deleteShow: false
        },
        {
          value: "选项二",
          deleteShow: false
        }
      ],
      aside: {
        toggel: false,
        curInput: ""
      }
    };
  },
  methods: {
    addItem() {
      this.menu.push({
        value: "未分组",
        deleteShow: false
      });
    },
    deleteItem(key) {
      let vThis = this;
      this._arrEach(key, function(curIndex) {
        vThis.menu.splice(curIndex, 1);
      });
    },
    toggle(value) {
      this.aside.curInput = value;
      this.aside.toggle = true;
    },
    blur() {
      this.aside.toggle = false;
    },
    toggleShow(index) {
      let vThis = this;
      this._arrEach(index, function(curIndex) {
        vThis.menu[curIndex].deleteShow = true;
      });
    },
    toggleHide(index) {
      let vThis = this;
      this._arrEach(index, function(curIndex) {
        vThis.menu[curIndex].deleteShow = false;
      });
    },
    _arrEach(index, callback) {
      this.menu.forEach((ele, item) => {
        if (item == index) {
          callback(item);
        }
      });
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
    height: 100%;
    border: 1px solid #eee;
    .aside {
      background-color: rgb(238, 241, 246);
      .menu-item {
        .m-left {
          color: #ea8787;
          margin-left: 80px;
        }
        &:hover {
          .hide {
            display: none;
          }
        }
      }
      .add-item {
        position: fixed;
        transform: translateX(40%);
        bottom: 10px;
      }
    }
  }
}
</style>


