import Vue from 'vue'
import Router from 'vue-router'
import homeVue from '@/page/main/home.vue'
import dingbanVue from '@/page/main/dingban.vue'
import headlineVue from '@/page/main/headline.vue'
import picsnewsVue from '@/page/toutiao/picsnews.vue'
import swszfVue from '@/page/dingban/swszf.vue'
import szxVue from '@/page/dingban/szx.vue'
import dsjyyjVue from '@/page/dingban/dsjyyj.vue'
import srdVue from '@/page/dingban/srd.vue'
import newsdetileVue from '@/page/toutiao/newsdetile.vue'
import ldzcVue from '@/page/toutiao/ldzc.vue'
import zwgkVue from '@/page/toutiao/zwgk.vue'
import mainVue from '@/page/main/main.vue'
import hbgjVue from '@/page/hbgj/hbgj.vue'
import zdgcVue from '@/page/zdgz/zdgc/zdgc.vue'
import zdgc_xmdealiVue from '@/page/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali.vue'
import zdgc_czwt_daliVue from '@/page/zdgz/zdgc/zdgc_czwt/zdgc_czwt_deali/zdgc_czwt_deali.vue'
import jjzsVue from '@/page/jjzs/jjzs.vue'
import qylyVue from '@/page/qyly/qyly.vue'
import nytsVue from '@/page/nyts/nyts.vue'
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
      component: headlineVue
    }, {
      path: '/toutiao/picsnews',
      name: 'picsnews',
      component: picsnewsVue
    },  {
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
      path: '/hbgj/hbgj',
      name: 'hbgj',
      component: hbgjVue
    }, {
      path: '/jjzs/jjzs',
      name: 'jjzs',
      component: jjzsVue
    }, {
      path: '/qyly/qyly',
      name: 'qyly',
      component: qylyVue
    },{
      path: '/nyts/nyts',
      name: 'nyts',
      component: nytsVue
    },{
      path: '/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali',
      name: 'zdgc_xmdeali',
      component: zdgc_xmdealiVue
    }, {
      path: '/zdgz/zdgc/zdgc_czwt/zdgc_czwt_dali/zdgc_czwt_deali',
      name: 'zdgc_czwt_deali',
      component: zdgc_czwt_daliVue
    }
  ]
})
