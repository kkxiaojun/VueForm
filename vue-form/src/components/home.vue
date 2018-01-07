<template>
  <div class="home" :style="height" ref="home">
    <m-header></m-header>
    <div class="content">
      <div class="content-inner">
        <h1>一体化的移动办公表单设计</h1>
        <div class="txt">高度自定义的表单设计，让你的表单高效起来.融合工作汇报、项目任务、CRM、知识分享、审批流程、数据协作等应用于一体的移动办公云平台</div>
      </div>
    </div>
  </div>
</template>

<script>
import MHeader from "@/components/m-header/header";
export default {
  data() {
    return {};
  },
  computed: {
    height: function() {
      return {
        height: document.documentElement.clientHeight + "px"
      };
    }
  },
  methods: {
  },
  components:{
    MHeader
  }
};
</script>
<style lang="less" scoped>
.home {
  .bg-img {
    width: 100%;
    height: 100%;
  }
  .content {
    height: 100%;
    background: url("~common/images/home_bg.jpg");
    background-size: cover;
    color: #666;
    text-align: center;
    .content-inner {
      position: absolute;
      width: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        margin-bottom: 20px;
        font-size: 40px;
        color: #585858;
        letter-spacing: 4px;
      }
      .txt {
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 50px;
        color: #929292;
      }
    }
  }
}
</style>

