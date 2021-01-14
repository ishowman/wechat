export {
  default as WxApp
} from './components/WxApp/Index.vue'

import Vue from 'vue'
// import App from './App.vue'
import './registerServiceWorker'
// import router from './router'
// import store from './store'
import '@/styles'
import { use266Network } from 'xj-core'
import 'amfe-flexible'

use266Network()
console.log(process.env)
Vue.config.productionTip = false
// Vue.use(Core as any)
Vue.config.ignoredElements = [ // 忽略自定义元素标签抛出的报错
  'wx-open-launch-app'
]
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
