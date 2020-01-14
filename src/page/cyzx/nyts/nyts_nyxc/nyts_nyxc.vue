
<template>
  <div style="margin-top: 0px;border-top: 10px solid #F7F7F7;">
    <div style="display: flex;position: absolute;right: 16px;z-index: 1;margin-top: 7px;background: rgba(0,0,0,0.5);padding: 2px 14px;border-radius: 18px;color: #ffffff;">
      <div style="font-size:14px;">{{indexFlag+1}}</div>
      <div style="margin-left: 3px;margin-right: 3px;font-size:14px;">/</div>
      <div style="font-size:14px;">{{indexList.length}}</div>
    </div>
    <van-swipe @change="changeSwipe" ref="swipe" :widht="200" :height="290">
      <van-swipe-item style="text-align:center;" v-for="(image, index) in indexRelaList" :key="index">
        <img style="height:270px;" v-lazy="image" @click="imgPreview(index)" />
      </van-swipe-item>
    </van-swipe>

    <div style="background:#ffffff;margin-top: 10px;border-top: 10px solid #F7F7F7;">
      <div style="display:flex;margin-top:41px;">
        <img
          @click="previous_img()"
          style="height:16px;margin-top:50px;"
          src="../../../../assets/img/energy_pic_arrow_previous.png"
        />
        <div id="horDiv_id" style="display:flex; height: 160px;width: 90%;overflow-x: auto;">
          <div
            class="bottomList"
            style="margin-left:10px;"
            v-for="(image, index) in images"
            :key="index"
          >
            <div v-if="index==0">
              <div class="selectBottom">
                <img style="width:147px;height:100px;" :src="image" />
              </div>
              <div class="selectBottomDiv">{{indexList[index].title}}</div>
            </div>
            <div v-if="index>0">
              <div class="noselectBottom">
                <img style="width:147px;height:100px;" :src="image" />
              </div>
              <div class="noselectBottomDiv">{{indexList[index].title}}</div>
            </div>
          </div>
        </div>
        <img
          @click="after_img()"
          style="height:16px;margin-top:50px;"
          src="../../../../assets/img/energy_pic_arrow_after.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, ImagePreview } from "vant";
Vue.use(Lazyload)
  .use(Swipe)
  .use(SwipeItem)
  .use(ImagePreview);
export default {
  name: "hbgj",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
      images: [],
      airactive: 0,
      indexList: [],
      indexRelaList:[],
      indexFlag: 0,
      indexTabImg1: require("../../../../assets/img/mt2_tab.png")
    };
  },
  mounted() {
    this.getNyxcImgList();
  },
  updated() {
    var self = this;
    $(".bottomList").click(function(e) {
      var index = $(this).index();
      self.indexFlag = index;
      self.changeImgage(index);
      self.changeBottomFun(index);
    });
  },
  methods: {
    changeSwipe: function(index) {
      console.log(index);
      this.indexFlag = index;
      this.changeImgage(this.indexFlag);
      this.changeBottomFun(this.indexFlag);
      $("#horDiv_id").scrollLeft(this.changeHorDiscante(this.indexFlag));
    },
    changeHorDiscante: function(index) {
      var distance = 0;
      distance = index * 150;
      console.log(distance);
      return distance;
    },
    changeBottomFun: function(index) {
      $(".bottomList").each(function(e) {
        var index1 = $(this).index();
        var oneDiv = $(this)
          .children("div")
          .children("div")
          .eq(0);
        var twoDiv = $(this)
          .children("div")
          .children("div")
          .eq(1);
        if (index == index1) {
          oneDiv.removeClass("selectBottom");
          twoDiv.removeClass("selectBottomDiv");
          oneDiv.removeClass("noselectBottom");
          twoDiv.removeClass("noselectBottomDiv");
          oneDiv.addClass("selectBottom");
          twoDiv.addClass("selectBottomDiv");
        } else {
          oneDiv.removeClass("selectBottom");
          twoDiv.removeClass("selectBottomDiv");
          oneDiv.removeClass("noselectBottom");
          twoDiv.removeClass("noselectBottomDiv");
          oneDiv.addClass("noselectBottom");
          twoDiv.addClass("noselectBottomDiv");
        }
      });
    },
    previous_img: function() {
      if (this.indexFlag > 0) {
        this.indexFlag = this.indexFlag - 1;
      } else {
        this.indexFlag = 0;
      }
      this.changeImgage(this.indexFlag);
      this.changeBottomFun(this.indexFlag);
    },
    after_img: function() {
      var max = this.indexList.length - 1;
      if (this.indexFlag == max) {
        this.indexFlag = max;
      } else {
        this.indexFlag++;
      }
      this.changeImgage(this.indexFlag);
      this.changeBottomFun(this.indexFlag);
    },
    changeImgage: function(index) {
      this.$refs.swipe.swipeTo(index);
    },
    imgPreview: function(index) {
      ImagePreview({
        images: this.indexRelaList,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    },
    //首页关注程度
    getNyxcImgList: function() {
      var params = {};
      //获取数据
      httpMethod
        .getNyxcImgList(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var dataList = res.dataList;
            this.images = [];
            this.indexRelaList=[];
            this.indexList = dataList;
            for (var i = 0; i < dataList.length; i++) {
              var basePath = dataList[i].basePath;
              var realPath=dataList[i].realPath;
              var basePathUrl = httpMethod.returnBaseUrlFun() + basePath;
              var relaPathUrl = httpMethod.returnBaseUrlFun() + realPath;
              this.images.push(basePathUrl);
              this.indexRelaList.push(relaPathUrl);
            }
            console.log(this.indexRelaList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
@import "../../../cyzx/nyts/nyts_nyxc/nyts_nyxc.css";
@import "../../../../assets/css/frozenui.css";
</style>
