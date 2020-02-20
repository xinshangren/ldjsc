
<template>
  <div style="margin-top:54px;">
   
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import global_variable from "../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzListvue",
  data() {
    return {
      seach_value: "",
      active: 0,
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    // if (from.path == "/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali") {
    //   if (to.path == "/zdgz/zdgc/zdgc") {
    //     to.meta.keepAlive = true;
    //   } else {
    //     to.meta.keepAlive = false;
    //   }
    // } else {
    //   to.meta.keepAlive = false;
    // }
    next();
  },
  mounted() {
    
  },
  methods: {
    doAddAppLogList: function(logId, ddPhone, grouping_id, grouping_name) {
      var params = {
        logId: logId,
        ddPhone: ddPhone,
        grouping_id: grouping_id,
        grouping_name: grouping_name
      };
      httpMethod
        .doAddAppLogList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    }
  }
};
</script>

<style >
@import "../../page/pjlz/pjlzList.css";
</style>
