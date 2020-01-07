<template>
  <div style="overflow:hidden;background: #ffffff;">

    <van-popup id="popup" v-model="show" position="top" :style="{height: '100%' }" @opened="openPop" :overlay='true'
      :closeable='true' @click='closePop' style="overflow:hidden;background:rgb(0, 0, 0);">

    </van-popup>

    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit"
      style="background-color: #ffffff;">

      <ul id="newsList" style="display: block;padding-left: 3%">
        <li v-for="(item,index) in list" :key="index"
          style="float:left; width:48%; height:130px;padding-top:7px;padding-bottom:7px;position:relative;margin-right: 2%;"
          @click="goDetile(item.realpath)">

          <div style="position: relative;">
            <img id="" style="border-radius:3px ;width:100%;height:95px;" :src=item.surface_picture>
            <img src="../../../assets/img/bf.png" style="position: absolute;left:35%;top:17%;width:50px;height:50px">
            <div style="margin-left: 10px;display: flex;line-height: 13px;">
              <div style="font-size: 10px;color: #333333;">{{item.name}}</div>
              <div style="margin-left:10px;font-size: 9px;color: #fe1313;">
                {{item.star_level}}
              </div>
            </div>
            <div style="margin-left: 10px;margin-top: 5px;margin-bottom: 10px;font-size: 9px;color: #999999;">
              晋城市阳城县北留镇皇城村
            </div>
          </div>

        </li>
      </ul>

    </mescroll-vue>
  </div>
</template>

<script>
  import $ from "jquery";
  import MescrollVue from "mescroll.js/mescroll.vue";
  import { httpMethod } from "../../../api/getData.js";
  import Vue from "vue";
  import { PullRefresh, Popup, Dialog } from "vant";
  Vue.use(PullRefresh).use(Popup).use(Dialog);
  import Video from 'video.js'
  import 'video.js/dist/video-js.css'
  Vue.prototype.$video = Video
 

  export default {
    components: {
      MescrollVue // 注册mescroll组件
    },
    name: "zdgc_xmlb_vue",
    data() {
      return {
        myPlayer: {},
        curpath: '',
        show: false,
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
    mounted() {
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
         
      },
      mescrollInit(mescroll) {
        this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      },
      //视频列表
      upCallback: function (page, mescroll) {
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
                  data[i].surface_picture = httpMethod.returnBaseUrlFun() + data[i].surface_picture;
                  data[i].realpath = httpMethod.returnBaseUrlFun() + data[i].realpath;
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
      goDetile(item) {
        this.curpath = item;
        this.show = true;
      }
    }
  };
</script>
<style scoped>
  @import "../../../assets/css/frozenui.css";
  .mescroll {
    position: fixed;
    top: 160px;
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
    border: 1px solid #1976D2;
    padding: 1px 15px 1px 15px;
    border-radius: 33px;
    font-size: 13px;
    margin-left: 10px;
    text-align: center;
    margin-top: 4px;
    background: #f6fbff;
    color: #1976D2;
  }
</style>