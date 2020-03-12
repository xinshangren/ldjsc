<style scoped>
    .xny_xmlb_xmjdImg {
        height: 20px;
    }

    .xny_xmlb_xmlxImg {
        height: 20px;
    }

    .mcq_qyxq_icon {
        height: 20px;
    }
    #proDetail span{
        margin-left: -18px;
    }
</style>
<template>
    <div style="overflow:hidden;background: rgb(247, 247, 247);">
        <div style="background:#ffffff;height:auto;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;" id="proDetail">
                <div style="font-weight: 600; font-size: 17px;  color: #2796e7;">{{compDetail.pro_name}}</div>
                <div style="margin-top: 10px;font-size:15px;">
                    <div style="margin-top: 6px;">
                        <img class="xny_xmlb_xmlxImg" v-if="compDetail.pro_type == 1"
                            src="../../../../../../assets/img/xny-qy-gd.png" />
                        <img class="xny_xmlb_xmlxImg" v-if="compDetail.pro_type == 2"
                            src="../../../../../../assets/img/xny-qy-fd.png" />
                        <img class="xny_xmlb_xmlxImg" v-if="compDetail.pro_type == 3"
                            src="../../../../../../assets/img/xny-qy-swzfd.png" />
                        <img class="xny_xmlb_xmlxImg" v-if="compDetail.pro_type == 4"
                            src="../../../../../../assets/img/xny-qy-sd.png" />
                        <img class="xny_xmlb_xmlxImg" v-if="compDetail.pro_type == 5"
                            src="../../../../../../assets/img/xny-qy-qt.png" />
                        <img class="xny_xmlb_xmjdImg" v-if="compDetail.project_phase == 1"
                            src="../../../../../../assets/img/xny-xm-zj.png" />
                        <img class="xny_xmlb_xmjdImg" v-if="compDetail.project_phase == 2"
                            src="../../../../../../assets/img/xny-xm-yyx.png" />
                        <img class="xny_xmlb_xmjdImg" v-if="compDetail.project_phase == 3"
                            src="../../../../../../assets/img/xny-xm-tjqq.png" />
                        <img class="xny_xmlb_xmjdImg" v-if="compDetail.project_phase == 4"
                            src="../../../../../../assets/img/xny-xm-xz.png" />
                    </div>
                </div>
                <div style="margin-top: 10px;">
                    <div>
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon21.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">企业名称</div>
                        </div>
                        <div class="xny_xmlb_deali_content_font_style">
                            <span style="width: 50%;">{{compDetail.ent_name}}</span>
                        </div>
                    </div>
                    <div style="min-height: 60px;">
                        <div style="width: 50%;float: left;margin-top: 15px;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon25.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">所属区县</div>
                            </div>
                            <div class="xny_xmlb_deali_content_font_style">
                                <span style="">{{compDetail.counties}}</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;margin-top: 15px;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon21.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">装机容量</div>
                            </div>
                            <div class="xny_xmlb_deali_content_font_style">
                                <span style="">{{compDetail.installed_capacity}}万kw</span>
                            </div>
                        </div>
                    </div>
                    <div style="min-height: 60px;max-height: 84px;">
                        <div style="width: 50%;float: left;margin-top: 15px;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon12.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">核准（备案）时间</div>
                            </div>
                            <div class="xny_xmlb_deali_content_font_style">
                                <span style="">{{compDetail.records_time}}</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;margin-top: 15px;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon23.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">项目年份</div>
                            </div>
                            <div class="xny_xmlb_deali_content_font_style">
                                <span style="width: 50%;">{{compDetail.pro_year}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;clear: both;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon22.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">核准文件名称及文号</div>
                        </div>
                        <div class="xny_xmlb_deali_content_font_style">
                            <span style="">{{compDetail.records_code }}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div style="background:#ffffff;height:300px;width:100%;margin-top:5px;">
            <div style="margin: 10px 8px 10px 8px;">
                <div class="dateSelect" style="height: 50px;">
                    <div class="sx"></div>
                    <div class="tj_z">项目发电量</div>
                </div>
                <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
                <div id="sczzTable" style="border: 1px solid #cccccc;width: 100%;margin-top: 10px;">
                    <div class="ui-row-flex ui-whitespace"
                        style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;">
                        <div class="ui-col ui-col" style="text-align: center;font-size:14px;">时间</div>
                        <div class="ui-col ui-col" style="text-align: center;font-size:14px;">本年度发电量(万千万时)</div>
                    </div>
                    <div class="ui-row-flex ui-whitespace"
                        style="background:#ffffff;font-size:13px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
                        v-for="(item,index) in tableDataList" :key="index">
                        <div class="ui-col ui-col" style="text-align: center;">{{item.report_date}}</div>
                        <div class="ui-col ui-col" style="text-align: center;">{{item.year_capacity}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import echarts from "echarts";
    import { httpMethod } from "../../../../../../api/getData.js";
    export default {
        data() {
            return {
                compDetail: {},
                tableDataList: [],
            };
        },
        mounted() {
            let data = this.$route.params.entity;
            console.log(data);
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
            this.getHomeData(this.compDetail.id);
        },
        methods: {
            getHomeData: function (id, date) {
                var self = this;
                var params = {
                    pro_id: id,
                    dateMonth: date
                };
                //获取数据
                httpMethod
                    .getXnyReport(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            this.tableDataList = res.dataList;
                        }
                    })
                    .catch(err => { });
            }
        }
    };
</script>
<style scoped>
    @import "../../../../../../assets/css/frozenui.css";
    @import "../../../../../../page/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb_detail/nyts_xny_xmlb_detail.css";
</style>