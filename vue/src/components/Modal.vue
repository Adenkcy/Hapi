<script setup>
import {computed, onMounted, ref, watch, watchEffect, watchPostEffect} from "vue";
import {toast} from "vue3-toastify";
const auth = ref(null)
import axios from "axios";
import {useFetch} from "@/composables/Fetch";
import cookie from "js-cookie";
const {} =useFetch()
 const props=defineProps(['mode','task', 'ActiveModal', 'getData'])
auth.value = cookie.get('name')
const  editMode = computed(()=>{
  return  props.mode === 'edit'
})
const transmit = computed(() => {
  toast('success',{
    autoClose:3000
  })
  return editMode.value ? editData : PostData
})
const data  = ref({
  name:editMode.value ? props.task.name :auth,
  Date:editMode.value ? props.task.Date : new Date(),
  title:editMode.value ? props.task.title : null,
  progress:editMode.value ?props.task.progress : 33,
  body:editMode.value ? props.task.body : 'vue'
})
watchEffect(()=>data.value)

const error = ref()

const HandleChange = (e) =>{
  e.preventDefault()

  console.log('changing')

  const { name, value } = e.target

  computed(() => {
    let setval = {}
    setval[name] = value
    return (data.value = setval)
  })

}

const PostData = async (e) =>{
e.preventDefault()
  return await  axios.post('http://localhost:4000/api/todo',{
    title:data.value.title,
    progress:data.value.progress,
    name:data.value.name,
    Date:data.value.Date,
    body:data.value.body
  },{withCredentials:true}).then((response)=>{
    if (response.data){
      props.getData()
      window.location.reload()
      HandleClose(false)

    }
  }).catch((e)=>{
    if (e.response){
      error.value = e.response.data
      toast(error.value,()=>{

      })
    }
  })

}
const editData = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.put(`http://localhost:4000/api/todo/${props.task._id}`, {
    title:data.value.title,
    progress:data.value.progress,
    name:data.value.name,
      Date:data.value.Date,
    body:data.value.body
    },{withCredentials:true})

    if (response.data){
      props.getData()
      window.location.reload()
      HandleClose(false)

    }
  } catch (error) {
   if (error.response){
     console.log(error.response.data)
     error.value = error.response.data
   }
  }
  transmit.value
}

const emit = defineEmits(['close'])
const HandleClose = () =>{
  emit('close')

}


</script>

<template>
  <transition name="modal-animation">
  <div class="overlay" v-show="ActiveModal">
    <div class="modal" >
      <div class="form-container">
        <h3>Let's {{mode}} your task</h3>
        <button @click="HandleClose" class="icon">
          <font-awesome-icon icon="fa-regular fa-times-circle" class="icon"  @click="HandleClose"/>
        </button>
      </div>

      <form @submit.prevent="transmit">
        <input
            type="text"
            name="title"
            placeholder="Your Task Goes here"
            maxlength="30"
            v-model="data.title"
            @change="HandleChange"

        />
        <br />
        {{error}}
        <label for="range">Drag to select your progress  </label>
        <input
            type="range"
            name="progress"
            id="range"

            v-model="data.progress"
            @change="HandleChange"

        />
        <input type="submit" :class="mode" value="" @click.prevent="transmit" />
      </form>
    </div>
  </div>
  </transition>
</template>

<style scoped>
.modal-animation-enter-active,.modal-animation-leave-active{
transition: opacity .3s cubic-bezier(.52,02,.19,1.02);
}
.modal-animation-from,.modal-animation-leave-to{
  opacity: 0;
}
</style>