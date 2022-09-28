import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/fonts/fontawesome-all.min.css";

createApp(App).use(router).mount("#app");
