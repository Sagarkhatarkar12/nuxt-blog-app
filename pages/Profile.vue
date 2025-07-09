<template>
  <div>
    <Account />
  </div>
</template>
<script>
import Account from "../components/account/Account.vue";
export default {

  components: {
    Account
  },
  setup() {
    definePageMeta({
      middleware: 'auth'
    });
  }

}

</script>