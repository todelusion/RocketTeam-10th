import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

/*
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  fasHeart,
  farHeart,
  faArrowRight,
);
*/

// app.component("font-awesome-icon", FontAwesomeIcon);
const app = createApp(App);
app.mount("#app");
