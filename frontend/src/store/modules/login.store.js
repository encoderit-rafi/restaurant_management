import { LoginApi } from "@/api";
const state = {
  currentUser: {},
};

const mutations = {
  loginUserMutation(state, response) {
    state.currentUser = { ...state.currentUser, ...response.data[0] };
  },
};

const actions = {
  async loginUserAction({ state, commit }, user_input) {
    // console.log("loginUserAction", user_input);
    const [error, response] = await LoginApi.loginUserApi(user_input);
    // console.log(error, response);
    if (response.data.length > 0) {
      // console.log("found");
      commit("loginUserMutation", response);
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      return [false, response];
    } else {
      // console.log("not found");
      return [true, error];
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
