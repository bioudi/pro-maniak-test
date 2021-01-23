<template>
  <div class="container">
    <div class="mt-5">
      <AppSearch />
      <AppTable />
    </div>
  </div>
</template>

<script>
import AppSearch from "@/components/app/AppSearch.vue";
import AppTable from "@/components/app/AppTable.vue";

export default {
  name: "Home",
  components: {
    AppSearch,
    AppTable
  }
};
</script>
