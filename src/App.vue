<template>
  <div id="app">
    <loading v-show="LOADING" style="z-index:3;"></loading>
    <!--搜索框部分start-->
    <div style="z-index: 2; height: 54px;background: #3098fb ;display: flex;position: fixed;top: 0px;width: 100%;">
      <van-search placeholder="搜索" shape="round" background="rgb(255, 255, 255,0)" v-model="seach_value"
        style="width:68%;" />
      <img src="@/assets/img/icon_home.png" class="home_top_img" @click="toast()" />
      <img src="@/assets/img/icon_message.png" class="home_top_img" @click="toast()" />
      <img src="@/assets/img/icon_user.png" class="home_top_img" @click="toast()" />

    </div>
    <!--搜索框部分end-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Loading from '../src/store/loading.vue'
  export default {
    name: "App",
    data() {
      return {
        seach_value: "",
      };
    },
    methods: {
      toast: function () {
        this.$toast('功能开发中');
      }
    },
    beforeCreate() {
      document.querySelector("body").setAttribute("style", "background:#f7f7f7");
    },
    computed: {
      ...mapState(["LOADING"])
    },
    components: {
      Loading
    }
  };
</script>

<style>
  @import "assets/css/main.css";
</style>