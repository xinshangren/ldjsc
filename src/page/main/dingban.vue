<template>
  <div>
    <van-tabs
      ref="tabId1"
      id="tabId1"
      v-model="active"
      :sticky="false"
      :ellipsis="false"
      line-width="20%"
      style="font-size: 14px;"
      color="#2796e7"
      title-inactive-color="#999999"
      title-active-color="#2796e7"
      @change="tabsclick"
    >
      <van-tab id="tabone" v-show="isShowTabOne" title="工作群">
        <child5 @getWorkGroupList="getWorkGroupList"></child5>
      </van-tab>
      <van-tab title="市委市政府" id="2c9bfcdd6c3d7c42016c3d84d4a6000e">
        <child1></child1>
      </van-tab>

      <van-tab title="市人大" id="8ae4804f6d39da6a016d4c924f5d0117">
        <child2 style></child2>
      </van-tab>
      <van-tab title="市政协" id="8ae4804f6d39da6a016d4c928ede0119">
        <child3 style></child3>
      </van-tab>

      <van-tab title="大数据应用局" id="8a8781c56bcf2141016bcf25ff670005">
        <child4 style></child4>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import $ from "jquery";
import child1 from "@/page/dingban/swszf.vue";
import child2 from "@/page/dingban/srd.vue";
import child3 from "@/page/dingban/szx.vue";
import child4 from "@/page/dingban/dsjyyj.vue";
import child5 from "@/page/dingban/workq/workq.vue";
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
import vhtmlpanel from "@/components/HtmlPanel.vue";
export default {
  name: "headline",
  data() {
    return {
      active: 0,
      data: {},
      workGroupList: [],
      isShowTabOne: false,
      url1:
        "http://203.207.104.105:22001/gov-inter/pages/groupManage/myGroupList.html"
      // url1:
      //   "http://203.207.104.105:22001/gov-inter/pages/index.jsp?type=12%25269UFckSUDKYbqp5WXsFeANg%253D%253D&corpId=12%2526zm5I%252B28cxAMS%252B8HHXdo5eHVKvsWXYvgTY07BZfJRnlTqhywqrsMf84vlraBG5RiW"
    };
  },
  mounted() {
    this.doAddAppLogList(
      global_variable.logId,
      global_variable.ddPhone,
      "8",
      "钉办"
    );
  },
  methods: {
    //获取工作群
    getWorkGroupList: function(list) {
      console.log(list);
      this.workGroupList = list;
      if (list.length > 0) {
        this.isShowTabOne = true;
        //  var tablist = $(".van-tabs__nav.van-tabs__nav--line")
        //   .children(":first")
        //   .css("display", "");
        //    $("#tabone").show();
        // this.active=1;
      } else {
        this.isShowTabOne = false;
        $("#tabone").hide();
        $("#tabId1").children();
        var tablist = $(".van-tabs__nav.van-tabs__nav--line")
          .children(":first")
          .css("display", "none");
        console.log();

        this.active = 1;
        // [0].hide();
      }
      this.$refs.tabId1.resize();
    },
    changeactive: function(data) {
      console.log(data);
      this.active = data;
    },
    tabsclick: function(name, title) {
      console.log(name);
      switch (parseInt(name)) {
        case 1:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "55",
            "市委市政府"
          );
          break;
        case 2:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "56",
            "市人大"
          );
          break;
        case 3:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "57",
            "市政协"
          );
          break;
        case 4:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "58",
            "大数据应用局"
          );
          break;
        default:
          break;
      }
    }, //获取记录日志的logid
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
  },
  components: {
    child1,
    child2,
    child3,
    child4,
    child5
  }
};
</script>

<style socped>
</style>