<template>
<h1>Profile Page</h1>
<div>
 

    <h2>User Information</h2>
    <p><strong>ID:</strong> {{ user.id }}</p>
    <p><strong>Username:</strong> {{ user.userName }}</p>
    <img :src="user.Image" alt="User Image" class="w-20 h-20 rounded-full">
    <p><strong>Access Token:</strong> {{ user.accessToken }}</p>

    <p><strong>Is Authenticated:</strong> {{ user.isAuthenticated ? 'Yes' : 'No' }}</p>
    <p><strong>Access Token:</strong> {{ user.accessToken }}</p>
    <p><strong>Image:</strong> <img :src="user.Image" alt="User Image" class="w-20 h-20 rounded-full"></p>
    <p><strong>Username:</strong> {{ user.userName }}</p>
    <p><strong>ID:</strong> {{ user.id }}</p>
    

</div>
</template>
<script>
import {useLoginStore} from "../../store/auth"
import { computed } from 'vue'
export default{

    name: "Account",
    setup(){
     
        const store = useLoginStore()
    const user = computed(() => store.user)
    



    // console.log('User:', user.value)
    return{
        user,
    
    }

  

    },
 
    

}
</script>