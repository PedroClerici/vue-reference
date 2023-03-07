const greeting = "Hello, user!"

const app1 = Vue.createApp({
  data() {
    return {
        message: "Instance one working",
    }
  },
  methods: {
    changeMessage() {
      app2.message = "Hello, world!"
    }
  }
}).mount("#app")

const app2 = Vue.createApp({
  data() {
    return {
      message: "Instance two working"
    }
  },
  methods: {
    sayHello() {
      alert(greeting)
    }
  }
}).mount("#app2")