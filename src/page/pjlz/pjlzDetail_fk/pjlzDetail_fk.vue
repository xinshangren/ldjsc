<style scoped>
.choose {
  color: #2099eb;
}

.cbfs {
  width: 31%;
  height: 47px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}

.tzfs_div {
  width: 57%;
  margin: 13px;
  font-size: 15px;
}
</style>
<template>
  <div id="pjlzDeali_fk_top_id" style="margin-top:54px;background:#f7f7f7">
    <pjlzDetailVue :pj_detail="pj_detail"></pjlzDetailVue>
    <div
      id="fk_div"
      v-show="fk_div"
      style="margin:10px 0px 0px 0px;background:#ffffff;min-height: 250px;"
    >
      <div style="padding:10px 15px 10px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 13px">工作反馈</div>
        <van-field
          v-model="fk_content"
          rows="2"
          autosize
          type="textarea"
          maxlength="150"
          placeholder="请输入反馈内容"
          show-word-limit
          :formatter="formatter(fk_content)"
          style="font-size: 15px;margin-top: 10px;border: 1px solid #9f9f9f;border-radius: 10px;resize: none;width: 100%;"
        />
        <!-- <textarea
          v-model="fk_content"
          placeholder="请输入反馈内容"
          style="font-size: 15px;margin-top: 10px;border: 1px solid #9f9f9f;border-radius: 10px;resize: none;width: 100%;height: 70px;"
        ></textarea>-->
        <van-uploader
          v-model="file_list"
          multiple
          :after-read="afterRead"
          :preview-image="false"
          accept="*"
        >
          <div style="display: flex;font-size: 15px;margin-top: 15px;color:#2599e6">
            <img style="height: 18px;" src="../../../assets/img/icon_accessory.png" />
            <div style="margin-left: 5px;">添加附件</div>
          </div>
          <!-- <div class="progress-wrapper">
            <div class="progress-progress" :style="uploadStyle"></div>
            <div class="progress-rate">{{(uploadRate*100).toFixed(2)}}%</div>
          </div>-->
        </van-uploader>
        <div
          v-if="upload_file_list.length>0"
          v-for="(item,index) of upload_file_list"
          style="display: flex;font-size: 14px;color:#666666 ;"
        >
          <div >{{item.name}}</div>
          <img
            @click="delete_adjunct(index,item.attachid)"
            style="height: 20px;margin-left: 5px;"
            src="../../../assets/img/icon_delete.png"
          />
        </div>
        <div
          style="display: flex;background: #28bcfe;border-radius:20px;width: 64%;
                margin: auto;
                margin-top: 15px;
                height: 40px;"
        >
          <div
            style="margin: auto;margin-top: 6px;margin-bottom: 6px; color: #ffffff;font-size: 18px;"
            @click="submit_fk"
          >提交</div>
        </div>
      </div>
    </div>
    <!-- <van-overlay :show="upl_show">
      <div class="wrapper" @click.stop style="position: relative;">
        <div style="color:#1989fa;font-size:19px;margin:auto">{{uploadStyle.width}}</div>
        <van-loading color="#1989fa" style="position:absolute"size="65px" />
      </div>
    </van-overlay> -->
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs, Search } from "vant";
import dd from "dingtalk-jsapi";
import { Divider } from "vant";
import { Uploader } from "vant";
import { ImagePreview } from "vant";
import { httpMethod } from "../../../api/getData.js";
import pjlzDetailVue from "@/page/pjlz/pjlzDetail.vue";
import { Field } from "vant";
import { Overlay } from "vant";

