<template>
  <div class="home">
    <img class="bg-img" src="../common/images/home_bg.jpg" alt="背景图像">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  .bg-img{
    width: 100%;
    height: 100%;
  }
}
</style>

