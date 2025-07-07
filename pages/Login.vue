<template>
    <Nav />
  <div>
    <h1 class="text-3xl text-center mt-10 py-2">Login Page</h1>

    <Login/>
  </div>

</template>
<script>
import Nav from '~/components/Nav/nav.vue'
import Login from '~/components/account/login.vue'
export default {
  components: {
    Nav
    , Login
  }
}
</script>
