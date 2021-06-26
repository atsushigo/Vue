import Vue from 'vue'
import App from './App.vue'
import axios from './myaxios.js'
import router from './router.js'

Vue.use(axios)
Vue.config.productionTip = false

//全局註冊自定義過濾器
Vue.filter("to-uppercase",value=>{
	return value.toUpperCase()
})

Vue.filter("cut",value=>{
	return value.slice(0,100) + "..."
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
