import Vue from 'vue'
import Router from 'vue-router'
import SelectTpl from "@/components/main/SelectTpl";

//demo路由
Vue.use(Router)
export default new Router({
  routes:[
   { path: '/alltemplate', name: 'SelectTpl',component:SelectTpl},
  ]
})
