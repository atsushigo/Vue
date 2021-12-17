import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import "./axios"
import mavonEditor from "mavon-editor"

import "mavon-editor/dist/css/index.css"
//權限路由
import "./permission"

Vue.config.productionTip = false
//全局設置axios
Vue.prototype.$axios = axios

Vue.use(Element)
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
