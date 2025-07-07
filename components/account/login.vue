<template>
    <div class="flex flex-col items-center justify-center h-[50vh]  w-full">
        <form class="flex flex-col  justify-center h-full bg-gray-900 px-10 text-white w-120" action="" method="get" @submit.prevent="handleLogin">
          
            <div class="flex flex-col items-start gap-1">
          <label>Email</label>
            <input v-model="email" type="text" placeholder="Enter your email" class="border-2 border-gray-300 rounded-md p-2 w-full max-w-md mb-4">
   
            </div>
            <div class="flex flex-col items-start gap-1">
  <label for="">Password</label>
            <input  v-model="password" type="password" placeholder="Enter your password" class="border-2 border-gray-300 rounded-md p-2 w-full max-w-md mb-4">
       
            </div>
            <div><button  tyep="Submit" class="cursor-pointer bg-green-500 text-white outline-none px-3 py-1 rounded-md">Submit</button></div>
                   </form>
    </div>

</template>
<script>
import { useLoginStore } from '~/store/auth.js'
export default {

    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
      handleLogin(){
  
        const loginStore = useLoginStore();
        loginStore.Login(this.email, this.password);
        this.email ='',
        this.password = '';
        // loginStore.email = this.email; 
        // loginStore.password = this.password;

        

        // Here you can add your login logic, like calling an API


      }
    
    }
}
</script>