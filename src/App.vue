<script>
import LifeCycles from './components/LifeCycles.vue'

export default {
  name: 'App',
  components: {
    LifeCycles,
  },
  data() {
    return {
      message: "world",
      showLifeCycles: true,
    }
  },
  mounted() {
    setInterval(() => {
      this.showLifeCycles = false;
    }, 3000);
  },
  unmounted() {
    console.log("App.vue component has ben unmounted!");
  }
}
</script>

<template>
    <TheHeader/>
    <div class="container">
      <h1>Hello, {{ message }}!</h1>
    </div>
    <LifeCycles :show="showLifeCycles"/>
    <TheFooter/>
</template>

<style>
  /* Global styles */
  * {
    font-family: monospace;
    font-size: 1.2rem;
  }

  body, html {
    padding: 0;
    margin: 0;
  }
</style>
