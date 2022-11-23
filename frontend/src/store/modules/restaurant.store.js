import { RestaurantApi } from "@/api";
const state = {
  allRestaurant: [],
  singleRestaurant: {},
};

const mutations = {
  getAllRestaurantMutation(state, response) {
    state.allRestaurant = [...response.data];
  },
  getSingleRestaurantMutation(state, response) {
    state.singleRestaurant = { ...response.data };
  },
};

const actions = {
  async getAllRestaurantAction({ commit }) {
    // console.log("getAllRestaurantAction");
    const [error, response] = await RestaurantApi.getAllRestaurantApi();
    if (!error) {
      commit("getAllRestaurantMutation", response);
      return [false, response];
    } else {
      return [error, false];
    }
  },
  async getSingleRestaurantAction({ commit }, id) {
    // console.log("getSingleRestaurantAction", id);
    // const [error, response] =
    const [error, response] = await RestaurantApi.getSingleRestaurantApi(id);
    if (!error) {
      commit("getSingleRestaurantMutation", response);
      // console.log("getSingleRestaurantAction", response);

      return [false, response];
    } else {
      return [error, false];
    }
  },
  async updateSingleRestaurantAction({ commit }, user_input) {
    // console.log("getSingleRestaurantAction", id);
    // const [error, response] =
    const [error, response] = await RestaurantApi.updateSingleRestaurantApi(
      user_input
    );
    if (!error) {
      commit("getSingleRestaurantMutation", response);
      // console.log("getSingleRestaurantAction", response);

      return [false, response];
    } else {
      return [error, false];
    }
  },
  async deleteRestaurantAction(_, id) {
    // console.log("getSingleRestaurantAction", id);
    // const [error, response] =
    const [error, response] = await RestaurantApi.deleteRestaurantApi(id);
    if (!error) {
      // commit("getSingleRestaurantMutation", response);
      // console.log("getSingleRestaurantAction", response);

      return [false, response];
    } else {
      return [error, false];
    }
  },
  async addNewRestaurantAction({ commit }, user_input) {
    // console.log("addNewRestaurantAction", user_input);
    const [error, response] = await RestaurantApi.addNewRestaurantApi(
      user_input
    );
    if (!error) {
      commit("getAllRestaurantMutation", response);
      console.log(response);

      return [false, true];
    } else {
      return [error, false];
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
