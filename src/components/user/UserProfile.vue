<script>
  export default {
    props: {
      name: {
        type: String,
        // Custom validation
        validator(value) {
          return value === "Scott" ? true : false
        },
      },
      lastName: String, 
      age: {
        // More props validation
        type: [Number, String],
        required: true,
        default: "N/A",
      },
      parents: Object,
      updateAge: Function,
    },
    // Emits validation
    emits: {
      // "alertName",
      "updateName": (name) => {
        return name === "Michelson" ? true : false
      },
    },
    methods: {
      // This methods emits a custom event
      updateName() {
        this.$emit("updateName", "Michelson");
      },
      alertName() {
        this.$emit("alertName");
      }
    }
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
    <!-- Emitting custom events -->
    <button @click="updateName">Update Parent Component</button>
    <button @click="alertName">Alert User Name From Child</button>
    <button @click="updateAge(40)">Update User Age From Child</button>
  </div>
</template>

<style scoped>
  .profile {
    border: 1px solid lightblue;
    margin: 1rem;
  }
</style>