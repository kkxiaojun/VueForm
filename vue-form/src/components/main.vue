<template>
  <div class="main-wrap clearfix">
    <div class="header">
      <div class="logo">
        <img src="../common/images/logo.png" alt="logo">
      </div>
      <nav class="nav">
        <router-link to="/person">{{user.username}},欢迎你</router-link>
        <router-link to="/help">
          <i class="el-icon-question"></i> 帮助</router-link>
        <span class="logout" @click="logout()">注销</span>
      </nav>
    </div>
    <el-container class="container">
      <el-aside width="200px" class="aside">
        <el-menu>
          <el-menu-item-group>
            <div v-for="(item,index) in menu" @mouseover="toggleShow(index)" @mouseout="toggleHide(index)">
              <el-menu-item class="menu-item" :index="index.toString()">
                <span :class="{'hide': index==aside.curIndex}" @dblclick="toggle(item.value,index)">{{item.value}}</span>
                <input :class="{'hide': index!=aside.curIndex}" @blur="blur(index)" v-model="aside.curInput" autofocus v-focus>
                <i v-if="item.deleteShow" @click.stop="deleteItem(index)" class="el-icon-close m-left"></i>
              </el-menu-item>
            </div>
            <el-button @click="addItem()" class="el-icon-plus add-item" type="primary" plain>添加分组</el-button>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-container class="inner-container" style="background-color: #f7f7f7;">
        <el-header>
          <el-dropdown>
            <el-button type="primary">
              <i class="el-icon-plus add-item"></i>
              创建表单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <div class="box-item" @click="goSelf()">自定义模版</div>
              <div class="box-item" @click="goModel()">从模版选择</div>
            </el-dropdown-menu>
          </el-dropdown>
          <i class="el-icon-menu"></i>
        </el-header>
        <el-main class="el-main">
          <el-row>
            <el-col :span="8" v-for="(item,index) in form" :key="index">
              <div class="grid-content bg-purple">
                <el-card style="width:280px;margin-bottom:20px;padding-bottom:30px;" class="box-card">
                  <div slot="header" class="clearfix">
                    <span>{{item.title}}</span>
                    <el-button style="float: right; padding: 3px 0" @click="open(item._id)" type="text">查看</el-button>
                  </div>
                  <div class="text item clearfix">
                    <div class="item-icon left">
                      <i class="el-icon-info" title="数据" @click="checkData(item._id)"></i>
                    </div>
                    <div class="item-icon left" title="修改" @click="modifyForm(item._id)">
                      <i class="el-icon-edit"></i>
                    </div>
                    <div class="item-icon left" title="删除" @click="removeForm(item._id)">
                      <i class="el-icon-delete"></i>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getForm, removeForm } from "api/form";
export default {
  data() {
    return {
      user:{
        username: 'jjjj'
      },
      form: [1, 2, 3],
      menu: [
        {
          value: "2018",
          deleteShow: false
        },
        {
          value: "2017",
          deleteShow: false
        }
      ],
      aside: {
        toggle: false,
        curInput: "",
        curIndex: -1
      }
    };
  },
  beforeCreate: function() {
    var _this = this;
    getForm(function(res) {
      if (res.status === 200) {
        _this.form = res.data;
      }
    });
  },
  created: function() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },
  mounted: function() {
    let _this = this;
    this.$nextTick(function() {
      console.log(this.user)
    });
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
      this._arrEach(key, curIndex => {
        vThis.menu.splice(curIndex, 1);
      });
    },
    checkData(id){
      this.$router.push("/dataform/" + id);
    },
    modifyForm(id) {
      this.$router.push({name:'customform',params:{id:id,from:'self'}});
    },
    removeForm(id) {
      let _this = this;
      removeForm(id, res => {
        if (res.status === 200) {
          _this.$message({
            message: "删除成功",
            type: "success"
          });
          getForm(function(ress) {
            if (ress.status === 200) {
              _this.form = ress.data;
            }
          });
        } else {
          _this.$message.error("删除失败");
        }
      });
    },
    toggle(value, index) {
      this.aside.curInput = value;
      this.aside.curIndex = index;
      this.aside.toggle = true;
    },
    blur(index) {
      let vThis = this;
      this.aside.curInput;
      this.aside.toggle = false;
      this._arrEach(index, curIndex => {
        vThis.menu[curIndex].value = this.aside.curInput;
        this.aside.curInput = "";
        this.aside.curIndex = -1;
      });
    },
    toggleShow(index) {
      let vThis = this;
      this._arrEach(index, curIndex => {
        vThis.menu[curIndex].deleteShow = true;
      });
    },
    toggleHide(index) {
      let vThis = this;
      this._arrEach(index, curIndex => {
        vThis.menu[curIndex].deleteShow = false;
      });
    },
    goSelf() {
      this.$router.push({name: "customform", params:{id: '1',from:'new'}});
    },
    goModel() {
      this.$router.push("/modelform");
    },
    open(id) {
      window.open(location.origin + "/#/view?id=" + id, "_blank");
    },
    logout(){
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
    _arrEach(index, callback) {
      this.menu.forEach((ele, item) => {
        if (item == index) {
          callback(item);
        }
      });
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "~common/less/variable";

.box-item {
  font-size: 14px;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #409eff;
    color: #fff;
  }
}
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
      .logout{
        cursor: pointer;
        &:hover{
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
      .menu-item {
        input {
          outline: none;
          border: 1px solid#409eff;
          // padding: 2px 4px;
          height: 20px;
        }
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
      .hide {
        display: none;
      }
    }
    .el-container {
      padding: 0 50px;
      .el-header {
        height: 60px;
        line-height: 60px;
        text-align: right;
        .el-button {
          position: relative;
          padding: 8px 12px;
        }
        .el-dropdown {
          height: 43px;
          vertical-align: top;
        }
      }
        .item {
          .item-icon {
            font-size: 30px;
            width: 33.333%;
            text-align: center;
            color: #8a8585;
            cursor: pointer;
            &:hover{
              color: #409eff;
            }
          }
        }
      .inner-container {
        .el-main {
          width: auto;
          position: absolute;
          left: 200px;
          top: 0;
          right: 0;
          bottom: 0;
          overflow: auto;
        }
        .box-card {
          width: 250px;
        }
      }
    }
  }
}
</style>


