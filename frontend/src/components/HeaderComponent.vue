<template>
  <nav
    class="tw-bg-[#FF9200] tw-py-2 tw-px-3 tw-flex tw-items-center tw-justify-between"
  >
    <router-link to="/" class="tw-font-semibold tw-text-base tw-text-white"
      >Home</router-link
    >
    <div>
      <button
        class="tw-text-normal tw-text-white tw-mr-3 tw-px-3 tw-border tw-border-white hover:tw-bg-white hover:tw-text-[#FF9200]"
      >
        <router-link to="add"> + New</router-link>
      </button>
      <button
        class="tw-text-normal tw-text-white tw-px-3 hover:tw-bg-white hover:tw-text-[#FF9200]"
        @click="logoutUser"
      >
        <!-- <router-link ></router-link> -->
        Log out
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  // NAME
  name: "HeaderComponent",

  // METHODS
  methods: {
    logoutUser() {
      localStorage.clear();
      this.$router.push({ name: "LoginView" });
    },
  },
};
</script>
