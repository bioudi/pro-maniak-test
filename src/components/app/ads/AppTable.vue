<template>
  <div>
    <p>Nombre des annonces : {{ ads.length }} annonces</p>
    <table class="table table-bordered text-center">
      <thead>
        <tr class="table-warning">
          <th scope="col">Id annonce</th>
          <th scope="col">Marque</th>
          <th scope="col">Modéle</th>
          <th scope="col">Nom de version</th>
          <th scope="col">Type de vente</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ad, index) in ads" :key="index">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppTable",
  computed: {
    ...mapState("ads", {
      ads: state => state.ads
    })
  }
};
</script>

<style></style>
