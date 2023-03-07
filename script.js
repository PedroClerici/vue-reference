const App = {
  data() {
    return {
      user: "",
      check: false,
    }
  },
  watch: {
    check() {
      alert("check changed!!!")
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
    toggleActive() {
      this.check = !this.check
    },
  }
}

Vue.createApp(App).mount("#app")