<template>
  <div style="z-index: 1; position: absolute;top: 0px;">
    <!--每日要闻start-->
    <div style="text-align: center;position: relative;">
      <img class="home_head_img" src="../../assets/img/headtop.png" />
      <div class="home_head_time_style">2019-12-18</div>
    </div>
    <!--每日要闻end-->
    <!--常用应用start-->
    <div style="height: 205px;width: 100%;background: #ffffff;margin-top: 5px;">
      <div style="text-align: center;position: relative;padding-top: 12px;">
        <img style="width: 228px;" src="../../assets/img/line.png" />
        <div class="home_title_style" style="position: absolute;left: 42%;top: 17px;">常用应用</div>
      </div>
      <ul class="ui-row" style="margin-top: 31px;">
        <li class="ui-col ui-col-25 home_ul_li_style">
          <img class="home_ul_li_img" src="../../assets/img/icon1.png" />
          <div class="home_ul_li_div">每日要情</div>
        </li>
        <li class="ui-col ui-col-25 home_ul_li_style">
          <img class="home_ul_li_img" src="../../assets/img/icon2.png" />
          <div class="home_ul_li_div">重大改革</div>
        </li>
        <li class="ui-col ui-col-25 home_ul_li_style">
          <img class="home_ul_li_img" src="../../assets/img/icon3.png" />
          <div class="home_ul_li_div">重点工程</div>
        </li>
        <li class="ui-col ui-col-25 home_ul_li_style">
          <img class="home_ul_li_img" src="../../assets/img/icon4.png" />
          <div class="home_ul_li_div">文明共创</div>
        </li>
        <li class="ui-col ui-col-25 home_ul_li_style1">
          <img class="home_ul_li_img" src="../../assets/img/icon15.png" />
          <div class="home_ul_li_div">12345</div>
        </li>
        <li class="ui-col ui-col-25 home_ul_li_style1">
          <img class="home_ul_li_img" src="../../assets/img/icon6.png" />
          <div class="home_ul_li_div">整体态势</div>
        </li>
        <li class="ui-col ui-col-25 home_ul_li_style1">
          <img class="home_ul_li_img" src="../../assets/img/icon5.png" />
          <div class="home_ul_li_div">环保攻坚</div>
        </li>
        <li class="ui-col ui-col-25 home_ul_li_style1">
          <img class="home_ul_li_img" src="../../assets/img/icon8.png" />
          <div class="home_ul_li_div">热点问题</div>
        </li>
      </ul>
    </div>
    <!--常用应用end-->

    <!--重点工作仓start-->
    <div style="width: 100%;background: #ffffff;margin-top: 5px;padding-bottom: 20px;">
      <div style="text-align: center;position: relative;padding-top: 12px;">
        <img style="width: 134px;" src="../../assets/img/head_bg2.png" />
        <div class="home_title_style" style="position: absolute;left: 40%;top: 14px;">重点工作舱</div>
      </div>

      <div
        class="ui-row-flex ui-whitespace"
        style="margin-top: 13px;padding-left: 7px;padding-right: 7px;"
      >
        <div class="ui-col ui-col">
          <div style="position: relative;">
            <img style="width: 100%;" src="../../assets/img/work_pic1.png" />
            <div style="display: flex;position: absolute;top: 12px;margin-left: 12px;">
              <img style="height: 13px;" src="../../assets/img/icon_work_news.png" />
              <div style="font-size: 14px;color: #ffffff;margin-left: 9px;">每日要情</div>
            </div>
          </div>
        </div>
        <div class="ui-col ui-col" style="margin-left: 8px;">
          <div style="position: relative;">
            <img style="width: 100%;" src="../../assets/img/work_pic2.png" />
            <div class="home_zdgzc_div">重大改革</div>
          </div>
          <div @click="intentZdgc()" style="position: relative;margin-top: 10px;" id="clickZdgcId">
            <img style="width: 100%;" src="../../assets/img/work_pic4.png" />
            <div class="home_zdgzc_div">重点工程</div>
          </div>
        </div>
        <div class="ui-col ui-col" style="margin-left: 8px;">
          <div style="position: relative;">
            <img style="width: 100%;" src="../../assets/img/work_pic3.png" />
            <div class="home_zdgzc_div">文明共创</div>
          </div>
          <div style="position: relative;margin-top: 10px;">
            <img style="width: 100%;" src="../../assets/img/work_pic5.png" />
            <div class="home_zdgzc_div">环保攻坚</div>
          </div>
        </div>
      </div>

      <div class="ui-row-flex ui-whitespace">
        <div class="ui-col ui-col home_jjyxc_block">
          <div style="display: flex;margin-top: 9px;">
            <div class="home_jjyxc_line_left_div">经济运行舱</div>
            <img class="home_jjyxc_line" src="../../assets/img/head_bg1.png" />
          </div>
          <div class="ui-row-flex ui-whitespace">
            <div class="ui-col ui-col home_ul_li_style">
              <div class="home_jjyxc_line_rauds_div1">
                <img class="home_jjyxc_line_rauds_img" src="../../assets/img/icon6.png" />
              </div>
              <div class="home_jjyxc_line_text_div">整体趋势</div>
            </div>
            <div class="ui-col ui-col home_ul_li_style">
              <div class="home_jjyxc_line_rauds_div2">
                <img class="home_jjyxc_line_rauds_img" src="../../assets/img/icon7.png" />
              </div>
              <div class="home_jjyxc_line_text_div">三大产业</div>
            </div>
          </div>
        </div>
        <div class="ui-col ui-col home_jjyxc_block" style="margin-left: 12px;">
          <div style="display: flex;margin-top: 9px;">
            <div class="home_jjyxc_line_left_div">产业转型舱</div>
            <img class="home_jjyxc_line" src="../../assets/img/head_bg1.png" />
          </div>
          <div class="ui-row-flex ui-whitespace">
            <div class="ui-col ui-col home_ul_li_style">
              <div class="home_jjyxc_line_rauds_div3">
                <img class="home_jjyxc_line_rauds_img" src="../../assets/img/icon11.png" />
              </div>
              <div class="home_jjyxc_line_text_div">招商引资</div>
            </div>
            <div class="ui-col ui-col home_ul_li_style">
              <div class="home_jjyxc_line_rauds_div4">
                <img
                  class="home_jjyxc_line_rauds_img"
                  style="margin-left:0px;"
                  src="../../assets/img/icon12.png"
                />
              </div>
              <div class="home_jjyxc_line_text_div">能源态势</div>
            </div>
          </div>
        </div>
      </div>

      <div class="ui-row-flex ui-whitespace">
        <div class="ui-col ui-col home_jjyxc_block" style="height: auto;padding-bottom:10px;">
          <div style="display: flex;margin-top: 9px;">
            <div class="home_jjyxc_line_left_div">基层管理舱</div>
            <img class="home_jjyxc_line" src="../../assets/img/head_bg1.png" />
          </div>
          <div>
            <div class="home_jcglc_block_div" style="border: 1px solid #e73b1c;">
              <div style="background: #ffe5df;width: 40%;">
                <img class="home_jcglc_small_img" src="../../assets/img/icon8.png" />
              </div>
              <div class="home_jcglc_block_text_div">热点问题</div>
            </div>

            <div class="home_jcglc_block_div" style="border: 1px solid #ff790f;">
              <div style="background: #fff4e5;width: 40%;">
                <img class="home_jcglc_small_img" src="../../assets/img/icon9.png" />
              </div>
              <div class="home_jcglc_block_text_div">热点事件</div>
            </div>

            <div class="home_jcglc_block_div" style="border: 1px solid #07b6d3;">
              <div style="background: #d0fffe;width: 40%;">
                <img class="home_jcglc_small_img" src="../../assets/img/icon10.png" />
              </div>
              <div class="home_jcglc_block_text_div">工作效能</div>
            </div>
          </div>
        </div>
        <div
          class="ui-col ui-col home_jjyxc_block"
          style="margin-left: 12px;height: auto;padding-bottom:10px;"
        >
          <div style="display: flex;margin-top: 9px;">
            <div class="home_jjyxc_line_left_div">社会民生舱</div>
            <img class="home_jjyxc_line" src="../../assets/img/head_bg1.png" />
          </div>

          <div>
            <div class="home_jcglc_block_div" style="border: 1px solid #1ece6d;">
              <div style="background: #ecffec;width: 40%;">
                <img class="home_jcglc_small_img" src="../../assets/img/icon13.png" />
              </div>
              <div class="home_jcglc_block_text_div">教育服务</div>
            </div>

            <div class="home_jcglc_block_div" style="border: 1px solid #3ea7e9;">
              <div style="background: #daf3ff;width: 40%;">
                <img class="home_jcglc_small_img" src="../../assets/img/icon15.png" />
              </div>
              <div class="home_jcglc_block_text_div">12345</div>
            </div>

            <div class="home_jcglc_block_div" style="border: 1px solid #f2ccaa;">
              <div style="background: #ffecdb;width: 40%;">
                <img class="home_jcglc_small_img" src="../../assets/img/icon14.png" />
              </div>
              <div class="home_jcglc_block_text_div">就业服务</div>
            </div>
          </div>
        </div>
      </div>

      <!--政府服务舱start-->
      <div
        class="home_jjyxc_block"
        style="height: 112px;padding-bottom:10px;margin: 8px 11px;width: 94%;"
      >
        <div style="text-align: center;position: relative;padding-top: 12px;">
          <img style="width: 234px;" src="../../assets/img/head_bg3.png" />
          <div class="home_title_style" style="position: absolute;left: 40%;top: 14px;">政府服务舱</div>
        </div>

        <div style="display: flex;margin-top: 20px;">
          <div
            class="home_jcglc_block_div"
            style="margin: auto; width: 40%; border: 1px solid #ff6b09;"
          >
            <div style="background: #fff4e5;width: 40%;">
              <img class="home_jcglc_small_img" src="../../assets/img/icon19.png" />
            </div>
            <div class="home_jcglc_block_text_div">行政审批</div>
          </div>
          <div
            class="home_jcglc_block_div"
            style="margin: auto;width: 40%;border: 1px solid #3eacf9;"
          >
            <div style="background: #daf3ff;width: 40%;">
              <img class="home_jcglc_small_img" src="../../assets/img/icon20.png" />
            </div>
            <div class="home_jcglc_block_text_div">行政监督</div>
          </div>
        </div>
      </div>
      <!--政府服务舱end-->
      <!--全域旅游舱start-->
      <div>
        <div style="text-align: center;position: relative;padding-top: 12px;">
          <img style="width: 134px;" src="../../assets/img/head_bg2.png" />
          <div class="home_title_style" style="position: absolute;left: 40%;top: 14px;">全域旅游舱</div>
        </div>

        <div class="ui-row-flex ui-whitespace" style="height: 88px;margin-top: 15px;">
          <div
            class="ui-col ui-col backgroundDiv1"
          >
            <img style="height: 50px;" src="../../assets/img/icon_travel1.png" />
            <div style="color: #ffffff;font-size: 13px;">旅游景区</div>
          </div>
          <div
            class="ui-col ui-col backgroundDiv2"
          >
            <img style="height: 50px;" src="../../assets/img/icon_travel2.png" />
            <div style="color: #ffffff;font-size: 13px;">游客画像</div>
          </div>
          <div
            class="ui-col ui-col backgroundDiv3"
          >
            <img style="height: 50px;" src="../../assets/img/icon_travel3.png" />
            <div style="color: #ffffff;font-size: 13px;">非遗保护</div>
          </div>
        </div>

        <div style="position: relative;margin-top: 10px;">
          <img
            style="width: 94%;margin-left: 10px;margin-right: 10px;"
            src="../../assets/img/control_pic.png"
          />
          <div style="position: absolute;color: #ffffff;top: 24px;left: 33px;">应急管理舱</div>
          <div
            style="position: absolute;color: #ffffff;top: 24px;left: 131px;border-radius: 3px;border: 1px solid #ffffff;padding: 2px 4px;font-size: 13px;"
          >远程调度</div>
        </div>
      </div>
      <!--全域旅游舱end-->
      <!--区县直通舱start-->
      <div>
        <div style="text-align: center;position: relative;padding-top: 12px;">
          <img style="width: 134px;" src="../../assets/img/head_bg2.png" />
          <div class="home_title_style" style="position: absolute;left: 40%;top: 14px;">区县直通舱</div>
        </div>
        <ul class="ui-row" style="margin-top: 20px;">
          <li class="ui-col ui-col-33 home_ul_li_style">
            <img class="home_ul_li_img" src="../../assets/img/map1.png" />
            <div class="home_ul_li_div">城区</div>
          </li>
          <li class="ui-col ui-col-33 home_ul_li_style">
            <img class="home_ul_li_img" src="../../assets/img/map2.png" />
            <div class="home_ul_li_div">泽州县</div>
          </li>
          <li class="ui-col ui-col-33 home_ul_li_style">
            <img class="home_ul_li_img" src="../../assets/img/map3.png" />
            <div class="home_ul_li_div">高平市</div>
          </li>
          <li class="ui-col ui-col-33 home_ul_li_style1">
            <img class="home_ul_li_img" src="../../assets/img/map4.png" />
            <div class="home_ul_li_div">阳城县</div>
          </li>
          <li class="ui-col ui-col-33 home_ul_li_style1">
            <img class="home_ul_li_img" src="../../assets/img/map5.png" />
            <div class="home_ul_li_div">沁水县</div>
          </li>
          <li class="ui-col ui-col-33 home_ul_li_style1">
            <img class="home_ul_li_img" src="../../assets/img/map6.png" />
            <div class="home_ul_li_div">陵川县</div>
          </li>
        </ul>
      </div>
      <!--区县直通舱end-->
    </div>
    <!--重点工作仓end-->
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import $ from "jquery";
import { mainJs } from "../main/main.js";
Vue.use(Search);
export default {
  name: "homevue",
  data() {
    return {
	  seach_value: "",
    };
  },
  mounted() {
    var context = this;
    $(".main_item").click(function() {
      var id = $(this).attr("id");
      context.changeTabStyle(id);
    });
  },
  methods: {
    //改变tab的状态和图片
    changeTabStyle: function(tabid) {
      mainJs.changeTabStyle(tabid);
	},
	intentZdgc:function(){
		this.$router.push({
          path: "/zdgz/zdgc/zdgc"
        });
	}
  }
};
</script>

<style scoped>
@import "../../assets/css/home.css";
@import "../../assets/css/frozenui.css";
</style>
