<template>
  <div class="tw-w-screen tw-h-screen tw-flex tw-justify-center">
    <div
      class="tw-max-w-sm tw-mt-10 tw-flex tw-flex-col tw-gap-5 tw-items-center"
    >
      <img
        class="tw-w-20 tw-mx-auto"
        src="@/assets/restaurant.png"
        alt="restaurant-logo"
      />
      <h3 class="tw-font-semibold tw-text-2xl tw-text-[#FF9200]">Log in</h3>
      <div class="">
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="email"
          placeholder="Enter your email..."
          v-model="user_input.email"
        />
        <input
          class="tw-w-full tw-mb-3 tw-p-2 tw-outline-none tw-border tw-border-[#FF9200]"
          type="password"
          placeholder="Enter your password..."
          v-model="user_input.password"
        />
        <button
          class="tw-bg-[#FF9200] tw-w-full tw-mb-3 tw-py-2 tw-uppercase tw-text-white tw-cursor-pointer"
          @click="loginUser(user_input)"
        >
          submit
        </button>

        <p class="tw-font-normal tw-text-xs tw-text-slate-600">
          Not have any account?
          <a
            class="hover:tw-font-semibold tw-text-slate-600 hover:tw-text-slate-800 tw-underline"
            href="/registration"
            >registration</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // NAME
  name: "LoginView",
  // DATA
  data() {
    return {
      user_input: {
        email: "",
        password: "",
      },
    };
  },
  // METHODS
  methods: {
    // actions
    ...mapActions("login", ["loginUserAction"]),
    async loginUser(user_input) {
      // console.log("loginUser", user_input);
      const [error, response] = await this.loginUserAction(user_input);
      // console.log(error, response);
      if (!error) {
        console.log(response);
        this.$router.push({ name: "HomeView" });
      }
    },
  },
  //MOUNDED
  mounted() {
    // to check if an user is already registered or not
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      this.$router.push({ name: "HomeView" });
    }
  },
};
</script>
