<template>
  <div style="overflow:hidden;background: #ffffff;">
    <van-popup
      id="popupJQVido"
      v-model="showVido"
      position="top"
      :style="{height: '100%' }"
      :overlay="true"
      :closeable="true"
      @click="closePop"
      style="overflow:hidden;background:rgb(0, 0, 0);"
    >
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
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style="background-color: #ffffff;"
    >
      <div id="newsList" style="display:flex;padding-left: 3%;z-index:999;flex-flow:row wrap;justify-content:center;align-items:center;">
        <div
          v-for="(item,index) in list"
          :key="index"
          style="float:left; width:48%; height:130px;padding-top:7px;padding-bottom:7px;position:relative;margin-right: 2%;"
          @click="goVideo(item.realpath)"
        >
          <div style="position: relative;">
            <img id style="border-radius:3px ;width:100%;height:95px;" :src="item.surface_picture" />
            <img
              src="../../../assets/img/bf.png"
              style="position: absolute;left:35%;top:17%;width:50px;height:50px"
            />
            <div style="margin-left: 10px;display: flex;line-height: 13px;">
              <div style="font-size: 10px;color: #333333;">{{item.name}}</div>
              <div style="margin-left:10px;font-size: 9px;color: #fe1313;">{{item.star_level}}</div>
            </div>
            <div
              style="margin-left: 10px;margin-top: 5px;margin-bottom: 10px;font-size: 9px;color: #999999;"
            >晋城市阳城县北留镇皇城村</div>
          </div>
        </div>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import $ from "jquery";
import MescrollVue from "mescroll.js/mescroll.vue";
import { httpMethod } from "../../../api/getData.js";
import Vue from "vue";
import { PullRefresh, Popup, Dialog } from "vant";
Vue.use(PullRefresh)
  .use(Popup)
  .use(Dialog);
import VideoPlayer from 'vue-video-player';
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
Vue.use(VideoPlayer);

export default {
  components: {
    MescrollVue, // 注册mescroll组件
  },
  name: "zdgc_xmlb_vue",
  data() {
    return {

playerOptions: {
//  playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
  autoplay: false, //如果true,浏览器准备好时开始回放。
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
            progressControl:false,
            playbackRateMenuButton: false,//这个必须，不然你得网页会出现两个调整播放速率的显示
          }
  },


      myPlayer: {},
      curpath: "",
      showVido: false,
      list: [],
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5,
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "newsList", //父布局的id (1.3.5版本支持传入dom元素)
          //icon: "../../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  mounted() {},
  methods: {
    openPop: function() {
    },
    closePop: function() {
      this.showVido = false;
      this.$refs.videoPlayer.player.pause();
      // this.$refs.videoPlayer.player.dispose();
      if (this.myPlayer != null) {
       this.myPlayer.pause();
       this.myPlayer.dispose();
       this.myPlayer = null;
      }
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //视频列表
    upCallback: function(page, mescroll) {
      var params = {
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getScenicVideoList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
            }
            var data = res.dateList;
            if (data && data.length > 0) {
              for (var i = 0; i < data.length; i++) {
                data[i].surface_picture =
                  httpMethod.returnBaseUrlFun() + data[i].surface_picture;
                data[i].realpath =
                  httpMethod.returnBaseUrlFun() + data[i].realpath;
              }
              this.list = this.list.concat(data);
            }

            this.$nextTick(() => {
              this.mescroll.endBySize(data.length, res.total);
            });
          }
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },
     goVideo: function (curpath) {
        this.showVido = true;
        this.curpath = curpath;
        this.playerOptions.sources[0].src="http://192.168.1.78:8080/jeecg/upload/DialRotation.mp4";
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
@import "../../../assets/css/frozenui.css";
.mescroll {
  position: fixed;
  top: 220px;
  bottom: 0px;
  height: auto;
}

.dialogNoSelect {
  border: 1px solid #cccccc;
  padding: 1px 15px 1px 15px;
  border-radius: 33px;
  font-size: 13px;
  margin-left: 10px;
  text-align: center;
  margin-top: 4px;
  background: #ffffff;
}

.dialogSelect {
  border: 1px solid #1976d2;
  padding: 1px 15px 1px 15px;
  border-radius: 33px;
  font-size: 13px;
  margin-left: 10px;
  text-align: center;
  margin-top: 4px;
  background: #f6fbff;
  color: #1976d2;
}
</style>