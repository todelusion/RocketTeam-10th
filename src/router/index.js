import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import PaymentSuccess from "../views/PaymentSuccess.vue";

let history = createWebHistory();
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/paymentSuccess",
    component: PaymentSuccess,
  },
];


export default createRouter({ history, routes });
