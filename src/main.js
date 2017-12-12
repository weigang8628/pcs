import Vue from 'vue'
import App from './App'
import router from './router'

//axios开始
import Axios from '../node_modules/axios/dist/axios'
Vue.prototype.$ajax = Axios
Axios.defaults.baseURL = '/static/tpl/tpl01.json'
//axios结束

//iview开始
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
//iview结束

/* 引入全局的css */
import './assets/css/pcs-base.css'
// import '@/assets/css/font_img/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
