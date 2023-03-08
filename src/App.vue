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
    <div class="container">
        <h1>Hello, {{ message }}!</h1>
    </div>
    <AppFooter/>
</template>

<style>
  /* Global styles */
  * {
    font-family: monospace;
  }

  body, html {
    padding: 0;
    margin: 0;
  }
</style>
