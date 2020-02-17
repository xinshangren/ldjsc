<template>
  <div style="
    margin-top:0px;overflow:hidden;
">
    <div
      style="background: rgb(255, 255, 255);height: 100px;margin-left: 10px;margin-right: 10px;border-radius: 6px;box-shadow: 0px 1px 8px 3px #f3f3f3;margin-top: 7px;"
    >
      <div style="display:flex;padding-top:5px;">
        <div style="width:51%;text-align:right;font-size:14px;">{{wgName}}</div>

        <img
          @click="showSelectArea"
          style="height: 18px;margin-top: 2px;"
          src="../../../../../assets/img/icon_filtrate.png"
        />
      </div>
      <div class="ui-row-flex ui-whitespace" style="margin-top:13px;">
        <div class="ui-col ui-col" @click="changeList(1)">
          <div style="height:2px;width:76%;background:#2796e7;margin:0 auto;"></div>
          <div :style="flag==1?'border-top:1px solid #2796e7;border-left:1px solid #2796e7;border-right:1px solid #2796e7;border-radius:5px 5px 0 0;':''" style="display:flex;margin-top:8px;font-size:14px; ">
            <div style="width:35%;text-align:right;">
              <img
                style="height: 17px;margin-top: 3px;"
                src="../../../../../assets/img/pollution_data_icon1.png"
              />
            </div>
            <div style="width:60%;color: #666666;font-size: 14px;">网格长</div>
          </div>
          <div :style="flag==1?'border-bottom:1px solid #2796e7;border-left:1px solid #2796e7;border-right:1px solid #2796e7;border-radius:0 0 5px 5px;':''" style="display:flex;line-height:20px;">
            <div style="color:#2796e7;font-size:17px;width:100%;text-align:center;">{{leaderCount}}<span style="font-size:13px;color:black">名</span></div>
          </div>
        </div>
        <div class="ui-col ui-col" @click="changeList(2)">
          <div style="height:2px;width:76%;background:#13dbe8;margin:0 auto;"></div>
          <div :style="flag==2?'border-top:1px solid #13dbe8;border-left:1px solid #13dbe8;border-right:1px solid #13dbe8;border-radius:5px 5px 0 0;':''" style="display:flex;margin-top:8px;font-size:14px;">
            <div style="width:35%;text-align:right;">
              <img
                style="height: 17px;margin-top: 3px;"
                src="../../../../../assets/img/pollution_data_icon2.png"
              />
            </div>
            <div style="width:60%;color: #666666;font-size: 14px;">网格员</div>
          </div>
          <div :style="flag==2?'border-bottom:1px solid #13dbe8;border-left:1px solid #13dbe8;border-right:1px solid #13dbe8;border-radius:0 0 5px 5px;':''" style="display:flex;line-height:20px;">
            <div style="color:#13dbe8;font-size:17px;width:100%;text-align:center;">{{personCount}}<span style="font-size:13px;color:black">名</span></div>
          </div>
        </div>
        <div class="ui-col ui-col">
          <div style="height:2px;width:76%;background:#fab01b;margin:0 auto;"></div>
          <div style="display:flex;margin-top:8px;font-size:14px;">
            <div style="width:35%;text-align:right;">
              <img
                style="height: 17px;margin-top: 3px;"
                src="../../../../../assets/img/pollution_data_icon3.png"
              />
            </div>
            <div style="width:60%;color: #666666;font-size: 14px;">网格</div>
          </div>
          <div style="display:flex;line-height:20px;">
            <div style="color:#fab01b;font-size:17px;width:100%;text-align:center;">{{gridCount}}<span style="font-size:13px;color:black">个</span></div>
          </div>
        </div>
        <div class="ui-col ui-col">
          <div style="height:2px;width:76%;background:#fc621f;margin:0 auto;"></div>
          <div style="display:flex;margin-top:8px;font-size:14px;">
            <div style="width:35%;text-align:right;">
              <img
                style="height: 17px;margin-top: 3px;"
                src="../../../../../assets/img/pollution_data_icon4.png"
              />
            </div>
            <div style="width:60%;color: #666666;font-size: 14px;">污染源</div>
          </div>
          <div style="display:flex;line-height:20px;">
            <div style="color:#fc621f;font-size:17px;width:100%;text-align:center;">{{sourceCount}}<span style="font-size:13px;color:black">家</span></div>
          </div>
        </div>
      </div>
    </div>
    <div id="wgingoId"
      style="overflow-y: auto;background:#ffffff;margin-left: 10px;margin-right: 10px;border-radius: 0px;box-shadow: 0px 1px 8px 3px #f3f3f3;margin-top: 7px;"
    >
      <div v-show="flag==1">
        <div v-for="(item,index) in leaderList" :key="index" style="margin-bottom: 0px;">
          <div
            style="background: rgb(8, 141, 237);border-radius: 3px 0px 10px;width: 52px;text-align: center;font-size: 14px;color: #ffffff;padding: 2px;"
          >网格长</div>

          <div style="display:flex;margin-top:10px;">
            <img
              style="margin-left:20px; height: 17px;margin-top: 3px;"
              src="../../../../../assets/img/project_list_icon3.png"
            />
            <div style="margin-left:5px; color: #666666;font-size: 14px;">姓名:</div>
            <div style="margin-left:5px; color: #666666;font-size: 14px;">{{item.gridlender}}</div>
          </div>

          <div style="display:flex;">
            <div style="display:flex;margin-top:10px;width:100%;">
              <img
                style="margin-left:20px; height: 17px;margin-top: 3px;"
                src="../../../../../assets/img/reseau_detail_icon2.png"
              />
              <div style="margin-left:5px; color: #666666;font-size: 14px;">职务:</div>
              <div style="margin-left:5px; color: #666666;font-size: 14px;">{{item.duties}}</div>
            </div>
          </div>
          <div style="width: 100%;height: 2px;background: #f3f3f3;margin-top: 10px;"></div>
        </div>

        <div v-if="leaderList==null || leaderList.length==0" style="text-align:center">
           <img style="height:118px;" src="../../../../../assets/img/no_data.png" />
        </div>
      </div>

      <div v-show="flag==2">
        <div v-for="(item,index) in personList" :key="index" style="margin-bottom: 0px;">
          <div
            style="background:#13dbe8;border-radius: 3px 0px 10px;width: 52px;text-align: center;font-size: 14px;color: #ffffff;padding: 2px;"
          >网格员</div>

          <div style="display:flex;margin-top:10px;">
            <img
              style="margin-left:20px; height: 17px;margin-top: 3px;"
              src="../../../../../assets/img/project_list_icon3.png"
            />
            <div style="margin-left:5px; color: #666666;font-size: 14px;">姓名:</div>
            <div style="margin-left:5px; color: #666666;font-size: 14px;">{{item.gridname}}</div>
          </div>

          <div style="display:flex;">
            <div style="display:flex;margin-top:10px;width:100%;">
              <img
                style="margin-left:20px; height: 17px;margin-top: 3px;"
                src="../../../../../assets/img/reseau_list_icon4.png"
              />
              <div style="margin-left:5px; color: #666666;font-size: 14px;">联系电话:</div>
              <div style="margin-left:5px; color: #666666;font-size: 14px;">{{item.tell}}</div>
            </div>
          </div>
          <div style="width: 100%;height: 2px;background: #f3f3f3;margin-top: 10px;"></div>
        </div>
        <div v-if="personList==null || personList.length==0" style="text-align:center">
           <img style="height:118px;" src="../../../../../assets/img/no_data.png" />
        </div>
      </div>
    </div>
    <div
      id="wgsx_show_div_select_id1"
      class="top_menu_wgsx_div"
      style="display:none;left: 0px;bottom:0px;width: 100%;font-size:14px"
    >
      <img
        id="close_wgsx_show_div_select_id1"
        src="../../../../../assets/img/popup-x.png"
        style="height: 32px;position: absolute;right: 2px;top: -10px;"
      />
      <div style="width: 30%;text-align: center;">
        <ul id="top_wgsx_ul1_list" style="height: 100%;overflow: auto;"></ul>
      </div>
      <div id="top_wgsx_ul2_list1_div" style="width:40%;text-align: center;">
        <ul id="top_wgsx_ul2_list" style="height: 100%;background:#F9F9F9;overflow: auto;"></ul>
      </div>
      <div id="top_wgsx_ul3_list1_div" style="width:40%;text-align: center;">
        <ul
          id="top_wgsx_ul3_list"
          style="padding-top:1px;height: 100%;background:#F0F0F0;overflow: auto;"
        ></ul>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wgperson/hbgj_wgjg_wgperson.js";
