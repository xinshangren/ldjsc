import Vue from 'vue'
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
const store = new Vuex.Store({
    state: {
        LOADING: false,
        BIGLOADING:false,
        seach_value:'',
        seach_placeholder:'搜索'
    },
    getters:{
        getSeach_value:function(state){
            return state.seach_value;
        },
        getSeach_placeholder:function(state){
            return state.seach_placeholder;
        },
    },
    mutations: {
        showLoading(state){
            state.LOADING = true    
        },
        hideLoading (state) {
            state.LOADING = false
        },
        showLoadingBig(state){
            state.BIGLOADING = true    
        },
        hideLoadingBig(state) {
            state.BIGLOADING = false
        },
        setSeach_value(state, seach_value) {
            state.seach_value = seach_value;
        },
        setSeach_placeholder(state, seach_placeholder) {
            state.seach_placeholder = seach_placeholder;
        },
    }
})
export default store