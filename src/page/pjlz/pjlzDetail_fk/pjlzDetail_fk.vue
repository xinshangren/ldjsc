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
  <div style="margin-top:54px;background:#f7f7f7">
    <div style="margin:101px 0px 10px;background:#ffffff;min-height: 385px;">
      <div style="display: flex;padding-top: 10px;">
        <img src="../../../assets/img/no_overdue.png" style="height:38px" />
        <div
          style="font-weight: 600;width: 65%; font-size: 16px; white-space: nowrap; overflow: hidden;padding:7px 0px 7px 7px;text-overflow: ellipsis;"
        >就初步确定的2020年10件为民下次再下发按察使发达啊实打实</div>
        <div
          style="font-size: 15px;border:1px solid #2599e6 ;border-radius: 5px;color:#2599e6;height: 20px;
                width: 55px;
                text-align: center;
                margin-top: 7px"
        >办理中</div>
      </div>
      <div style="color: #666666;font-size: 16px;width: 94%;">
        <div style="display: flex;margin-top: 10px;">
          <div style="width: 30%;text-align: right;">事项类型：</div>
          <div>部门区县落实件-多部门</div>
        </div>
        <div style="display: flex;margin-top: 15px;">
          <div style="width: 30%;text-align: right;">承办人：</div>
          <div>
            <div>部门区县落实件-多部门</div>
            <div style="margin-top: 5px;">部门区县落实件-多部门</div>
            <div style="margin-top: 5px;">部门区县落实件-多部门</div>
          </div>
        </div>
        <div style="display: flex;margin-top: 15px;">
          <div style="width: 30%;text-align: right;">事项内容：</div>
          <div style="border:1px solid #666666 ;border-radius: 5px;width: 70%;">
            <div
              style="font-size: 15px;
                        line-height: 23px;
                        margin: 5px;"
            >部门区县落实件-多部门部门区县落实件-多部门部门区县落实件-多部门部门区县落实件-多部门部门区县落实件-多部门部门区县落实件-多部门</div>
          </div>
        </div>
        <div style="display: flex;margin-top: 15px;">
          <div style="width: 30%;text-align: right;">附件：</div>
          <div style="display: flex;width: 70%;color:#2599e6;font-size: 15px;">
            <div style="display: flex;margin-left: 10px;">
              <div>附件一.png</div>
              <img
                style="height: 22px;margin-left: 8px;"
                src="../../../assets/img/icon_download.png"
              />
            </div>
            <div style="display: flex;margin-left: 10px;">
              <div>附件二.TXT</div>
              <img
                style="height: 22px;margin-left: 8px;"
                src="../../../assets/img/icon_download.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="jl_content" style="margin:10px 0px 10px;background:#ffffff;">
      <div id="all_jl" style="height:350px;padding-top: 15px;">
        <div id="fkjl" style="padding:0px 15px 0px 15px;position: relative;">
          <div style="display: flex;font-size: 16px;">
            <div style="width: 80%;display: flex;">
              <div>反馈记录</div>
              <div
                style="background: #f22e16;width: 20px;
                        height: 16px;
                        margin: 3px;border-radius: 15px;color: #ffffff;text-align: center;font-size: 13px;"
              >99</div>
            </div>
            <div
              @click="gofkjl_list"
              style="width: 30%;display: flex;color: #2599e6;text-align: right;"
            >
              <img style="height: 22px;" src="../../../assets/img/icon_record_more.png" />
              <div>更多记录</div>
            </div>
          </div>
          <div style="display: flex;font-size: 15px;margin-top: 13px;">
            <div style="width: 80%;">我局领导已经安排相关科室办理中</div>
          </div>
          <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
            <div style="display: flex;">
              <img style="height: 18px;" src="../../../assets/img/icon_people.png" />
              <div style="margin-left: 2px;">反馈人:</div>
              <div style="margin-left: 2px;">张三</div>
            </div>
            <div style="display: flex;padding-left:10px;">
              <img style="height: 18px;" src="../../../assets/img/icon_time.png" />
              <div style="margin-left: 2px;">反馈时间:</div>
              <div style="margin-left: 2px;">2020-01-01 22:22</div>
            </div>
          </div>
          <img
            @click="gofkjl_list_detail"
            style="right: 15px; top: 43px;; width: 30px;position: absolute;"
            src="../../../assets/img/icon_more.png"
          />
          <van-divider />
        </div>
        <div id="cbjl" style="padding:0px 15px;position: relative;">
          <div style="display: flex;font-size: 16px;">
            <div style="width: 80%;display: flex;">
              <div>催办记录</div>
              <div
                style="background: #f22e16;width: 20px;
                        height: 16px;
                        margin: 3px;border-radius: 15px;color: #ffffff;text-align: center;font-size: 13px;"
              >99</div>
            </div>
            <div style="width: 30%;display: flex;color: #2599e6;text-align: right;">
              <img style="height: 22px;" src="../../../assets/img/icon_record_more.png" />
              <div>更多记录</div>
            </div>
          </div>
          <div style="display: flex;font-size: 15px;margin-top: 13px;">
            <div style>我局领导已经安排相关科室办理中</div>
            <img style="height: 20px;margin-left: 5px;" src="../../../assets/img/icon_way2.png" />
          </div>
          <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
            <div style="display: flex;">
              <img style="height: 18px;" src="../../../assets/img/icon_people.png" />
              <div style="margin-left: 2px;">催办人:</div>
              <div style="margin-left: 2px;">张三</div>
            </div>
            <div style="display: flex;padding-left:10px;">
              <img style="height: 18px;" src="../../../assets/img/icon_time.png" />
              <div style="margin-left: 2px;">催办时间:</div>
              <div style="margin-left: 2px;">2020-01-01 22:22</div>
            </div>
          </div>
          <img
            style="right: 15px; top: 43px;; width: 30px;position: absolute;"
            src="../../../assets/img/icon_more.png"
          />
          <van-divider />
        </div>
        <div id="jxjl" style="padding:0px 15px;position: relative;">
          <div style="display: flex;font-size: 16px;">
            <div style="width: 80%;display: flex;">
              <div>申请结项记录</div>
              <div
                style="background: #f22e16;width: 20px;
                        height: 16px;
                        margin: 3px;border-radius: 15px;color: #ffffff;text-align: center;font-size: 13px;"
              >99</div>
            </div>
            <div style="width: 30%;display: flex;color: #2599e6;text-align: right;">
              <img style="height: 22px;" src="../../../assets/img/icon_record_more.png" />
              <div>更多记录</div>
            </div>
          </div>
          <div style="display: flex;font-size: 15px;margin-top: 13px;">
            <div style>我局领导已经安排相关科室办理中</div>
            <img style="height: 20px;margin-left: 5px;" src="../../../assets/img/icon_edit.png" />
            <div style="color:#2599e6 ;margin-left: 3px;">编辑</div>
          </div>
          <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
            <div style="display: flex;">
              <img style="height: 18px;" src="../../../assets/img/icon_people.png" />
              <div style="margin-left: 2px;">申请人:</div>
              <div style="margin-left: 2px;">张三</div>
            </div>
            <div style="display: flex;padding-left:10px;">
              <img style="height: 18px;" src="../../../assets/img/icon_time.png" />
              <div style="margin-left: 2px;">申请时间:</div>
              <div style="margin-left: 2px;">2020-01-01 22:22</div>
            </div>
          </div>
          <img
            style="right: 15px; top: 43px;; width: 30px;position: absolute;"
            src="../../../assets/img/icon_more.png"
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
    <div style="margin:10px 0px 0px 0px;background:#ffffff;min-height: 230px;">
      <div style="padding:10px 15px 10px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 13px">工作反馈</div>
        <div
          style="display: flex;font-size: 14px;margin-top: 15px;border: 1px solid #9f9f9f;border-radius: 4px;"
        >
          <div style="margin:10px ;">被催办内容被催办内容被催办内容被催办内容被催办内容被催办内容被催办内容被催办内容被催办内容</div>
        </div>
        <van-uploader v-model="file_list" :after-read="afterRead" :preview-image="false" accept="*">
          <div style="display: flex;font-size: 15px;margin-top: 15px;color:#2599e6">
            <img style="height: 18px;" src="../../../assets/img/icon_accessory.png" />
            <div style="margin-left: 5px;">添加附件</div>
          </div>
        </van-uploader>
        <div
          v-for="(item,index) of file_list"
          style="display: flex;font-size: 14px;color:#2599e6 ;"
        >
          <div @click="preview_adjunct(item)">{{item.file.name}}</div>
          <img
            @click="delete_adjunct(index)"
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
          <div style="margin: auto;margin-top: 6px;margin-bottom: 6px; color: #ffffff;font-size: 18px;">提交</div>
        </div>
      </div>
    </div>
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
Vue.use(ImagePreview);
Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzDetail_cb",
  data() {
    return {
      overdue: true,
      all_jl_flag: true,
      all_jl_photo: require("../../../assets/img/hide.png"),
      all_jl_word: "收起记录",
      file_list: []
    };
  },
  mounted() {},
  methods: {
    gofkjl_list: function() {
      this.$router.push({
        path: "/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl",
        name: "pjlz_fkjl"
      });
    },
    gofkjl_list_detail: function() {
      this.$router.push({
        path: "/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail",
        name: "pjlz_fkjl_detail"
      });
    },
    show_jl: function() {
      var self = this;
      if (self.all_jl_flag) {
        $("#all_jl").slideUp("slow");
        self.all_jl_flag = false;
        self.all_jl_word = "展开记录";
        self.all_jl_photo = require("../../../assets/img/show.png");
      } else {
        self.all_jl_flag = true;
        self.all_jl_word = "收起记录";
        self.all_jl_photo = require("../../../assets/img/hide.png");
        $("#all_jl").slideDown("slow");
      }
    },
    //附件读取后操作
    afterRead: function() {
      console.log(this.file_list);
    },
    //删除上传附件
    delete_adjunct: function(index) {
      this.file_list.splice(index, 1);
    },
    //预览
    preview_adjunct: function(item) {}
  }
};
</script>

<style>
</style>