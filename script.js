const App = {
  data() {
    return {
      name: "",
    }
  },
  methods: {
    handleSubmit(e) {
      this.name = e.target.value
      alert(this.name)
    }
  }
}

Vue.createApp(App).mount("#app")