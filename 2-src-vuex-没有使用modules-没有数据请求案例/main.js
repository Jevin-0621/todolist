import Vue from 'vue'
import App from './App.vue'
//todo 5. 在main.js 引入store仓库实例
import store from './store'

Vue.config.productionTip = false

new Vue({
  //todo 6. 注册store 
  store,//? 得到什么？ 所有组件都会得到一个 $store 
  render: h => h(App),
}).$mount('#app')
