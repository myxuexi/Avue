import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import Student from './components/Student.vue'
import Book from './components/Book.vue'
import CNNode from './components/CNNode.vue'
import Index from './components/Index.vue'
import Axios from 'axios'
//import { component } from 'vue/types/umd'


Vue.use(ElementUI)

Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  {
    path:"/register",
    component:Register
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/work",
    component:Work
  },
  {
    path:"/student",
    component:Student
  },
  {
    path:"/book",
    component:Book
  },
  {
    path:"/cnnode",
    component:CNNode
  },
  {
    path:"/",
    component:Index
  },
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
