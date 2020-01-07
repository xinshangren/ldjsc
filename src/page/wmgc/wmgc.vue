<template>
 <div style="margin-top:55px;">
  <van-tabs @click="onClick" v-model="active" :sticky=true :ellipsis=false line-width="25%" style="font-size: 14px;" color="#2796e7" title-inactive-color="#999999"  title-active-color="#2796e7" >
    <van-tab title="概况">
      <child1 
        v-bind:active="active"
      ></child1>
    </van-tab>
    <van-tab title="创城动态">
      <!-- <child2 style=""></child2> -->
    </van-tab>
    <van-tab title="星级展示">
       <child3 style=""></child3>
    </van-tab>
    <van-tab title="类型得分">
       <child4 style=""></child4>
    </van-tab>
  </van-tabs>
</div>
</template>
<script>
import child1 from "@/page/wmgc/wmgcgk.vue";
import child2 from "@/page/toutiao/ldzc.vue";
import child3 from "@/page/wmgc/wmgcxjzs.vue";
import child4 from "@/page/wmgc/wmgclxdf.vue";

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
  },
  onClick(name, title){
    
  }
},
components: {
  child1,
  child2,
  child3,
  child4,
  
}
};
</script>

<style socped >

</style>
