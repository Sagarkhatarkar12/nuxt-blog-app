<template>
    <div class="flex  items-center  h-screen w-full bg-gray-900 text-white
">
        <div class="bg-gray-800 h-full w-[20%]  border-gray-700 ">
            <div class="w-full h-20 flex justify-center items-center shadow-md gap-2  bg-gray-900">

                <div class="h-15 w-15 rounded-full overflow-hidden">
                    <img class="h-full w-full"
                        src="http://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg"
                        alt="">
                </div>
                <h1 class="font-bold text-2xl">Admin Pannel</h1>
            </div>
            <div>


            </div>
        </div>
        <div class=" w-[80%] h-full  bg-white  text-black flex  flex-col">
            <div class="w-full h-20 flex justify-between items-center  shadow-md">

                <div class=" rounded-md h-10 w-[50%] flex items-center px-3">
                    <h1 class="text-2xl">Welcome <span>Sagar</span></h1>
                </div>


                <div class="flex gap-2  justify-end items-center w-[50%]  pr-10 ">
                    <div class="h-10 w-10 rounded-full overflow-hidden border-2 border-black">
                        <img class="h-full w-full "
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
                            alt="">
                    </div>
                    <div class="flex flex-col ">
                        <h1 class="font-semibold cursor-pointer ">Sagar Khatarkar</h1>
                        <p class="text-gray-600 cursor-pointer">Program manager</p>
                    </div>
                </div>



            </div>
            <div>
                <div class=" h-[calc(100vh-80px)] pr-4 pb-4  bg-white">
                    <div class="w-full h-full  flex  bg-gray-900 text-2xl text-white rounded-4xl p-5 ">
                        <div class="w-[70%] flex flex-col gap-4">
                            <div class="flex flex-col h-60 w-full gap-4 bg-amber-300 rounded-4xl p-4 text-gray-900">
                                <h1 class="text-4xl font-semibold">Hello <span>Sagar</span></h1>
                                <p class="text-lg">Welcome to the admin panel.
                                    Welcome to the admin panel.
                                    Here you can manage all the users and their data.</p>
                                <button
                                    class="bg-gray-900 cursor-pointer  text-white w-45 font-semibold text-lg  h-12 rounded-sm">Write
                                    new post</button>

                            </div>

                            <div
                                class="flex flex-col h-90 w-full gap-10 bg-white  rounded-4xl  py-10 px-4 overflow-y-scroll  text-black">
                                <h1 class="font-semibold">Top articles </h1>

                                <Article />
                                <Article />
                                <Article />
                                <Article />
                            </div>
                        </div>
                        <div class="w-[30%] h-full flex flex-col justify-center items-center gap-4">


                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Article from '../articlesmcard.vue'
export default {
    name: 'AdminPannel',
    components: {
        Article
    }
}

</script>
