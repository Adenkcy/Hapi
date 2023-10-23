import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Register from "@/views/Register.vue";
import cookie from "js-cookie";
import {ref} from "vue";
const auth = ref()
auth.value = cookie.get('session')

  export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path:'/dashboard',
        name:'Dashboard',
        component:Dashboard
      },
      {
        path:'/login',
        name:'Login',
        component:Login,
           },
      {
        path:'/register',
        name:'Register',
        component:Register
      }
    ]
  })
  

export default router

