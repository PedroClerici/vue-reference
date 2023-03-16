<script>
export default {
  data() {
    return {
      text: "Life",
    }
  },
  beforeCreate() {
    console.log("Before component is created hook.")
  },
  created() {
    console.log("When component is created hook.")
  },
  beforeMount() {
    console.log("Before component is mounted hook.")
  },
  mounted() {
    console.log("When component is mounted hook.")
  },
  beforeUpdate() {
    console.log("Before component update hook.")
  },
  updated() {
    console.log("When component update hook.")
  },
  beforeUnmount() {
    console.log("Before component is unmounted hook.")
  },
  unmounted() {
    console.log("When component is unmounted hook.")
  },
}
</script>

<template>
  <div v-if="show">
    <div>
      {{ text }}
    </div>
    <button @click="text = 'Changed...'">Update Component</button>
  </div>
</template>
