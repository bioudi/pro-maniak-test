import { mapGetters, mapActions, mapState } from "vuex";

var fieldsMixin = {
  mounted() {
    this.getBrands();
  },
  computed: {
    ...mapState("filters", {
      brands: state => state.brands,
      models: state => state.models,
      powersCv: state => state.powersCv,
      minYear: state => state.minYear,
      maxYear: state => state.maxYear
    }),
    ...mapGetters("filters", {
      fuels: "fuels",
      gearbox: "gearbox"
    })
  },
  methods: {
    ...mapActions("filters", {
      getBrands: "GET_BRANDS",
      getField: "GET_FIELD"
    }),
    getRange(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    }
  },
  watch: {
    "ad.year": function() {
      this.getField({ payload: this.ad, type: "models" });
      this.ad.fuel = null;
      this.ad.model = null;
      this.ad.powerCv = null;
      this.ad.gearbox = null;
    },
    "ad.fuel": function() {
      this.ad.model = null;
      this.ad.powerCv = null;
      this.ad.gearbox = null;
    },
    "ad.model": function() {
      this.getField({ payload: this.ad, type: "version_car" });
      this.ad.powerCv = null;
      this.ad.gearbox = null;
    },
    "ad.powerCv": function() {
      this.getField({ payload: this.ad, type: "version_car" });
      this.ad.gearbox = null;
    }
  }
};

export default fieldsMixin;
