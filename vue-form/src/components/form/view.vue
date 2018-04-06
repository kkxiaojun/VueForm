<template>
  <div class="view">
    <div v-if="!submit" class="submit">
      <div class="model-box">
        <div class="content-wrap">
          <div class="logo"></div>
          <form action="" id="form" class="content-form">
            <div class="form-title">
              <h1>{{title}}</h1>
              <!-- <div class="side">请各位店长每天22:00前登记此表，年底将作为考核依据。</div> -->
            </div>
            <div class="form-content">
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item v-for="(item, index) in components" :key="index">
                  <div v-if="item.type == 'number'" class="item">
                    <div class="label">{{item.label}}</div>
                    <el-input size="small" v-model="item.value"></el-input>
                  </div>
                  <div v-else-if="['text', 'password', 'email'].includes(item.type)" class="item">
                    <div class="label">{{item.label}}</div>
                    <el-input v-model="item.value" class="value"></el-input>
                  </div>
                  <div v-else-if="['separate'].includes(item.type)" class="item">
                    <div class="label">{{item.label}}</div>
                  </div>
                  <div v-else-if="['date'].includes(item.type)">
                    <div class="label">{{item.label}}</div>
                    <el-date-picker v-model="item.value" type="date" placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <div v-else-if="['time'].includes(item.type)" class="item">
                    <div class="cover"></div>
                    <div class="label">{{item.label}}</div>
                    <el-time-select v-model="item.value" placeholder="选择时间"></el-time-select>
                  </div>
                  <div v-else-if="['textarea'].includes(item.type)" class="item">
                    <div class="label">{{item.label}}</div>
                    <el-input v-model="item.value" type="textarea" :rows="3"></el-input>
                  </div>
                  <div v-else-if="['radio'].includes(item.type)" class="item">
                    <div class="label">{{item.label}}</div>
                    <el-radio-group v-model="check.checkRadio">
                      <el-radio class="left" v-for="(option, index) in item.values" :key="index" :label="option.label">{{option.value}}</el-radio>
                    </el-radio-group>
                  </div>
                  <div v-else-if="['checkbox'].includes(item.type)" class="item">
                    <label>{{item.label}}</label>
                    <!-- <draggable element="ul" :list="item.values" class="collection" :options="{group:{name:'item.values'}}"> -->
                    <div>
                      <el-checkbox-group v-model="check.checkBox">
                        <el-checkbox class="left" v-for="(option, index) in item.values" :key="index" :label="option.label">{{option.value}}</el-checkbox>
                      </el-checkbox-group>
                    </div>
                    <!-- </draggable> -->
                  </div>
                </el-form-item>
              </el-form>
              <div class="btn">
                <el-button size="small" @click="save">提交</el-button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else class="success">
      <div class="box">
        <div class="bar"></div>
        <h1>提交成功</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { getFormById, addFormData } from "api/form";
export default {
  data() {
    return {
      submit: false,
      id: null,
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      components: [],
      title: "",
      check: {
        checkRadio: "",
        checkBox: []
        // checkSelected: ""
      }
    };
  },
  created: function() {
    let _this = this;
    _this.id = location.hash.split("=")[1];
    getFormById(_this.id, res => {
      if (res.status === 200) {
        _this.title = res.data.title;
        _this.components = res.data.form;
      }
    });
  },
  methods: {
    save() {
      let _this = this;
      let time = this.getCurTime();
      let data = {
        id: _this.id,
        title: _this.title,
        time: time,
        form: _this.components
      };
      addFormData(data, res => {
        if (res.status === 200) {
          _this.submit = true;
        }
      });
    },
    getCurTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() < 11 ? date.getMonth() + 1 : 12;
      let day = date.getDate();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
    }
  }
};
</script>

<style lang="less" scoped>
.view {
  .submit {
    background: url("../../common/images/form_model/model_1.jpg") no-repeat;
    .model-box {
      width: 610px;
      margin: 0 auto;
      padding-top: 20px;
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
  .success {
    // background:#c8efe9;
    .box {
      width: 600px;
      height: 300px;
      margin: 50px auto;
      border: 1px solid #ccc;
      vertical-align: middle;
      .bar {
        height: 30px;
        width: 100%;
        background: #20ccc3;
      }
      h1 {
        text-align: center;
        // vertical-align: middle;
        margin-top: 50px;
        font-size: 1.5em;
      }
    }
  }
}
</style>
