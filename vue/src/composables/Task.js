import axios from "axios";
import {computed, onMounted, ref, watchEffect} from "vue";
import cookie from "js-cookie";
import {useRouter} from "vue-router";

 function GetData() {
    const task = ref(null)
    const AuthToken = ref()
    const sortData = ref(null)
     const router = useRouter()
   
const getData = async () => {
    return await axios.get('http://localhost:4000/api/todo', {
            withCredentials: true
        })
        .then((response) => {
            task.value = response.data
            const SortData = computed(() => {
                return task.value.sort((a, b) => new Date(a.date) - new Date(b.date))
            })
            
            sortData.value = SortData.value
            
        }).catch((e) => {
            if (e.response) {
                console.log(e.response.data)
            }
        })
    }

onMounted(()=>getData())

   const SignOut = () => {
        cookie.remove('session')
       router.push({name:'Home'})
    }
    return {getData, task, AuthToken, SignOut,sortData}
}

export {GetData}