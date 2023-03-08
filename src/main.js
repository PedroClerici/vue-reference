import { createApp } from "vue";
import App from "@/App.vue";
import AppFooter from "@components/AppFooter.vue";

const app = createApp(App);

// Adding AppFooter as a global component
app.component("AppFooter", AppFooter);

app.mount("#app");
