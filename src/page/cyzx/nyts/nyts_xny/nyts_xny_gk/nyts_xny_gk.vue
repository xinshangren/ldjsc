<template>
    <div style="background: rgb(247, 247, 247);">
        <div style="background:#ffffff;height:270px;width:100%;margin-top:5px;">
            <div class="dateSelect" style="height: 50px;">
                <div class="sx"></div>
                <div class="tj_z">新能源企业</div>
                <div class="timeYear">{{xnyGkSum}}</div>
                <div class="timeYear">家</div>
            </div>
            <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
            <div style="display:flex;width:100%;height: 260px;padding:20px;">
                <div style="width: 76%;">
                    <div style="float: left; ">
                        <img style="float: left;  width: 50px; height: 50px;"
                            src="../../../../../assets/img/xny_top_gf.png" />
                        <div style="float: right;margin-left: 10px;">
                            <p style="line-height: 22px;">光伏</p>
                            <p style="line-height: 22px;">
                                <span style="font-size: 20px;color: #F8390C;">{{xnyGkData.gd}}</span>家
                            </p>
                        </div>
                    </div>
                    <div style="float: right;margin-right: 33px;">
                        <img style="float: left;  width: 50px; height: 50px;"
                            src="../../../../../assets/img/xny_top_sd.png" />
                        <div style="float: right;margin-left: 10px;">
                            <p style="line-height: 22px;">水电</p>
                            <p style="line-height: 22px;">
                                <span style="font-size: 20px;color: #F5A504;">{{xnyGkData.sd}}</span>家
                            </p>
                        </div>
                    </div>
                    <div style="clear: both; float:left;margin-top: 17px; ">
                        <img style="float: left;  width: 50px; height: 50px;"
                            src="../../../../../assets/img/xny_top_fd.png" />
                        <div style="float: right;margin-left: 10px;">
                            <p style="line-height: 22px;">风电</p>
                            <p style="line-height: 22px;">
                                <span style="font-size: 20px;color: #972CD4;">{{xnyGkData.fd}}</span>家
                            </p>
                        </div>
                    </div>
                    <div style="float: right;margin-top:17px;margin-right: -17px;  ">
                        <img style="float: left;  width: 50px; height: 50px;"
                            src="../../../../../assets/img/xny_top_swzfd.png" />
                        <div style="float: right;margin-left: 10px;">
                            <p style="line-height: 22px;">生物质发电</p>
                            <p style="line-height: 22px;">
                                <span style="font-size: 20px;color: #88EAED;">{{xnyGkData.swzfd}}</span>家
                            </p>
                        </div>
                    </div>
                    <div style="float: left;margin-top:17px;margin-right: 33px;  ">
                        <img style="float: left;  width: 50px; height: 50px;"
                            src="../../../../../assets/img/xny_top_qt.png" />
                        <div style="float: right;margin-left: 10px;">
                            <p style="line-height: 22px;">其他</p>
                            <p style="line-height: 22px;">
                                <span style="font-size: 20px;color: #88EAED;">{{xnyGkData.qt}}</span>家
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;">
            <div class="dateSelect" style="height: 50px;">
                <div class="sx"></div>
                <div class="tj_z">新能源项目</div>
                <div class="timeYear">{{pro_count}}</div>
                <div class="timeYear">个</div>
            </div>
            <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 10px;"></div>
            <div style="width: 93%;margin: auto;margin-top: 12px;">
                <div style="display:flex;">
                    <div id="myCharts1" ref="myCharts1" style="height:220px;width:93%;"></div>
                </div>
            </div>
        </div>
        <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;">
            <div class="dateSelect" style="height: 50px;">
                <div class="sx"></div>
                <div class="tj_z">新能源项目年度发电量</div>
                <div class="timeYear" style="font-size: 15px;" @click="showDatePicker()">{{nowYear}}</div>
                <div class="timeYear" style="font-size: 15px;">年</div>
                <img class="xl" src="../../../../../assets/img/air_data_arrow.png" />
            </div>
            <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 10px;"></div>
            <div style="width: 95%;margin: auto;margin-top: 12px;">
                <div style="display:flex;">
                    <div id="myCharts2" ref="myCharts2" style="height:220px;width:93%;"></div>
                </div>
            </div>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '200px' }">
            <van-datetime-picker v-model="currentDate" type="year-month" style="height: 200px;" :min-date="minDate"
                :max-date="maxDate" @confirm="onconfirm" :formatter="formatter" @cancel="hideDataPicker" />
        </van-popup>
    </div>
