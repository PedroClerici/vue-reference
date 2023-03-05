const App = {
  data() {
    return {
      name: "Scott",
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeName() {
      this.name === "Mario" ? this.name = "Scott" : this.name = "Mario"
    },
    getCoordinates(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
  }
}

Vue.createApp(App).mount("#app")