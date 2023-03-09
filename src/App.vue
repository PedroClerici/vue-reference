<script>
  import AppHeader from "@components/AppHeader.vue";
  import UserProfile from "@components/user/UserProfile.vue";

  export default {
    name: 'App',
    data() {
      return {
        name: "Scott",
        age: 26,
        parents: {
          mother: "Stephanie",
          father: "Mario",
        }
      }
    },
    components: {
      AppHeader,
      UserProfile
    },
    methods: {
      alertUserName() {
        alert(`The user's name is ${this.name}.`);
      },
      updateAge(age) {
        this.age = age;
      }
    }
  }
</script>

<template>
    <AppHeader/>
    <div class="container">
        <h1>Hello, {{ name }}!</h1>
    </div>
    <UserProfile 
      :name="name" 
      lastName="Brown" 
      :age="age"
      :parents="parents"
      @updateName="name = $event"
      @alertName="alertUserName"
      :updateAge="updateAge"
    />
    <AppFooter/>
</template>

<style>
  * {
    font-family: monospace;
  }

  body, html {
    padding: 0;
    margin: 0;
  }
</style>
