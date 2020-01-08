<style>
    .xny_qyxq_qyxzImg {
        height: 20px;
    }

    .xny_qyxq_qygmImg {
        height: 20px;
    }

    .xny_qyxq_qylxImg {
        height: 20px;
    }

    .mcq_qyxq_icon {
        height: 20px;
    }

    .wry_tj_table_title_p {
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        padding: 11px 0px 11px 0px;
        margin: 0 auto;
        writing-mode: tb-rl;
    }

    .trigger {
        text-align: center;
    }

    tr {
        height: 40px;
    }
</style>
<template>
    <div style="margin-top:45px;overflow:hidden;background: rgb(247, 247, 247);">
        <div style="background:#ffffff;height:400px;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;">
                <div style="font-weight: 600; font-size: 17px;  color: #2796e7;">{{compDetail.ent_name}}</div>
                <div style="margin-top: 10px;">
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 1"
                        src="../../../../../../assets/img/xny-qy-gyqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 2"
                        src="../../../../../../assets/img/xny-qy-jtsyzqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 3"
                        src="../../../../../../assets/img/xny-qy-lyqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 4"
                        src="../../../../../../assets/img/xny-qy-szqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 5"
                        src="../../../../../../assets/img/xny-qy-syqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 6"
                        src="../../../../../../assets/img/xny-qy-qtqy.png" />

                    <img class="xny_qyxq_qygmImg" v-if="compDetail.ent_scale == 1"
                        src="../../../../../../assets/img/xny-qy-dx.png" />
                    <img class="xny_qyxq_qygmImg" v-if="compDetail.ent_scale == 2"
                        src="../../../../../../assets/img/xny-qy-zx.png" />
                    <img class="xny_qyxq_qygmImg" v-if="compDetail.ent_scale == 3"
                        src="../../../../../../assets/img/xny-qy-xx.png" />


                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 1"
                        src="../../../../../../assets/img/xny-qy-gd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 2"
                        src="../../../../../../assets/img/xny-qy-fd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 3"
                        src="../../../../../../assets/img/xny-qy-swzfd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 4"
                        src="../../../../../../assets/img/xny-qy-sd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 5"
                        src="../../../../../../assets/img/xny-qy-qt.png" />

                </div>
                <div style="margin-top: 15px;">
                    <div>
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon17.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">地址</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;width: 50%;">{{compDetail.ent_address}}</span>
                        </div>
                    </div>
                    <div style="min-height: 60px;margin-top: 15px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon3.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">法人代表</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{compDetail.legal_behalf}}</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon19.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">联系方式</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{compDetail.phone_contacts}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="min-height: 60px;margin-top: 15px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon26.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">隶属主体</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{compDetail.ent_nature}}</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon5.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">瓦斯等级</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{compDetail.gas_level}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="min-height: 60px;margin-top: 30px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon27.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">规模</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{compDetail.ent_scale}}</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon9.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">煤矿性质</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{compDetail.ent_type}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;clear: both;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon18.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">统一社会信用代码</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;width: 50%;">{{compDetail.credit_code}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background:#ffffff;height:310px;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;">
                <div class="dateSelect" style="height: 50px;">
                    <div class="sx"></div>
                    <div class="tj_z">产量产值变化趋势图</div>
                    <div style="font-size: 15px;" class="timeYear" @click="showDatePicker()">{{nowYear}}年</div>
                    <img class="xl" src="../../../../../../assets/img/air_data_arrow.png" />
                </div>
                <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
                <div style="width: 100%;margin: auto;margin-top: 12px;">
                    <div style="display:flex;">
                        <div id="myCharts1" ref="myCharts1" style="height:220px;width:93%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background:#ffffff;height:889px;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;">
                <div class="dateSelect" style="height: 50px;">
                    <div class="sx"></div>
                    <div class="tj_z">产量产值基本信息</div>
                    <div style="font-size: 15px;" class="timeYear" @click="showDatePicker1()">{{nowYear1}}年{{nowMonth}}月</div>
                    <img class="xl" src="../../../../../../assets/img/air_data_arrow.png" />
                </div>
                <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
                <div id="nymt_mcq_company_deali_content1_div_id">
                    <div id="" style="margin-top: 10px;">
                        <table border="1" cellspacing="0" cellpadding="0"
                            style='margin-top: 5px;width:100%;border: #d3edff;'>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec; width: 12%;" rowspan="4">
                                    <p class="wry_tj_table_title_p">原&nbsp&nbsp&nbsp煤&nbsp&nbsp&nbsp产&nbsp&nbsp&nbsp量</p>
                                </td>
                                <td class='trigger ' style="background-color: #e9f6ff;width: 58%;">
                                    本月实际
                                </td>
                                <td class='trigger '>
                                    {{mapcl.lmcl_this_month}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;width: 58%;">
                                    本年本月止累计
                                </td>
                                <td class='trigger '>
                                    {{mapcl.lmcl_lj_year}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;width: 58%;">
                                    去年同期累计
                                </td>
                                <td class='trigger '>
                                    {{mapcl.lmcl_synchronous}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;width: 58%;">
                                    比去年同期增减（±%）
                                </td>
                                <td class='trigger '>
                                    {{mapcl.lmcl_yonydata}}
                                    <img v-if="mapcl.lmcl_flag == 1"
                                        style="height: 15px;" src="../../../../../../assets/img/eco_rise.png" />
                                    <img v-if="mapcl.lmcl_flag == 2"
                                        style="height: 15px;" src="../../../../../../assets/img/eco_down.png" />
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec;" rowspan="4">
                                    <p class="wry_tj_table_title_p">商&nbsp&nbsp品&nbsp&nbsp煤&nbsp&nbsp产&nbsp&nbsp量</p>
                                </td>
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本月实际
                                </td>
                                <td class='trigger '>
                                    {{mapcl.spmcl_this_month}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本年本月止累计
                                </td>
                                <td class='trigger '>
                                    {{mapcl.spmcl_lj_year}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    去年同期累计
                                </td>
                                <td class='trigger '>
                                    {{mapcl.spmcl_synchronous}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    比去年同期增减（±%）
                                </td>
                                <td class='trigger '>
                                    {{mapcl.spmcl_yonydata}}
                                     <img v-if="mapcl.spmcl_flag == 1"
                                        style="height: 15px;" src="../../../../../../assets/img/eco_rise.png" />
                                    <img v-if="mapcl.spmcl_flag == 2"
                                        style="height: 15px;" src="../../../../../../assets/img/eco_down.png" />
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec; " rowspan="4">
                                    <p class="wry_tj_table_title_p">动&nbsp力&nbsp精&nbsp炼&nbsp煤&nbsp产&nbsp量</p>
                                </td>
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本月实际
                                </td>
                                <td class='trigger '>
                                    {{mapcl.jmcl_this_month}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本年本月止累计
                                </td>
                                <td class='trigger '>
                                    {{mapcl.jmcl_lj_year}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    去年同期累计
                                </td>
                                <td class='trigger '>
                                    {{mapcl.jmcl_synchronous}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    比去年同期增减（±%）
                                </td>
                                <td class='trigger '>
                                    {{mapcl.jmcl_yonydata}}
                                    <img v-if="mapcl.jmcl_flag == 1"
                                       style="height: 15px;" src="../../../../../../assets/img/eco_rise.png" />
                                   <img v-if="mapcl.jmcl_flag == 2"
                                       style="height: 15px;" src="../../../../../../assets/img/eco_down.png" />
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec;" rowspan="4">
                                    <p class="wry_tj_table_title_p">工&nbsp&nbsp业&nbsp&nbsp总&nbsp&nbsp产&nbsp&nbsp值</p>
                                </td>
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本月实际
                                </td>
                                <td class='trigger '>
                                    {{mapcz.value_this_month}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本年本月止累计
                                </td>
                                <td class='trigger '>
                                    {{mapcz.value_lj_year}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    去年同期累计
                                </td>
                                <td class='trigger '>
                                    {{mapcz.value_synchronous}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    比去年同期增减（±%）
                                </td>
                                <td class='trigger '>
                                    {{mapcz.value_yonydata}}
                                    <img v-if="mapcz.value_flag == 1"
                                       style="height: 15px;" src="../../../../../../assets/img/eco_rise.png" />
                                   <img v-if="mapcz.value_flag == 2"
                                       style="height: 15px;" src="../../../../../../assets/img/eco_down.png" />
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td style="background: #3ca1ec; " rowspan="4">
                                    <p class="wry_tj_table_title_p">工&nbsp业&nbsp销&nbsp售&nbsp产&nbsp值</p>
                                </td>
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本月实际
                                </td>
                                <td class='trigger '>
                                    {{mapcz.sales_value_this_month}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    本年本月止累计
                                </td>
                                <td class='trigger '>
                                    {{mapcz.sales_value_lj_year}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    去年同期累计
                                </td>
                                <td class='trigger '>
                                    {{mapcz.sales_value_synchronous}}
                                </td>
                            </tr>
                            <tr id="table_title1">
                                <td class='trigger ' style="background-color: #e9f6ff;">
                                    比去年同期增减（±%）
                                </td>
                                <td class='trigger '>
                                    {{mapcz.sales_value_yonydata}}
                                    <img v-if="mapcz.sales_value_flag == 1"
                                       style="height: 15px;" src="../../../../../../assets/img/eco_rise.png" />
                                   <img v-if="mapcz.sales_value_flag == 2"
                                       style="height: 15px;" src="../../../../../../assets/img/eco_down.png" />
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '200px' }">
            <van-datetime-picker v-model="currentDate" type="year-month" style="height: 200px;" :min-date="minDate"
                :max-date="maxDate" @confirm="onconfirm" :formatter="formatter" @cancel="hideDataPicker" />
        </van-popup>
        <van-popup v-model="show1" position="bottom" :style="{ height: '200px' }">
            <van-datetime-picker v-model="currentDate1" type="year-month" style="height: 200px;" :min-date="minDate"
                :max-date="maxDate" @confirm="onconfirm1" :formatter="formatter1" @cancel="hideDataPicker1" />
        </van-popup>
    </div>
</template>
<script>
    import $ from "jquery";
    import echarts from "echarts";
    import { httpMethod } from "../../../../../../api/getData.js";
    import { nytsMtQylbDetailJs } from "./nyts_mt_qylb_detail.js"
    export default {
        data() {
            return {
                compDetail: {},
                show: false,
                show1: false,
                nowYear:"",
                nowYear1: "",
                nowMonth:"",
                currentDate: new Date(),
                currentDate1: new Date(),
                maxDate: new Date(),
                minDate: new Date(2018, 0, 1),
                mapcl: {},
                mapcz: {},
            };
        },
        mounted() {
            let data = this.$route.params.entity;
            switch (data.gas_level) {
                case "1":
                    data.gas_level = "突出";
                    break;
                case "2":
                    data.gas_level = "高瓦斯";
                    break;
                case "3":
                    data.gas_level = "低瓦斯";
                    break;
                default:
                    break;
            };
            switch (data.ent_type) {
                case "1":
                    data.ent_type = "生产";
                    break;
                case "2":
                    data.ent_type = "建设";
                    break;
                default:
                    break;
            };
            if (data.ent_scale != null && data.ent_scale != "") {
                data.ent_scale += "万吨"
            }
            this.compDetail = data;
            if(this.nowYear1 != '' && this.monthDate == ''){
                this.getHomeData(this.compDetail.id, this.nowYear, this.nowYear1 + "-" + this.nowMonth);
            }else{
                 this.getHomeData(this.compDetail.id, this.nowYear, '');
            }
        },
        methods: {
            getHomeData: function (id, yearDate, monthDate) {
                var self = this;
                var params = {
                    ent_id: id,
                    dateYear: yearDate,
                    dateMonth: monthDate
                };
                //获取数据
                httpMethod
                    .getMtEntIdOutputTj(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            this.nowYear = res.tjListDate;
                            this.nowYear1 = res.mapclDate.substr(0,4);
                            this.nowMonth = res.mapclDate.substr(5,6);
                            this.getOneEchars(echarts, myCharts1, res.tjList);
                            var data1 = res.mapcl;
                            var data2 = res.mapcz;
                            if(data1.lmcl_this_month == null || data1.lmcl_this_month == ""){
                                data1.lmcl_this_month = 0;
                            }
                            if(data1.lmcl_lj_year == null || data1.lmcl_lj_year == ""){
                                data1.lmcl_lj_year = 0;
                            }
                            if(data1.lmcl_synchronous == null || data1.lmcl_synchronous == ""){
                                data1.lmcl_synchronous = 0;
                            }
                            if(data1.lmcl_yonydata == null || data1.lmcl_yonydata == ""){
                                data1.lmcl_yonydata = 0;
                                data1.lmcl_flag = 0;
                            }else if(data1.lmcl_yonydata > 0){
                                data1.lmcl_flag = 1;
                            }else if(data1.lmcl_yonydata < 0){
                                data1.lmcl_yonydata = Math.abs(data1.lmcl_yonydata) ;
                                data1.lmcl_flag = 2;
                            }
                            if(data1.spmcl_this_month == null || data1.spmcl_this_month == ""){
                                data1.spmcl_this_month = 0;
                            }
                            if(data1.spmcl_lj_year == null || data1.spmcl_lj_year == ""){
                                data1.spmcl_lj_year = 0;
                            }
                            if(data1.spmcl_synchronous == null || data1.spmcl_synchronous == ""){
                                data1.spmcl_synchronous = 0;
                            }
                            if(data1.spmcl_yonydata == null || data1.spmcl_yonydata == ""){
                                data1.spmcl_yonydata = 0;
                                data1.spmcl_flag = 0;
                            }else if(data1.spmcl_yonydata > 0){
                                data1.spmcl_flag = 1;
                            }else if(data1.spmcl_yonydata < 0){
                                data1.spmcl_yonydata = Math.abs(data1.spmcl_yonydata) ;
                                data1.spmcl_flag = 2;
                            }
                            if(data1.jmcl_this_month == null || data1.jmcl_this_month == ""){
                                data1.jmcl_this_month = 0;
                            }
                            if(data1.jmcl_lj_year == null || data1.jmcl_lj_year == ""){
                                data1.jmcl_lj_year = 0;
                            }
                            if(data1.jmcl_synchronous == null || data1.jmcl_synchronous == ""){
                                data1.jmcl_synchronous = 0;
                            }
                            if(data1.jmcl_yonydata == null || data1.jmcl_yonydata == ""){
                                data1.jmcl_yonydata = 0;
                                data1.jmcl_flag = 0;
                            }else if(data1.jmcl_yonydata > 0){
                                data1.jmcl_flag = 1;
                            }else if(data1.jmcl_yonydata < 0){
                                data1.jmcl_yonydata = Math.abs(data1.jmcl_yonydata) ;
                                data1.jmcl_flag = 2;
                            }
                            this.mapcl = data1;
                            if(data2.value_this_month == null || data2.value_this_month == ""){
                                data2.value_this_month = 0;
                            }
                            if(data2.value_lj_year == null || data2.value_lj_year == ""){
                                data2.value_lj_year = 0;
                            }
                            if(data2.value_synchronous == null || data2.value_synchronous == ""){
                                data2.value_synchronous = 0;
                            }
                            if(data2.value_yonydata == null || data2.value_yonydata == ""){
                                data2.value_yonydata = 0;
                                data2.value_flag = 0;
                            }else if(data2.value_yonydata > 0){
                                data2.value_flag = 1;
                            }else if(data2.value_yonydata < 0){
                                data2.value_yonydata = Math.abs(data2.value_yonydata) ;
                                data2.value_flag = 2;
                            }
                            if(data2.sales_value_this_month == null || data2.sales_value_this_month == ""){
                                data2.sales_value_this_month = 0;
                            }
                            if(data2.sales_value_lj_year == null || data2.sales_value_lj_year == ""){
                                data2.sales_value_lj_year = 0;
                            }
                            if(data2.sales_value_synchronous == null || data2.sales_value_synchronous == ""){
                                data2.sales_value_synchronous = 0;
                            }
                            if(data2.sales_value_yonydata == null || data2.sales_value_yonydata == ""){
                                data2.sales_value_yonydata = 0;
                                data2.sales_value_flag = 0;
                            }else if(data2.sales_value_yonydata > 0){
                                data2.sales_value_flag = 1;
                            }else if(data2.sales_value_yonydata < 0){
                                data2.sales_value_yonydata = Math.abs(data2.sales_value_yonydata) ;
                                data2.sales_value_flag = 2;
                            }
                            this.mapcz = data2;
                            
                        }
                    })
                    .catch(err => { });
            },
            formatter(type, value) {
                if (type === "year") {
                    return `${value}年`;
                };
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
                this.nowYear1 = this.currentDate1.getFullYear();
                this.nowMonth = this.currentDate1.getMonth() + 1;
                let dateMonth = this.nowYear1 + "-" + this.nowMonth;
                //this.$refs.child1.changeTitme(this.nowYear);
                this.getHomeData(this.compDetail.id, this.nowYear,dateMonth);
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
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
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
                let dateMonth = this.nowYear1 + "-" + this.nowMonth;
                this.getHomeData(this.compDetail.id, this.nowYear, dateMonth);
                this.show1 = false;
            },
            //初始化第一个图表
            getOneEchars: function (echarts, value, data) {
                nytsMtQylbDetailJs.showjmrjsrEchars1(echarts, value, data);
            },
        }
    }

</script>