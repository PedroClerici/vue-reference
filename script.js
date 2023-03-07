
const app = Vue.createApp({})

app.component("app-header", {
  data() {
    return {
      title: "Simple app"
    }
  },
  template: `
    <header>{{ title }}</header>
  `
})

app.component("greeting", {
  data() {
    return {
      name: "Scott"
    }
  },
  methods: {
    changeName() {
      this.name = "Mario"
    }
  },
  template: `
    <h1 @click="changeName">Hello, my name is {{ name }}.</h1>
  `
})

app.component("app-footer", {
  data() {
    return {
      copyright: "@copyright 2023"
    }
  },
  template: `
    <header>{{ copyright }}</header>
  `
})

setTimeout(() => {
  app.mount("#app");
}, 1000)