const App = {
  data() {
    return {
      user: "",
      check: false,
    }
  },
  watch: {
    check() {
      console.log("Active changed!!!")
    },
  },
  computed: {
    computedCheckUser() {
      console.log("computedCheckUser called!")
      return this.user === "Scott" ? "Welcome" : "Not allowed"
    },
    computedIsActive() {
      console.log("computedIsActive called!")
      return this.check ? "Checked" : "Not checked"
    },
  },
  methods: {
    checkUser() {
      console.log("checkUser called!")
      return this.user === "Scott" ? "Welcome" : "Not allowed"
    },
    toggleActive() {
      this.check = !this.check
    },
    isActive() {
      console.log("isActive called!")
      return this.check ? "Checked" : "Not checked"
    }
  }
}

Vue.createApp(App).mount("#app")