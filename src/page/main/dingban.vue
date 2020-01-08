<template>
  <div>
    <van-tabs v-model="active" :sticky=false :ellipsis=false line-width="25%" style="font-size: 14px;" color="#2796e7"
      title-inactive-color="#999999" title-active-color="#2796e7">
      <van-tab title="市委市政府" id="2c9bfcdd6c3d7c42016c3d84d4a6000e">
        <child1 v-bind:active="active"></child1>
      </van-tab>

      <van-tab title="市人大" id="8ae4804f6d39da6a016d4c924f5d0117">
        <child2 style=""></child2>
      </van-tab>
      <van-tab title="市政协" id="8ae4804f6d39da6a016d4c928ede0119">
        <child3 style=""></child3>
      </van-tab>

      <van-tab title="大数据应用局" id="8a8781c56bcf2141016bcf25ff670005">
        <child4 style=""></child4>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import child1 from "@/page/dingban/swszf.vue";
  import child2 from "@/page/dingban/srd.vue";
  import child3 from "@/page/dingban/szx.vue";
  import child4 from "@/page/dingban/dsjyyj.vue";
  import { httpMethod } from "../../api/getData.js";

  export default {
    name: "headline",
    data() {
      return {
        active: 0,
        data: {}
      };
    },
    mounted() {
    },
    methods: {
      changeactive: function (data) {
        console.log(data);
        this.active = data;
      },
    },
    components: {
      child1,
      child2,
      child3,
      child4,

    }
  };
</script>

<style socped>

</style>