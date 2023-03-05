const App = {
  data() {
    return {
      formData: {
        name: '',
        lastName: '',
        age: 0,
        password: '',
      }
    }
  },
  methods: {
    formHandler() {
      console.log(typeof(this.formData.age))
      console.log(`
        Name: ${this.formData.name}
        Last Name: ${this.formData.lastName}
        Age: ${this.formData.age}
        Password: ${this.formData.password}
      `)
    }
  }
}

Vue.createApp(App).mount("#app")