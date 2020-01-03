<template>
  <div style="margin-top: 60px;background: #FEFEFE;">
    <div style="margin-top: 60px;">
      <img src="../../assets/img/pzjc.png" style="margin-left: 35%;width: 30%; height: 25px;margin-top: 10px;">
      <img src="../../assets/img/jc_map_bg.png" style="width: 80%;margin-left: 10%;margin-right: 10%;margin-top: 10px;">
      <div
        style="margin-left: 10px;margin-right: 10px;margin-top: 10px;line-height: 20px; columns: #333333;font-size:14px;">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp晋城市位于山西省东南部，东枕太行，南临中原，西望黄河，北通幽燕，区位适中，交通便捷，是山西通往中原的重要门户。太焦、候月铁路纵贯本境，晋焦高速、长晋高速、晋阳高速、207国道、省道与县道、乡道交织成网，陆路交通四通八达，十分便利。
        <br />
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp晋城市下辖城区、泽州、高平市、阳城、陵川和沁水六县（市、区），总面积9490平方公里，占全省总面积的6%。总耕地面积为283.38万亩，人均耕地1.42亩，总人口为232.08万人。全市人口中有22个民族。少数民族中回族人数最多，主要分布在城区。
        <br />
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp晋城市历史悠久，文化遗产丰厚，是华夏文明的发祥地之一。早在两万年前的旧石器晚期，这里就留下了人类生活的足迹。相传女娲氏、神农氏、九黎部落首领蚩尤及尧、舜、禹等都曾在这里活动过。
        <br /> &nbsp
      </div>
    </div>
    <div style="height: 10px;background: #F3F4F7;"></div>
    <div style="display: flex; margin-top: 10px;">
      <div style="width: 25%;" @click="goDetile(81735)">
        <img src="../../assets/img/cq.png" style="width: 50%;margin-left: 25%;">
        <div style="text-align: center;font-size: 14px;color: #333333;">城区</div>
      </div>
      <div style="width: 25%;" @click="goDetile(81734)">
        <img src="../../assets/img/zzx.png" style="width: 50%;margin-left: 25%;">
        <div style="text-align: center;font-size: 14px;color: #333333;">泽州县</div>
      </div>
      <div style="width: 25%;" @click="goDetile(81733)">
        <img src="../../assets/img/gps.png" style="width: 50%;margin-left: 25%;">
        <div style="text-align: center;font-size: 14px;color: #333333;">高平市</div>
      </div>
      <div style="width: 25%;" @click="goDetile(81732)">
        <img src="../../assets/img/ycx.png" style="width: 50%;margin-left: 25%;;">
        <div style="text-align: center;font-size: 14px;color: #333333;">阳城县</div>
      </div>
    </div>
    <div style="display: flex; margin-top: 10px;">
      <div style="width: 25%;" @click="goDetile(81731)">
        <img src="../../assets/img/qsx.png" style="width: 50%;margin-left: 25%;">
        <div style="text-align: center;font-size: 14px;color: #333333;">沁水县</div>
      </div>
      <div style="width: 25%;"  @click="goDetile(81730)">
        <img src="../../assets/img/lcx.png" style="width: 50%;margin-left: 25%;">
        <div style="text-align: center;font-size: 14px;color: #333333;">陵川县</div>
      </div>
      <div style="width: 25%;" @click="goDetile(81729)">
        <img src="../../assets/img/kfq.png" style="width: 50%;margin-left: 25%;">
        <div style="text-align: center;font-size: 14px;color: #333333;">开发区</div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from "jquery";
  import Vue from "vue";
  export default {
    name: "newsdetile",
    mounted() {
    },
    data() {
      return {
      };
    },
    methods: {
      goDetile(id) {
        this.$router.push({
          path: "/toutiao/newsdetile",
          name: "newsdetile",
          params: {
            articleId: id
          }
        });
      },
    },
  };
</script>

<style socped>

</style>