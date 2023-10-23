<template>
  <div class="contain" >
    <!-- logo -->

    <!-- //logo -->
    <div >

      <!-- login -->
      <div class="login">
               <strong>Welcome!</strong>
        <span>Sign in to your account</span>

        <form class="login-form" @submit.prevent="Login">

          <div class="form">
            <fieldset>
              <div class="form-row">
                <font-awesome-icon icon="fa-solid fa-envelope"  class="fas" />
                <label class="form-label" for="input">Email</label>
                <input type="email" class="form-text" id="input"  v-model="email" >
              </div>
              <div class="form-row">
                <font-awesome-icon icon="fa-solid fa-eye" class="fas" />
                <label class="form-label" for="password">Password</label>
                <input type="password" class="form-text" id="password"  v-model="password" >
              </div>
              <div class ="error">
                <span>{{error}}</span>
              </div>
              <div class=" bottom">
                <div class="form-check">
                  <input type="checkbox" >
                  <label > remember me?</label>
                </div>

              </div>
              <div class="form-row button-login">
                <button class="btn" @submit.prevent="Login">Login</button>
                <router-link :to ="{name:'Register'}"><span>Dont have an account?</span> Register</router-link>
              </div>
            </fieldset>
          </div>

        </form>

      </div>
    </div>
  </div>
</template>
<script setup>
import {useFetch} from "@/composables/Fetch";

const {email,name,Login,password,error,ErrorHandler} = useFetch()
console.log()
</script>