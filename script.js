const dayOfTheWeek = new Date().toLocaleDateString("en-US", { weekday: 'long'})

const App = {
  data() {
    return {
      image: {
        src: "https://picsum.photos/200/300",
        alt: "A random image"
      },
      link: "https://google.com",
      html: `
        <ul>
          <li>This</li>
          <li>is a</li>
          <li>is</li>
          <li>list!</li>
        </ul>
      `
    }
  }
}

Vue.createApp(App).mount("#app")