import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Registration",
    path: "/registration",
    component: Registration
  },
  {
    name: "Login",
    path: "/login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
