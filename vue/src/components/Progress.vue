<template>
  <div class="outer-bar">
    <div class="inner-bar" :style="{width:`${props.progress} %`,backgroundColor:[random]}"></div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const props = defineProps(['progress'])
console.log(props.progress)
const color = ref([
  'rgb(219,133,18)',
  'rgb(20,231,78)',
  'rgb(109,120,251)',
  'rgb(40,154,246)'

])
const random= color.value[Math.floor(Math.random()*color.value.length)]
console.log(random)
</script>