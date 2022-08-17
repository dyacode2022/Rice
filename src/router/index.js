import { createWebHistory, createRouter } from "vue-router";
import Search from "../pages/Search.vue";
import Info from "../components/Rice.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Search,
  },
  {
    path: "/school",
    name: "Info",
    component: Info,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;