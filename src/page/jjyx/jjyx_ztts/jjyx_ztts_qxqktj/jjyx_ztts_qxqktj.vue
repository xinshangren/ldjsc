<template>
  <div>
  <div
      id="show_menu_Id"
      style="position: fixed;left: 20px;background: #ffffff;top: 127px;padding: 3px;z-index:100;"
    >
      <img style="height:23px;" src="../../../../assets/img/data_list_menu.png" />
    </div>
    <div
      id="menu_ul_id"
      style="display:none; position: fixed;left: 20px;background: #ffffff;top: 157px;padding: 3px;z-index:1;"
    >
      <ul id="menu_ul">
        <li @click="returnCom(1)" class="menuliClass" style="display:flex;">
          <img class="menu_li_img" src="../../../../assets/img/data_arrow_right.png" />
          <div class="menu_li_div">生产总值</div>
        </li>
        <li @click="returnCom(2)" class="menuliClass" style="display:flex;margin-top:4px;">
          <img class="menu_li_img" src="../../../../assets/img/data_arrow_right.png" />
          <div class="menu_li_div">社会消费品零售总额</div>
        </li>
        <li @click="returnCom(3)" class="menuliClass" style="display:flex;margin-top:4px;">
          <img class="menu_li_img" src="../../../../assets/img/data_arrow_right.png" />
          <div class="menu_li_div">工业增加值增加速度</div>
        </li>
        <li @click="returnCom(4)" class="menuliClass" style="display:flex;margin-top:4px;">
          <img class="menu_li_img" src="../../../../assets/img/data_arrow_right.png" />
          <div class="menu_li_div">固定资产投资</div>
        </li>
        <li @click="returnCom(5)" class="menuliClass" style="display:flex;margin-top:4px;">
          <img class="menu_li_img" src="../../../../assets/img/data_arrow_right.png" />
          <div class="menu_li_div">一般公共预算收入</div>
        </li>
        <li @click="returnCom(6)" class="menuliClass" style="display:flex;margin-top:4px;">
          <img class="menu_li_img" src="../../../../assets/img/data_arrow_right.png" />
          <div class="menu_li_div">人均可支配收入</div>
        </li>
      </ul>
    </div>

    <!--生产总值表格-->
    <div style="background:#ffffff;height:337px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div" style="margin-top: 4px;">生产总值</div>
        <div class="van-hairline--bottom" style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"></div>
        <div id="sczzTable" style="border: 1px solid #cccccc;width: 93%;margin: auto;margin-top: 20px;">
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
          >
            <div class="ui-col ui-col" style="text-align: center;">地区</div>
            <div class="ui-col ui-col" style="text-align: center;">1-{{indexQuarter}}季度(万元)</div>
            <div class="ui-col ui-col" style="text-align: center;">
              <div style="margin-left: 5px;">同比±%</div>
            </div>
          </div>
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#ffffff;font-size:13px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
            v-for="(item,index) in sczj_dataList"
            :key="index"
          >
            <div class="ui-col ui-col" style="text-align: center;">{{item.name}}</div>
            <div class="ui-col ui-col" style="text-align: center;">{{item.indexdata}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;text-align: right; width: 100%;">{{item.yonydata}}%</div>
              <img
                v-if="item.yonydata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.yonydata<0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </div>  
    </div>
    <!--社会消费品零售总额-->
    <div style="background:#ffffff;height:337px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div" style="margin-top: 4px;">社会消费品零售总额(万元)</div>
        <div class="van-hairline--bottom" style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"></div>
        <div id="lszeTable" style="border: 1px solid #cccccc;width: 93%;margin: auto;margin-top: 20px;">
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
          >
            <div class="ui-col ui-col" style="text-align: center;">地区</div>
            <div class="ui-col ui-col" style="text-align: center;">1-{{indexQuarter}}季度(万元)</div>
            <div class="ui-col ui-col" style="text-align: center;">
              <div style="margin-left: 5px;">同比±%</div>
            </div>
          </div>
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#ffffff;font-size:13px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
            v-for="(item,index) in lsze_dataList"
            :key="index"
          >
            <div class="ui-col ui-col" style="text-align: center;">{{item.name}}</div>
            <div class="ui-col ui-col" style="text-align: center;">{{item.indexdata}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;text-align: right; width: 100%;">{{item.yonydata}}%</div>
              <img
                v-if="item.yonydata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.yonydata<0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </div>  
    </div>
      <!--工业增加值增加速度-->
     <div style="background:#ffffff;height:337px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div" style="margin-top: 4px;">工业增加值增加速度(%)</div>
        <div class="van-hairline--bottom" style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"></div>
        <div id="zjsdTable" style="border: 1px solid #cccccc;width: 93%;margin: auto;margin-top: 20px;">
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
          >
            <div class="ui-col ui-col" style="text-align: center;">地区</div>
            <div class="ui-col ui-col" style="text-align: center;">
              <div style="margin-left: 5px;">1-11月</div>
            </div>
          </div>
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#ffffff;font-size:13px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
            v-for="(item,index) in zjsd_dataList"
            :key="index"
          >
            <div class="ui-col ui-col" style="text-align: center;">{{item.name}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;text-align: right; width: 100%;">{{item.indexdata}}%</div>
              <img
                v-if="item.indexdata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 60px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.indexdata<0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 60px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </div>  
    </div>

     <!--固定资产投资1-7月-->
     <div style="background:#ffffff;height:600px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div" style="margin-top: 8px;">固定资产投资（1-{{indexMonth}}月）</div>
        <div class="van-hairline--bottom" style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"></div>
        <!--各区县固定资产投资金额-->
        <div id="gdzcTable" style="margin-top: 20px;font-size: 13px;"> 
          <div style="text-align: center;">各区县固定资产投资金额（万元）</div>
          <div style="width: 93%;margin: auto;margin-top: 12px;">
            <div style="float: left;width: 33%;text-align: center;">
            <img  src="../../../../assets/img/map1.png" style="width:70px;"/>
            <p>城区</p>
            <p><span style="color: #0b91ed;">{{gdzc_mapData.cq}}</span>万元</p>
            </div>

            <div style="float: left;width: 33%;text-align: center; ">
            <img  src="../../../../assets/img/map2.png" style="width:70px;"/>
            <p>泽州县</p>
            <p><span style="color: #0b91ed;">{{gdzc_mapData.zzx}}</span>万元</p>
            </div>

            <div style="float: left;width: 33%;text-align: center;">
            <img  src="../../../../assets/img/map3.png" style="width:70px;"/>
            <p>高平市</p>
            <p><span style="color: #0b91ed;">{{gdzc_mapData.gps}}</span>万元</p>
            </div>
         
            <div style="float: left;width: 33%;text-align: center;padding-top: 8px;">
            <img  src="../../../../assets/img/map4.png" style="width:70px;"/>
            <p>阳城县</p>
            <p><span style="color: #0b91ed;">{{gdzc_mapData.ycx}}</span>万元</p>
            </div>

            <div style="float: left;width: 33%;text-align: center;padding-top: 8px; ">
            <img  src="../../../../assets/img/map5.png" style="width:70px;"/>
            <p>沁水县</p>
            <p><span style="color: #0b91ed;">{{gdzc_mapData.qsx}}</span>万元</p>
            </div>

            <div style="float: left;width: 33%;text-align: center;padding-top: 8px;">
            <img  src="../../../../assets/img/map6.png" style="width:70px;"/>
            <p>陵川县</p>
            <p><span style="color: #0b91ed;">{{gdzc_mapData.lcx}}</span>万元</p>
            </div> 
          </div>
        </div>
        <!--各区县固定资产投资金额-->
        <div id="" style="padding-top:20px;font-size: 13px;clear: both;"> 
          <div style="text-align: center;">各区县固定投资增速（%）</div>
          <div style="width: 93%;margin: auto;margin-top: 12px;">
            <div style="display:flex;">
              <div id="myCharts1" ref="myCharts1" style="height:220px;width:93%;"></div>
            </div>
          </div>
        </div>
      </div>
   
    <!--一般公共预算收入-->
    <div style="background:#ffffff;height:650px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div" style="margin-top: 4px;">一般公共预算收入(1-{{indexMonth}}月)</div>
      <div class="van-hairline--bottom" style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"></div>
      <div id="ggysTable" style="margin-top: 20px;">
        <div style="text-align: center;font-size: 13px;">各区县公共预算收入金额（万元）</div>
        <div style="width: 93%;margin: auto;margin-top: 12px;">
          <div style="display:flex;">
            <div id="myCharts2" ref="myCharts2" style="height:250px;width:93%;"></div>
          </div>
        </div>
      </div>  
      <div style="margin-top: 20px;font-size: 13px;"> 
        <div style="text-align: center;">各区县公共预算收入增速（%）</div>
        <div style="width: 93%;margin: auto;margin-top: 12px;">
          <div style="float: left;width: 33%;text-align: center;">
          <img  src="../../../../assets/img/map1.png" style="width:70px;"/>
          <p>城区</p>
          <p><span style="color: #0b91ed;">{{ggyszs_dataList.cq}}%</span>
            <img
              v-if="ggyszs_dataList.cq>=0"
              style="height: 15px;"
              src="../../../../assets/img/eco_rise.png"
            />
            <img
              v-if="ggyszs_dataList.cq<0"
              style="height: 15px;"
              src="../../../../assets/img/eco_down.png"
            />
          </p>
          </div>

          <div style="float: left;width: 33%;text-align: center; ">
          <img  src="../../../../assets/img/map2.png" style="width:70px;"/>
          <p>泽州县</p>
          <p><span style="color: #0b91ed;">{{ggyszs_dataList.zzx}}%</span><img
            v-if="ggyszs_dataList.zzx>=0"
            style="height: 15px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="ggyszs_dataList.zzx<0"
            style="height: 15px;"
            src="../../../../assets/img/eco_down.png"
          /></p>
          </div>

          <div style="float: left;width: 33%;text-align: center;">
          <img  src="../../../../assets/img/map3.png" style="width:70px;"/>
          <p>高平市</p>
          <p><span style="color: #0b91ed;">{{ggyszs_dataList.gps}}%</span><img
            v-if="ggyszs_dataList.gps>=0"
            style="height: 15px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="ggyszs_dataList.gps<0"
            style="height: 15px;"
            src="../../../../assets/img/eco_down.png"
          /></p>
          </div>
       
          <div style="float: left;width: 33%;text-align: center;padding-top: 8px;">
          <img  src="../../../../assets/img/map4.png" style="width:70px;"/>
          <p>阳城县</p>
          <p><span style="color: #0b91ed;">{{ggyszs_dataList.ycx}}%</span><img
            v-if="ggyszs_dataList.ycx>=0"
            style="height: 15px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="ggyszs_dataList.ycx<0"
            style="height: 15px;"
            src="../../../../assets/img/eco_down.png"
          /></p>
          </div>

          <div style="float: left;width: 33%;text-align: center;padding-top: 8px; ">
          <img  src="../../../../assets/img/map5.png" style="width:70px;"/>
          <p>沁水县</p>
          <p><span style="color: #0b91ed;">{{ggyszs_dataList.qsx}}%</span><img
            v-if="ggyszs_dataList.qsx>=0"
            style="height: 15px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="ggyszs_dataList.qsx<0"
            style="height: 15px;"
            src="../../../../assets/img/eco_down.png"
          /></p>
          </div>

          <div style="float: left;width: 33%;text-align: center;padding-top: 8px;">
          <img  src="../../../../assets/img/map6.png" style="width:70px;"/>
          <p>陵川县</p>
          <p><span style="color: #0b91ed;">{{ggyszs_dataList.lcx}}%</span><img
            v-if="ggyszs_dataList.lcx>=0"
            style="height: 15px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="ggyszs_dataList.lcx<0"
            style="height: 15px;"
            src="../../../../assets/img/eco_down.png"
          /></p>
          </div> 
        </div>
      </div>
    </div>
  
     <!--人均可支配收入（元）-->
     <div style="background:#ffffff;height:976px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div" style="margin-top: 4px;">人均可支配收入（元）</div>
      <div class="van-hairline--bottom" style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"></div>
      <!--居民人均可支配收入--> 
      <div id="rjzpTable" style="width: 93%;margin: auto;margin-top: 15px;">
        <span style="font-size: 13px;" >居民人均可支配收入</span>
        <div  style="border: 1px solid #cccccc;margin-top: 5px;">
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
          >
            <div class="ui-col ui-col" style="text-align: center;">地区</div>
            <div class="ui-col ui-col" style="text-align: center;">1-{{indexQuarter}}季度</div>
            <div class="ui-col ui-col" style="text-align: center;">
              <div style="margin-left: 5px;">同比±%</div>
            </div>
          </div>
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#ffffff;font-size:13px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
            v-for="(item,index) in jmrj_dataList"
            :key="index"
          >
            <div class="ui-col ui-col" style="text-align: center;">{{item.name}}</div>
            <div class="ui-col ui-col" style="text-align: center;">{{item.indexdata}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;text-align: right; width: 100%;">{{item.yonydata}}%</div>
              <img
                v-if="item.yonydata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.yonydata<0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </div>  
       </div>
        <!--城镇居民人均可支配收入--> 
       <div style="width: 93%;margin: auto;margin-top: 15px;">
        <span style="font-size: 13px;" >城镇居民人均可支配收入</span>
        <div id="zjsdTable" style="border: 1px solid #cccccc;margin-top: 5px;">
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
          >
            <div class="ui-col ui-col" style="text-align: center;">地区</div>
            <div class="ui-col ui-col" style="text-align: center;">1-{{indexQuarter}}季度</div>
            <div class="ui-col ui-col" style="text-align: center;">
              <div style="margin-left: 5px;">同比±%</div>
            </div>
          </div>
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#ffffff;font-size:13px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
            v-for="(item,index) in czrj_dataList"
            :key="index"
          >
            <div class="ui-col ui-col" style="text-align: center;">{{item.name}}</div>
            <div class="ui-col ui-col" style="text-align: center;">{{item.indexdata}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;text-align: right; width: 100%;">{{item.yonydata}}%</div>
              <img
                v-if="item.yonydata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.yonydata<0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </div>  
       </div>

       <!--农村居民人均可支配收入--> 
       <div style="width: 93%;margin: auto;margin-top: 15px;">
        <span style="font-size: 13px;" >农村居民人均可支配收入</span>
        <div id="zjsdTable" style="border: 1px solid #cccccc;margin-top: 5px;">
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
          >
            <div class="ui-col ui-col" style="text-align: center;">地区</div>
            <div class="ui-col ui-col" style="text-align: center;">1-{{indexQuarter}}季度</div>
            <div class="ui-col ui-col" style="text-align: center;">
              <div style="margin-left: 5px;">同比±%</div>
            </div>
          </div>
        <div
            class="ui-row-flex ui-whitespace"
            style="background:#ffffff;font-size:13px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
            v-for="(item,index) in ncrj_dataList"
            :key="index"
          >
            <div class="ui-col ui-col" style="text-align: center;">{{item.name}}</div>
            <div class="ui-col ui-col" style="text-align: center;">{{item.indexdata}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;text-align: right; width: 100%;">{{item.yonydata}}%</div>
              <img
                v-if="item.yonydata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.yonydata<0"
                style="height: 15px;margin-top: 13px;margin:auto;margin-right: 30px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </div>  
       </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_qxqktj/jjyx_ztts_qxqktj.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  props: ["getChild"],
  name: "jjyx_ztts_qxqktj",
  data() {
    return {
      show: false,
      qssczzEnti: {},
      totalData: {},
      indexMonth: "",
      indexQuarter:"",
      sczj_dataList: [],
      lsze_dataList: [],
      zjsd_dataList: [],
      gdzc_dataList:[],
      gdzc_mapData:{cq:0,zzx:0,gps:0,ycx:0,qsx:0,lcx:0},
      ggys_dataList:[],
      ggyszs_dataList:{cq:0,zzx:0,gps:0,ycx:0,qsx:0,lcx:0},
      jmrj_dataList:[],
      ncrj_dataList:[],
      czrj_dataList:[],
    };
  },
  mounted() {
    this.dateTime = this.getChild;
    var year = this.dateTime.substr(0, 4);
    var month = this.dateTime.substr(5, this.dateTime.length - 1);

    this.indexMonth = month.replace(/\b(0+)/gi, "");
    this.getHomeData(year, month);
    $("#menu_ul li").click(function() {
      $(this).css("background", "#e1f3ff");
      $(this)
        .siblings("li")
        .css("background", "#ffffff");
    });
    $("#show_menu_Id").click(function() {
      if ($("#menu_ul_id").is(":hidden")) {
         $("#menu_ul_id").show();
      } else {
        $("#menu_ul_id").hide();
      }
     
    });
  },
  methods: {
    returnCom(flag) {
      var returnEle = null;
      $("#menu_ul_id").hide();
      switch (flag) {
        case 1:
          returnEle = document.getElementById("sczzTable");
          break;
        case 2:
          returnEle = document.getElementById("lszeTable");
          break;
        case 3:
          returnEle = document.getElementById("zjsdTable");
          break;
        case 4:
          returnEle = document.getElementById("gdzcTable");
          break;
        case 5:
          returnEle = document.getElementById("ggysTable");
          break;
        case 6:
          returnEle = document.getElementById("rjzpTable");
          break;
        default:
          break;
      }
      //  $("#myCharts6").scrollIntoView(true);
      if (returnEle) {
        returnEle.scrollIntoView();
      }
    },
    selectTab: function(flag) {
      switch (flag) {
        case 1: //形象进度
          this.isFlag = true;
          $("#tabdiv1").removeClass("pop_tab_noselect_div1");
          $("#tabdiv1").addClass("pop_tab_select_div1");
          $("#tabdiv2").addClass("pop_tab_noselect_div2");
          $("#tabdiv2").removeClass("pop_tab_select_div2");
          $("#myCharts1").show();
          $("#myCharts2").hide();
          break;
        case 2: //存在问题
          this.isFlag = false;
          $("#tabdiv1").removeClass("pop_tab_select_div1");
          $("#tabdiv1").addClass("pop_tab_noselect_div1");
          $("#tabdiv2").addClass("pop_tab_select_div2");
          $("#tabdiv2").removeClass("pop_tab_noselect_div2");
          $("#myCharts1").hide();
          $("#myCharts2").show();
          break;
        default:
          break;
      }
    },
    changeTitme: function(date) {
      this.dateTime = date;
      var year = date.substr(0, 4);
      var month = date.substr(5, date.length - 1);
      this.indexMonth = month.replace(/\b(0+)/gi, "");
      this.getHomeData(year, month);
    },
    //第一个头和统计饼图
    getHomeData: function(year, month) {
      var self = this;
      var params = {
        year: year,
        month: month
      };
      //获取数据
      httpMethod
        .getCounty(params)
        .then(res => {
          var code = res.success;
          if (code == "1") {
            this.sczj_dataList=[];
            this.lsze_dataList=[];
            this.zjsd_dataList=[];
            this.gdzc_dataList=[];
            this.gdzc_mapData={cq:0,zzx:0,gps:0,ycx:0,qsx:0,lcx:0};
            this.ggys_dataList=[];
            this. ggyszs_dataList={cq:0,zzx:0,gps:0,ycx:0,qsx:0,lcx:0};
            this.ncrj_dataList=[];
            this.czrj_dataList=[];
            this.sczj_dataList = res.sczz;
            this.lsze_dataList = res.lszs;
            this.zjsd_dataList = res.zjsd;
            this.jmrj_dataList = res.jmrj;
            this.ncrj_dataList = res.ncrj;
            this.czrj_dataList = res.czrj;
            this.indexQuarter=res.quarter;
            //各区县固定投资金额（万元） 数据
            $.each(res.gdzc,function(index,item){
              if(item.name == '城区'){
                self.gdzc_mapData.cq = item.indexdata;
                self.gdzc_dataList.push(item);
              }else if(item.name == '高平市'){
                self.gdzc_mapData.gps = item.indexdata;
                self.gdzc_dataList.push(item);
              }else if(item.name == '泽州县'){
                self.gdzc_mapData.zzx = item.indexdata;
                self.gdzc_dataList.push(item);
              }else if(item.name == '阳城县'){
                self.gdzc_mapData.ycx = item.indexdata;
                self.gdzc_dataList.push(item);
              }else if(item.name == '沁水县'){
                self.gdzc_mapData.qsx = item.indexdata;
                self.gdzc_dataList.push(item);
              }else if(item.name == '陵川县'){
                self.gdzc_mapData.lcx = item.indexdata;
                self.gdzc_dataList.push(item);
              }
            })
            //各区县固定投资金额（万元） 数据
            $.each(res.ggys,function(index,item){
              if(item.name == '开发区'){
              }else{
                self.ggys_dataList.push(item);
              }
            })
            $.each(res.ggys,function(index,item){
              if(item.name == '城区'){
                self.ggyszs_dataList.cq = item.yonydata;
              }else if(item.name == '高平市'){
                self.ggyszs_dataList.gps = item.yonydata;
              }else if(item.name == '泽州县'){
                self.ggyszs_dataList.zzx = item.yonydata;
              }else if(item.name == '阳城县'){
                self.ggyszs_dataList.ycx = item.yonydata;
              }else if(item.name == '沁水县'){
                self.ggyszs_dataList.qsx = item.yonydata;
              }else if(item.name == '陵川县'){
                self.ggyszs_dataList.lcx = item.yonydata;
              }
            })
            this.getOneEchars(echarts,myCharts1,this.gdzc_dataList);
            this.getTwoEchars(echarts,myCharts2,this.ggys_dataList);
          }
        })
        .catch(err => {});
    },
    //格式化参数
    formmgetData: function(data) {
      if (data != null && data != undefined) {
        return data;
      } else {
        return "-";
      }
    },
    //初始化第一个图表
    getOneEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars1(echarts, value, data);
    },
    //初始化第二个图表
    getTwoEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars2(echarts, value, data);
    },
    //初始化第三个图表
    getThreeEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars3(echarts, value, data);
    },
    //初始化第4个图表
    getFourEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars4(echarts, value, data);
    },
    //初始化第5个图表
    getFiveEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars5(echarts, value, data);
    }
  }
};
</script>
<style scoped>
@import "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_qxqktj/jjyx_ztts_qxqktj.css";
@import "../../../../assets/css/frozenui.css";
</style>
