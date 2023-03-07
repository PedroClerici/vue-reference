const App = {
  data() {
    return {
      isRed: false,
      isLarge: false,
      colors: {
        red: false,
        green: false,
        blue: false,
      },
      newStyle: {
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        textAlign: "center",
        border: "5px solid black",
      }
    }
  },
  methods: {
    changeColor() {
      this.isRed = !this.isRed
    },
    changeSize() {
      this.isLarge = !this.isLarge
    },
    // Turns a random color form colors to true
    randomColor() {
      for(color in this.colors) {
        this.colors[color] = false
      }

      const randomColorIndex = Math.floor(
        Math.random() * Object.keys(this.colors).length
      )

      const randomColorKey = Object.keys(this.colors)[randomColorIndex]

      this.colors[randomColorKey] = true
    }
  }
}

Vue.createApp(App).mount("#app")