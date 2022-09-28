import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView";
import Market from "../views/MarketView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/market",
    name: "Market",
    component: Market,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
