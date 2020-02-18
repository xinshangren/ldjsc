<template>
  <div style="overflow:hidden;background: #ffffff;">
    <van-swipe :autoplay="3000" style="margin-left: 15px;margin-right: 15px;z-index:999;">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width: 100%;height: 150px;" @click="goDetile(imageids[index])" />
      </van-swipe-item>
    </van-swipe>

    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style="background-color: #ffffff;"
    >
      <div>
        <ul id="newsList" style="display: block;padding-left: 3%">
          <li
            v-for="(item,index) in list"
            :key="index"
            style="float:left; width:48%; height:130px;padding-top:7px;padding-bottom:7px;margin-right: 2%;"
            @click="goDetile(item.id)"
          >
            <div style="position: relative;">
              <img id style="border-radius:3px ;width:100%;height:95px;" :src="item.imgUrl" />
              <div style="margin-left: 10px;display: flex;line-height: 13px;">
                <div
                  style="font-size: 10px;color: #333333;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;"
                >{{item.title}}</div>
              </div>
              <div
                style="margin-left: 10px;margin-top: 5px;margin-bottom: 10px;font-size: 9px;color: #999999;"
              >{{item.showTime}}</div>
            </div>
          </li>
        </ul>

      </div>
       <div style="text-align:center;"></div>
    </mescroll-vue>

  </div>
</template>

<script>
import $ from "jquery";
import MescrollVue from "mescroll.js/mescroll.vue";
import { httpMethod } from "../../api/getData.js";
import Vue from "vue";
import { PullRefresh, Swipe, SwipeItem } from "vant";
Vue.use(PullRefresh)
  .use(Swipe)
  .use(SwipeItem);
import Video from "video.js";
import "video.js/dist/video-js.css";
Vue.prototype.$video = Video;

export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "zdgc_xmlb_vue",
  data() {
    return {
      images: [],
      imageids: [],
      list: [],
      mescroll: null, // mescroll实例对象
      mescrollDown: {isLock: true}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
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
          //icon: "../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  mounted() {
    this.getCmsCcdtList();
  },
  methods: {
    getCmsCcdtList: function(id) {
      var _this = this;
      var params = {
        type: 1
      };

      httpMethod
        .getCmsCcdtList(params)
        .then(res => {
          if (res.success == "1") {
            _this.yzjclist = res.dataList;
            for (var i = 0; i < res.dataList.length; i++) {
              _this.images.push(
                httpMethod.returnBaseUrlFun() + res.dataList[i].imgUrl
              );
              _this.imageids.push(res.dataList[i].id);
            }
          } else if (res.success == "0") {
          }
        })
        .catch(err => {
          this.$toast(err);
        });
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
        .getCmsCcdtList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
            }
            var data = res.dataList;
            if (data && data.length > 0) {
              for (var i = 0; i < data.length; i++) {
                data[i].imgUrl = httpMethod.returnBaseUrlFun() + data[i].imgUrl;
              }
              this.list = this.list.concat(data);
            }

            this.$nextTick(() => {
              this.mescroll.endBySize(data.length, res.total);
              console.log(mescroll.getScrollHeight());
              $(".mescroll-upwarp.mescroll-hardware").css("height", "1px");
              $("#newsList").css("height", mescroll.getScrollHeight()+"px");
            });
          }
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },
    goDetile(id) {
      this.$router.push({
        path: "/toutiao/newsdetile",
        name: "newsdetile",
        params: {
          articleId: id
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/frozenui.css";
.mescroll {
  position: fixed;
  top: 315px;
  bottom: 0px;
  height: auto;
}
.mescroll-upwarp.mescroll-hardware {
  height: 1px;
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
