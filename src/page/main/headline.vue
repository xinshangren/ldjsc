
<template>
 <div>
 <!--每日要闻start-->
 <div style="text-align: center;position: relative;">
  <img class="home_head_img" src="../../assets/img/headtop.png" />
  <div class="home_head_time_style">2019-12-18</div>
</div>
  <van-tabs v-model="active" :sticky=true :ellipsis=false line-width="25%" style="font-size: 14px;" color="#2796e7" title-inactive-color="#999999"  title-active-color="#2796e7" >
    <van-tab title="图片新闻">
      <child1 
        v-bind:active="active"
      ></child1>
    </van-tab>
    <van-tab title="领导之窗">
      <child2 style=""></child2>
    </van-tab>
    <van-tab title="政务公开">
       <child3 style=""></child3>
    </van-tab>
    <van-tab title="美丽晋城">
       <child4 style=""></child4>
    </van-tab>
  </van-tabs>
</div>
</template>
<script>
import child1 from "@/page/toutiao/picsnews.vue";
import child2 from "@/page/toutiao/ldzc.vue";
// import child3 from "@/page/jjyx/jjyx.vue";
// import child4 from "@/page/hbgj/hbgj.vue";

export default {
name: "headline",
data() {
  return {
    active: 0
  };
},
methods: {
  changeactive: function(data) {
    console.log(data);
    this.active = data;
  }
},
components: {
  child1,
  child2,
  // child3,
  // child4,
  
}
};
</script>

<style socped >

</style>
