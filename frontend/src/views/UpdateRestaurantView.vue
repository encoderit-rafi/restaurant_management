<template>
  <div class="tw-w-screen tw-h-screen tw-flex tw-justify-center">
    <div
      class="tw-max-w-sm tw-mt-10 tw-flex tw-flex-col tw-gap-5 tw-items-center"
    >
      <h3 class="tw-font-semibold tw-text-2xl tw-text-[#FF9200]">
        Update restaurant
      </h3>

      <form @submit.prevent>
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="text"
          v-model="user_input.name"
        />
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="text"
          v-model="user_input.address"
        />
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="number"
          v-model="user_input.contact"
        />

        <button
          class="tw-bg-[#FF9200] tw-w-full tw-mb-3 tw-py-2 tw-uppercase tw-text-white tw-cursor-pointer"
          type="submit"
          @click="updateRestaurant(user_input)"
        >
          update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"; //mapState

export default {
  // NAME
  name: "UpdateRestaurantView",
  // DATA
  data() {
    return {
      user_input: {
        id: "",
        name: "",
        address: "",
        contact: null,
      },
    };
  },
  //COMPUTED
  computed: {
    ...mapState("restaurant", ["singleRestaurant"]),
  },
  //METHODS
  methods: {
    ...mapActions("restaurant", [
      "getSingleRestaurantAction",
      "updateSingleRestaurantAction",
    ]),
    async updateRestaurant(user_input) {
      const [error, response] = await this.updateSingleRestaurantAction(
        user_input
      );
      if (!error) {
        this.$router.push({ name: "HomeView" });
        console.log(response);
      } else {
        console.log(error);
      }
    },
  },
  //MOUNDED
  async mounted() {
    // to check if an user is already registered or not
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      this.$router.push({ name: "LoginView" });
    }

    await this.getSingleRestaurantAction(this.$route.params.id);
    this.user_input = this.singleRestaurant;
  },
};
</script>
