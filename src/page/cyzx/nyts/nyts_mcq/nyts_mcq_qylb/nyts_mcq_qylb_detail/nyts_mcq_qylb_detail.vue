<style scoped>
.mcq_xmlb_deali_font_style{
    font-size:15px;
    margin-left: 2px;
}
.mcq_xmlb_deali_content_font_style{
    font-size:15px;
    margin-top: 8px;
    margin-left: 15px;
}
    .mcq_qyxq_qyxzImg {
        width: 45px;
    }

    .mcq_qyxq_qygmImg {
        height: 23px;
    }

    .mcq_qyxq_icon {
        height: 20px;
        width: 20px;
    }

    .wry_tj_table_title_p {
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        padding: 11px 0px 11px 0px;
        margin: 0 auto;
        width:24px;
    }

    .trigger {
        text-align: center;
    }
    #compDetail span{
            margin-left: -18px;
    }
    td{
        font-size:14px;
    }
</style>
<template>
    <div style="margin-top:45px;overflow:hidden;background: rgb(247, 247, 247);">
        <div style="background:#ffffff;height:auto;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;" id="compDetail">
                <div style="font-weight: 600; font-size: 17px;  color: #2796e7;">{{compDetail.ent_name}}</div>
                <div style="margin-top: 10px;font-size:14px;">
                    <img class="mcq_qyxq_qyxzImg" v-if="compDetail.ent_nature == 1"
                        src="../../../../../../assets/img/mcq-gq.png" />
                    <img class="mcq_qyxq_qyxzImg" v-if="compDetail.ent_nature == 2"
                        src="../../../../../../assets/img/mcq-yq.png" />
                    <img class="mcq_qyxq_qyxzImg" v-if="compDetail.ent_nature == 3"
                        src="../../../../../../assets/img/mcq-wq.png" />
                    <img class="mcq_qyxq_qyxzImg" v-if="compDetail.ent_nature == 4"
                        src="../../../../../../assets/img/mcq-mq.png" />

                    <img class="mcq_qyxq_qygmImg" v-if="compDetail.ent_scale == 1"
                        src="../../../../../../assets/img/xny-qy-dx.png" />
                    <img class="mcq_qyxq_qygmImg" v-if="compDetail.ent_scale == 2"
                        src="../../../../../../assets/img/xny-qy-dx.png" />
                    <img class="mcq_qyxq_qygmImg" v-if="compDetail.ent_scale == 3"
                        src="../../../../../../assets/img/xny-qy-dx.png" />
                </div>
                <div style="margin-top: 10px;">
                    <div>
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon17.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">地址</div>
                        </div>
                        <div class="mcq_xmlb_deali_content_font_style">
                            <span style="width: 50%;">{{compDetail.ent_address}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: left;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon25.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">所属区县</div>
                        </div>
                        <div class="mcq_xmlb_deali_content_font_style">
                            <span>{{compDetail.counties}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: right;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon3.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">法人代表</div>
                        </div>
                        <div class="mcq_xmlb_deali_content_font_style">
                            <span >{{compDetail.legal_behalf}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: left;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon19.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">联系方式</div>
                        </div>
                        <div class="mcq_xmlb_deali_content_font_style">
                            <span >{{compDetail.phone_contacts}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: right;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon20.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">组织机构代码</div>
                        </div>
                        <div class="mcq_xmlb_deali_content_font_style">
                            <span >{{compDetail.institution_code}}</span>
                        </div>
                    </div>
                    <div style="margin-top: 135px;clear: both;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon18.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">统一社会信用代码</div>
                        </div>
                        <div class="mcq_xmlb_deali_content_font_style">
                            <span style="width: 50%;">{{compDetail.credit_code}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background:#ffffff;height:300px;width:100%;margin-top:5px;">
            <div style="margin: 10px 8px 10px 8px;">
                <div class="dateSelect" style="height: 50px;">
                    <div class="sx"></div>
                    <div class="tj_z">煤层气企业抽采利用情况统计图</div>
                    <div style="font-size: 15px;" class="timeYear" @click="showDatePicker()">{{nowYear}}年</div>
                    <img class="xl" src="../../../../../../assets/img/air_data_arrow.png" />
                </div>
                <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
                <div style="width: 93%;margin: auto;margin-top: 12px;">
                    <div style="display:flex;">
                        <div id="myCharts1" ref="myCharts1" style="height:220px;width:93%;"></div>
                    </div>
                </div>
            </div>
        </div>

        <div style="background:#ffffff;height:auto;width:100%;margin-top:5px;">
            <div style="margin: 10px 8px 10px 8px;">
                <div class="dateSelect" style="height: 50px;">
                    <div class="sx"></div>
                    <div class="tj_z">煤层气企业抽采利用情况统计表格</div>
                    <div style="font-size: 15px;" class="timeYear" @click="showDatePicker1()">{{nowYear1}}年{{nowMonth}}月
                    </div>
                    <img class="xl" src="../../../../../../assets/img/air_data_arrow.png" />
                </div>
                <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
                <div id="nymt_mcq_company_deali_content1_div_id">
                    <div id style="margin-top: 10px;">
                        <table border="1" cellspacing="0" cellpadding="0"
                            style="margin-top: 5px;width:100%;border: #d3edff;border-collapse: collapse;">
                            <tr id="table_title1">
                                <td style="background: #3ca1ec; width: 40%;" colspan="2" rowspan="2">
                                    <p class="wry_tj_table_title_p">煤层气产量(万立方米)</p>
                                </td>
                                <td class="trigger" style="background-color: #e9f6ff;width: 20%;">本月</td>
                                <td class="trigger">{{tableData!=null?tableData.production_month:0}}</td>
                            </tr>
                            <tr id="table_title1">
                                <td class="trigger" style="background-color: #e9f6ff;">1-本月</td>
                                <td class="trigger">{{tableData!=null?tableData.production_month_total:0}}</td>
                            </tr>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec;" rowspan="4">
                                    <p class="wry_tj_table_title_p">煤层气利用量(万立方米)</p>
                                </td>
                                <td style="background: #3ca1ec;" rowspan="2">
                                    <p class="wry_tj_table_title_p">自用量</p>
                                </td>
                                <td class="trigger" style="background-color: #e9f6ff;">本月</td>
                                <td class="trigger">{{tableData!=null?tableData.plant_demand_month:0}}</td>
                            </tr>
                            <tr id="table_title1">
                                <td class="trigger" style="background-color: #e9f6ff;">1-本月</td>
                                <td class="trigger">{{tableData!=null?tableData.plant_demand_month_total:0}}</td>
                            </tr>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec;" rowspan="2">
                                    <p class="wry_tj_table_title_p">管道外输量</p>
                                </td>
                                <td class="trigger" style="background-color: #e9f6ff;">本月</td>
                                <td class="trigger">{{tableData!=null?tableData.the_throughput_month:0}}</td>
                            </tr>
                            <tr id="table_title1">
                                <td class="trigger" style="background-color: #e9f6ff;">1-本月</td>
                                <td class="trigger">{{tableData!=null?tableData.the_throughput_month_total:0}}</td>
                            </tr>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec;" colspan="2" rowspan="2">
                                    <p class="wry_tj_table_title_p">煤层气利用率(%)</p>
                                </td>
                                <td class="trigger" style="background-color: #e9f6ff;">本月</td>
                                <td class="trigger">
                                    {{tableData!=null?tableData.use_ratio_month:0}}</td>
                            </tr>
                            <tr id="table_title1">
                                <td class="trigger" style="background-color: #e9f6ff;">1-本月</td>
                                <td class="trigger">
                                    {{tableData!=null?tableData.use_ratio_month_total:0}}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <van-popup v-model="show" @opened="openPopYear" position="bottom" :style="{ height: '200px',overflow:'hidden' }">
            <van-datetime-picker v-model="currentDate" type="year-month" style="height: 200px;" :min-date="minDate"
                :max-date="maxDate" @confirm="onconfirm" :formatter="formatter" @cancel="hideDataPicker" />
        </van-popup>
        <van-popup v-model="show1" position="bottom" :style="{ height: '200px',overflow:'hidden' }">
            <van-datetime-picker v-model="currentDate1" type="year-month" style="height: 200px;" :min-date="minDate"
                :max-date="maxDate" @confirm="onconfirm1" :formatter="formatter1" @cancel="hideDataPicker1" />
        </van-popup>
    </div>
</template>
<script>
    import $ from "jquery";
    import echarts from "echarts";
    import { httpMethod } from "../../../../../../api/getData.js";
    import { nytsMcqQylbDetailJs } from "./nyts_mcq_qylb_detail.js";
    // import eruda from 'eruda';
    // eruda.init();
    export default {
        data() {
            return {
                compDetail: {},
                show: false,
                show1: false,
                nowYear: "",
                nowYear1: "",
                nowMonth: "",
                currentDate: new Date(),
                currentDate1: new Date(),
                maxDate: new Date(),
                minDate: new Date(2018, 0, 1),
                tableData: {
                }
            };
        },
        mounted() {
            let data = this.$route.params.entity;
            switch (data.counties) {
                case "1":
                    data.counties = "市直";
                    break;
                case "2":
                    data.counties = "城区";
                    break;
                case "3":
                    data.counties = "泽州县";
                    break;
                case "4":
                    data.counties = "沁水县";
                    break;
                case "5":
                    data.counties = "高平市";
                    break;
                case "6":
                    data.counties = "阳城县";
                    break;
                case "7":
                    data.counties = "陵川县";
                    break;
                default:
                    break;
            }
            this.compDetail = data;
            this.getHomeData(this.compDetail.id, "");
            this.getHomeData1("", "");
        },
        methods: {
            //开启年时间选择
    openPopYear: function() {
      console.log("111");
      $(".van-picker__columns")
        .find(".van-picker-column")
        .eq(1)
        .hide();
    },
            getHomeData: function (id, date) {
                var self = this;
                var params = {
                    ent_id: id,
                    dateMonth: date
                };
                //获取数据
                httpMethod
                    .getMcqStatistical(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            this.nowYear = res.dateMonth.substr(0, 4);
                            this.getOneEchars(echarts, myCharts1, res.dataTj);
                        }
                    })
                    .catch(err => { });
            },
            getHomeData1: function (id, date) {
                var self = this;
                var params = {
                    ent_id: id,
                    dateMonth: date
                };
                //获取数据
                httpMethod
                    .getMcqStatistical(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            if (this.nowYear1 == "") {
                                this.nowYear1 = res.dateMonth.substr(0, 4);
                            }
                            if (this.nowMonth == "") {
                                this.nowMonth = res.dateMonth.substr(5, 6);
                            }
                            if (res.dateFrom != null && res.dateFrom.length > 0) {
                                this.tableData = res.dateFrom[0];
                            } else {
                                this.tableData = null;
                            }
                            console.log(this.tableData)
                        }
                    })
                    .catch(err => { });
            },
            formatter(type, value) {
                if (type === "year") {
                    return `${value}年`;
                }
                return "";
            },
            timeFormat(time) {
                // 时间格式化 2019
                let year = time.getFullYear();
                return year;
            },
            onconfirm() {
                this.nowYear = this.timeFormat(this.currentDate);
                this.show = false;
                //this.$refs.child1.changeTitme(this.nowYear);
                this.getHomeData(this.compDetail.id, this.nowYear);
            },

            showDatePicker() {
                this.show = true;
            },
            hideDataPicker() {
                this.show = false;
            },
            showDatePicker1() {
                this.show1 = true;
            },
            formatter1(type, value) {
                if (type === "year") {
                    return `${value}年`;
                } else if (type === "month") {
                    return `${value}月`;
                }
                return value;
            },
            hideDataPicker1() {
                this.show1 = false;
            },
            onconfirm1() {
                this.nowYear1 = this.currentDate1.getFullYear();
                this.nowMonth = this.currentDate1.getMonth() + 1;
                let dateMonth = "";
                if(this.nowMonth < 10){
                    dateMonth = this.nowYear1 + "-0" + this.nowMonth;
                }else{
                    dateMonth = this.nowYear1 + "-" + this.nowMonth;
                }
                this.getHomeData1("", dateMonth);
                this.show1 = false;
            },
            //初始化第一个图表
            getOneEchars: function (echarts, value, data) {
                nytsMcqQylbDetailJs.showjmrjsrEchars1(echarts, value, data);
            }
        }
    };
</script>
<style scoped>
 @import "../../../../../../page/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb_detail/nyts_mcq_qylb_detail.css";
</style>