<template>
  <loader v-if="loading" />
  <div v-else class="app-main-layout">
    <Navbar @toggle="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/app/Loader";
export default {
  name: "Main-Layout",
  data: () => ({
    isOpen: true,
    loading: true,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  },
  components: {
    Navbar,
    Sidebar,
    Loader,
  },
};
</script>
