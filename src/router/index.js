import Vue from 'vue'
import Router from 'vue-router'
import homeVue from '@/page/main/home.vue'
import headlineVue from '@/page/main/headline.vue'
import picsnewsVue from '@/page/toutiao/picsnews.vue'
import newsdetileVue from '@/page/toutiao/newsdetile.vue'
import ldzcVue from '@/page/toutiao/ldzc.vue'
import mainVue from '@/page/main/main.vue'
import zdgcVue from '@/page/zdgz/zdgc/zdgc.vue'
import zdgc_xmdealiVue from '@/page/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali.vue'
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
      path: '/main/headline',
      name: 'headline',
      component: headlineVue
    }, {
      path: '/toutiao/picsnews',
      name: 'picsnews',
      component: picsnewsVue
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
    }, {
      path: '/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali',
      name: 'zdgc_xmdeali',
      component: zdgc_xmdealiVue
    }
  ]
})
