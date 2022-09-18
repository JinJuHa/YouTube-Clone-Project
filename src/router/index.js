import Vue from "vue";
import VueRouter from "vue-router";
import NavBar from "@/components/NavBar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      NavBar,
      default: () => import("@/views/home.vue"),
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("@/views/Auth/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/Auth/SignUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
