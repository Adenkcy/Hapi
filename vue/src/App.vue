<template>
  <suspense>
  <div>
<Nav />
    <router-view />
  </div>
  </suspense>
</template>

<script setup>
import Nav from "@/components/Nav.vue";


</script>

<style lang="scss" scoped>

</style>