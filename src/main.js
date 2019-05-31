// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'      //固定路径
import './lib/mui/css/mui.min.css'
import App from './App'
import router from './router'
Vue.use(MintUi)




Vue.config.productionTip = false
Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
