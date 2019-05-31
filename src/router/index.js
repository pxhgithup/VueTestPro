import Vue from 'vue'
import Router from 'vue-router'

import App from "../App";
import home from "../page/Home"
import mesage from "../page/Mesage"
import shopcar from "../page/ShopCar"
import mine from "../page/Mine"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/mesage',
      component: mesage
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/mine',
      component: mine
    }
  ],
  linkActiveClass: 'mui-active'


})
