<template>
  <div style="margin-top: 70px;">

    <div style="margin-left: 15px;margin-right:15px;">
      <div style="color:#3ca1ec;font-size:18px;">司徒村</div>
      <div style="display:flex;line-height: 20px;">
        <img src="../../../assets/img/dz.png" class="imgclass">
        <div style="color: #333333;font-size: 12px;">
          地址：{{data.village_address}}
        </div>
      </div>
      <div style="display:flex;line-height: 20px;">
        <img src="../../../assets/img/mj.png" class="imgclass">
        <div style="color: #333333;font-size: 12px;">
          面积：{{data.village_area}}平方公里
        </div>
      </div>
      <div style="display:flex;line-height: 20px;">
        <div style="display:flex;width:50%;">
          <img src="../../../assets/img/hs.png" class="imgclass">
          <div style="color: #333333;font-size: 12px;">
            户数：{{data.households}}户
          </div>
        </div>

        <div style="display:flex;width:50%;">
          <img src="../../../assets/img/rs.png" class="imgclass">
          <div style="color: #333333;font-size: 12px;">
            村名：{{data.people_number}}人
          </div>
        </div>

      </div>
      <div style="display:flex;line-height: 20px;">
        <img src="../../../assets/img/jdyk.png" class="imgclass">
        <div style="color: #333333;font-size: 12px;">
          接待游客：{{data.visitor}}人
        </div>
      </div>
      <div style="display:flex;line-height: 20px;">
        <div style="display:flex;width:50%;">
          <img src="../../../assets/img/lysr.png" class="imgclass">
          <div style="color: #333333;font-size: 12px;">
            旅游收入：{{data.income}}
          </div>
        </div>

        <div style="display:flex;width:50%;">
          <img src="../../../assets/img/rjsr.png" class="imgclass">
          <div style="color: #333333;font-size: 12px;">
            人均收入：{{data.perincome}}
          </div>
        </div>



      </div>
    </div>
    <div style="height: 10px;background-color: #F3F4F7;"></div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 40px;border-bottom: 1px #e5e5e4 solid;margin-right: 10px;">
      <div
        style="margin-top: 13px;color: #333333;font-size: 12px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        示范村简介</div>
    </div>
    <div
      style="width:95%;font-size: 12px;color: #333333;line-height: 19px;margin:2.5%;overflow: hidden;" v-html="data.content">
      
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
  width: 12px;
  height: 12px;
  margin-top: 4px;
}
</style>