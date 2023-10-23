import {onMounted, ref, toValue, watchEffect} from 'vue'
import cookie from 'js-cookie'
import {useRouter} from 'vue-router'
import Axios from "axios";
import {toast} from "vue3-toastify";
import axios from "axios";

function useFetch  (){
    const email = ref('')
    const name = ref('')
    const password = ref('')
    const  error = ref('')
    const Data = ref('')
    const  router = useRouter()
    

const AuthToken = ref('')
       const url = 'http://localhost:4000/register'
       const urI ='http://localhost:4000/login'
    const Register = async ()=>{
        return await  axios.post('http://localhost:4000/register',{
            name:name.value,
            email:email.value,
            password:password.value
        },{withCredentials:true})
            .then((response)=>{
                const data= response.data
                Data.value = response.data
                if (data){
                    router.push({name:'Login'})
                    console.log(data)
                }

            }).catch((e)=>{
                if (e.response){
                    const Err = e.response.data
                    toast(Err,{
                        autoClose:3000,
                        position:"top-right"
                    })
                    console.log(Err)

                }
            })
    }
    const ErrorHandler =() =>{
        toast(error.value,{
            autoClose:1000
        })
    }
    const Login = async() =>{
        return await  axios.post('http://localhost:4000/login',{
            email:email.value,
            password:password.value
        },{withCredentials:true})
            .then((response)=>{
                const data= response.data
                cookie.set('name',response.data.name,{
                    expires:60*60*100
                })
                AuthToken.value = cookie.get('name')
                if (AuthToken){
                    router.push({name:'Home'})
                    window.location.reload()
                }else {
                    if (!AuthToken){
                        router.push({name:'Home'})
                        window.location.reload()
                    }
                }
                        if (data){
                    window.location.reload()
                    console.log(data)
                }

            }).catch((e)=>{
                if (e.response){
                    const Err = e.response.data
                    toast(Err,{
                        autoClose:3000,
                        position:"top-right"
                    })
                    console.log(Err)

                }
           })


    }
    const LogOut = async () =>{
        try {
            const response = await fetch('http://localhost:4000/logout',{
            credentials:'include',
             mode:'cors',
                method:'POST'
            })
            console.log(response)
          window.location.reload()
        }catch (e) {
            if (e.response){
                console.log(e.response.data)
            }
        }
    }
 
        return {email,name,password,error,Register,Login,ErrorHandler,Data,LogOut}
}

export {useFetch}
