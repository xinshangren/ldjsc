import Vue from 'vue'
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
const store = new Vuex.Store({
    state: {
        LOADING: false,
        BIGLOADING:false,
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
        }
    }
})
export default store