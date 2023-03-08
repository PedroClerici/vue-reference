<script>
  export default {
    // Using prop types:
    props: {
      name: String,
      lastName: String, 
      age: Number,
      parents: Object
    },
  }
</script>

<template>
  <div class="profile">
    <ul>
      <li><strong>Name:</strong> {{ name }}</li>
      <li><strong>Last name:</strong> {{ lastName }}</li>
      <li><strong>Age:</strong> {{ age }}</li>
      <ul>
        <li><strong>Father:</strong> {{ parents.father }}</li>
        <li><strong>Mother:</strong> {{ parents.mother }}</li>
      </ul>
    </ul>
  </div>
</template>

<style scoped>
  .profile {
    border: 1px solid lightblue;
    margin: 1rem;
  }
</style>