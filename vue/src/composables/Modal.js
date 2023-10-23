import {computed, ref} from "vue";
import axios from "axios";


const useModal= (props)=>{
const mode = ref('create')
	const  editMode = computed(()=>{
		return  mode.value === 'edit'
	})
 console.log(editMode.value)
	const data  = ref({
		email:editMode.value ?props.email : null,
		Date:editMode.value ? "": new Date(),
		title:editMode.value ?props.title :null,
		progress:editMode.value ?props.progress : 57
	})
	

	const HandleClose = () =>{
		defineEmits(['close'])
		console.log('emit')
	}

	return {mode,editMode,data,HandleClose}
}
export {useModal}
