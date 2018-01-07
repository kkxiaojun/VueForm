<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import MFooter from "@/components/m-footer/footer";

export default {
  components: {
    MFooter
  }
};
</script>

<style lang="less" scoped>

</style>


