import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";
import ProductCard from "./components/ProductCard.vue";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  fasHeart,
  farHeart,
  faEnvelope,
  faArrowRight,
  faFacebook,
  faPinterest,
  faUser,
  faKey,
  faTrashCan
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Footer", Footer);
app.component("ProductCard", ProductCard);
app.use(router);
app.mount("#app");
