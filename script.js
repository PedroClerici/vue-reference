const dayOfTheWeek = new Date().toLocaleDateString("en-US", { weekday: 'long'})

const App = {
  data() {
    return {
      greeting: `Hello, today is ${dayOfTheWeek}.`,
      isItTrue: true,
      names: ["Francis", "Maria", "Steve", "Scott"],
      car: {
        brand: "Honda",
        model: "Civic",
      },
      number: 15,
      isDevisableByThree(number) {
        return number % 3 == 0
      },
    }
  }
}

Vue.createApp(App).mount("#app")