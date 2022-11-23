<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in allRestaurant" :key="restaurant.id">
          <td>{{ restaurant.id }}</td>
          <td>{{ restaurant.name }}</td>
          <td>{{ restaurant.address }}</td>
          <td>{{ restaurant.contact }}</td>
          <td>
            <button
              class="tw-bg-[#ffcb86] tw-w-full tw-mb-3 tw-py-2 tw-uppercase tw-text-white tw-cursor-pointer hover:tw-shadow-md"
            >
              <router-link :to="`update/${restaurant.id}`"> ✏ </router-link>
            </button>
            <button
              class="tw-bg-[#ff3e3e] tw-w-full tw-mb-3 tw-py-2 tw-uppercase tw-text-white tw-cursor-pointer hover:tw-shadow-md"
              @click="deleteRestaurant(restaurant.id)"
            >
              ❌
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  // NAME
  name: "DataTableComponent",
  // DATA
  data() {
    return {
      restaurants: [],
    };
  },
  //COMPUTED
  computed: {
    ...mapState("restaurant", ["allRestaurant"]),
  },
  //METHODS
  methods: {
    ...mapActions("restaurant", [
      "getAllRestaurantAction",
      "deleteRestaurantAction",
    ]),
    async deleteRestaurant(id) {
      await this.deleteRestaurantAction(id);
    },
  },
  //MOUNTED
  async mounted() {
    await this.getAllRestaurantAction();
  },
};
</script>

<style lang="css" scoped>
table {
  width: 600px;
  border-collapse: collapse;
  margin: 50px auto;
}

/* Zebra striping */
tr:nth-of-type(odd) {
  background: #eee;
}

th {
  background: #ff9200;
  color: white;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
}

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
/* @media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table {
    width: 100%;
  }

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    content: attr(data-column);

    color: #000;
    font-weight: bold;
  }
} */
</style>
