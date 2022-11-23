// const state = {};

// const mutations = {};

// const actions = {};

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
// };
import { RegistrationApi } from "@/api";
const state = {
  currentUser: {},
};

const mutations = {
  registrationUserMutation(state, response) {
    state.currentUser = { ...state.currentUser, ...response.data };
  },
};

const actions = {
  async registrationUserAction({ state, commit }, user_input) {
    // console.log("registrationUserAction");
    const [error, response] = await RegistrationApi.registrationUserApi(
      user_input
    );
    if (!error) {
      commit("registrationUserMutation", response);
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    }
    return [error, response];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
