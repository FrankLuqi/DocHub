// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入1像素边框
import './assets/styles/border.css'
// 引入通用布局
import './assets/styles/reset.css'
// 引入fastclick解决移动端单击延迟
import fastClick from 'fastclick'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入animate动画
import 'vue2-animate/dist/vue2-animate.min.css'
// 引入表单验证插件
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'
import zh from 'vee-validate/dist/locale/zh_CN'
// import axios from 'axios'

Vue.use(VeeValidate)
Vue.use(VueI18n)
const i18n = new VueI18n()
Vue.use(VeeValidate, {
  i18nRootKey: 'validations', // customize the root path for validation messages.
  i18n,
  dictionary: {
  },
  events: ''
})

VeeValidate.Validator.localize('zh', zh)

var dict = {
  zh_CN: {
    messages: {
      required: function (field) {
        return field + '不能为空'
      },
      confirmed: function (field) {
        return '两次输入的密码不一致'
      },
      min: function (field, value) {
        return field + '最短为' + value + '个字符'
      },
      max: function (field, value) {
        return field + '最长为' + value + '个字符'
      }
    },
    attributes: {
      reg_name: '用户名',
      reg_psw: '密码',
      reg_psw_conf: '确认密码'
    }
  }
}
VeeValidate.Validator.localize('zh_CN', dict.zh_CN)

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
// Vue.use(iView)
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
