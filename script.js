const App = {
  data() {
    return {
      user: "",
      check: false,
    }
  },
  computed: {
    computedCheckUser() {
      console.log("computedCheckUser called!")
      return this.user === "Scott" ? "Welcome" : "Not allowed"
    }
  },
  methods: {
    checkUser() {
      console.log("checkUser called!")
      return this.user === "Scott" ? "Welcome" : "Not allowed"
    },
    handleCheck() {
      this.check = !this.check
    },
    isChecked() {
      console.log("isChecked called!")
      return this.check ? "Checked" : "Not checked"
    }
  }
}

Vue.createApp(App).mount("#app")