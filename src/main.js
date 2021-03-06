// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bookBlock from 'vue-bookblock'
import deviceType from './plugins/device-Type'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'lss.common.css/lss.common.min.css'
import 'vue-bookblock/styles/bookblock.css'
import 'swiper/dist/css/swiper.css'

Vue.use(bookBlock)
Vue.use(deviceType)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
