<template>
  <fieldset class="form-group border p-3 rounded border-warning mb-5">
    <legend class="w-auto ml-3 px-2 text-warning">Recherche</legend>
    <form @submit.prevent="getAds">
      <div class="row">
        <div class="col-lg-3">
          <div class="form-group">
            <select
              placeholder="Marque"
              class="form-control bg-light text-muted"
              v-model="ad.brandId"
            >
              <option
                :value="brand.id"
                v-for="brand in brands"
                :key="brand.id"
                >{{ brand.name }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <select
              placeholder="Année"
              class="form-control bg-light text-muted"
              v-model="ad.year"
            >
              <option
                v-for="(year, index) in getRange(minYear, maxYear)"
                :key="index"
                >{{ year }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <select
              placeholder="Carburant"
              class="form-control bg-light text-muted"
              v-model="ad.fuel"
            >
              <option v-for="(fuel, index) in fuels" :key="index">{{
                fuel
              }}</option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <select
              placeholder="Modèle"
              class="form-control text-muted"
              v-model="ad.modelId"
            >
              <option
                v-for="(model, index) in models"
                :key="index"
                :value="model.id"
                >{{ model.model_name }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-lg-1">
          <button type="submit" class="btn btn-warning rounded-circle py-2">
            <svg
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 512.005 512.005"
            >
              <g>
                <g>
                  <path
                    fill="#ffffff"
                    d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
                                        S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
                                        c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
                                        M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </form>
  </fieldset>
</template>

<script>
import fieldsMixin from "@/mixins/fiedsMixin.js";
import { mapActions, mapState } from "vuex";

export default {
  name: "AppSearch",
  mixins: [fieldsMixin],
  computed: {
    ...mapState("ads", {
      ad: (state) => state.filters,
    }),
    ...mapActions("ads", {
      getAds: "GET_ADS",
    }),
  },
};
</script>

<style></style>
