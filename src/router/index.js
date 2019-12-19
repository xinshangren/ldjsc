import Vue from 'vue'
import Router from 'vue-router'
import homeVue from '@/page/main/home.vue'
import headlineVue from '@/page/main/headline.vue'
import picsnewsVue from '@/page/toutiao/picsnews.vue'
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
      path: '/main/headline',
      name: 'headline',
      component: headlineVue
    }, {
      path: '/toutiao/picsnews',
      name: 'picsnews',
      component: picsnewsVue
    }, {
      path: '/zdgz/zdgc/zdgc',
      name: 'zdgc',
      component: zdgcVue
    },
  ]
})
