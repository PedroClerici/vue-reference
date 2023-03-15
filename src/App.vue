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
        <span>Content on the top</span>
        <br>

        <template v-slot:brands>
          <ul>
            <li v-for="(brand, index) in brands" :key="brand">
              {{ index + 1 }} - {{ brand }}</li>
          </ul>
        </template>

        <template v-slot:other>
          <span>Some other content</span>
        </template>

        <span>Default slot</span>
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
