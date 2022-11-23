<template>
  <div class="home">
    <header-component />

    <h1>👋Hello, {{ user_name }}</h1>
    <data-table-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import DataTableComponent from "@/components/DataTableComponent.vue";
export default {
  components: { HeaderComponent, DataTableComponent },
  // NAME
  name: "HomeView",
  // DATA
  data() {
    return { user_name: "" };
  },
  //MOUNDED
  mounted() {
    // to check if an user is already registered or not
    const currentUser = localStorage.getItem("currentUser");
    this.user_name = JSON.parse(currentUser).name;

    if (!currentUser) {
      this.$router.push({ name: "LoginView" });
    }
  },
};
</script>
