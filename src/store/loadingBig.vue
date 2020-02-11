<template>
  <div>
    <van-overlay id="overlay" :show="show" style="z-index: 3;">
      <div
        style="text-align: center;z-index: 3;position: fixed;left: 31%;top: 50%;color:#ffffff;font-size:13px;text-align: center;line-height: 30px; vertical-align: middle; background: rgba(0,0,0,0.5);border-radius: 10px;width: 150px;height:100px;"
      >
        <div class="wrapper" @click.stop>
          <van-loading type="spinner" color="#ffffff" size="24px" vertical>语音识别中...</van-loading>
        </div>
      </div>
    </van-overlay>
  </div>
</template>
 
<script>
import $ from "jquery";
import Vue from "vue";
import { Overlay } from "vant";
export default {
  name: "LOADINGBIG",
  data() {
    return {
      show: true
    };
  },
  mounted() {
    var self = this;
    setTimeout(function() {
     $("#overlay").css("z-index","3");
    }, 300);
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
.van-loading__text {
  color: #ffffff;
}
</style>