import Vue from "vue";
import { Search, PullRefresh, Popup, Dialog } from "vant";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup)
  .use(Dialog);
export default {
  name: "hbgj_wgjg_wrylist",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f7f7f7");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#f7f7f7");
  },
  data() {
    return {
      wgjg_left_area_codes: 0, //选择左侧圆圈地域
      list: [],
      gridCount: 0, //网格数量
      leaderCount: 0, //网格长
      personCount: 0, //网格源
      sourceCount: 0, //污染源
      wgName: "城区",
      personList: [],
      leaderList: [],
      flag: 1
    };
  },
  mounted() {
    this.getGridInfoListFuns("1", "");
    this.getGridSpecificList("140502", this.wgName);
    $("#close_wgsx_show_div_select_id1").click(function(e) {
      $("#wgsx_show_div_select_id1").hide();
      $('body').css('overflow','auto')

      var s = window.innerHeight - $("#wgingoId").offset().top;
      $("#wgingoId").css("height", s);
    });
  },
  methods: {
    changeList: function(index) {
      console.log(index);
      this.flag = index;
    },
    showSelectArea: function() {
      $("#wgsx_show_div_select_id1").show();
      $('body').css('overflow','hidden')
    },
    //获取网格列表
    //获取网格列表
    getGridInfoListFuns: function(flag, gridCode) {
      var self = this;
      var params = {
        gridCode: gridCode
      };
      httpMethod
        .getGridInfoList(params)
        .then(res => {
          console.log(res);
          var vv = "";

          $("#top_wgsx_ul1_list").each(function(){
            $.each(this.attributes,function(){
              if(this.name.indexOf("data-v")>=0){
                vv = this.name;
                return;
              }
            });
          })

          if (res.success == "1") {
            var wgjg_left_area_code = this.wgjg_left_area_codes;
            var result = res.gridList;
            if (flag == "1") {
              $("#top_wgsx_ul1_list").html("");
              $("#top_wgsx_ul2_list").html("");
              $("#top_wgsx_ul3_list").html("");
              var html = "";
              if (wgjg_left_area_code < 2) {
                html +=
                  "<li id='555555' "+vv+" class='top_wgsx_li1_noselect'>全部</li>";
              } else {
                //							html += "<li id='555555' class='top_wgsx_li1_noselect'>全部</li>";
              }
              var chengquCode = 0;
              for (var i = 0; i < result.length; i++) {
                var name = result[i].name;
                var code = result[i].code;
                switch (wgjg_left_area_code) {
                  case 2:
                    if (name == "城区") {
                      this.getGridInfoListFuns("2", code);
                      html +=
                        "<li id='" +
                        code +
                        "' "+vv+" class='top_wgsx_li1_select'>" +
                        name +
                        "</li>";
                    }
                    break;
                  case 3:
                    if (name == "泽州县") {
                      this.getGridInfoListFuns("2", code);
                      html +=
                        "<li id='" +
                        code +
                        "' "+vv+" class='top_wgsx_li1_select'>" +
                        name +
                        "</li>";
                    }
                    break;
                  case 4:
                    if (name == "高平市") {
                      this.getGridInfoListFuns("2", code);
                      html +=
                        "<li id='" +
                        code +
                        "' "+vv+" class='top_wgsx_li1_select'>" +
                        name +
                        "</li>";
                    }
                    break;
                  case 5:
                    if (name == "阳城县") {
                      this.getGridInfoListFuns("2", code);
                      html +=
                        "<li id='" +
                        code +
                        "' "+vv+" class='top_wgsx_li1_select'>" +
                        name +
                        "</li>";
                    }
                    break;
                  case 6:
                    if (name == "陵川县") {
                      this.getGridInfoListFuns("2", code);
                      html +=
                        "<li id='" +
                        code +
                        "' "+vv+" class='top_wgsx_li1_select'>" +
                        name +
                        "</li>";
                    }
                    break;
                  case 7:
                    if (name == "沁水县") {
                      this.getGridInfoListFuns("2", code);
                      html +=
                        "<li id='" +
                        code +
                        "' "+vv+" class='top_wgsx_li1_select'>" +
                        name +
                        "</li>";
                    }
                    break;
                  default:
                    if (wgjg_left_area_code < 2) {
                      if (name == "城区") {
                        this.getGridInfoListFuns("2", code);
                        html +=
                          "<li id='" +
                          code +
                          "' "+vv+" class='top_wgsx_li1_select'>" +
                          name +
                          "</li>";
                      } else {
                        html +=
                          "<li id='" +
                          code +
                          "' "+vv+" class='top_wgsx_li1_noselect'>" +
                          name +
                          "</li>";
                      }
                    } else {
                      html +=
                        "<li id='" +
                        code +
                        "' "+vv+" class='top_wgsx_li1_noselect'>" +
                        name +
                        "</li>";
                    }
                }
              }
              $("#top_wgsx_ul1_list").html(html);
              $("#top_wgsx_ul1_list li").off("click");
              //网格筛选区县点击事件
              $("#top_wgsx_ul1_list li").click(function() {
                $(this).removeClass("top_wgsx_li1_noselect");
                $(this).addClass("top_wgsx_li1_select");
                $(this)
                  .siblings("li")
                  .removeClass("top_wgsx_li1_select");
                $(this)
                  .siblings("li")
                  .addClass("top_wgsx_li1_noselect");
                var code = $(this).attr("id");
                var name = $(this).html();
                self.getGridInfoListFuns("2", code);
                // self.getGridSpecificList(code, name);
                self.wgName = name;

                switch (self.wgType) {
                  case 1:
                    $("#oneTimeDivId").html(name);
                    self.echars_gridCode2 = code;
                    self.lineGridRecord();
                    self.barGridRecord();
                    break;
                  case 2:
                    $("#twoTimeDivId").html(name);
                    self.echars_gridCode3 = code;
                    self.lineTask();
                    self.barTask();
                    break;
                  default:
                    break;
                }
              });
            } else if (flag == "2") {
              $("#top_wgsx_ul2_list").html("");
              $("#top_wgsx_ul3_list").html("");
              var html = "";
              for (var i = 0; i < result.length; i++) {
                var name = result[i].name;
                var code = result[i].code;
                if (i == 0) {
                  if (wgjg_left_area_code < 2) {
                    self.getGridInfoListFuns("3", code);
                    html +=
                      "<li id='" +
                      code +
                      "' "+vv+" class='top_wgsx_li2_select'>" +
                      name +
                      "</li>";
                  } else {
                    html +=
                      "<li id='" +
                      code +
                      "' "+vv+" class='top_wgsx_li2_noselect'>" +
                      name +
                      "</li>";
                  }
                } else {
                  html +=
                    "<li id='" +
                    code +
                    "' "+vv+" class='top_wgsx_li2_noselect'>" +
                    name +
                    "</li>";
                }
              }
              console.log($("#top_wgsx_ul2_list"));
              $("#top_wgsx_ul2_list").html(html);
              $("#top_wgsx_ul2_list li").off("click");
              //网格筛选街道点击事件
              $("#top_wgsx_ul2_list li").click(function() {
                $(this).removeClass("top_wgsx_li2_noselect");
                $(this).addClass("top_wgsx_li2_select");
                $(this)
                  .siblings("li")
                  .removeClass("top_wgsx_li2_select");
                $(this)
                  .siblings("li")
                  .addClass("top_wgsx_li2_noselect");
                var code = $(this).attr("id");
                var name = $(this).html();
                self.getGridInfoListFuns("3", code);
                // self.getGridSpecificList(code, name);
                self.wgName = name;
                switch (self.wgType) {
                  case 1:
                    $("#oneTimeDivId").html(name);
                    self.echars_gridCode2 = code;
                    self.lineGridRecord();
                    self.barGridRecord();
                    break;
                  case 2:
                    $("#twoTimeDivId").html(name);
                    self.echars_gridCode3 = code;
                    self.lineTask();
                    self.barTask();
                    break;
                  default:
                    break;
                }
              });
            } else if (flag == "3") {
              $("#top_wgsx_ul3_list").html("");
              var html = "";
              for (var i = 0; i < result.length; i++) {
                var name = result[i].name;
                var code = result[i].code;
                if (i == 0) {
                  html +=
                    "<li id='" +
                    code +
                    "' "+vv+" class='top_wgsx_li3_noselect'>" +
                    name +
                    "</li>";
                } else {
                  html +=
                    "<li id='" +
                    code +
                    "' "+vv+" class='top_wgsx_li3_noselect'>" +
                    name +
                    "</li>";
                }
              }
              $("#top_wgsx_ul3_list").html(html);
              $("#top_wgsx_ul3_list li").off("click");
              //网格筛选办事处点击事件
              $("#top_wgsx_ul3_list li").click(function() {
                $(this).removeClass("top_wgsx_li3_noselect");
                $(this).addClass("top_wgsx_li3_select");
                $(this)
                  .siblings("li")
                  .removeClass("top_wgsx_li3_select");
                $(this)
                  .siblings("li")
                  .addClass("top_wgsx_li3_noselect");
                var code = $(this).attr("id");
                var name = $(this).html();
                // self.getGridSpecificList(code, name);
                self.wgName = name;
                switch (self.wgType) {
                  case 1:
                    $("#oneTimeDivId").html(name);
                    self.echars_gridCode2 = code;
                    self.lineGridRecord();
                    self.barGridRecord();
                    break;
                  case 2:
                    $("#twoTimeDivId").html(name);
                    self.echars_gridCode3 = code;
                    self.lineTask();
                    self.barTask();
                    break;
                  default:
                    break;
                }
              });
            }
          }
        })
        .catch(err => {});
    },
    //获取网格信息
    getGridSpecificList: function(gridCode, name) {
      var params = {
        gridCode: gridCode
      };
      httpMethod
        .getGridSpecificList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var result = res.gridList;
            this.gridCount = res.gridCount;
            this.leaderCount = res.leaderCount;
            this.personCount = res.personCount;
            this.sourceCount = res.sourceCount;
            this.leaderList = res.leaderList;
            this.personList = res.personList;
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
@import "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wgperson/hbgj_wgjg_wgperson.css";
@import "../../../../../assets/css/frozenui.css";
</style>
