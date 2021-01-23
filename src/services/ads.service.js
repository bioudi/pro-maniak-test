import axios from "axios";

export default {
  getAds(filters) {
    let query = `annonce_cars?filter[vehicle_first_traffic_year]=${filters.year}&filter[vehicle_fuel]=${filters.fuel}`;
    return axios.get(query).then(response => response.data.data);
  },
  createAd(payload) {
    const vehicle = {
      model_car_id: payload.model,
      gearbox: payload.gearbox,
      vehicle_first_traffic_year: payload.year
    };
    return axios
      .post("owner_vehicles", vehicle)
      .then(response => response.data.data);
  }
};
