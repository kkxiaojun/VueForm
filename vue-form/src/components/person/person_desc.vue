<template>
  <div class="desc">
    <div class="form">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="邮箱地址">
    <el-input v-model="form.email"></el-input>
  </el-form-item>
    <el-form-item label="手机号码">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
    <el-form-item label="昵称">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
    <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        username: "",
        email: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
@import "~common/less/variable";
.desc {
  .form {
    padding: 50px;
    .el-form {
      width: 700px;
      padding: 20px;
      margin: 0 auto;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>