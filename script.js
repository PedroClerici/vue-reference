const App = {
  data() {
    return {
      user: "Mario",
      userAge: 18,
      allowedAge: 18,
      names: ["Francis", "Maria", "Steve", "Scott"],
    }
  },
  methods: {
    checkUser() {
      return this.names.includes(this.user)
    }
  }
}

Vue.createApp(App).mount("#app")