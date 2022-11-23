import Vue from "vue";
import Vuex from "vuex";
import registration from "./modules/registration.store";
import login from "./modules/login.store";
import restaurant from "./modules/restaurant.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { registration, login, restaurant },
});
