<template>
  <div class="customForm">
    <div class="leftForm">
      <div class="box clearfix">
        <div class="block">
          <div class="name">表单</div>
          <div class="circle blue"></div>
        </div>
        <form class="blue" id="dropArea">
          <!--<div class="circle"></div>-->
          <!--<div class="form-group">
						    <label for="exampleInputEmail1">Email address</label>
						    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
						  </div>-->
        </form>
      </div>
      <div class="operate">
        <div class="block">
          <div class="name">操作</div>
          <div class="circle lightblue"></div>
        </div>
        <div class="button lightblue">
          <div class="center">
            <el-button type="primary">预览</el-button>
            <el-button type="success">提交</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="rightForm">
        <el-form ref="form" :model="form" label-width="80px" id="dragArea">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import drag from "common/js/customForm_h5.js";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  created: function() {},
  mounted: function() {
    this.$nextTick(function() {
      drag({
        dragArea: "dragArea",
        dropArea: "dropArea"
      });
    });
  }
};
</script>

<style lang="less" scoped>
@import "~common/less/customForm_h5";
.customForm {
  .row-wrapper {
    margin: 10px 0;
  }
}
</style>
