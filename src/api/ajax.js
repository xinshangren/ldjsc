import axios from 'axios'; // 引入axiosimport axios from "axios";
import store from '../store/store'
import Qs from 'qs' 
let router = import("@/router");
axios.defaults.timeout = 10000;
//axios.defaults.baseURL = "/api";
//axios.defaults.baseURL = "http://192.168.10.138:8080/jcsldjsc/";//段建斌地址
//axios.defaults.baseURL = "http://192.168.10.138:8080/jcsldjsc/";//djb
// axios.defaults.baseURL = "http://10.1.0.73:8080/jcsldjsc/";//正式环境内网ip
// axios.defaults.baseURL = "http://203.207.103.48:8080/jcsldjscjk/";//正式环境互联网ip
// axios.defaults.baseURL = "http://10.7.1.69:8090/jeecg-boot/";//zhangrui
axios.defaults.baseURL = "http://203.207.104.209:7081/jcsldjscjk/";//另一个生产服务器
//  axios.defaults.baseURL = "http://10.7.1.69:8062/jcsldjscjk/";//张峰宽203.207.104.209:7081
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;application/json;charset=UTF-8";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["Cache-Control"] = "no-cache";
axios.defaults.headers["pragma"] = "no-cache";

let source = axios.CancelToken.source();

//请求添加token
axios.interceptors.request.use(request => {
    // request.headers["demo-auth"] = store.state.loginInfo ? store.state.loginInfo.userId : ""; // 已将userId保存在store中
    return request;
})

//切换页面取消请求
axios.interceptors.request.use(request => {
    request.cancelToken = source.token;
    store.commit('showLoading');
    return request;
});
router.then(lib => {
    lib.default.beforeEach((to, from, next) => {
        source.cancel()
        source = axios.CancelToken.source();
        next()
    })
})

//登录过期跳转
axios.interceptors.response.use(response => {
    let data = response.data;
    // store.commit('hideLoading');
    // if (
    //     [10002].includes(data.ret)
    // ) {
    //     router.then(lib => lib.default.push({ name: "login" })); // 跳转到登录页面
    //     Message.warning(data.msg);
    // }
    return response;
})

//返回值解构
axios.interceptors.response.use(response => {

    store.commit('hideLoading');
    let data = response.data;
    let isJson = (response.headers["content-type"] || "").includes("json");
    return data;
    if (isJson) {
        return Promise.resolve({
            data: data.data,
            msg: data.msg,
            code: data.code,
        });
    } else {
        return data;
    }
}, err => {
    store.commit('hideLoading');
    let isCancel = axios.isCancel(err);
    if (isCancel) {
        return new Promise(() => { });
    }
    return Promise.reject(
        err.response.data &&
        err.response.data.msg ||
        "网络错误"
    );
})

export function post(url, data, otherConfig) {
    var data = Qs.stringify(data);
    return axios.post(url, data, otherConfig);
}

export function get(url, data, otherConfig) {
    return axios.get(url, { params: data, ...otherConfig });
}

export function returnBaseUrl() {
    return axios.defaults.baseURL;
}
export function checkStrOfZero(str) {
    if (str == '' || str == null || str == undefined) {
        str = 0;
    }
    return str;
}