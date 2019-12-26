<template>
  <div>
    <img src="../../assets/img/banner.png" style="width: 95%;height: 130px;margin: 2.5%;">
    <div style="width: 100%;background: #ffffff;">
      <img src="../../assets/img/yzjc.png" style="margin-left: 35%;width: 30%; height: 25px;margin-top: 10px;">
      <van-swipe :autoplay="3000" style="margin-left: 15px;margin-right: 15px;">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="width: 100%;height: 250px;" @click="imgPreview(index)" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div style="width: 100%;background: #ffffff;margin-top: 10px;">
      <img src="../../assets/img/whjc.png" style="margin-left: 35%;width: 30%; height: 25px;margin-top: 10px;">
      <div :style="{backgroundImage: 'url(' + whys.imgUrl + ')', backgroundSize:'contain'}" style="display: flex;margin: 15px;height: 130px;">
        <img src="" style="width: 135px;height: 130px;">
        <div style="background: rgba(255, 255, 255, 0.8);">
          <img src="../../assets/img/whys.png" style="margin-left: 10%; width: 90%;height: 40px;">
          <div style="font-size: 15px;color: #333333;margin-left: 10%;">
            {{whys.title}}
          </div>

        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import $ from "jquery";
  import Vue from "vue";
  import Vant, { Lazyload } from "vant";
  import { Swipe, SwipeItem } from "vant";
  import { ImagePreview } from "vant";
  Vue.use(ImagePreview);
  Vue.use(Lazyload);
  Vue.use(Swipe).use(SwipeItem);
  import { httpMethod } from "../../api/getData.js";
  export default {
    name: "newsdetile",
    mounted() {
      //游在晋城
      this.getCmsArticleContentList("18674");
      this.getlmjcZL();
    },
    data() {
      return {
        images: [],
        yzjclist: [],
        whys: {},
      };
    },
    methods: {
      getCmsArticleContentList: function (id) {
        var _this = this;
        var params = {
          classId: id,
          page: 1,
          pageSize: 20
        };

        httpMethod
          .getCmsArticleContentList(params)
          .then(res => {
            if (res.success == "1") {
              _this.yzjclist = res.dataList;
              for(var i=0;i<res.dataList.length;i++){
                _this.images.push(res.dataList[i].imgUrl);
              }
             

            } else if (res.success == "0") {

            }
          })
          .catch(err => {
            this.$toast(err);
          });
      },
      getlmjcZL: function () {
        var _this = this;
        var params = {
        };

        httpMethod
          .getlmjcZL(params)
          .then(res => {
            if (res.success == "1") {
              _this.whys=res.whys[0];

            } else if (res.success == "0") {

            }
          })
          .catch(err => {
            this.$toast(err);
          });
      }
    },
  };
</script>

<style socped>

</style>