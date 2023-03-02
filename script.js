const dayOfTheWeek = new Date().toLocaleDateString("en-US", { weekday: 'long'})

const App = {
  data() {
    return {
      greeting: `Hello, today is ${dayOfTheWeek}.`,
      names: ["Francis", "Maria", "Steve", "Scott"],
      number: 22,
    }
  },
  methods: {
    welcome() {
      return this.greeting
    },
    getRandomName() {
      return this.names[
        Math.floor(Math.random() * this.names.length)
      ]
    },
    isDevisableByThree(number) {
      return number % 3 == 0
    },
  }
}

Vue.createApp(App).mount("#app")