<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import {useFetch} from "@/composables/Fetch";

const {name,email,password,error,Register} = useFetch()

</script>
<template>
  <div class="register">
    <font-awesome-icon icon="fa-solid fa-circle-user"  class="icon"/>
    <strong>Create account!</strong>
    <form class="register-form">
      <fieldset>
        <form class="form"  @submit.prevent="Register">
          <div class="form-row">
            <font-awesome-icon icon="fa-solid fa-circle-user" aria-checked="" class="fas" />
            <label class="form-label" for="name">Name</label>
            <input type="text" class="form-text" id="name" v-model="name">
          </div>
          <div class="form-row">
            <font-awesome-icon icon="fa-solid fa-envelope" aria-checked="" class="fas" />
            <label class="form-label" for="email">E-mail</label>
            <input type="email" class="form-text" id="email" v-model="email" >
          </div>
          <div class="form-row">
            <font-awesome-icon icon="fa-solid fa-lock" class="fas" />
            <label class="form-label" for="password">Password</label>
            <input type="password" class="form-text" id="password" v-model="password" >
          </div>
          <div class="form-row button-login">
            <button  class="btn" @submit.prevent="Register">Create</button>
            <router-link :to ="{name:'Login'}"><span>Already have an  account?</span>Login</router-link>
          </div>
        </form>
      </fieldset>
    </form>



 </div>

</template>
