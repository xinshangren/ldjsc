<template>
  <div>
    <img src="../../assets/img/banner.png" style="width: 95%;height: 130px;margin: 2.5%;" @click='gopzjc()'>
    <div style="width: 100%;background: #ffffff;">
      <img src="../../assets/img/yzjc.png" style="margin-left: 35%;width: 30%; height: 25px;margin-top: 10px;">
      <van-swipe :autoplay="3000" style="margin-left: 15px;margin-right: 15px;">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="width: 100%;height: 250px;" @click="goDetile(imageids[index])" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div style="width: 100%;background: #ffffff;margin-top: 10px;">
      <img src="../../assets/img/whjc.png" style="margin-left: 35%;width: 30%; height: 25px;margin-top: 10px;">
      <div :style="{backgroundImage: 'url(' + whys.imgUrl + ')', backgroundSize:'contain'}"
        style="display: flex;margin: 15px;height: 130px;">
        <div style="width: 135px;height: 130px;"></div>
        <div style="background: rgba(255, 255, 255, 0.8);width: 68%;">
          <img src="../../assets/img/whys.png" style="margin-left: 5%; width: 90%;height: 40px;">
          <div style="font-size: 15px;color: #333333;margin-left: 5%;">
            {{whys.title}}
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item1, index1)  of whyslist" :key="item1.id"  v-if="index1 < 3" @click="goDetile(item1.id)"
              style="width: 30%;height: 20px;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item1.title}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item1, index1)  of whyslist" :key="item1.id" v-if="index1 > 2&&index4 < 6"  @click="goDetile(item1.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item1.title}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item1, index1)  of whyslist" :key="item1.id" v-if="index1 > 5&&index4 < 9"  @click="goDetile(item1.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item1.title}}
            </div>
          </div>
        </div>
      </div>

      <div :style="{backgroundImage: 'url(' + fywh.imgUrl + ')', backgroundSize:'contain'}"
        style="display: flex;margin: 15px; margin-top: 10px;margin-bottom: 0px; height: 130px;">
        <div style="background: rgba(255, 255, 255, 0.8);width: 68%;">
          <img src="../../assets/img/fywh.png" style="margin-left: 5%; width: 90%;height: 40px;">
          <div style="font-size: 15px;color: #333333;margin-left: 5%;">
            {{fywh.title}}
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item2, index2)  of fywhlist" :key="item2.id"  v-if="index2 < 3" @click="goDetile(item2.id)"
              style="width: 30%;height: 20px;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item2.title}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item2, index2)  of fywhlist" :key="item2.id" v-if="index2 > 2&&index2 < 6"  @click="goDetile(item2.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item2.title}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item2, index2)  of fywhlist" :key="item4.id" v-if="index2 > 5&&index2 < 9"  @click="goDetile(item2.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item2.title}}
            </div>
          </div>
        </div>
        <div style="width: 135px;height: 130px;"></div>
      </div>

      <div :style="{backgroundImage: 'url(' + jcrw.imgUrl + ')', backgroundSize:'contain'}"
        style="display: flex;margin: 15px;margin-top: 10px;margin-bottom: 0px; height: 130px;">
        <div style="width: 135px;height: 130px;"></div>
        <div style="background: rgba(255, 255, 255, 0.8);width: 68%;">
          <img src="../../assets/img/jcrw.png" style="margin-left: 5%; width: 90%;height: 40px;">
          <div style="font-size: 15px;color: #333333;margin-left: 5%;">
            {{jcrw.title}}
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item3, index3)  of jcrwlist" :key="item3.id"  v-if="index3 < 3" @click="goDetile(item3.id)"
              style="width: 30%;height: 20px;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item3.title}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item3, index3)  of jcrwlist" :key="item3.id" v-if="index3 > 2&&index3 < 6"  @click="goDetile(item3.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item3.title}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item3, index3)  of jcrwlist" :key="item3.id" v-if="index3 > 5&&index3 < 9"  @click="goDetile(item3.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item3.title}}
            </div>
          </div>
        </div>
      </div>

      <div :style="{backgroundImage: 'url(' + mstc.imgUrl + ')', backgroundSize:'contain'}"
        style="display: flex;margin: 15px; margin-top: 10px;margin-bottom: 0px; height: 130px; overflow-y: scroll;">
        <div style="background: rgba(255, 255, 255, 0.8);width: 68%;">
          <img src="../../assets/img/mstc.png" style="margin-left: 5%; width: 90%;height: 40px;">
          <div style="font-size: 15px;color: #333333;margin-left: 5%;">
            {{mstc.title}}
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item4, index4)  of mstclist" :key="item4.id" v-if="index4 < 3"  @click="goDetile(item4.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item4.title.substring(6,item4.title.length)}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item4, index4)  of mstclist" :key="item4.id" v-if="index4 > 2&&index4 < 6"  @click="goDetile(item4.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item4.title.substring(6,item4.title.length)}}
            </div>
          </div>
          <div style="font-size: 14px;color: #333333;margin-left: 5%;display: flex;overflow: scroll;margin-top: 5px;">
            <div  v-for="(item4, index4)  of mstclist" :key="item4.id" v-if="index4 > 5&&index4 < 9"  @click="goDetile(item4.id)"
              style="width: 30%;line-height: 20px;vertical-align: middle; border: 1px #1976d2 solid; margin-left: 1%; border-radius:3px;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
              {{item4.title.substring(6,item4.title.length)}}
            </div>
          </div>
        </div>
        <div style="width: 135px;height: 130px;"></div>
      </div>

      <div style="height: 60px;"></div>

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
        imageids:[],
        yzjclist: [],
        whys: {},
        whyslist: {},
        jcrw: {},
        jcrwlist: {},
        fywh: {},
        fywhlist: {},
        mstc: {},
        mstclist: {},

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
              for (var i = 0; i < res.dataList.length; i++) {
                _this.images.push(res.dataList[i].imgUrl);
                _this.imageids.push(res.dataList[i].id);
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
              _this.whys = res.whys.detail;
              _this.whyslist = res.whys.dataList;
              _this.jcrw = res.jcrw.detail;
              _this.jcrwlist = res.jcrw.dataList;
              _this.fywh = res.fywh.detail;
              _this.fywhlist = res.fywh.dataList;
              _this.mstc = res.mstc.detail;
              _this.mstclist = res.mstc.dataList;



            } else if (res.success == "0") {

            }
          })
          .catch(err => {
            this.$toast(err);
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
      },
      gopzjc() {
        this.$router.push({
          path: "/toutiao/pzjc",
          name: "pzjc",
        });
      }
    },
  };
</script>

<style socped>

</style>