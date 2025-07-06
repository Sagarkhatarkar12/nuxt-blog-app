<template>
    <!-- main height -->
    <div class="h-[120vh] w-full flex">
        <!-- left side  -->
        <div class="h-full w-[50%]  flex flex-col gap-2 pl-20 py-10 cursor-pointer">
            <h1 class="text-3xl  ">Latest News</h1>
            <!-- yha se box start  -->
            <div class="h-[70vh] w-[35vw] rounded-2xl pb-5 overflow-hidden shadow-md">
                <div class="h-[65%] ">
                    <img class="h-full w-full"
                        src="https://img.freepik.com/free-vector/sharing-articles-concept-illustration_114360-5517.jpg"
                        alt="">
                </div>
                <div class="flex flex-col h-[25%] gap-2 p-3">
                    <p class="text-gray-400 ">oliva Riya 20 jan 2024</p>
                    <h1 class="font-semibold text-lg">Conversation with London Makr & col</h1>
                    <p class="text-sm">we sat down with London fast growing we sat down with London fast growing we sat
                        down with London fast growing </p>
                </div>
                <div flex class=" flex gap-2 py-2 px-2 h-[10%]">
                    <button class="border-2 rounded-2xl px-3 py-1">Design</button>
                    <button class="border-2 rounded-2xl px-3 py-1">Research</button>
                    <button class="border-2 rounded-2xl px-3 py-1">interview</button>
                </div>
            </div>
        </div>
        <div class=" h-full w-[50%] p-5 flex flex-col  gap-10">
<RecentCard/>
<RecentCard/>
<RecentCard/>
        </div>
    </div>

</template>
<script>
import RecentCard from './RecentCard.vue';
export default {
    components: {
        RecentCard
    }
}

</script>