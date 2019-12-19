<template>
  <van-overlay>
    <div class="wrapper" @click.stop>
     <van-loading type="spinner" color="#ffffff" size="24px" vertical >加载中... </van-loading>
    </div>
  </van-overlay>
</template>
 
<script>
export default {
  name: "LOADING",
  data() {
    return {};
  }
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.van-loading__text{
  color: #ffffff
}
</style>