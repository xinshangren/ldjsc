<template>
  <div style="overflow:hidden;background: #ffffff;">
    <van-popup id="popup" v-model="show" position="top" :style="{height: '100%' }" @opened="openPop" :overlay='true'
       @click='closePop' style="overflow:hidden;background:rgb(0, 0, 0);">

<video-player style="margin-top:100px" class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPalyerEnd($event)"
  >
  </video-player>


    </van-popup>
  
  </div>
</template>

<script>
  import $ from "jquery";
  import Vue from "vue";
  import { Popup, Dialog } from "vant";
  Vue.use(Popup).use(Dialog);
  // import Video from 'video.js'
  // import 'video.js/dist/video-js.css'
  // Vue.prototype.$video = Video

import VideoPlayer from 'vue-video-player';
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
Vue.use(VideoPlayer);

  export default {
    
    name: "zdgc_xmlb_vue",
    data() {
      return {
        myPlayer: {},
        curpath: '',
        show: false,
        list: [],
        playerOptions: {
        //  playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
          type: "video/mp4",//application/x-mpegURL
          src: "video.m3u8" //你的m3u8地址（必填）
          }],
          poster: "poster.jpg", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        //  controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true //全屏按钮
        //  }
        controlBar: {
                    fullscreenToggle: true,
                    pictureInPictureToggle: false,
                    volumePanel: false,
                    currentTimeDisplay: true,
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    progressControl:true,
                    playbackRateMenuButton: false,//这个必须，不然你得网页会出现两个调整播放速率的显示
                  }
          },
      };
    },
    mounted() {
      this.curpath = this.$route.params.entity;
      this.playerOptions.sources[0].src=this.$route.params.entity;
      this.show=true;
      console.log(this.$route.params.entity);
    },
    methods: {
      openPop: function () {
        // this.intvideo();
      },
      closePop: function () {
        this.show = false;
        this.$refs.videoPlayer.player.pause();
        // if (this.myPlayer != null) {
        //   this.myPlayer.pause();
        //   // this.myPlayer.dispose();
        //   this.myPlayer = null;
        // }
         this.$router.push({
        path: "/qyly/qyly",
        name: "qyly",
        params: {
          tabsel: 'child3',
          active: 4
        }
      });

      },
      intvideo: function () {
        
          $('#popup').html('<video id="myVideo" class="video-js" style="width: 100%;height:30px">'+
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
         
      },
      onPlayerPlay(player) {
      },
      onPlayerPause(player){
      },
      onPalyerEnd(player){
        this.showVido = false;
        player.pause();
        // player.dispose();
      }
    }
  };
</script>
<style scoped>
  
</style>