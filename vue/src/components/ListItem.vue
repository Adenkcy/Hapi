<script setup>
import Progress from "@/components/Progress.vue";
import Modal from "@/components/Modal.vue";
import {ref} from "vue";
import {useModal} from "@/composables/Modal";
import {GetData} from "@/composables/Task";
import axios from "axios";
const {task,getData,sortData}=GetData()

const props=defineProps([
  'task',
  'getData'
])

const ModalActive= ref(
    false
)
const showModal =()=>{
  console.log(ModalActive.value)
  ModalActive.value =!ModalActive.value

}
const deleteTask = async () => {
  try {
const response = await fetch(`http://localhost:4000/api/todo/${props.task._id}`,{
  method:'DELETE',
  credentials:'include',
  mode:'cors'
})
    console.log(response)
    props.getData()
  } catch (e) {
console.log(e.message)
  }
}

</script>

<template>
<div class="List-Item">
  <div class="info-container">
    <font-awesome-icon icon="fa-solid fa-circle-check" class="fas"/>
    <p class="task-title">{{props.task.title}}</p>
    <Progress :progress="props.task.progress"/>
    <div class="Button-container">
      <button class="edit" @click="showModal">Edit</button>
      <button class="delete" @click.prevent="deleteTask">Delete</button>
      <Modal  mode="edit" :ActiveModal="ModalActive" @close="showModal" :getData="getData" :task="props.task" />
    </div>
  </div>


</div>

</template>

<style scoped>

</style>