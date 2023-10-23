<script setup>
import {useFetch} from "@/composables/Fetch";
import {ref} from "vue";
import cookie from "js-cookie";
const authToken = ref()
authToken.value= cookie.get('name')
const{LogOut}= useFetch()

const getCookie = () =>{

}
</script>

<template>
<header>

  <nav class="nav"  v-if="authToken" >
    <div class="logo">
      <router-link :to="{name:'Home'}">Task<span>Next</span></router-link>
    </div>
    <ul>
      <router-link :to="{name:'Home'}">Home</router-link>
      <router-link :to="{name:'Dashboard'}">Dashboard</router-link>
    </ul>
    <ul>

      <router-link :to="{name:'Login'}" v-if="!authToken">Login</router-link>
      <router-link :to="{name:'Register'}" v-if="!authToken" >Register</router-link>
      <li class="cursor" @click.prevent="LogOut">Logout</li>
    </ul>
  </nav>
</header>

</template>

<style scoped>
.cursor{
  display: flex;
  justify-items: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  font-size:20px;
  text-decoration: none;
  font-family: Montserrat;
  color: #f8f8f8;
  margin-left: 10px;
  margin-top: -10px;
}
</style>