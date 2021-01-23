<template>
  <div class="container">
    <div class="mt-5">
      <h2 class="text-center mb-5">Ajouter une nouvelle annonce</h2>
      <form
        method="post"
        novalidate="novalidate"
        @submit.prevent="handleCreateAd"
      >
        <div class="row justify-content-center mb-5">
          <div class="col-lg-4">
            <div class="form-group">
              <label for="">Marque *</label>
              <select
                placeholder="Marque"
                class="form-control text-muted"
                v-model="ad.brandId"
                required
              >
                <option
                  :value="brand.id"
                  v-for="brand in brands"
                  :key="brand.id"
                  >{{ brand.name }}</option
                >
              </select>
              <!---->
            </div>
            <div class="form-group">
              <label for="">Modèle *</label>
              <select
                :disabled="!ad.fuel"
                placeholder="Modèle"
                class="form-control text-muted"
                v-model="ad.model"
                required
              >
                <option
                  v-for="(model, index) in models"
                  :key="index"
                  :value="model.id"
                  >{{ model.model_name }}</option
                >
              </select>
              <!---->
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label for="">Année *</label>
              <select
                :disabled="!ad.brandId"
                placeholder="Année"
                class="form-control text-muted"
                v-model="ad.year"
                required
              >
                <option
                  v-for="(year, index) in getRange(minYear, maxYear)"
                  :key="index"
                  >{{ year }}</option
                >
              </select>

              <!---->
            </div>
            <div class="form-group">
              <label for="">Puissance fiscale(Kw)</label>
              <select
                :disabled="!ad.model"
                placeholder="Puissance fiscale(Kw)"
                class="form-control text-muted"
                v-model="ad.powerCv"
                required
              >
                <option
                  v-for="(power, index) in powersCv"
                  :value="power.power_cv"
                  :key="index"
                  >{{ power.power_cv }}</option
                >
              </select>
              <!---->
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label for="">Carburant *</label>
              <select
                :disabled="!ad.year"
                placeholder="Carburant"
                class="form-control text-muted"
                v-model="ad.fuel"
                required
              >
                <option v-for="(fuel, index) in fuels" :key="index">{{
                  fuel
                }}</option>
              </select>
              <!---->
            </div>
            <div class="form-group">
              <label for="">Transmission *</label>
              <select
                :disabled="!ad.powerCv"
                placeholder="Transmission"
                class="form-control text-muted"
                v-model="ad.gearbox"
                required
              >
                <option
                  v-for="(gear, index) in gearbox"
                  :value="gear"
                  :key="index"
                  >{{ gear }}</option
                >
              </select>
              <!---->
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn rounded btn-warning text-white px-5">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import fieldsMixin from "@/mixins/fiedsMixin.js";

export default {
  name: "AppCreate",
  mixins: [fieldsMixin],
  computed: {
    ...mapState("ads", {
      ad: state => state.ad
    })
  },
  methods: {
    ...mapActions("ads", {
      createAd: "CREATE_AD"
    }),
    handleCreateAd() {
      this.createAd().then(() => this.$router.push({ name: "Home" }));
    }
  }
};
</script>
