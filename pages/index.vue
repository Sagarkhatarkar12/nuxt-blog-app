<template>
    <Nav />
    <Banner />
    <Login />
  
</template>
<script>
import Nav from '~/components/Nav/nav.vue'
import Banner from '~/components/Banner/banner.vue'
import Login from "../components/account/login.vue"
export default {
  components: {
    Nav,
    Banner
    ,Login

  },
}


</script>