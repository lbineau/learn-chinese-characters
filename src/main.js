// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import VeeValidate, { Validator } from 'vee-validate'
import { pinyinValidator } from '@/utils/validators'

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(VeeValidate)
Validator.extend('pinyin', pinyinValidator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
