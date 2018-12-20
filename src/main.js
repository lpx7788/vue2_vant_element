// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
// import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/base.less'
import {getCookie} from './utils/cookie'
import request from './utils/request'
import './utils/screen-adaptation'
import vant from 'vant'
import 'vant/lib/index.css'

Vue.use(vant)

Vue.use(ElementUI)
Vue.use(VueI18n)

Vue.config.productionTip = false
Vue.prototype.$http = request

const i18n = new VueI18n({
  locale: getCookie('lang') ? getCookie('lang') : 'en',
  messages: {
    zh: require('@/i18/zh.js'),
    en: require('@/i18/en.js')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
