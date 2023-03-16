import { createApp } from "vue";
import App from "@/App.vue";
import TheHeader from "@components/TheHeader.vue";
import TheFooter from "@components/TheFooter.vue";

const app = createApp(App);

// Adding AppFooter as a global component
app.component("TheHeader", TheHeader);
app.component("TheFooter", TheFooter);

app.mount("#app");
