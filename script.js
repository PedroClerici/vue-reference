const App = {
  data() {
    return {
      user: {
        name: "John",
        lastname: "Doe",
        age: "24",
      },
      names: ["Francis", "Maria", "Steve", "Scott"],
      cars: [
        {
          brand: "Ford",
          model: "Ranger",
          color: "Blue"
        },
        {
          brand: "Honda",
          model: "Civic",
          color: "Silver"
        },
        {
          brand: "Fiat",
          model: "Toro",
          color: "Red"
        },
      ]
    }
  }
}

Vue.createApp(App).mount("#app")