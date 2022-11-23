import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import LoginView from "../views/LoginView.vue";
import AddRestaurantView from "../views/AddRestaurantView.vue";
import UpdateRestaurantView from "../views/UpdateRestaurantView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/registration",
    name: "RegistrationView",
    component: RegistrationView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/add",
    name: "AddRestaurantView",
    component: AddRestaurantView,
  },
  {
    path: "/update/:id",
    name: "UpdateRestaurantView",
    component: UpdateRestaurantView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
