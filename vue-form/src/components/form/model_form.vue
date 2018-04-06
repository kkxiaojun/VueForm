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
            <i class="el-icon-back"></i>返回
          </div>
          <el-menu default-active="2" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu v-for="(item,index) in menu" :key="index" :index="item.index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(child,index) in item.childMenu" :key="index" :index="child.index" @click="openModel(child.id)">
                  <span>{{child.title}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <div class="col2">
        <div class="model-box">
          <div class="btn-wrap">
            <el-button type="primary" class="el-icon-plus" @click="useModel()">使用模板</el-button>
          </div>
          <div class="content-wrap">
            <div class="logo"></div>
            <form action="" id="form" class="content-form">
              <div class="form-title">
                <h1>{{components.title}}</h1>
                <div class="side">请各位店长每天22:00前登记此表，年底将作为考核依据。</div>
              </div>
              <div class="form-content">
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                  <el-form-item v-for="(item, index) in components.form" :key="index">
                    <label for="">{{item.label}}</label>
                    <el-input size="small" v-model="item.value"></el-input>
                  </el-form-item>
                </el-form>
                <!-- <div class="btn">
                  <el-button size="small" @click="save()">提交</el-button>
                </div> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>
<script>
import { findModels,findModelById } from "api/form";
export default {
  data() {
    return {
      id:'',
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      menu: [
        {
          title: "行业类",
          index: "1",
          childMenu: [
            {
              title: "教育",
              index: "1-1",
              id: ""
            }
          ]
        },
        {
          title: "功能／用途",
          index: "2",
          childMenu: [
            {
              title: "保暖",
              index: "2-1",
              id: ""
            }
          ]
        },
        {
          title: "热点／专题",
          index: "3",
          childMenu: [
            {
              title: "教育",
              index: "3-1",
              id: ""
            }
          ]
        }
      ],
      title: "",
      components: []
    };
  },
  created: function() {
    let _this = this;
    findModels(res => {
      if (res.status == 200) {
        _this.id = res.data[0]._id
        _this.title = res.data[0].title;
        _this.components = res.data[0];
        let len = _this.menu.length;
        for (let i = 0; i < len; i++) {
          _this.menu[i].childMenu[0].id = res.data[i]._id;
        }
      }
    });
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    save() {
      this.$router.push("/custom_form" + this.id);
    },
    openModel(id) {
      let _this = this;
      findModelById(id, res => {
        if (res.status == 200) {
          _this.id = res.data[0]._id
          _this.title = res.data[0].title;
          _this.components = res.data[0];
        }
      });
    },
    useModel(){
      this.$router.push({name:'customform',params:{id:this.id,from:'model'}});
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
        font-size: 16px;
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
        text-align: left;
        font-size: 14px;
        color: #9a9898;
        .col1-item {
          padding: 10px 0 10px 10px;
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
        width: 610px;
        margin: 0 auto;
        .btn-wrap {
          margin-bottom: 20px;
          text-align: right;
        }
        .content-wrap {
          padding-bottom: 40px;
          .logo {
            height: 360px;
            background-image: url("../../common/images/form_model/model_1_title.png");
            background-size: cover;
          }
          .content-form {
            background: #fff;
            padding: 30px 0;
            font-size: 14px;
            .form-title {
              padding: 10px 20px;
              border-bottom: 1px dashed #ccc;
              h1 {
                font-size: 24px;
                padding: 3px 0;
              }
            }
            .form-content {
              padding: 10px 20px;
              .el-form {
                label {
                  display: block;
                  line-height: 20px;
                }
                .el-input {
                  width: 240px;
                }
              }
              .btn {
                width: 90%;
                .el-button {
                  background: #745e92;
                  color: #fff;
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


