import {returnBaseUrl,get, post } from "@/api/ajax";


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
  }

    
   
}