Vue.use(Overlay);
Vue.use(Field);
Vue.use(ImagePreview);
Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../../api/global_variable.js";
import Watermark from '../../../assets/js/watermark'; 
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzDetail_fk",
  components: {
    pjlzDetailVue
  },
  data() {
    return {
      overdue: true,
      file_one: {},
      file_list: [],
      pj_obj: {},
      pj_detail: "",
      fk_content: "",
      upload_file_list: [],
      fk_div: true,
      uploadRate: 0,
      uploadStyle: {
        width: "0%"
      },
      upl_show: false
    };
  },
  mounted() {
    this.fk_content = "";
    this.fk_div = true;
    this.upload_file_list = [];
    this.pdSingleApp();
  },
  activated() {
    this.fk_content = "";
    this.fk_div = true;
    this.upload_file_list = [];
   
    this.pdSingleApp();
  },
  methods: {
    //获取用户角色
    getUserInfo: function(id) {
      var self = this;
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
          corpId: global_variable.corpId, // 企业id
          onSuccess: function(info) {
            var code = info.code; // 通过该免登授权码可以获取用户身份
            var params = {
              method: "getUserInfo",
              code: code
            };
            httpMethod.getApprovalInfo(params).then(res => {
              console.log(JSON.stringify(res));
              if (res.success == "1") {
                global_variable.roleJs = Object.assign(
                  {},
                  global_variable.roleJs,
                  {
                    dingUserId: res.data.dingUserId,
                    username: res.data.username,
                    role: res.data.role,
                    department: res.data.department
                  }
                );
                Watermark.set(global_variable.roleJs.username+" 领导批示办理");
                // if (global_variable.roleJs.role == "cbr") {
                //   self.fk_div = true;
                // } else {
                //   self.fk_div = false;
                // }
                self.pj_obj.id = id;
                self.getdata();
              }
            });
          },
          onFail: function(err) {
            alert("dd error: " + JSON.stringify(err));
          }
        });
      });
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
        // $("#pjlzDeali_fk_id").css("margin", "0px 0px 10px");
        $("#pjlzDeali_fk_top_id").css("margin-top", "0px");
        this.$route.meta.title = "领导批示办理";
        var id = url.getValue("id");
        if (id != null && id != "") {
          //推送页面  跳转
          this.getUserInfo(id);
        } else {
          //独立app 流转批件详情
          this.pj_obj =
            this.$route.params.obj != null
              ? this.$route.params.obj
              : this.pj_obj;
          this.getdata();
        }
      } else {
        //领导驾驶舱 流转批件详情
        this.pj_obj =
          this.$route.params.obj != null ? this.$route.params.obj : this.pj_obj;
        this.getdata();
      }
    },
    getdata: function() {
      let self = this;
      let approvalInfoId = self.pj_obj.id;
      var params = {
        method: "getApprovalInfo",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: this.seach_value, //机构id
        approvalInfoId: approvalInfoId //批件id
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(params);
          console.log(res);
          if (res.success == "1") {
            self.pj_detail = res.data;
            // if (
            //   self.pj_detail.approval_manage_person != null &&
            //   self.pj_detail.approval_manage_person != ""
            // ) {
            //   self.pj_detail.approval_manage_person = self.pj_detail.approval_manage_person.split(
            //     ","
            //   );
            // }
            //判断当前人  是否为牵头人
            if (
              self.pj_detail.approval_main_person_dingid ==
              global_variable.roleJs.dingUserId
            ) {
              self.fk_div = true;
            } else {
              self.fk_div = false;
            }

            if (self.pj_detail.approval_status != null) {
              switch (self.pj_detail.approval_status) {
                case "0":
                  self.pj_detail.approval_status = "办理中";
                  break;
                case "1":
                  self.pj_detail.approval_status = "已反馈";
                  break;
                case "2":
                  self.pj_detail.approval_status = "未反馈";
                  break;
                case "3":
                  self.pj_detail.approval_status = "申请结项";
                  break;
                case "4":
                  self.pj_detail.approval_status = "已结项";
                  self.fk_div = false;
                  break;
                case "5":
                  self.pj_detail.approval_status = "拒绝结项";
                  break;
                default:
                  break;
              }
            }
            if (self.pj_detail.approval_feedback != null) {
              self.last_feedback = self.pj_detail.approval_feedback;
            }
            if (self.pj_detail.approval_warn != null) {
              self.last_warn = self.pj_detail.approval_warn;
            }
            if (self.pj_detail.approval_done != null) {
              self.last_done = self.pj_detail.approval_done;
            }
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    //附件读取后操作
    afterRead: function() {
      var self = this;
      //显示遮罩层 
      var file = this.file_list.slice(-1)[0];
      //单个附件上传
      var approvalInfoId = this.pj_detail.id;
      let formData = new FormData();
      formData.append("method", "attachUpload");
      formData.append("dingUserId", global_variable.roleJs.dingUserId);
      formData.append("approvalInfoId", approvalInfoId);
      formData.append("attach", file.file);
      console.log(formData.get("attach"));
      console.log(formData.get("method"));
      var config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: function(e) {
          console.log("进度：");
          console.log(e);
          //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
          //如果lengthComputable为false，就获取不到e.total和e.loaded
          if (e.lengthComputable) {
            var rate = (self.uploadRate = e.loaded / e.total); //已上传的比例
            if (rate < 1) {
              //这里的进度只能表明文件已经上传到后台，但是后台有没有处理完还不知道
              //因此不能直接显示为100%，不然用户会误以为已经上传完毕，关掉浏览器的话就可能导致上传失败
              //等响应回来时，再将进度设为100%
              self.uploadRate = rate;
              self.uploadStyle.width = (rate * 100).toFixed(0) + "%";
              self.$store.commit("showLoadingBigText", self.uploadStyle.width);
            }
          }
        }
      };
      this.instance
        .post(
          httpMethod.returnBaseUrlFun() +
            "dingTalkController.action?fileUpload",
          formData,
          config
        )
        .then(res => {
          console.log(res);
          //遮罩层 
          self.$store.commit("hideLoadingBig");
          if (res.data.success == "1") {
            var file_upl = res.data.data;
            file_upl.name = file.file.name;
            self.upload_file_list.push(file_upl);
          } else {
            this.$toast("上传失败");
          }
        });
      // httpMethod
      //   .fileUpload(formData)
      //   .then(res => {
      //     console.log(res);
      //     if (res.success == "1") {
      //     }
      //   })
      //   .catch(err => {
      //     this.$toast(err);
      //   });
    },
    //删除上传附件
    delete_adjunct: function(index, attachId) {
      let self = this;
      let approvalInfoId = self.pj_obj.id;
      var params = {
        method: "attachDel",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: this.seach_value, //机构id
        approvalInfoId: approvalInfoId, //批件id
        attachId: attachId
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(params);
          console.log(res);
          if (res.success == "1") {
            self.file_list.splice(index, 1);
            self.upload_file_list.splice(index, 1);
            console.log("删除成功");
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    //预览
    preview_adjunct: function(item) {
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
    submit_fk: function() {
      let self = this;
      let approvalInfoId = self.pj_obj.id;
      let feedbackContent = self.fk_content;
      if (feedbackContent.replace(/\s*/g, "") == "") {
        this.$toast("请填写反馈内容");
        return false;
      }
      let attachIds = "";
      if (self.upload_file_list.length > 0) {
        self.upload_file_list.forEach(e => {
          attachIds = attachIds + e.attachid + ",";
        });
      }
      self.$store.commit("showLoadingBigText", "反馈提交中");
      var params = {
        method: "approvalFeedback",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: global_variable.corpId, //机构id
        approvalInfoId: approvalInfoId, //批件id
        feedbackContent: feedbackContent,
        attachIds: attachIds
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(params);
          console.log(res);
          self.$store.commit("hideLoadingBig");
          if (res.success == "1") {
            self.fk_content = "";
            self.getdata();
            this.$toast("反馈成功");
            self.fk_div = false;
            var hrefUrl = window.location.href;
            var indexUrl = hrefUrl.replace("#", "");
            var url = decodeURI(hrefUrl);
            var detail = url.getValue("type");
            if (detail == "1") {
              var id = url.getValue("id");
              if (id != null && id != "") {
                //推送页面  跳转 退出应用
                dd.ready(function() {
                  dd.biz.navigation.close();
                });
              } else {
                this.$router.go(-1);
              }
            } else {
              //退页
              this.$router.go(-1);
            }
          }
        })
        .catch(err => {
          self.$store.commit("hideLoadingBig");
          this.$toast(err);
        });
    },
    formatter(fk_content) {
      //去空格   特殊字符
      let str = fk_content.replace(/\s*/g, "");
      var pattern = new RegExp(
        "[`~@#$^&*=|{}''\\[\\]<>/~@%#￥……&*——|{}【】‘”“'\"]"
      );
      var rs = "";
      for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, "");
      }
      //去掉 emoji
      var rs = rs.replace(
        /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,
        ""
      );
      this.fk_content = rs;
      return str;
    }
  }
};
</script>

<style>
</style>