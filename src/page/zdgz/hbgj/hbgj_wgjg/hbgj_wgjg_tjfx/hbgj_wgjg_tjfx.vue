<template>
  <div style="
    overflow: auto;
">
    <div
      style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">晋城市发现问题数排行</div>
        <div @click="showSelectTime(1)" style="display:flex;margin-left:17px;">
          <div style="color:#3097fb;font-size:14px;line-height:22px;">{{currentYear1}}</div>
          <img
            style="height: 11px;margin-top: 6px;margin-left: 5px;"
            src="../../../../../assets/img/air_data_arrow.png"
          />
        </div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div ref="myCharts1" style="height:210px;width:100%;"></div>
    </div>

    <div
      style="background:#ffffff;height:540px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">日常巡查情况</div>
        <div @click="showSelectArea(1)" style="display:flex;margin-left:17px;">
          <div id="oneTimeDivId" style="color:#3097fb;font-size:14px;line-height:22px;">选择网格</div>
          <img
            style="height: 11px;margin-top: 6px;margin-left: 5px;"
            src="../../../../../assets/img/air_data_arrow.png"
          />
        </div>

         <div
        @click="showSelectTime(2)"
        style="display: flex;width: 80px;border-radius: 10px;background: #f3f3f3;margin: 0 auto;"
      >
        <div
          style="color: rgb(48, 151, 251);font-size: 14px;line-height: 22px;text-align: right;width: 50%;margin-left:10px"
        >{{currentYear2}}</div>
          <img
            style="height: 11px;margin-top: 6px;margin-left: 5px;"
            src="../../../../../assets/img/air_data_arrow.png"
          />
      </div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
     
      <div ref="myCharts2" style="height:210px;width:100%;"></div>
      <div style="display:flex;margin: 0 auto;">
        <div style="width:50%;">
          <div
            @click="showSelectTime(3)"
            style="display: flex;width: 100px;border-radius: 10px;background: #f3f3f3;margin:0 84px;"
          >
            <div
              style="color: rgb(48, 151, 251);font-size: 14px;line-height: 22px;text-align: center;width: 70%;"
            >{{currentYear3}}</div>
              <img
                style="height: 11px;margin-top: 6px;margin-left: 0px;"
                src="../../../../../assets/img/air_data_arrow.png"
              />
          </div>
        </div>
        <div id="echar1typeId" class="chars_title_select">
          <div class="chars_div_time_select" style="text-align: center;width: 43px;">年</div>
          <div class="chars_div_time_noselect" style="text-align: center;width: 43px;">月</div>
        </div>
      </div>

      <div ref="myCharts3" style="height:210px;width:100%;"></div>
    </div>

    <div
      style="background:#ffffff;height:540px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">任务监管情况</div>
        <div @click="showSelectArea(2)" style="display:flex;margin-left:17px;">
          <div id="twoTimeDivId" style="color:#3097fb;font-size:14px;line-height:22px;">选择网格</div>
          <img
            style="height: 11px;margin-top: 6px;margin-left: 5px;"
            src="../../../../../assets/img/air_data_arrow.png"
          />
        </div>
        <div
        @click="showSelectTime(4)"
        style="display: flex;width: 80px;border-radius: 10px;background: #f3f3f3;margin: 0 auto;"
      >
        <div
          style="color: rgb(48, 151, 251);font-size: 14px;line-height: 22px;text-align: right;width: 50%;margin-left:10px"
        >{{currentYear4}}</div>
          <img
            style="height: 11px;margin-top: 6px;margin-left: 5px;"
            src="../../../../../assets/img/air_data_arrow.png"
          />
      </div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      
      <div ref="myCharts4" style="height:210px;width:100%;"></div>
      <div style="display:flex;margin: 0 auto;">
        <div style="width:50%;">
          <div
            @click="showSelectTime(5)"
            style="display: flex;width: 100px;border-radius: 10px;background: #f3f3f3;margin:0 84px;"
          >
            <div
              style="color: rgb(48, 151, 251);font-size: 14px;line-height: 22px;text-align: center;width: 70%;"
            >{{currentYear5}}</div>
              <img
                style="height: 11px;margin-top: 6px;margin-left:0px;"
                src="../../../../../assets/img/air_data_arrow.png"
              />
          </div>
        </div>
        <div id="echar2typeId" class="chars_title_select">
          <div class="chars_div_time_select" style="text-align: center;width: 43px;">年</div>
          <div class="chars_div_time_noselect" style="text-align: center;width: 43px;">月</div>
        </div>
      </div>

      <div  ref="myCharts5" style="height:210px;width:100%;"></div>

      <div ref="myCharts5_nodata" style="text-align: center;margin-right:12px;margin-top:20px;">
        <img style="height:118px;" src="../../../../../assets/img/no_data.png" />
      </div>
    </div>

    <div
      id="wgsx_show_div_select_id1"
      class="top_menu_wgsx_div"
      style="display:none;left: 0px;top: 179px;width: 100%;font-size:18px"
    >
      <img
        id="close_wgsx_show_div_select_id1"
        src="../../../../../assets/img/popup-x.png"
        style="height: 32px;position: absolute;right: 2px;top: -10px;"
      />
      <div style="width: 30%;text-align: center;">
        <ul id="top_wgsx_ul1_list" style="height: 100%;overflow: auto;"></ul>
      </div>
      <div id="top_wgsx_ul2_list1_div" style="width:30%;text-align: center;">
        <ul id="top_wgsx_ul2_list" style="height: 100%;background:#F9F9F9;overflow: auto;"></ul>
      </div>
      <div id="top_wgsx_ul3_list1_div" style="width:60%;text-align: center;">
        <ul
          id="top_wgsx_ul3_list"
          style="padding-top:1px;height: 100%;background:#F0F0F0;overflow: auto;"
        ></ul>
      </div>
    </div>

    <van-popup
      v-model="showYear"
      @opened="openPopYear"
      position="bottom"
      :style="{ height: '200px' }"
    >
      <van-datetime-picker
        v-model="currentYear"
        type="year-month"
        style="height: 200px;"
        @confirm="onconfirmYear"
        :formatter="formatterYear"
      />
    </van-popup>
    <van-popup v-model="showYearMonth" position="bottom" :style="{ height: '200px' }">
      <van-datetime-picker
        v-model="currentYearMonth"
        type="year-month"
        style="height: 200px;"
        @confirm="onconfirmYearMonth"
      />
    </van-popup>
  </div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_tjfx/hbgj_wgjg_tjfx.js";
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
Vue.use(DatetimePicker).use(Popup);
export default {
  name: "hbgj_wgjg_tjfx",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
      wgjg_left_area_codes: 0, //选择左侧圆圈地域
      active: 0,
      gkcode: "555555",
      showYear: false, //年显示
      showYearMonth: false, //年月显示
      currentYearMonth: new Date(),
      currentYear: new Date(),
      currentYear1: new Date().getFullYear(),
      currentYear2: new Date().getFullYear(),
      currentYear3: new Date().getFullYear(),
      currentYear4: new Date().getFullYear(),
      currentYear5: new Date().getFullYear(),
      wryCount: 0,
      jgPersonCount: 0,
      indexflag: 1,
      wgName: "",
      echars_gridCode2: "555555",
      echars_gridCode3: "555555",
      wgType: 1,
      barTaskList:[]
    };
  },
  mounted() {
    this.getGridRecordParam();
    this.getGridInfoListFuns("1", "");
    this.lineGridRecord();
    this.barGridRecord();
    this.lineTask();
    this.barTask();
    $("#close_wgsx_show_div_select_id1").click(function(e) {
      $("#wgsx_show_div_select_id1").hide();
    });
    $("#echar1typeId div").click(function(e) {
      $(this).removeClass("chars_div_time_noselect");
      $(this).addClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_noselect");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .addClass("chars_div_time_noselect");
    });

    $("#echar2typeId div").click(function(e) {
      $(this).removeClass("chars_div_time_noselect");
      $(this).addClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_noselect");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .addClass("chars_div_time_noselect");
    });
  },
  methods: {
    //返回选中的是哪一个数据
    getYearOrMonthOrDay: function(id) {
      var number = 1;
      $("#" + id + " div").each(function() {
        if ($(this).hasClass("chars_div_time_select")) {
          number = $(this).index() + 1;
        }
      });
      return number;
    },
    showSelectArea: function(index) {
      this.wgType = index;
      $("#wgsx_show_div_select_id1").show();
    },
    //格式化事件
    timeFormatMonth(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = time.getDate();
      return year + "-" + month;
    },
    //格式化事件
    timeFormatYear(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year;
    },
    formatterYear(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      return "";
    },
    //年的确定
    onconfirmYear() {
      this.showYear = false;
      switch (this.indexflag) {
        case 1:
          this.currentYear1 = this.timeFormatYear(this.currentYear);
          this.getGridRecordParam();
          break;
        case 2:
          this.currentYear2 = this.timeFormatYear(this.currentYear);
          this.lineGridRecord();
          break;
        case 3:
          this.currentYear3 = this.timeFormatYear(this.currentYear);
          this.barGridRecord();
          break;
        case 4:
          this.currentYear4 = this.timeFormatYear(this.currentYear);
          this.lineTask();
        case 5:
          this.currentYear5 = this.timeFormatYear(this.currentYear);
          this.barTask();
          break;
        default:
          break;
      }
    },
    //年月的确定
    onconfirmYearMonth: function() {
      var date = this.timeFormatMonth(this.currentYearMonth);
      this.showYearMonth = false; //年月显示
      switch (this.indexflag) {
        case 1: //第一个图表
          break;
        case 2:
          break;
        case 3: //第一个图表
          this.currentYear3 = date;
          this.barGridRecord();
          break;
        case 5: //第一个图表
          this.currentYear5 = date;
          this.barTask();
          break;
        default:
          break;
      }
    },
    //开启年时间选择
    openPopYear: function() {
      $(".van-picker__columns")
        .find(".van-picker-column")
        .eq(1)
        .hide();
    },
    //判断是选的哪个图表时间
    showSelectTime: function(index) {
      this.indexflag = index;
      var number = 1;
      switch (index) {
        case 1:
          this.showYear = true;
          break;
        case 2:
          this.showYear = true;
          break;
        case 3:
          number = this.getYearOrMonthOrDay("echar1typeId");
          if (number == 1) {
            this.showYear = true;
          } else {
            this.showYearMonth = true;
          }

          break;
        case 4:
          this.showYear = true;
          break;
        case 5:
          number = this.getYearOrMonthOrDay("echar2typeId");
          if (number == 1) {
            this.showYear = true;
          } else {
            this.showYearMonth = true;
          }

          break;
        default:
          break;
      }
    },
    //获取监管概况巡查图表
    getGridRecordParam: function() {
      var params = {
        city: "全部",
        year: this.currentYear1
      };
      //获取数据
      httpMethod
        .getGridRecordParam(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.showEcharsView1(echarts, this.$refs.myCharts1, res.list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView1: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsOne(echarts, value, data1);
    },
    //获取污染物情况图表
    lineGridRecord: function() {
      var params = {
        problemYear: this.currentYear2,
        gridCode: this.echars_gridCode2,
        patrolobjid: ""
      };
      //获取数据
      httpMethod
        .lineGridRecord(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var list = res.recordList;
            this.showEcharsView2(echarts, this.$refs.myCharts2, list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView2: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsTwo(echarts, value, data1);
    },

    //统计分析巡查情况饼状图
    barGridRecord: function() {
      var params = {
        problemYear: this.currentYear3,
        gridCode: this.echars_gridCode2,
        patrolobjid: ""
      };
      //获取数据
      httpMethod
        .barGridRecord(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var list = res.problemList;
            this.showEcharsView3(echarts, this.$refs.myCharts3, list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView3: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsThree(echarts, value, data1);
    },
    //统计分析巡查情况饼状图
    lineTask: function() {
      var params = {
        taskYear: this.currentYear4,
        gridCode: this.echars_gridCode3,
        patrolobjid: ""
      };
      //获取数据
      httpMethod
        .lineTask(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var list = res.taskList;
            this.showEcharsView4(echarts, this.$refs.myCharts4, list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView4: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsFour(echarts, value, data1);
    },
    //统计分析巡查情况饼状图
    barTask: function() {
      var params = {
        taskTime: this.currentYear5,
        gridCode: this.echars_gridCode3
      };
      //获取数据
      httpMethod
        .barTask(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.barTaskList = res.barTaskList;
            if( this.barTaskList.length>0){
              this.$refs.myCharts5.style.display="";
              this.$refs.myCharts5_nodata.style.display="none";
            }else{
               this.$refs.myCharts5.style.display="none";
              this.$refs.myCharts5_nodata.style.display="";
            }
            this.showEcharsView5(echarts, this.$refs.myCharts5, this.barTaskList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView5: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsFive(echarts, value, data1);
    },
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
                  "<li id='555555' class='top_wgsx_li1_noselect'>全部</li>";
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
                        "' class='top_wgsx_li1_select'>" +
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
                        "' class='top_wgsx_li1_select'>" +
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
                        "' class='top_wgsx_li1_select'>" +
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
                        "' class='top_wgsx_li1_select'>" +
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
                        "' class='top_wgsx_li1_select'>" +
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
                        "' class='top_wgsx_li1_select'>" +
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
                          "' class='top_wgsx_li1_select'>" +
                          name +
                          "</li>";
                      } else {
                        html +=
                          "<li id='" +
                          code +
                          "' class='top_wgsx_li1_noselect'>" +
                          name +
                          "</li>";
                      }
                    } else {
                      html +=
                        "<li id='" +
                        code +
                        "' class='top_wgsx_li1_noselect'>" +
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
                      "' class='top_wgsx_li2_select'>" +
                      name +
                      "</li>";
                  } else {
                    html +=
                      "<li id='" +
                      code +
                      "' class='top_wgsx_li2_noselect'>" +
                      name +
                      "</li>";
                  }
                } else {
                  html +=
                    "<li id='" +
                    code +
                    "' class='top_wgsx_li2_noselect'>" +
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
                    "' class='top_wgsx_li3_noselect'>" +
                    name +
                    "</li>";
                } else {
                  html +=
                    "<li id='" +
                    code +
                    "' class='top_wgsx_li3_noselect'>" +
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
    }
  }
};
</script>

<style scoped>
@import "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_tjfx/hbgj_wgjg_tjfx.css";
@import "../../../../../assets/css/frozenui.css";
</style>