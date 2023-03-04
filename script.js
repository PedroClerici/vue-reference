const App = {
  data() {
    return {
      name: "Scott"
    }
  },
  methods: {
    update() {
      setTimeout(() => {
        this.name = "Mario"
      }, 2000)
    }
  }
}

Vue.createApp(App).mount("#app")