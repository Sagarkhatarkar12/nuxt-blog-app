<template>
    <div>

        <div class="flex flex-col gap-1 h-full w-full border-gray-500  items-center">
        
            <div class="flex py-2 text-gray-500 hover:bg-blue-200 rounded-2xl px-2 transition-all w-full gap-1 hover:text-blue-700 cursor-pointer">
            <NuxtLink to="/Admin" class="flex gap-1">
                    <p><i class="ri-dashboard-line"></i></p>
                    <p>dashboard</p>
                </NuxtLink>
            </div>

            <div
                class="flex py-2 text-gray-500 hover:bg-blue-200 rounded-2xl px-2 transition-all w-full gap-1 hover:text-blue-700 cursor-pointer">
                <p><i class="ri-account-box-line"></i></p>
                <p>My account</p>
            </div>
            <div
                class="flex py-2 text-gray-500 hover:bg-blue-200 rounded-2xl px-2 transition-all w-full gap-1 hover:text-blue-700 cursor-pointer">
                <p><i class="ri-building-line"></i></p>
                <p>Portfolio</p>
            </div>
            <div
                class="flex py-2 text-gray-500 hover:bg-blue-200 rounded-2xl px-2 transition-all w-full gap-1 hover:text-blue-700 cursor-pointer">
                <p><i class="ri-shopping-cart-line"></i></p>
                <p>Plans</p>
            </div>
            <div
                class="flex py-2 text-gray-500 hover:bg-blue-200 rounded-2xl px-2 transition-all w-full gap-1 hover:text-blue-700 cursor-pointer">
                <p><i class="ri-save-line"></i></p>
                <p>shop</p>
            </div>
            <div
                class="flex py-2 text-gray-500 hover:bg-blue-200 rounded-2xl px-2 transition-all w-full gap-1 hover:text-blue-700 cursor-pointer">
                <p><i class="ri-settings-2-line"></i></p>
                <p>setting</p>
            </div>
        </div>



    </div>

</template>
<script>
export default {
    name: "LeftList",

}
</script>