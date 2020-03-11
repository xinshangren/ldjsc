<template>
  <div>
    <div id="pjlzDeali_fk_id" style="margin:101px 0px 10px;background:#ffffff;min-height: 210px;">
      <div style="display: flex;padding-top: 10px;">
        <!-- <img
          v-if="pj_detail.approval_warn_flag == 0"
          src="../../assets/img/no_overdue.png"
          style="height:38px"
        />
        <img v-else src="../../assets/img/noverdue.png" style="height:38px" />-->
        <div
          style="font-weight: 600;font-size: 18px; padding:7px 7px 7px 7px;width: 85%;margin: auto;"
        >{{pj_detail.approval_name}}</div>
        <!-- <div
          style="font-size: 15px;border:1px solid #2599e6 ;border-radius: 5px;color:#2599e6;height: 20px;
                text-align: center;
                margin-top: 7px"
        >{{pj_detail.approval_status}}</div>-->
      </div>
      <div style="color: #666666;font-size: 16px;width: 94%;">
        <div style="display: flex;margin-top: 10px;">
          <div style="width: 30%;text-align: left;">文号：</div>
          <div style="width:70%">{{pj_detail.approval_number}}</div>
        </div>
        <div style="display: flex;margin-top: 15px;position: relative;">
          <div style="width: 30%;text-align: left;">文件内容：</div>
          <span style="position: absolute;
          top: 27px;
          font-size: 14px;">（点击内容放大）</span>
          <div style="width: 70%;height: 100px;overflow-y:scroll;">
            <div
              style="font-size: 16px;
                        line-height: 23px;
                       "
              v-html="pj_detail.approval_content"
              @click="pjDetail"
            ></div>
          </div>
        </div>
        <div style="display: flex;margin-top: 15px;">
          <div style="width: 30%;text-align: left;">批示件类型：</div>
          <div style="width:70%">{{pj_detail.approval_type}}</div>
        </div>
        <div style="display: flex;margin-top: 15px;">
          <div style="width: 30%;text-align: left;">承办人：</div>
          <div style="width:70%">
            <div style="height: 25px;">{{pj_detail.approval_main_person}}</div>
            <div v-if="pj_detail.approval_manage_person" style="min-height:25px;">{{pj_detail.approval_manage_person}}</div>
          </div>
        </div>
        
        
        <div style="display: flex;margin-top: 15px;padding-bottom: 15px;">
          <div style="width: 30%;text-align: left;">市长批示：</div>
          <div style="width:70%">{{pj_detail.approval_instruct}}</div>
        </div>
        <div style="display: flex;padding-bottom: 15px;" v-if="pj_detail.attachlist != null && pj_detail.attachlist.length>0">
          <div style="width: 30%;text-align: left;">附件：</div>
          <div style="width: 70%;color:#2599e6;font-size: 15px;">
            <div
              v-if="pj_detail.attachlist != null && pj_detail.attachlist.length>0"
              v-for="attach in pj_detail.attachlist"
              style="display: flex; margin-top: 5px;"
            >
              <div
                @click="openFj(attach)"
                style="width: 70%;word-break:break-all"
              >{{attach.attach_name}}</div>
              <a
                :href="attach.attach_download_url"
                download
                style="display: flex;background: #DBEEFF;height: 26px;border-radius: 5px;width: 30%;color: #3098fb;"
              >
                <img
                  style="height: 16px;margin: auto;margin-left: 9px;"
                  src="../../assets/img/icon_download_new.png"
                />
                <div
                  style="color: #3098fb;font-size: 15px;margin-top: 2px;width: 100%;text-align: center;"
                >下载</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="jl_content" style="margin:10px 0px 10px;background:#ffffff;">
      <div id="all_jl" style="height:246px;padding-top: 15px;">
        <div id="fkjl" style="padding:0px 15px 0px 15px;position: relative;">
          <div style="display: flex;font-size: 16px;">
            <div style="width: 80%;display: flex;">
              <div>反馈记录({{pj_detail.approval_feedback_time == null?0:pj_detail.approval_feedback_time}})</div>
            </div>
          </div>
          <div
            v-if="fkjl_null"
            style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;"
          >
            <div style="display: flex;">
              <img style="height: 18px;" src="../../assets/img/icon_people.png" />
              <div style="margin-left: 2px;">反馈人:</div>
              <div style="margin-left: 2px;">{{last_feedback.feedback_person}}</div>
            </div>
            <div style="display: flex;padding-left:5px;">
              <img style="height: 18px;" src="../../assets/img/icon_time.png" />
              <div style="margin-left: 2px;">反馈时间:{{last_feedback.feedback_time}}</div>
            </div>
          </div>
          <div v-else style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
            <div style="display: flex;">
              <div style="margin-left: 2px;">暂无反馈记录</div>
            </div>
          </div>
          <img
            v-show="fkjl_null"
            @click="gofkjl_list"
            style="    right: 13px; top: 20px; width: 19px;position: absolute;"
            src="../../assets/img/icon_more.png"
          />
          <van-divider />
        </div>
        <div id="cbjl" style="padding:0px 15px;position: relative;">
          <div style="display: flex;font-size: 16px;">
            <div style="width: 80%;display: flex;">
              <div>催办记录({{pj_detail.approval_warn_time== null?0:pj_detail.approval_warn_time}})</div>
            </div>
            <!-- <div
              v-show="cbjl_null"
              @click="gocbjl_list"
              style="width: 30%;display: flex;color: #2599e6;text-align: right;"
            >
              <img style="height: 22px;" src="../../assets/img/icon_record_more.png" />
              <div>更多记录</div>
            </div> -->
          </div>
          <!-- <div style="display: flex;font-size: 15px;margin-top: 13px;">
            <div
              style="height: 20px;width: 70%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;"
            >
              {{last_warn.warn_content}}
            </div>
          </div> -->
          <div
            v-if="cbjl_null"
            style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;"
          >
            <div style="display: flex;">
              <img style="height: 18px;" src="../../assets/img/icon_people.png" />
              <div style="margin-left: 2px;">催办人:</div>
              <div style="margin-left: 2px;">{{last_warn.warn_person}}</div>
            </div>
            <div style="display: flex;padding-left:5px;">
              <img style="height: 18px;" src="../../assets/img/icon_time.png" />
              <div style="margin-left: 2px;">催办时间:{{last_warn.warn_time}}</div>
            </div>
          </div>
          <div v-else style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
            <div style="display: flex;">
              <div style="margin-left: 2px;">暂无催办记录</div>
            </div>
          </div>
          <img
          v-show="cbjl_null"
          @click="gocbjl_list"
          style="    right: 13px; top: 20px; width: 19px;position: absolute;"
          src="../../assets/img/icon_more.png"
        />
          <van-divider />
        </div>
        <div id="jxjl" style="padding:0px 15px;position: relative;">
          <div style="display: flex;font-size: 16px;">
            <div style="width: 80%;display: flex;">
              <div>结项记录({{pj_detail.approval_done_time == null?0:pj_detail.approval_done_time}})</div>
            </div>
            <!-- <div
              v-show="jxjl_null"
              @click="gojxjl_list"
              style="width: 30%;display: flex;color: #2599e6;text-align: right;"
            >
              <img style="height: 22px;" src="../../assets/img/icon_record_more.png" />
              <div>更多记录</div>
            </div> -->
          </div>
          <!-- <div style="display: flex;font-size: 15px;margin-top: 13px;">
            <div
              style="height: 20px;width:70%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;"
            >
               {{last_done.done_content}}
            </div>
           <img style="height: 20px;margin-left: 5px;" src="../../assets/img/icon_edit.png" />
            <div style="color:#2599e6 ;margin-left: 3px;">编辑</div>
          </div> -->
          <div
            v-if="jxjl_null"
            style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;"
          >
            <div style="display: flex;">
              <img style="height: 18px;" src="../../assets/img/icon_people.png" />
              <div style="margin-left: 2px;">申请人:</div>
              <div style="margin-left: 2px;">{{last_done.done_person}}</div>
            </div>
            <div style="display: flex;padding-left:5px;">
              <img style="height: 18px;" src="../../assets/img/icon_time.png" />
              <div style="margin-left: 2px;">申请时间:{{last_done.done_time}}</div>
            </div>
          </div>
          <div
            v-else="jxjl_null"
            style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;"
          >
            <div style="display: flex;">
              <div style="margin-left: 2px;">暂无申请结项记录</div>
            </div>
          </div>
          <img
          v-show="jxjl_null"
          @click="gojxjl_list"
          style="    right: 13px; top: 20px; width: 19px;position: absolute;"
          src="../../assets/img/icon_more.png"
        />
          <van-divider />
        </div>
      </div>
      <div
        @click="show_jl"
        style="background: #deefff;height: 40px;color:#2599e6; margin:0px 10px;font-size: 16px;"
      >
        <div
          style="display: flex;width: 28%;
               margin: auto;
               padding-top: 8px;"
        >
          <div>{{all_jl_word}}</div>
          <img style="height: 20px; margin-left: 5px;" :src="all_jl_photo" />
        </div>
      </div>
    </div>
    <van-popup v-model="pj_content" round closeable :style="{ height: '80%',width:'83%'}">
      <div style="height: 98%;">
        <div style="width:88px;font-size: 19px;margin: auto;margin-top: 11px;">文件内容</div>
        <div
          v-html="pj_detail.approval_content"
          style="overflow-y: auto;margin:12px 10px 0px 10px;height:90%;font-size:16px"
        ></div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs, Search } from "vant";
