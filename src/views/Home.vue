<template>
  <div class="container">
    <div class="mt-5">
      <AppSearch />
      <AppTable />
    </div>
  </div>
</template>

<script>
import AppSearch from "@/components/app/ads/AppSearch.vue";
import AppTable from "@/components/app/ads/AppTable.vue";

export default {
  name: "Home",
  components: {
    AppSearch,
    AppTable
  }
};
</script>
