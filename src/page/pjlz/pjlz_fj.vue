<template>
  <div style="margin-top:54px;background:#ffffff;">
    <div  style="width: 92%;padding: 2% 4% 2% 4%;background-size: 100% 100%;">
      <div id="pmJjdivid" style="width:100%;font-size:15px;" v-html="item"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlz_fj",
  data() {
    return {
      list: [],
      item:"",
      fileList: [],
      fileListnew: [],
    };
  },
  mounted() {
    this.item = this.$route.params.entity;
    $("#pmJjdivid p").each(function() {
      $(this).attr("style", "font-size:15px;");
    });
    $("#pmJjdivid img").each(function() {
      $(this).attr("style", "width:100%;");
    });
  },
  methods: {
    openFj: function(item) {
      console.log(item);
    },
    //获取记录日志的logid
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
    },
  }
};
</script>

<style >
</style>
