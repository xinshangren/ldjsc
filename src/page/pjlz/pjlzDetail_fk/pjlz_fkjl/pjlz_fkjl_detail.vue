<style scoped>
    #content {
        background: url('../../../../assets/img/detail_bg.png') no-repeat;
        background-size: 100% 190px;
        position: relative;
        overflow: auto;
    }

    #content_box {
        background: url('../../../../assets/img/detail_content_bg.png') no-repeat;
        background-size: 100% 100%;
        min-height: 330px;
        width: 330px;
        margin: auto;
        margin-top: 65px;
    }
</style>
<template>
    <div style="background:#f7f7f7;">
        <div id="content">
            <img width="250px" style='position: absolute; top: 37px;left: 69px;'
                src="../../../../assets/img/detail_title.png" />
            <div style='font-weight: 600;
            font-size: 17px;
            color: #ffffff;
            position: absolute;
            top: 26px;
            left: 145px;'>工作反馈</div>
            <div id="content_box">
                <div style="font-size: 15px;margin: 0px 0px 0px 30px;padding-top: 30px;color:#666666 ;">
                    <div style="display: flex;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
                        <div style="margin-left: 2px;">反馈人:</div>
                        <div style="margin-left: 2px;">{{feedback_obj.feedback_person}}</div>
                    </div>
                    <div style="display: flex;margin-top: 7px;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
                        <div style="margin-left: 2px;">反馈时间:{{feedback_obj.feedback_time}}</div>
                    </div>
                    <div style="display: flex;margin-top: 7px;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_content.png" />
                        <div style="margin-left: 2px;">反馈内容:</div>
                        <div
                            style="margin-left: 2px;border: 1px solid #9f9f9f;border-radius: 4px;width: 60%;font-size: 14px;min-height: 100px;">
                            <div style="margin:5px ;word-break:break-all">
                                {{feedback_obj.feedback_content}}
                            </div>
                        </div>
                    </div>
                    <div style="display: flex;margin-top: 10px;padding-bottom: 25px;">
                        <img style="height: 18px;" src="../../../../assets/img/wjj_gzfk.png" />
                        <div style="margin-left: 2px;">附件:</div>
                        <div style="margin-left: 2px;color:#2599e6;width:70%">
                            <div v-if="file_list.length>0" v-for="file in file_list"
                                style="display: flex;margin-left: 5px;width:100%;margin-top:5px">
                                <div @click="openFj(file)" style="width: 70%;word-break:break-all">{{file.attach_name}}</div>
                                <!-- <img src='../../../../assets/img/icon_delete.png'
                                    style="height: 20px;margin-left: 5px;margin-top: 2px;" /> -->
                                <!-- <img @click="fj_download(file.attach_download_url)"
                                    src='../../../../assets/img/icon_download.png'
                                    style="height: 24px;margin-left: 10px;" /> -->
                                <a :href="file.attach_download_url" download
                                    style="display: flex;background: #DBEEFF;height: 26px;border-radius: 5px;width: 30%;color: #3098fb;">
                                    <img style="height: 16px;margin: auto;margin-left: 6px;"
                                        src="../../../../assets/img/icon_download_new.png" />
                                    <div
                                        style="color: #3098fb;font-size: 15px;margin-top: 2px;width: 100%;text-align: center;">
                                        下载</div>
                                </a>
                            </div>
                            <!-- <div style="display: flex;font-size: 15px;margin-top: 6px;color:#2599e6">
                                <img style="height: 18px;" src="../../../../assets/img/icon_accessory.png" />
                                <div style="margin-left: 5px;">添加附件</div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div style="display: flex;background: #28bcfe;border-radius:20px;width: 64%;
                margin: auto;
                margin-top: 15px;
                height: 40px;
                margin-bottom: 15px;" v-show="upd_button">
                <div style="margin: auto;margin-top: 6px; color: #ffffff;font-size: 18px;">修改
                </div>
            </div> -->

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
        name: "pjlz_fkjl_detail",
        data() {
            return {
                feedback_id: '',
                feedback_obj: "",
                file_list: [],
                upd_button: false,
            };
        },
        mounted() {
            this.upd_button = false;
            //      setTimeout(() => {
            //   var height = document.body.clientHeight-100;
            //   $("#pmJjdivid").css("height", height + "px");
            // }, 100);
            var s = window.innerHeight - $("#content").offset().top;
            $("#content").css("min-height", s);
            this.feedback_id = this.$route.params.id;
            this.getdata();
        },
        activated() {
            this.upd_button = false;
            var s = window.innerHeight - $("#content").offset().top;
            $("#content").css("min-height", s);
            this.feedback_id = this.$route.params.id != null ? this.$route.params.id : this.feedback_id;
            this.getdata();
        },
        methods: {
            getdata: function () {
                var self = this;
                //判断 用户角色
                if (global_variable.roleJs.role == 'cbr') {
                    self.upd_button = true;
                }
                let feedbackId = self.feedback_id;
                var params = {
                    method: "approvalFeedbackDetail",
                    //dingUserId: "086404191926187734",
                    dingUserId: global_variable.roleJs.dingUserId,
                    //corpId: global_variable.corpId, //机构id
                    feedbackId: feedbackId //批件id
                };
                httpMethod
                    .getApprovalInfo(params)
                    .then(res => {
                        console.log(res);
                        if (res.success == 1) {
                            self.feedback_obj = res.data;
                            self.file_list = res.data.attachlist;
                        }
                    })
                    .catch(err => {
                        this.$toast(err);
                    });
            },
            fj_download: function (url) {
                const iframe = document.createElement("iframe");
                iframe.src = url;
                iframe.style.display = "none";
                if (navigator.userAgent.match(/iPad|iPhone/i)) {
                    iframe.style.width = 100 + '%';
                    iframe.style.overflowX = 'hidden';
                    iframe.style.overflowY = 'scroll';
                    iframe.style.webkitOverflowScrolling = 'touch';
                    iframe.setAttribute('scrolling', 'no');
                }
                document.body.appendChild(iframe);
            },
            openFj: function (item) {
                console.log(item);
                if (item.attach_type == "office") {
                    this.$router.push({
                        path: "/pjlz/pjlz_fj",
                        name: "pjlz_fj",
                        params: {
                            entity: item
                        }
                    });
                } else if (item.attach_type == "image") {
                    this.$router.push({
                        path: "/pjlz/pjlz_fj_image",
                        name: "pjlz_fj_image",
                        params: {
                            entity: item.attach_view_url
                        }
                    });
                } else {
                    this.$toast("文件暂不支持预览");
                }
            },
        },
    };
</script>

<style>
</style>