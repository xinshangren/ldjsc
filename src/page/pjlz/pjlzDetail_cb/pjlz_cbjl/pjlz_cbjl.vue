<style scoped>
</style>
<template>
    <div style="margin-top:54px;background:#f7f7f7">
        <div style="padding-top: 15px;">
            <div style="padding:0px 15px 0px 15px;position: relative;">
                <div style="display: flex;font-size: 15px;margin-top: 0px;">
                    <div style="width: 80%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">催办</div>
                </div>
                <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
                    <div style="display: flex;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
                        <div style="margin-left: 2px;">反馈人:</div>
                        <div style="margin-left: 2px;">张三</div>
                    </div>
                    <div style="display: flex;padding-left:10px;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
                        <div style="margin-left: 2px;">反馈时间:</div>
                        <div style="margin-left: 2px;">2020-01-01 22:22</div>
                    </div>
                </div>
                <img style="right: 8px; top: 10px;width: 30px;position: absolute;"
                    src="../../../../assets/img/icon_more.png" @click="goDetail" />
                <van-divider />
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    import Vue from "vue";
    import { Tab, Tabs, Search } from "vant";
    import dd from "dingtalk-jsapi";
    import { Divider } from "vant";
    import { Uploader } from "vant";
    import { httpMethod } from "../../../../api/getData.js";
    Vue.use(Uploader);
    Vue.use(Divider);
    Vue.use(Tab)
        .use(Tabs)
        .use(Search);
    import global_variable from "../../../../api/global_variable.js";
    export default {
        beforeCreate() {
            document.querySelector("body").setAttribute("style", "background:#F1F4F6");
        },
        name: "pjlz_cbjl",
        data() {
            return {
                cbjl_list: [],
                pj_id:''
            };
        },
        mounted() { 
            this.pj_id = this.$route.params.id;
            this.getdata();
        },
        methods: {
            getdata: function () {
                var self = this;
                let approvalInfoId = self.pj_id;
                var params = {
                    method: "approvalWarnList",
                    dingUserId: "086404191926187734",
                    // dingUserId: global_variable.roleJs.dingUserId,
                    //corpId: this.seach_value, //机构id
                    approvalInfoId: approvalInfoId, //批件id
                };
                httpMethod
                    .getApprovalInfo(params)
                    .then(res => {
                        console.log(res);
                        if(res.success == "1"){
                            self.cbjl_list = res.data.warnlist;
                        }
                    })
                    .catch(err => {
                        this.$toast(err);
                    });
            }
        }
    };
</script>

<style>
</style>