import { returnBaseUrl, get, post } from "@/api/ajax";


export const httpMethod = {
    //获取程序配置
    getConfig: function () {
        return get("static/config.json", null, { baseURL: "./" });
    },
    // get示例
    queryGoodsLabel: function (params) {
        return get("/goods/queryGoodsLabel", params);
    },
    // post示例
    findByTargetId: function (params) {
        return get("/api-qz/qz/zhibiao/findByTargetId", params);
    },
    // 头条
    // 图片列表新闻
    getPictureclass: function (params) {
        return get("cmsAppInsideController.action?getPictureclass", params);
    },
    // 新闻详情
    getCmsArticleContent: function (params) {
        return get("cmsAppInsideController.action?getCmsArticleContent", params);
    },


    //返回根目录
    returnBaseUrlFun: function () {
        return returnBaseUrl();
    },
    // 总体情况重点项目总计统计
    getzdxmzj: function (params) {
        return get("zdgcAppInsideController.action?getzdxmzj", params);
    },
    // 总体情况统计存在问题
    statisticsExistiong: function (params) {
        return get("zdgcAppInsideController.action?statisticsExistiong", params);
    },
    // 总体情况进度排名前三的项目
    getProjectPlanTopThree: function (params) {
        return get("zdgcAppInsideController.action?getProjectPlanTopThree", params);
    }



}
