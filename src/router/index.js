import Vue from 'vue'
import Router from 'vue-router'
import homeVue from '@/page/main/home.vue'
import dingbanVue from '@/page/main/dingban.vue'
import noticeVue from '@/page/main/notice.vue'
import noticeDetailVue from '@/page/main/noticeDetail.vue'
import noticeDetailFjVue from '@/page/main/noticeDetailFj.vue'
import headlineVue from '@/page/main/headline.vue'
import picsnewsVue from '@/page/toutiao/picsnews.vue'
import mljcVue from '@/page/toutiao/mljc.vue'
import pzjcVue from '@/page/toutiao/pzjc.vue'
import swszfVue from '@/page/dingban/swszf.vue'
import szxVue from '@/page/dingban/szx.vue'
import dsjyyjVue from '@/page/dingban/dsjyyj.vue'
import qxqkfqVue from '@/page/dingban/qxqkfq.vue'
import gqxwsjVue from '@/page/dingban/gqxwsj.vue'
import srdVue from '@/page/dingban/srd.vue'
import dingbanDetailVue from '@/page/dingban/dingbanDetail.vue'
import newsdetileVue from '@/page/toutiao/newsdetile.vue'
import ldzcVue from '@/page/toutiao/ldzc.vue'
import zwgkVue from '@/page/toutiao/zwgk.vue'
import mainVue from '@/page/main/main_new.vue'
import hbgjVue from '@/page/zdgz/hbgj/hbgj.vue'
import zdgcVue from '@/page/zdgz/zdgc/zdgc.vue'
import zdgc_xmdealiVue from '@/page/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali.vue'
import zdgc_czwt_daliVue from '@/page/zdgz/zdgc/zdgc_czwt/zdgc_czwt_deali/zdgc_czwt_deali.vue'
import qylyVue from '@/page/qyly/qyly.vue'
import wmgcVue from '@/page/wmgc/wmgc.vue'
import wmgcxjzsVue from '@/page/wmgc/wmgcxjzs.vue'
import jqgkVue from '@/page/qyly/jq/jqgk.vue'
import jqlistVue from '@/page/qyly/jq/jqlist.vue'
import jqdetileVue from '@/page/qyly/jq/jqdetile.vue'
import jqvideosVue from '@/page/qyly/jq/jqvideos.vue'
import sfcgkVue from '@/page/qyly/sfc/sfcgk.vue'
import sfclistVue from '@/page/qyly/sfc/sfclist.vue'
import sfcdetileVue from '@/page/qyly/sfc/sfcdetile.vue'
import nytsVue from '@/page/cyzx/nyts/nyts.vue'
import jjyx_zttsVue from '@/page/jjyx/jjyx_ztts/jjyx_ztts.vue'
import hbgj_air_station_list_dealiVue from '@/page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list_deali/hbgj_air_station_list_deali.vue'
import hbgj_wgjg_wrylist_dealiVue from '@/page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wrylist/hbgj_wgjg_wrylist_deali/hbgj_wgjg_wrylist_deali.vue'
import hbgj_zdqylb_dealiVue from '@/page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb_deali/hbgj_zdqylb_deali.vue'
import nyts_mcq_qylb_detailVue from '@/page/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb_detail/nyts_mcq_qylb_detail.vue'
import nyts_xny_qylb_detailVue from '@/page/cyzx/nyts/nyts_xny/nyts_xny_qylb/nyts_xny_qylb_detail/nyts_xny_qylb_detail.vue'
import nyts_xny_xmlb_detailVue from '@/page/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb_detail/nyts_xny_xmlb_detail.vue'
import nyts_mt_qylb_detailVue from '@/page/cyzx/nyts/nyts_mt/nyts_mt_qylb/nyts_mt_qylb_detail/nyts_mt_qylb_detail.vue'
import nyts_mt_xmlb_detailVue from '@/page/cyzx/nyts/nyts_mt/nyts_mt_xmlb/nyts_mt_xmlb_detail/nyts_mt_xmlb_detail.vue'
import zdgz_mryqVue from '@/page/zdgz/mryq/mryq.vue'
import zdgz_mryqDealiVue from '@/page/zdgz/mryq/mryqDeali/mryqDeali.vue'
import jqvideos_dealVue from '@/page/qyly/jq/jqvideos_deali.vue'
import workqDealiVue from '@/page/dingban/workq/workqDeali/workqDeali.vue'
import cq_dingbanVue from '@/page/qxztc/cq/cq_dingban.vue'
import cq_dingbanDetailVue from '@/page/qxztc/cq/cq_dingbanDetail.vue'
import zdgz_mryqDealiFjVue from '@/page/zdgz/mryq/mryqDeali/mryqDealiFj/mryqDealiFj.vue'
import qxtz_newVue from '@/page/main/qxtz_new.vue'
import yqdataVue from '@/page/yqdata/yqdata.vue'
import pjlzVue from '@/page/pjlz/pjlz.vue'
import pjlzDetailVue from '@/page/pjlz/pjlzDetail.vue'
import pjlz_fj_Vue from '@/page/pjlz/pjlz_fj.vue'
import pjlzDetail_cb_Vue from '@/page/pjlz/pjlzDetail_cb/pjlzDetail_cb.vue'
import pjlzDetail_fk_Vue from '@/page/pjlz/pjlzDetail_fk/pjlzDetail_fk.vue'
import pjlzDetail_jx_Vue from '@/page/pjlz/pjlzDetail_jx/pjlzDetail_jx.vue'
import pjlz_fkjl_Vue from '@/page/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl.vue'
import pjlz_cbjl_Vue from '@/page/pjlz/pjlzDetail_cb/pjlz_cbjl/pjlz_cbjl.vue'
import pjlz_jxjl_Vue from '@/page/pjlz/pjlzDetail_jx/pjlz_jxjl/pjlz_jxjl.vue'
import pjlz_fkjl_detail_Vue from '@/page/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail.vue'
import pjfkMessageVue from '@/page/pjlz/pjfkMessage/pjfkMessage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainVue,
      meta:{keepAlive:true}
    }, {
      path: '/main/home',
      name: 'home',
      component: homeVue
    },  {
      path: '/main/dingban',
      name: 'dingban',
      component: dingbanVue
    },  {
      path: '/main/headline',
      name: 'headline',
      component: headlineVue,
      meta:{keepAlive:true}
    }, {
      path: '/main/notice',
      name: 'notice',
      component: noticeVue
    },{
      path: 'main/noticeDetail',
      name: 'noticeDetail',
      component: noticeDetailVue
    },{
      path: 'main/noticeDetailFj',
      name: 'noticeDetailFj',
      component: noticeDetailFjVue
    },{
      path: '/toutiao/picsnews',
      name: 'picsnews',
      component: picsnewsVue
    },{
      path: '/toutiao/mljc',
      name: 'mljc',
      component: mljcVue
    },{
      path: '/toutiao/pzjc',
      name: 'pzjc',
      component: pzjcVue
    },{
      path: '/dingban/swszf',
      name: 'swszf',
      component: swszfVue
    },  {
      path: '/dingban/srd',
      name: 'srd',
      component: srdVue
    }, {
      path: '/dingban/szx',
      name: 'szx',
      component: szxVue
    }, {
      path: '/dingban/dsjyyj',
      name: 'dsjyyj',
      component: dsjyyjVue
    }, {
      path: '/dingban/qxqkfq',
      name: 'qxqkfq',
      component: qxqkfqVue
    },{
      path: '/dingban/dingbanDetail',
      name: 'dingbanDetail',
      component: dingbanDetailVue
    },{
      path: '/toutiao/newsdetile',
      name: 'newsdetile',
      component: newsdetileVue
    },
     {
      path: '/toutiao/ldzc',
      name: 'ldzc',
      component: ldzcVue
    }, 
     {
      path: '/toutiao/zwgk',
      name: 'zwgk',
      component: zwgkVue
    }, 
    {
      path: '/zdgz/zdgc/zdgc',
      name: 'zdgc',
      component: zdgcVue
    }, {
      path: '/zdgz/hbgj/hbgj',
      name: 'hbgj',
      component: hbgjVue,
      meta:{keepAlive:true}
    }, {
      path: '/qyly/qyly',
      name: 'qyly',
      component: qylyVue,
      meta:{keepAlive:true}
    }, {
      path: '/wmgc/wmgc',
      name: 'wmgc',
      component: wmgcVue,
      meta:{keepAlive:true}
    }, {
      path: '/wmgc/wmgcxjzs',
      name: 'wmgcxjzs',
      component:wmgcxjzsVue,
      meta:{keepAlive:true}
    },{
      path: '/qyly/jq/jqgk',
      name: 'jqgk',
      component: jqgkVue
    },{
      path: '/qyly/jq/jqlist',
      name: 'jqlist',
      component: jqlistVue
    },{
      path: '/qyly/jq/jqdetile',
      name: 'jqdetile',
      component: jqdetileVue
    },{
      path: '/qyly/jq/jqvideos',
      name: 'jqvideos',
      component: jqvideosVue
    },{
      path: '/qyly/sfc/sfcgk',
      name: 'sfcgk',
      component: sfcgkVue
    },{
      path: '/qyly/sfc/sfclist',
      name: 'sfclist',
      component: sfclistVue
    },{
      path: '/qyly/sfc/sfcdetile',
      name: 'sfcdetile',
      component: sfcdetileVue
    },{
      path: '/cyzx/nyts/nyts',
      name: 'nyts',
      component: nytsVue
    },{
      path: '/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali',
      name: 'zdgc_xmdeali',
      component: zdgc_xmdealiVue,
      meta:{keepAlive:false}
    }, {
      path: '/zdgz/zdgc/zdgc_czwt/zdgc_czwt_dali/zdgc_czwt_deali',
      name: 'zdgc_czwt_deali',
      component: zdgc_czwt_daliVue
    }, {
      path: '/jjyx/jjyx_ztts/jjyx_ztts',
      name: 'jjyx_ztts',
      component: jjyx_zttsVue
    }, {
      path: '/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list_deali',
      name: 'hbgj_air_station_list_deali',
      component: hbgj_air_station_list_dealiVue
    }, {
      path: '/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wrylist/hbgj_wgjg_wrylist_deali',
      name: 'hbgj_wgjg_wrylist_deali',
      component: hbgj_wgjg_wrylist_dealiVue
    }, {
      path: '/page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb_deali/hbgj_zdqylb_deali',
      name: 'hbgj_zdqylb_deali',
      component: hbgj_zdqylb_dealiVue
    },{
      path: '/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb_detail/',
      name: 'nyts_mcq_qylb_detail',
      component: nyts_mcq_qylb_detailVue
    },{
      path: '/cyzx/nyts/nyts_xny/nyts_xny_qylb/nyts_xny_qylb_detail/',
      name: 'nyts_xny_qylb_detail',
      component: nyts_xny_qylb_detailVue
    },{
      path: '/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb_detail/',
      name: 'nyts_xny_xmlb_detail',
      component: nyts_xny_xmlb_detailVue
    },{
      path: '/cyzx/nyts/nyts_mt/nyts_mt_qylb/nyts_mt_qylb_detail/',
      name: 'nyts_mt_qylb_detail',
      component: nyts_mt_qylb_detailVue
    },{
      path: '/cyzx/nyts/nyts_mt/nyts_mt_xmlb/nyts_mt_xmlb_detail/',
      name: 'nyts_mt_xmlb_detail',
      component: nyts_mt_xmlb_detailVue
    },{
      path: '/zdgz/mryq/mryq',
      name: 'zdgz_mryqVue',
      component: zdgz_mryqVue
    },{
      path: '/zdgz/mryq/mryq/mryqDeali',
      name: 'mryqDealiVue',
      component: zdgz_mryqDealiVue,
    },{
      path: '/zdgz/mryq/mryq/mryqDeali/mryqDealiFj',
      name: 'mryqDealiFjVue',
      component: zdgz_mryqDealiFjVue,
     
    },{
      path: '/qyly/jq/mryq/jqvideos_deali',
      name: 'jqvideos_dealVue',
      component: jqvideos_dealVue
    },{
      path: '/dingban/workq/workqDeali/workqDeali',
      name: 'workqDeali',
      component: workqDealiVue
    },{
      path: '/qxztc/cq/cq_dingban',
      name: 'cq_dingban',
      component: cq_dingbanVue
    },{
      path: '/qxztc/cq/cq_dingbanDetail',
      name: 'cq_dingbanDetail',
      component: cq_dingbanDetailVue
    },{
      path: '/main/qxtz_new',
      name: 'qxtz_new',
      component: qxtz_newVue
    },{
      path: '/dingban/gqxwsj',
      name: 'gqxwsj',
      component: gqxwsjVue
    },{
      path: '/yqdata/yqdata',
      name: 'yqdataVue',
      component: yqdataVue
    },{
      path: '/pjlz/pjlz',
      name: 'pjlzListvue',
      component: pjlzVue
    },{
      path: '/pjlz/pjlz_fj',
      name: 'pjlz_fj',
      component: pjlz_fj_Vue,
    },{
      path: '/pjlz/pjlzDetail',
      name: 'pjlzDetail',
      component: pjlzDetailVue,
      meta:{keepAlive:true}
    },{
      path: '/pjlz/pjlzDetail_cb/pjlzDetail_cb',
      name: 'pjlzDetail_cb',
      component: pjlzDetail_cb_Vue,
      meta:{keepAlive:true}
    }
    ,{
      path: '/pjlz/pjlzDetail_fk/pjlzDetail_fk',
      name: 'pjlzDetail_fk',
      component: pjlzDetail_fk_Vue,
      meta:{keepAlive:true}
    },{
      path: '/pjlz/pjlzDetail_jx/pjlzDetail_jx',
      name: 'pjlzDetail_jx',
      component: pjlzDetail_jx_Vue,
      meta:{keepAlive:true}
    },{
      path: '/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl',
      name: 'pjlz_fkjl',
      component: pjlz_fkjl_Vue,
      meta:{keepAlive:true}
    },{
      path: '/pjlz/pjlzDetail_cb/pjlz_cbjl/pjlz_cbjl',
      name: 'pjlz_cbjl',
      component: pjlz_cbjl_Vue,
      meta:{keepAlive:true}
    },{
      path: '/pjlz/pjlzDetail_jx/pjlz_jxjl/pjlz_jxjl',
      name: 'pjlz_jxjl',
      component: pjlz_jxjl_Vue,
      meta:{keepAlive:true}
    },{
      path: '/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail',
      name: 'pjlz_fkjl_detail',
      component: pjlz_fkjl_detail_Vue,
      meta:{keepAlive:true}
    },{
      path: '/pjlz/pjfkMessage/pjfkMessage',
      name: 'pjfkMessageVue',
      component: pjfkMessageVue
    }
    
    
  ]
})
