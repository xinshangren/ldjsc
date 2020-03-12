<template>
  <div style="margin-top: 110px;">

    <div style="margin-left: 15px;margin-right:15px;">
      <div style="color:#3ca1ec;font-size:18px;">{{data.village_name}}</div>
      <div style="display:flex;line-height: 20px;line-height: 25px;">
        <img src="../../../assets/img/dz.png" class="imgclass">
        <div style="color: #333333;font-size: 15px;">
          地址：{{data.village_address}}
        </div>
      </div>
      <div style="display:flex;line-height: 20px;line-height: 25px;">
        <img src="../../../assets/img/mj.png" class="imgclass">
        <div style="color: #333333;font-size: 15px;">
          面积：{{data.village_area}}平方公里
        </div>
      </div>
      <div style="display:flex;line-height: 20px;line-height: 25px;">
        <div style="display:flex;width:50%;">
          <img src="../../../assets/img/hs.png" class="imgclass">
          <div style="color: #333333;font-size: 15px;">
            户数：{{data.households}}户
          </div>
        </div>

        <div style="display:flex;width:50%;">
          <img src="../../../assets/img/rs.png" class="imgclass">
          <div style="color: #333333;font-size: 15px;">
            村民：{{data.people_number}}人
          </div>
        </div>

      </div>
      <div style="display:flex;line-height: 20px;line-height: 25px;">
        <img src="../../../assets/img/jdyk.png" class="imgclass">
        <div style="color: #333333;font-size: 15px;">
          接待游客：{{data.visitor?data.visitor+"人":"暂无数据"}}
        </div>
      </div>
      <div style="display:flex;line-height: 20px;line-height: 25px;">
        <div style="display:flex;width:50%;">
          <img src="../../../assets/img/lysr.png" class="imgclass">
          <div style="color: #333333;font-size: 15px;">
            旅游收入：{{data.income?data.income+"万元":"暂无数据"}}
          </div>
        </div>

        <div style="display:flex;width:50%;line-height: 25px;">
          <img src="../../../assets/img/rjsr.png" class="imgclass">
          <div style="color: #333333;font-size: 15px;">
            人均收入：{{data.perincome?data.perincome+"元":"暂无数据"}}
          </div>
        </div>



      </div>
    </div>
    <div style="height: 10px;background-color: #F3F4F7;"></div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 40px;border-bottom: 1px #e5e5e4 solid;margin-right: 10px;">
      <div
        style="margin-top: 13px;color: #333333;font-size: 15px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        示范村简介</div>
    </div>
    <div
      style="width:95%;font-size: 14px;color: #333333;line-height: 19px;margin:2.5%;overflow: hidden;" v-html="data.content">
      
    </div>

  </div>
</template>
<script>
  import $ from "jquery";
  import { httpMethod } from "../../../api/getData.js";
  import Vue from "vue";
  export default {
    name: "jqdetile",
    beforeCreate() {
    },
    activated() {
    },
    data() {
      return {
        data: {},
      };
    },
    mounted() {
      var id = this.$route.params.entity;
      this.getQylyVillageBasic(id);
    },
    methods: {
      getQylyVillageBasic: function (id) {
        var _this = this;
        var params = {
          villageId: id
        };

        httpMethod
          .getQylyVillageBasic(params)
          .then(res => {
            if (res.success == "1") {
              _this.data = res.data;
            }
          })
          .catch(err => {
            this.$toast(err);
          });
      },
    },
    components: {

    }
  };
</script>

<style>
.imgclass{
  width: 18px;
  height: 18px;
  margin-top: 4px;
}
</style>