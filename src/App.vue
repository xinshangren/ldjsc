<template>
  <div id="app"  >
    <loading v-show="LOADING" style="z-index:3;"></loading>
    <!--搜索框部分start-->
    <div
      style="z-index: 2; height: 54px;background: #3098fb ;display: flex;position: fixed;top: 0px;width: 100%;"
    >
      <van-search
        placeholder="搜索"
        shape="round"
        background="rgb(255, 255, 255,0)"
        v-model="seach_value"
        style="width:68%;"
      />
      <img src="@/assets/img/icon_home.png" class="home_top_img" @click="gotoHome()" />
      <img src="@/assets/img/icon_message.png" class="home_top_img" @click="toast()" />
      <img src="@/assets/img/icon_user.png" class="home_top_img" @click="toast()" />
    </div>
    <!--搜索框部分end-->
    <!-- <router-view></router-view> -->
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "../src/store/loading.vue";
export default {
  name: "App",
  activated: function() {
    console.log("+++++++++++++++++");
    this.$setgoindex();
  },
  data() {
    return {
      seach_value: "",
    };
  },
   mounted() {
    //this.gotoHome();
  },
  methods: {
    toast: function() {
      this.$toast("功能开发中");
    },
    gotoHome: function() {
      //console.log(global_variable.indexTabId);
      // console.log(this.$route.name);
      var name = this.$route.name;
      if (name == "main") {
       this.$root.$emit('test11', 'hi')
         //mainJs.changeTabStyle("4");
      } else {
        this.$router.push("/");
      }
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