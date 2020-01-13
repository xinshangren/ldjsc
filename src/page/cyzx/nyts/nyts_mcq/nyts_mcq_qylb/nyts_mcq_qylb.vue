<template>
    <div style="margin-top:0px;overflow:hidden;">
        <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
            <form action="/" style="width: 84%;margin-left:13px;margin-top:8px;">
                <van-search placeholder="请输入站点名称" @search="onSearch" v-model="seach_value" />
            </form>
            <img src="../../../../../assets/img/project_filtrate.png"
                style="height: 27px;margin-top: 10px;margin-left:5px;" @click="queryList" />
        </div>
        <div id="count_id" style="display:flex;">
            <div style="width:48%;text-align:right;margin-top:8px;">企业总数</div>
            <div ref="totalCountId" style="color:#1976d2;font-size:24px;">{{compCount}}</div>
            <div style="width:48%;color:#1976d2;margin-top:8px;">家</div>
        </div>

        <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
            <div id="newsList"
                style="margin-top:3px;margin-left:10px;margin-right:10px;box-shadow:1px 1px 2px 3px  #f3f3f3;">
                <div v-for="(item,index) in comp_dataList" :key="index" style="position:relative;"
                    @click="goDetail(item)">
                    <div style="padding:7px;">
                        <div style="display:flex;position:relative;">
                            <p
                                style="font-size: 15px;display: block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                {{item.ent_name}}</p>
                        </div>
                        <div style="display:flex;position:relative;">
                            <div style="float: left;margin-top: 6px;">
                                <img class="qygmImg" v-if="item.ent_nature == 1"
                                    src="../../../../../assets/img/mcq-gq.png" />
                                <img class="qygmImg" v-if="item.ent_nature == 2"
                                    src="../../../../../assets/img/mcq-yq.png" />
                                <img class="qygmImg" v-if="item.ent_nature == 3"
                                    src="../../../../../assets/img/mcq-wq.png" />
                                <img class="qygmImg" v-if="item.ent_nature == 4"
                                    src="../../../../../assets/img/mcq-mq.png" />
                            </div>
                            <div style="margin-left: 30px;margin-top: 6px;">
                                <img class="qyxzImg" v-if="item.ent_scale == 1"
                                    src="../../../../../assets/img/xny-qy-dx.png" />
                                <img class="qyxzImg" v-if="item.ent_scale == 2"
                                    src="../../../../../assets/img/xny-qy-zx.png" />
                                <img class="qyxzImg" v-if="item.ent_scale == 3"
                                    src="../../../../../assets/img/xny-qy-xx.png" />
                            </div>
                        </div>
                        <div style="display:flex;position:relative;">
                            <div>
                                <img style="float: left;height: 13px;margin-top:6px;"
                                    src="../../../../../assets/img/details_icon17.png" />
                                <span
                                    style="margin-left: 5px;font-size: 13px;color: gray;width: 330px;">地址：{{item.ent_address}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="van-hairline--bottom"></div>
                </div>
            </div>
        </mescroll-vue>

        <van-popup v-model="show" position="top" get-container="#count_id" :style="{ height: '80%' }" @opened="openPop"
            style="overflow:hidden;background:rgb(243, 243, 243);">
            <div style="background:#ffffff;">
                <div style="padding-top:9px;font-size: 16px;margin-left:17px;">企业规模</div>
                <ul id="qygmListDialogId" class="ui-row" style="margin-top: 11px;margin-right: 0px;">
                    <li v-for="(item,index) in qygm_dataList" :key="index" :id="(item.typecode)"
                        class="ui-col ui-col-25 dialogNoSelect">{{item.typename}}</li>
                </ul>

                <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
                <div style="padding-top:9px;font-size: 16px;margin-left:17px;">企业性质</div>
                <ul class="ui-row" id="qyxzListDialogId" style="margin-top: 11px;margin-right: 0px;">
                    <li v-for="(item,index) in qyxz_dataList" :key="index" :id="(item.typecode)"
                        class="ui-col ui-col-25 dialogNoSelect">{{item.typename}}</li>
                </ul>
                <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
                <div style="padding-top:9px;font-size: 16px;margin-left:17px;">所属区域</div>
                <ul class="ui-row" id="ssqyListDialogId" style="margin-top: 11px;margin-right: 0px;">
                    <li class="ui-col ui-col-25 dialogNoSelect" id="1" style="width:30%;">市直</li>
                    <li class="ui-col ui-col-25 dialogNoSelect" id="2" style="width:30%;">城区</li>
                    <li class="ui-col ui-col-25 dialogNoSelect" id="3" style="width:30%;">泽州</li>
                    <li class="ui-col ui-col-25 dialogNoSelect" id="4" style="width:30%;">沁水</li>
                    <li class="ui-col ui-col-25 dialogNoSelect" id="5" style="width:30%;">高平</li>
                    <li class="ui-col ui-col-25 dialogNoSelect" id="6" style="width:30%;">阳城</li>
                    <li class="ui-col ui-col-25 dialogNoSelect" id="7" style="width:30%;">陵川</li>
                </ul>

                <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
                <div style="display: flex;background: #f3f3f3;height:110px;">
                    <div @click="clearType"
                        style="width: 50%;height: 36px;background: #ffffff;line-height: 36px;text-align: center;">重置
                    </div>
                    <div @click="clickUlDy"
                        style="background:#3ca1ec;width: 50%;height: 36px;color:#ffffff;line-height: 36px;text-align: center;">
                        确定</div>
                </div>
            </div>
        </van-popup>
    </div>
</template>


<script>
    import echarts from "echarts";
    import $ from "jquery";
    import MescrollVue from "mescroll.js/mescroll.vue";
    import { httpMethod } from "../../../../../api/getData.js";
    import { nytsMcqQylbJs } from "../../../../../page/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb.js";
    export default {
        components: {
            MescrollVue // 注册mescroll组件
        },
        data() {
            return {
                qyxz_dataList: [],
                qygm_dataList: [],
                comp_dataList: [],
                compCount: 0,
                query_params: {
                    ent_scale: "",
                    counties: "",
                    ent_nature: ""
                },
                ent_scale: "",
                counties: "",
                ent_nature: "",
                seach_value: "",
                show: false,
                mescroll: null, // mescroll实例对象
                selectWrwNamePage: 0,
                mescrollDown: {
                    callback: this.downCallback,
                    auto: false
                }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
                mescrollUp: {
                    // 上拉加载的配置.
                    auto: false,
                    callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
                    //以下是一些常用的配置,当然不写也可以的.
                    page: {
                        num: 1, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                        size: 7 //每页数据条数,默认10
                    },
                    htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
                    noMoreSize: 5,
                    empty: {
                        //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
                        warpId: "newsList", //父布局的id (1.3.5版本支持传入dom元素)
                        //icon: "../../../../assets/img/nodata.png", //图标,默认null,支持网络图
                        tip: "暂无相关数据~" //提示
                    }
                }
            };
        },
        beforeCreate() {
            document.querySelector("body").setAttribute("style", "background:#ffffff");
        },
        activated() {
            //返回保留页面记录
            document.querySelector("body").setAttribute("style", "background:#ffffff");
        },
        methods: {
            //企业列表
            upCallback: function (page, mescroll) {
                var params = {
                    ent_name: this.seach_value, //名称
                    ent_scale: this.query_params.ent_scale, //规模
                    counties: this.query_params.counties, //区县
                    ent_nature: this.query_params.ent_nature, //性质
                    page: page.num,
                    pageSize: page.size
                };
                httpMethod
                    .getMcqEnterpriseList(params)
                    .then(res => {
                        console.log(res);
                        if (res.success == "1") {
                            this.qygm_dataList = res.mcqQygm.dataList;
                            this.qyxz_dataList = res.mcqQyxz.dataList;
                            this.comp_dataList = this.comp_dataList.concat(res.dataList);
                            this.compCount = res.total;
                        }
                        this.$nextTick(() => {
                            this.mescroll.endBySize(res.dataList.length, res.total);
                        });
                    })
                    .catch(err => {
                        // this.$toast(err);
                        mescroll.endErr();
                    });
            },

            mescrollInit(mescroll) {
                this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
                this.mescroll.resetUpScroll();
            },
            queryList: function () {
                this.show = true;
            },
            onSearch() {
                this.mescroll.resetUpScroll();
            },
            downCallback: function () {
                this.listValue = [];
                this.mescroll.resetUpScroll();
            },
            openPop: function () {
                var airList = this.alllevelist;
                var context = this;
                $("#qygmListDialogId li").off('click');
                $("#qyxzListDialogId li").off('click');
                $("#ssqyListDialogId li").off('click');
                //企业规模选择列表
                $("#qygmListDialogId li").click(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        $(this).removeClass("dialogSelect");
                        $(this).addClass("dialogNoSelect");
                    } else {
                        $(this).addClass("dialogSelect");
                        $(this).removeClass("dialogNoSelect");
                    }
                });
                //企业性质选择列表
                $('#qyxzListDialogId li').click(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        $(this).removeClass("dialogSelect");
                        $(this).addClass("dialogNoSelect");
                    } else {
                        $(this).addClass("dialogSelect");
                        $(this).removeClass("dialogNoSelect");
                    }
                });
                //区域选择列表
                $("#ssqyListDialogId li").click(function (e) {
                    if ($(this).hasClass("dialogSelect")) {
                        $(this).removeClass("dialogSelect");
                        $(this).addClass("dialogNoSelect");
                    } else {
                        $(this).addClass("dialogSelect");
                        $(this).removeClass("dialogNoSelect");
                        $(this).siblings('li').addClass("dialogNoSelect");
                        $(this).siblings('li').removeClass("dialogSelect");
                    }
                });
            },
            clearType: function () {
                var self = this;
                //初始化 aqi
                $("#qygmListDialogId li").each(function () {
                    $(this).removeClass("dialogSelect");
                    $(this).addClass("dialogNoSelect");
                });
                $("#qyxzListDialogId li").each(function () {
                    $(this).removeClass("dialogSelect");
                    $(this).addClass("dialogNoSelect");
                });
                $("#ssqyListDialogId li").each(function () {
                    $(this).removeClass("dialogSelect");
                    $(this).addClass("dialogNoSelect");
                });
                self.query_params = {
                    ent_scale: "",
                    counties: "",
                    ent_nature: ""
                },
                    self.mescroll.resetUpScroll();
                self.show = false;
            },
            //确定
            clickUlDy: function () {
                var self = this;
                self.ent_scale = "";
                self.counties = "";
                self.ent_nature = "";
                //企业规模选择
                $("#qygmListDialogId li").each(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        self.ent_scale += $(this).attr("id");
                        self.ent_scale += "，";
                    }
                });
                //企业规模选择
                $("#qyxzListDialogId li").each(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        self.ent_nature += $(this).attr("id");
                        self.ent_nature += "，";
                    }
                });
                //企业规模选择
                $("#ssqyListDialogId li").each(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        self.counties = $(this).attr("id");
                    }
                });
                self.query_params.ent_scale = self.ent_scale;
                self.query_params.counties = self.counties;
                self.query_params.ent_nature = self.ent_nature;
                self.show = false;
                console.log(self.query_params);
                this.mescroll.resetUpScroll();

            },
            goDetail(item) {
                this.$router.push({
                    path:
                        "/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb_detail",
                    name: "nyts_mcq_qylb_detail",
                    params: {
                        entity: item
                    }
                });
            },
        }
    };
</script>
<style scoped>
    @import "../../../../../page/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb.css";
    @import "../../../../../assets/css/frozenui.css";
</style>