import dd from "dingtalk-jsapi";
import { Divider } from "vant";
import { httpMethod } from "../../api/getData.js";
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzDetail_cb",
  props: ["pj_detail"],
  data() {
    return {
      overdue: true,
      all_jl_flag: true,
      all_jl_photo: require("../../assets/img/hide.png"),
      all_jl_word: "收起记录",
      last_feedback: {},
      last_warn: {},
      last_done: {},
      fkjl_null: true,
      cbjl_null: true,
      jxjl_null: true,
      pj_content: false
    };
  },
  mounted() {
    this.pdSingleApp();
    this.inint();
  },
  activated() {
    this.pj_content = false;
  },
  watch: {
    pj_detail: "inint"
  },
  methods: {
    pjDetail: function() {
      var self = this;
      self.pj_content = true;
    },
    //判断是否是单独app
    pdSingleApp: function() {
      String.prototype.getValue = function(parm) {
        var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
        var r = this.substr(this.indexOf("?") + 1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      };
      var hrefUrl = window.location.href;
      var indexUrl = hrefUrl.replace("#", "");

      var url = decodeURI(hrefUrl);
      console.log(url);
      var detail = url.getValue("type");
      console.log("type===" + detail);
      if (detail == "1") {
        $("#pjlzDeali_fk_id").css("margin", "0px 0px 10px");
        // $("#pjlzDeali_fk_top_id").css("margin-top","0px");
      }
    },
    inint: function() {
      var self = this;
      //去除 相关人中牵头人
      var cbrStr = self.pj_detail.approval_manage_person;
      var cbr1Str = "";
      if (cbrStr.indexOf(",") != -1) {
        var namelist = cbrStr.split(",");
        for (var j = 0; j < namelist.length; j++) {
          if (j > 0) {
            if (cbr1Str == "") {
              cbr1Str += namelist[j];
            } else {
              cbr1Str += "," + namelist[j];
            }
          }
        }
      }
      self.pj_detail.approval_manage_person = cbr1Str;  


      if (
        self.pj_detail.approval_feedback != null &&
        Object.keys(self.pj_detail.approval_feedback).length > 0
      ) {
        self.last_feedback = self.pj_detail.approval_feedback;
        // self.last_feedback.feedback_time = self.last_feedback.feedback_time.substr(
        //   0,
        //   self.last_feedback.feedback_time.length - 3
        // );
        self.fkjl_null = true;
      } else {
        self.last_feedback = {};
        self.fkjl_null = false;
      }
      if (
        self.pj_detail.approval_warn != null &&
        Object.keys(self.pj_detail.approval_warn).length > 0
      ) {
        self.last_warn = self.pj_detail.approval_warn;
        // self.last_warn.warn_time = self.last_warn.warn_time.substr(
        //   0,
        //   self.last_warn.warn_time.length - 3
        // );
        self.cbjl_null = true;
      } else {
        self.last_warn = {};
        self.cbjl_null = false;
      }
      if (
        self.pj_detail.approval_done != null &&
        Object.keys(self.pj_detail.approval_done).length > 0
      ) {
        self.last_done = self.pj_detail.approval_done;
        // self.last_done.done_time = self.last_done.done_time.substr(
        //   0,
        //   self.last_done.done_time.length - 3
        // );
        self.jxjl_null = true;
      } else {
        self.last_done = {};
        self.jxjl_null = false;
      }
    },
    openFj: function(item) {
      console.log(item);
      if (item.attach_type == "office") {
        this.$router.push({
          path: "/pjlz/pjlz_fj",
          name: "pjlz_fj",
          params: {
            entity: item
          }
        });
      } else if (item.attach_type == "image") {
        this.$router.push({
          path: "/pjlz/pjlz_fj_image",
          name: "pjlz_fj_image",
          params: {
            entity: item.attach_view_url
          }
        });
      } else {
        this.$toast("文件暂不支持预览");
      }
    },
    gofkjl_list: function() {
      console.log(this.pj_detail);
      this.$router.push({
        path: "/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl",
        name: "pjlz_fkjl",
        params: {
          id: this.pj_detail.id
        }
      });
    },
    gocbjl_list: function(id) {
      this.$router.push({
        path: "/pjlz/pjlzDetail_cb/pjlz_cbjl/pjlz_cbjl",
        name: "pjlz_cbjl",
        params: {
          id: this.pj_detail.id
        }
      });
    },
    gojxjl_list: function(id) {
      this.$router.push({
        path: "/pjlz/pjlzDetail_jx/pjlz_jxjl/pjlz_jxjl",
        name: "pjlz_jxjl",
        params: {
          id: this.pj_detail.id
        }
      });
    },
    gofkjl_list_detail: function(id) {
      this.$router.push({
        path: "/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail",
        name: "pjlz_fkjl_detail",
        params: {
          id: id
        }
      });
    },

    show_jl: function() {
      var self = this;
      if (self.all_jl_flag) {
        $("#all_jl").slideUp("slow");
        self.all_jl_flag = false;
        self.all_jl_word = "展开记录";
        self.all_jl_photo = require("../../assets/img/show.png");
      } else {
        self.all_jl_flag = true;
        self.all_jl_word = "收起记录";
        self.all_jl_photo = require("../../assets/img/hide.png");
        $("#all_jl").slideDown("slow");
      }
    },
    fj_download: function(url) {
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.style.display = "none";
      if (navigator.userAgent.match(/iPad|iPhone/i)) {
        iframe.style.width = 100 + "%";
        iframe.style.overflowX = "hidden";
        iframe.style.overflowY = "scroll";
        iframe.style.webkitOverflowScrolling = "touch";
        iframe.setAttribute("scrolling", "no");
      }
      document.body.appendChild(iframe);
    }
  }
};
</script>

<style>
</style>