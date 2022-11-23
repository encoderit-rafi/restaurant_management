import { api } from "@/axios";
const RestaurantApi = {
  getAllRestaurantApi() {
    // console.log("getAllRestaurantApi");
    return api.get("/restaurants");
  },
  getSingleRestaurantApi(id) {
    // console.log("getAllRestaurantApi", id);
    return api.get(`/restaurants/${id}`);
  },
  updateSingleRestaurantApi(user_input) {
    return api.put(`/restaurants/${user_input.id}`, user_input);
  },
  addNewRestaurantApi(user_input) {
    // console.log("getAllRestaurantApi");
    return api.post("/restaurants", user_input);
  },
  deleteRestaurantApi(id) {
    // console.log("getAllRestaurantApi");
    return api.delete(`/restaurants/${id}`);
  },
};
export { RestaurantApi };
