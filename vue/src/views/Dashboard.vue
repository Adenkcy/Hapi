<template>
  <div v-if="!auth">
<h1>No access</h1>
    <router-link :to="{name:'Home'}">Home</router-link>
  </div>
  <div v-else="auth">
    <h1>Dash</h1>

  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import cookie from "js-cookie";
import {ref} from "vue";
const router  = useRouter()
const auth =ref()
auth.value = cookie.get('name')
if (!auth){
    window.location.reload()
}

</script>

<style lang="scss" scoped>

</style>