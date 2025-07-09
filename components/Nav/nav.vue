<template>
    <div class="flex justify-between items-center bg-white px-10 h-18 shadow-md ">
        <div class="flex">
            <div><img class="h-10 w-20" src="../../public/blog.png" alt=""></div>

        </div>
        <div class="flex gap-10 items-center font-sans">
            <NuxtLink to="/">
                <div class="cursor-pointer">
                    <p>Home</p>
                </div>
            </NuxtLink>
            <div class="flex cursor-pointer gap-1">
                <p>product</p> <span><i class="ri-arrow-down-s-line"></i></span>
            </div>
            <div class="flex  cursor-pointer gap-1">
                <p>Solutions</p> <span><i class="ri-arrow-down-s-line"></i></span>
            </div>
            <div class="cursor-pointer">
                <p>Pricing</p>
            </div>
            <div class="cursor-pointer">
                <p>Resource</p>
            </div>
            <div class="flex cursor-pointer gap-1">
                <p>Company</p> <span><i class="ri-arrow-down-s-line"></i></span>
            </div>
            <div class="flex cursor-pointer gap-1">
                <div class="h-full w-25"><button
                        class="border-2 p-1 border-black rounded-2xl w-full cursor-pointer hover:bg-black hover:text-white transition-all">Get
                        started</button></div>
                <NuxtLink to="/Login" v-if="!store.isAuthenticated">
                    <div class="h-full w-25"><button
                            class="border-2 p-1 border-black rounded-2xl w-full cursor-pointer hover:bg-black hover:text-white transition-all">Login</button>
                    </div>
                </NuxtLink>

                <div v-if="store.isAuthenticated" @click="Logout()" class="h-full w-25"><button
                        class="border-2 p-1 border-black rounded-2xl w-full cursor-pointer hover:bg-black hover:text-white transition-all">Log
                        out</button></div>

            </div>
            <div v-if="store.isAuthenticated">
                <NuxtLink to="/profile">
                    <div class="overflow-hidden cursor-pointer rounded-full h-12 w-12 border-2"><img
                            class="h-full w-full "
                            :src="user.image"
                            alt=""></div>
                </NuxtLink>
            </div>
        </div>

    </div>
</template>
<script>
// import { NuxtLink } from '#components';
import { useLoginStore } from '~/store/auth';

useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css'
        }
    ]
})
export default {
    name: "Nav",
    setup() {
         const store = useLoginStore()
        const user = computed(() => store.user)
return{
    user,
    store
}
    },

    props:{
        img: {
            type: String,
            default: ''
        }
    },

    methods: {
        Logout() {
            this.store.Logout();

        }
    }


}
</script>