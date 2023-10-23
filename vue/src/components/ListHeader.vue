<template>
  <main>
    <div class="List-header">
      <h1>{{title}}</h1>
      <div class="Button-container">
        <button class="create" @click.prevent="showModal">Add New</button>
        <button class="signOut" @click.prevent="LogOut">Sign Out</button>
      </div>
      <Modal mode='create' :ActiveModal="ModalActive" @close="showModal" :getData="getData"/>
    </div>
  </main>
</template>

<script setup>
import {GetData} from "@/composables/Task";
import Modal from "@/components/Modal.vue";
import {useModal} from "@/composables/Modal";
import {ref} from "vue";
import {useFetch} from "@/composables/Fetch";
const {mode}  = useModal()
const {getData,task,SignOut} = GetData()
 const {LogOut}=useFetch()
const ModalActive= ref(
    false
)
const showModal =()=>{
  console.log(ModalActive.value)
  ModalActive.value =!ModalActive.value

}


defineProps([
  'title',
  'getData'
])

</script>

<style lang="scss" scoped>
.signOut{
  cursor: pointer;
  border: 1px solid tomato;
  background: transparent;
}
</style>