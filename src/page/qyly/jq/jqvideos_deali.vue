<template>
  <div style="overflow:hidden;background: #ffffff;">
    <van-popup id="popup" v-model="show" position="top" :style="{height: '100%' }" @opened="openPop" :overlay='true'
      :closeable='true' @click='closePop' style="overflow:hidden;background:rgb(0, 0, 0);">

    </van-popup>
  
  </div>
</template>

<script>
  import $ from "jquery";
  import Vue from "vue";
  import { Popup, Dialog } from "vant";
  Vue.use(Popup).use(Dialog);
  import Video from 'video.js'
  import 'video.js/dist/video-js.css'
  Vue.prototype.$video = Video
 

  export default {
    
    name: "zdgc_xmlb_vue",
    data() {
      return {
        myPlayer: {},
        curpath: '',
        show: false,
        list: [],
      };
    },
    mounted() {
      this.curpath = this.$route.params.entity;
      this.show=true;
      console.log(this.$route.params.entity);
    },
    methods: {
      openPop: function () {
        this.intvideo();
      },
      closePop: function () {
        this.show = false;
        if (this.myPlayer != null) {
          this.myPlayer.dispose();
          this.myPlayer = null;
        }

      },
      intvideo: function () {
        
          $('#popup').html('<video id="myVideo" class="video-js" style="width: 100%;">'+
          '<source src='+
          this.curpath
          +' type="video/mp4">'+
        '</video>');
          this.myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: true,
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "800px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "400px"
          });
         
      }
    }
  };
</script>
<style scoped>
  
</style>