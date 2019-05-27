import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/page/HomeIndex'
import OrderList from "@/page/OrderList";
import UserInfo from "@/page/UserInfo";
import App from "../App";
import GoodsList from "@/page/GoodsList";
import Account from "@/page/Account";
import Login from "@/page/Login";
import Register from "@/page/register"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,

    },
    {
      path: '/goodslist',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      children: [{path: 'Login', component: Login}, {path: 'Register', component: Register}]
    }
    , {
      path: '/homeindex',
      name: 'HomeIndex',
      component: HomeIndex,
      children: [
        {path: '/userinfo', component: UserInfo},
        {path: '/orderlist', component: OrderList}
      ]
    }

  ]
})
