<template>
  <div class="tw-w-screen tw-h-screen tw-flex tw-justify-center">
    <div
      class="tw-max-w-sm tw-mt-10 tw-flex tw-flex-col tw-gap-5 tw-items-center"
    >
      <h3 class="tw-font-semibold tw-text-2xl tw-text-[#FF9200]">
        Add new restaurant
      </h3>
      <form @submit.prevent>
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="text"
          placeholder="Enter restaurant name..."
          v-model="user_input.name"
        />
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="text"
          placeholder="Enter restaurant address..."
          v-model="user_input.address"
        />
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="number"
          placeholder="Enter restaurant contact..."
          v-model="user_input.contact"
        />

        <button
          class="tw-bg-[#FF9200] tw-w-full tw-mb-3 tw-py-2 tw-uppercase tw-text-white tw-cursor-pointer"
          @click="addRestaurant(user_input)"
          type="submit"
        >
          add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  // NAME
  name: "AddRestaurantView",
  // DATA
  data() {
    return {
      user_input: {
        name: "",
        address: "",
        contact: null,
      },
    };
  },
  //MOUNDED
  mounted() {
    // to check if an user is already registered or not
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      this.$router.push({ name: "LoginView" });
    }
  },
  //METHODS
  methods: {
    ...mapActions("restaurant", ["addNewRestaurantAction"]),

    async addRestaurant(user_input) {
      // console.log("addRestaurant", user_input);
      const [error, response] = await this.addNewRestaurantAction(user_input);
      //  const [error, response] =
      console.log(error, response);
      // if (!error) {
      //   this.$router.push({ name: "HomeView" });
      // } else {
      //   console.log(response);
      // }
    },
  },
};
</script>
