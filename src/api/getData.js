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
    // 获取指标
    findByTargetIds: function (params) {
        return get("/api-qz/qz/zhibiao/findByTargetIds", params);
    },
     // 获取项目阶段汇报
     getZdgcProProgressList: function (params) {
        return get("/api-qz/qz/zdgc/getZdgcProProgressList", params);
    },
    // 获取项目列表
    getProReportInfoByzdProType: function (params) {
       return get("/api-qz/qz/zdgc/getProReportInfoByzdProType", params);
   },
   //返回根目录
   returnBaseUrlFun: function () {
      return returnBaseUrl();
  }

    
   
}
