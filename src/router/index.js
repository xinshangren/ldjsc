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
import mainVue from '@/page/main/main.vue'
import zdgcVue from '@/page/zdgz/zdgc/zdgc.vue'

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
    }, {
      path: '/toutiao/ldzc',
      name: 'ldzc',
      component: ldzcVue
    }, {
      path: '/zdgz/zdgc/zdgc',
      name: 'zdgc',
      component: zdgcVue
    },
  ]
})
