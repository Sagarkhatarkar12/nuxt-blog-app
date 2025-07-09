<template>
  <!-- {{ user }} -->
  <Nav  />
  <Banner />
  <RecentBlog />
  <Login />
  <AdminPanal />


</template>
<script>
import Nav from '~/components/Nav/nav.vue'
import Banner from '~/components/Banner/banner.vue'
import Login from "../components/account/login.vue"
import RecentBlog from '~/components/RecentBlog.vue'
import { useLoginStore } from '~/store/auth'
export default {
  components: {
    Nav,
    Banner,
    Login

  },

}


</script>