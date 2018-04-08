<template>
  <div class="review">
    <div class="form">
<el-form ref="form" :model="user" label-width="80px">
  <el-form-item label="旧密码">
    <el-input type="password" v-model="user.old"></el-input>
  </el-form-item>
    <el-form-item label="新密码">
    <el-input type="password" v-model="user.password"></el-input>
  </el-form-item>
    <el-form-item label="新密码">
    <el-input type="password" v-model="user.password1"></el-input>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
import { updateUser } from "api/form";
export default {
  data() {
    return {
      user: {
        old: "",
        password: "1",
        password1: ""
      }
    };
  },
  methods: {
    onSubmit() {
        let _this = this;
      if (this.form.password != this.form.password1) {
        this.$message.error("两次输入的密码不一致！");
      } else {
        updateUser(this.user, res => {
          if (res.status == 200) {
            _this.$message({
              message: "修改成功！",
              type: "success"
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~common/less/variable";
.review {
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