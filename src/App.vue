<script>
import PlayerMike from '@/components/Players/PlayerMike.vue';
import PlayerSteve from '@/components/Players/PlayerSteve.vue';

export default {
  name: 'App',
  components: {
    PlayerMike,
    PlayerSteve,
  },
  data() {
    return {
      activePlayer: 'PlayerMike',
    }
  },
  methods: {
    togglePlayer() {
      this.activePlayer === 'PlayerMike' ?
      this.activePlayer = 'PlayerSteve' :
      this.activePlayer = 'PlayerMike'
    }
  }
}
</script>

<template>
    <TheHeader/>
    <div class="container">
      <component :is="activePlayer" />
      <button @click="togglePlayer()">Toggle Active Player</button>
    </div>
    <TheFooter />
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
