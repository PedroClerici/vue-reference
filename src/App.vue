<script>
  import AppHeader from '@components/AppHeader.vue';
  import Brand from '@components/Brand.vue';

  export default {
    name: 'App',
    data() {
      return {
        brands: [
          "Mazda",
          "Honda",
          "Ford",
          "Renault",
        ]
      }
    },
    components: {
      AppHeader,
      Brand,
    }
  }
</script>

<template>
    <AppHeader />
    <div class="container">
      <Brand>
        <ul>
          <li v-for="(brand, index) in brands">{{ index + 1 }} - {{ brand }}</li>
        </ul>
      </Brand>
    </div>
    <AppFooter />
</template>

<style>
  /* Global styles */
  * {
    font-family: monospace;
    font-size: 1rem;
  }

  body, html {
    padding: 0;
    margin: 0;
  }
</style>
