<template>
<div style="background: rgb(247, 247, 247);">
    <div style="background:#ffffff;height:204px;width:100%;margin-top:5px;">
        <div class="dateSelect" style="height: 50px;">
            <div class="sx"></div>
            <div class="tj_z">企业总数</div>
            <div class="timeYear">{{qylxCount_DataList.zs}}</div>
            <div class="timeYear">家</div>
        </div>
        <div class="van-hairline--bottom"style="margin-left: 10px;margin-right: 5px;"></div>
        <div style="display:flex;width:100%;height: 70px;padding:20px;">
            <div style="width: 76%;"> 
                <div style="float: left; ">
                    <div style='font-size: 17px;float: left; color: rgb(248, 57, 12); border: 1px solid rgb(248, 57, 12);  border-radius: 50px;  width: 21px; height: 26px;  padding: 10px; padding-left: 15px;'>国</div>
                    <div style="float: right;margin-left: 10px;">
                        <p style="line-height: 22px;">国企</p>
                        <p style="line-height: 22px;"><span style="font-size: 20px;color: #F8390C;">{{qylxCount_DataList.gq}}</span>家</p>
                    </div>
                </div>
                <div style="float: right;margin-right: 33px;">
                    <div style='font-size: 17px;float: left; color: #F5A504;; border: 1px solid #F5A504;;  border-radius: 50px;  width: 21px; height: 26px;  padding: 10px; padding-left: 15px;'>央</div>
                    <div style="float: right;margin-left: 10px;">
                        <p style="line-height: 22px;">央企</p>
                        <p style="line-height: 22px;"><span style="font-size: 20px;color: #F5A504;">{{qylxCount_DataList.yq}}</span>家</p>
                    </div>
                </div>
                <div style="clear: both; float:left;margin-top: 17px; ">
                    <div style='font-size: 17px;float: left; color: #972CD4; border: 1px solid #972CD4;  border-radius: 50px;  width: 21px; height: 26px;  padding: 10px; padding-left: 15px;'>外</div>
                    <div style="float: right;margin-left: 10px;">
                        <p style="line-height: 22px;">外企</p>
                        <p style="line-height: 22px;"><span style="font-size: 20px;color: #972CD4;">{{qylxCount_DataList.wq}}</span>家</p>
                    </div>
                </div>
                <div style="float: right;margin-top:17px;margin-right: 33px;  ">
                    <div style='font-size: 17px;float: left; color: #88EAED; border: 1px solid #88EAED;  border-radius: 50px;  width: 21px; height: 26px;  padding: 10px; padding-left: 15px;'>民</div>
                    <div style="float: right;margin-left: 10px;">
                        <p style="line-height: 22px;">民企</p>
                        <p style="line-height: 22px;"><span style="font-size: 20px;color: #88EAED;">{{qylxCount_DataList.mq}}</span>家</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;">
        <div class="dateSelect"style="height: 50px;">
            <div class="sx"></div>
            <div class="tj_z">煤层气抽采利用情况</div>
            <div class="timeYear" style="font-size:15px"  @click="showDatePicker()">{{nowYear}}</div>
            <div class="timeYear"style="font-size:15px">年</div>
            <img class="xl" src="../../../../../assets/img/air_data_arrow.png"/>
        </div>
        <div class="van-hairline--bottom"style="margin-left: 10px;margin-right: 10px;"></div>
        <div style="width: 93%;margin: auto;margin-top: 12px;">
            <div style="display:flex;">
                <div id="myCharts1" ref="myCharts1" style="height:220px;width:93%;"></div>
            </div>
        </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '200px' }">
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          style="height: 200px;"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onconfirm"
          :formatter="formatter"
          @cancel="hideDataPicker"
        />
      </van-popup>
</div>
</template>

<style scoped>
@import "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.css";
@import "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_ssgk/hbgj_air_ssgk.css";
@import "../../../../../assets/css/frozenui.css";
</style>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { nytsMcqGkJs } from "../../../../../page/cyzx/nyts/nyts_mcq/nyts_mcq_gk/nyts_mcq_gk.js";
export default {
    props: ["getChild"],
    data(){
        return {
            qylxCount_DataList:{gq:0,yq:0,wq:0,mq:0,zs:0},
            indexMonth:"",
            show: false,
            nowYear: '',
            currentDate: new Date(),
            maxDate: new Date(),
            minDate: new Date(2018, 0, 1),
        }
        
    },
    mounted() {
        this.dateTime = this.getChild;
        var year = this.nowYear;
        this.getHomeData();
        console.log(this.nowYear)
        this.getHomeData1(year)
    },
    methods:{
        //第一个头
        getHomeData: function() {
            var self = this;
            var params = {
            };
            //获取数据
            httpMethod
                .getMcqGeneralSituation(params)
                .then(res => {
                var code = res.success;
                    if (code == "1") {
                        var self = this;
                        self.nowYear = res.dateMonth.substr(0,4);
                        self.qylxCount_DataList={gq:0,yq:0,wq:0,mq:0,zs:0},
                        $.each(res.entNature,function(index,value){
                           if(value.ent_number == null ){
                             value.ent_number = 0; 
                           }
                            if(value.name == '国有'){
                                self.qylxCount_DataList.gq = value.ent_number;
                            }else if(value.name == '央企'){
                                self.qylxCount_DataList.yq = value.ent_number;
                            }else if(value.name == '外企'){
                                self.qylxCount_DataList.wq = value.ent_number;
                            }else if(value.name == '民企'){
                                self.qylxCount_DataList.mq = value.ent_number;
                            }
                            self.qylxCount_DataList.zs += value.ent_number;
                        }) 
                    }
                })
                .catch(err => {});
        },
        getHomeData1: function(year) {
            var self = this;
            var params = {
                dateMonth:year
            };
            //获取数据
            httpMethod
                .getMcqStatistical(params)
                .then(res => {
                var code = res.success;
                    if (code == "1") {
                        this.getOneEchars(echarts,myCharts1,res.dataTj);
                    }
                })
                .catch(err => {});
        },
         //初始化第一个图表
        getOneEchars: function(echarts, value, data) {
            nytsMcqGkJs.showjmrjsrEchars1(echarts, value, data);
        },
        timeFormat(time) {
            // 时间格式化 2019
            let year = time.getFullYear();
            return year;
        },
        formatter(type, value) {
            if (type === "year") {
                return `${value}年`;
            }
            return "";
        },
        onconfirm() {
            this.nowYear = this.timeFormat(this.currentDate);
            this.show = false;
            //this.$refs.child1.changeTitme(this.nowYear);
            this.getHomeData1(this.nowYear);
        },
        showDatePicker(){
            this.show = true;
        },
        hideDataPicker(){
            this.show = false;
        },
    }
}

</script>