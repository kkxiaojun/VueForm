<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from "@/components/m-header/header";
import MFooter from "@/components/m-footer/footer";

export default {
  components: {
      MHeader,
      MFooter
  }
};
</script>

<style lang="less" scoped>

</style>


