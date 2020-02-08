<template>
  <div style="margin-top: 70px;">
    <van-popup id="popup" v-model="show" position="top" :style="{height: '100%' }" @opened="openPop" :overlay='true'
      :closeable='true' @click='closePop' style="overflow:hidden;background:rgb(0, 0, 0);">

    </van-popup>
    <div style="display: flex; border-bottom: 1px #e5e5e4 solid;margin-left: 15px;margin-right:15px;">
      <div style="line-height: 25px;height: 180px;">
        <div style="color: #3097fb;font-size: 18px;">
          {{data.name}}
        </div>
        <div style="color: #ff3319;font-size: 15px;">
          {{data.star_level}}
        </div>
        <div style="width: 50%; color: #565656;font-size: 16px;">
          {{data.address}}
        </div>
        <div style="color: #525252;font-size: 15px;">
          年收入：{{(data.incomeTotal/10000).toFixed(2)}}亿
        </div>
        <div style="color: #525252;font-size: 15px;">
          年支出：{{(data.expenditureTotal/10000).toFixed(2)}}亿
        </div>
        <div style="color: #525252;font-size: 15px;display: flex;">
          累计游客：
          <div style="color:#ff0000;">{{data.visitorTotal}}万人</div>
        </div>
      </div>
      <div style="position: absolute;right: 15px;">
        <img :src=images[0] style="width: 146px;height: 95px;">
        <div v-if="curpath!=null" style="display: flex;color: #3097fb;position: absolute;right: 35px;font-size:14px;" @click="goVideo()">
          <img src="../../../assets/img/spjs.png" style="height: 14px;margin-top: 4px;">
          视频介绍
        </div>
      </div>


    </div>
    <div style="height: 10px;background-color: #F3F4F7;"></div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 40px;border-bottom: 1px #e5e5e4 solid;margin-right: 10px;">
      <div
        style="margin-top: 10px;color: #333333;font-size: 14px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        景区相册</div>
    </div>
    <van-swipe :autoplay="3000" style="margin-left: 15px;margin-right: 15px;">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width: 100%;height: 250px;" @click="imgPreview(index)" />
      </van-swipe-item>
    </van-swipe>

    <div style="height: 10px;background-color: #F3F4F7;"></div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 40px;border-bottom: 1px #e5e5e4 solid;margin-right: 10px;">
      <div
        style="margin-top: 10px;color: #333333;font-size: 14px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        景区介绍</div>
    </div>
    <div style="font-size: 14px;color: #333333;margin: 15px;line-height: 19px;">
      {{data.brief}}
    </div>

  </div>
</template>
<script>
  import $ from "jquery";
  import { httpMethod } from "../../../api/getData.js";
  import Vue from "vue";
  import { Swipe, SwipeItem } from "vant";
  import Vant, { Lazyload } from "vant";
  import { Popup, Dialog } from "vant";
  import { ImagePreview } from "vant";
  Vue.use(ImagePreview);
  Vue.use(Lazyload);
  Vue.use(Swipe).use(SwipeItem);
  import Video from 'video.js'
  import 'video.js/dist/video-js.css'
  Vue.prototype.$video = Video
  Vue.use(Popup).use(Dialog);
  export default {
    name: "jqdetile",
    beforeCreate() {
    },
    activated() {//返回保留页面记录
    },
    data() {
      return {
        myPlayer: {},
        curpath: null,
        show: false,
        data: {},
        images: [],
      };
    },
    mounted() {
      var id = this.$route.params.entity;
      this.getQylyScenicBasic(id);
    },
    methods: {
      goVideo: function () {
        this.show = true;
      },
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
        //初始化视频方法
        $('#popup').html('<video muted id="myVideo" class="video-js" style="width: 100%;">' +
          '<source src=' +
          this.curpath
          + ' type="video/mp4">' +
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
      toast: function () {
        this.$toast('功能开发中');
      },
      getQylyScenicBasic: function (id) {
        var _this = this;
        var params = {
          basicId: id
        };

        httpMethod
          .getQylyScenicBasic(params)
          .then(res => {
            if (res.success == "1") {
              _this.data = res.data;
              _this.images = res.images;
              if( res.videourl!=null){
                _this.curpath = httpMethod.returnBaseUrlFun() + res.videourl;
              }
              for (const key in _this.images) {
                if (_this.images.hasOwnProperty(key)) {
                  _this.images[key] = httpMethod.returnBaseUrlFun() + _this.images[key];
                }
              }

            }
          })
          .catch(err => {
            this.$toast(err);
          });
      },
      imgPreview: function (index) {
        ImagePreview({
          images: this.images,
          startPosition: index,
          onClose() {
            // do something
          }
        });
      },
    },
    components: {

    }
  };
</script>

<style scoped>

</style>