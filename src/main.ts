import { createApp } from "vue";

import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "primeicons/primeicons.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "/node_modules/primeflex/primeflex.css";

createApp(App).use(store).use(router).use(PrimeVue).mount("#app");
