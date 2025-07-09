<template>
    <div>
        <Nav />
        <div class="flex flex-row w-full h-[90vh] ">
            <div class="p-5 border-2 border-gray-500  rounded-2xl  w-[20%] items-center ">
                <h1 class="text-4xl py-3 font-semibold">My account</h1>

                <leftList />


            </div>

            <div class="border-2 border-gray-500 w-[80%] p-5 rounded-2xl">
            <div class="flex items-cente gap-1">
                <!-- {{ console.log(user) }} -->
                <div class="h-10 w-10 rounded-full border-2 "><img class="h-full w-full" :src="user.image" alt=""></div>
                <div class="font-semibold text-2xl" >{{ user.firstName }}</div>
            </div> 
                <hr class=" my-5"> 
                <div class="flex gap-4">
                    <div class="w-[50%] flex flex-col gap-2">
                     
                      <div class="flex gap-1 flex-col">
                           <label class="font-semibold text-2xl " for="">firstName:-</label>
                        <input type="text" class="border-2 p-2 border-gray-300 cursor-pointer text-gray-500 w-full" :value="user.firstName">
                    </div>
                      <div class="flex gap-1 flex-col">
                           <label class="font-semibold text-2xl " for="">Email:-</label>
                        <input type="text" class="border-2 p-2 border-gray-300 cursor-pointer text-gray-500 w-full" :value="user.email">
                    </div>
                      <div class="flex gap-1 flex-col">
                           <label class="font-semibold text-2xl " for="">UserName:-</label>
                        <input type="text" class="border-2 p-2 border-gray-300 cursor-pointer text-gray-500 w-full" :value="user.username">
                    </div>

                    </div>
                    <div class="flex flex-col gap-2 w-[50%] h-full" >
    
                      <div class="flex gap-1 flex-col">
                           <label class="font-semibold text-2xl " for="">LastName:-</label>
                        <input type="text" class="border-2 p-2 border-gray-300 cursor-pointer text-gray-500 w-full" :value="user.lastName">
                    </div>
                      <div class="flex gap-1 flex-col">
                           <label class="font-semibold text-2xl " for="">Gender:-</label>
                        <input type="text" class="border-2 p-2 border-gray-300 cursor-pointer text-gray-500 w-full" :value="user.gender">
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Nav from "../Nav/nav.vue"
import { useLoginStore } from "../../store/auth"
import { computed } from 'vue'
import leftList from "./leftList.vue"
export default {

    name: "Account",
    components: {
        Nav,
        leftList
    },
    setup() {

        const store = useLoginStore()
        const user = computed(() => store.user)




        // console.log('User:', user.value)
        return {
            user,

        }



    },



}
</script>