</template>

<style>
    @import "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.css";
    @import "../../../../../assets/css/frozenui.css";
</style>
<script>
    import echarts from "echarts";
    import $ from "jquery";
    import { httpMethod } from "../../../../../api/getData.js";
    import { nytsXnyGkJs } from "./nyts_xny_gk.js";
    export default {
        props: ["getChild"],
        data() {
            return {
                qylxCount_DataList: { gq: 0, yq: 0, wq: 0, mq: 0, zs: 0 },
                indexMonth: "",
                show: false,
                nowYear: "",
                currentDate: new Date(),
                maxDate: new Date(),
                minDate: new Date(2018, 0, 1),
                xnyGkData: { gd: 0, fd: 0, swzfd: 0, qt: 0, sd: 0 },
                xnyGkSum: 0,
                pro_count: 0
            };
        },
        mounted() {
            this.getHomeData();
            this.getHomeData1(this.nowYear);
            this.getHomeData2();
        },
        methods: {
            //第一个头
            getHomeData: function () {
                var self = this;
                var params = {};
                //获取数据
                httpMethod
                    .getXnyTjPhase(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            self.pro_count = 0;
                            $.each(res.dataList, function (i, v) {
                                if (v.xms != null) {
                                    self.pro_count += v.xms;
                                }
                            });
                            self.getOneEchars(echarts, myCharts1, res.dataList);
                        }
                    })
                    .catch(err => { });
            },
            getHomeData1: function (date) {
                var self = this;
                var params = {
                    type: "1",
                    dateYear: date
                };
                //获取数据
                httpMethod
                    .getXnyTjPhase(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            if(this.nowYear == ''){
                                this.nowYear = res.dateYear.substr(0, 4);
                            }
                            var arr = res.dataList;
                            for (var j = 0; j < arr.length - 1; j++) {
                                //两两比较，如果前一个比后一个大，则交换位置。
                                for (var i = 0; i < arr.length - 1 - j; i++) {
                                    var a = arr[i].nfdl!=null?arr[i].nfdl:0;
                                    var b = arr[i + 1].nfdl!=null?arr[i + 1].nfdl:0;
                                    if (a > b) {
                                        var temp = arr[i];
                                        arr[i] = arr[i + 1];
                                        arr[i + 1] = temp;
                                    }
                                }
                            }
                            this.getTwoEchars(echarts, myCharts2,arr);
                        }
                    })
                    .catch(err => { });
            },
            //第一个头
            getHomeData2: function () {
                var self = this;
                var params = {};
                //获取数据
                httpMethod
                    .entStatistics(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            self.xnyGkSum = 0;
                            $.each(res.dataList, function (i, v) {
                                switch (v.typecode) {
                                    case "1":
                                        self.xnyGkData.gd = v.js;
                                        break;
                                    case "2":
                                        self.xnyGkData.fd = v.js;
                                        break;
                                    case "3":
                                        self.xnyGkData.swzfd = v.js;
                                        break;
                                    case "4":
                                        self.xnyGkData.sd = v.js;
                                        break;
                                    case "5":
                                        self.xnyGkData.qt = v.js;
                                        break;
                                    default:
                                        break;
                                }
                                if (v.js != null) {
                                    self.xnyGkSum += v.js;
                                }
                            });
                        }
                    })
                    .catch(err => { });
            },
            //初始化第一个图表
            getOneEchars: function (echarts, value, data) {
                nytsXnyGkJs.showjmrjsrEchars1(echarts, value, data);
            },
            //初始化第一个图表
            getTwoEchars: function (echarts, value, data) {
                nytsXnyGkJs.showjmrjsrEchars2(echarts, value, data);
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
                this.getHomeData1(this.nowYear);
            },
            showDatePicker() {
                this.show = true;
            },
            hideDataPicker() {
                this.show = false;
            }
        }
    };
</script>