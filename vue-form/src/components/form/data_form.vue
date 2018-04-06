<template>
  <div class="data-form clearfix">
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
    <div class="content">
      <div class="top-bar">
        <div class="left" @click="back()">
          <i class="el-icon-back"></i>表单名称
        </div>
      </div>
      <div class="body">
        <el-table v-if="tableData.length" :data="tableData" border stripe style="width: 100%">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column prop="id" label="id"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="time" label="创建时间"></el-table-column>
        </el-table>
        <div v-else>
          暂无数据
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findFormData } from "api/form";
export default {
  data() {
    return {
      id: null,
      tableData: []
    };
  },
  created: function() {
    let _this = this;
    this.id = this.$route.params.id;
    findFormData(this.id, res => {
      if (res.status == 200) {
        _this.tableData = res.data;
      }
    });
  },
  methods: {
    back() {
      window.history.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~common/less/variable";
.data-form {
  .mt-36 {
    margin-top: 36px;
  }
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
  .content {
    width: 1000px;
    margin: 50px auto;
    .top-bar {
      height: 50px;
      line-height: 50px;
    }
    .body {
      width: 100%;
      table{
        width: 100%;
      }
    }
  }
}
</style>
