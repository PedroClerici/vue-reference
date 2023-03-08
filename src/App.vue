<script>
  // Importing component locally
  import AppHeader from '@components/AppHeader.vue'

  export default {
    name: 'App',
    data() {
      return {
        message: "world",
      }
    },
    components: {
      AppHeader
    }
  }
</script>

<template>
  <AppHeader/>
    <h1>Hello, {{ message }}!</h1>
  <AppFooter/>
</template>
