<template>
  <div class="customForm">
    <div class="leftForm">
    </div>
    <div class="centerForm">
      
    </div>
    <div class="rightForm">
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
.customForm {
  .row-wrapper {
    margin: 10px 0;
  }
}
</style>
